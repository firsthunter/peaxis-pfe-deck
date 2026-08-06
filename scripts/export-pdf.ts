/**
 * export-pdf.ts — Playwright PDF Export Pipeline for PEAXIS PFE Defense
 *
 * Produces a pixel-perfect 16:9 PDF of the PEAXIS PFE presentation by
 * rendering the deck in Chromium via Playwright's native print engine.
 *
 * WHY THIS IS SUPERIOR TO html2canvas + jsPDF:
 *  - Native browser rendering: gradients, backdrop-filter, CSS masks, and
 *    gradient-text (-webkit-background-clip) all render perfectly.
 *  - True vector PDF output — text is fully searchable and scalable.
 *  - Pixel-accurate layout: what you see in the browser is exactly the PDF.
 *
 * USAGE:
 *   pnpm export:pdf
 *
 * OUTPUT:
 *   PEAXIS-PFE-Defense.pdf  (in project root)
 *
 * PREREQUISITES:
 *   pnpm install
 *   pnpm playwright install chromium
 */

import { spawn, type ChildProcess } from 'child_process'
import { existsSync, statSync } from 'fs'
import { createServer } from 'net'
import { dirname, resolve } from 'path'
import { chromium } from 'playwright'
import { fileURLToPath } from 'url'

// ─── Paths ───────────────────────────────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url)
const __dirname  = dirname(__filename)
const ROOT       = resolve(__dirname, '..')

// ─── Config (override via env vars) ──────────────────────────────────────────
const PORT       = Number(process.env.EXPORT_PORT ?? 5178)
const BASE_URL   = process.env.EXPORT_URL ?? `http://localhost:${PORT}`
const EXPORT_URL = BASE_URL.includes('?') ? `${BASE_URL}&export=true` : `${BASE_URL}/?export=true`
const OUTPUT_PDF = process.env.OUTPUT_PATH ?? resolve(ROOT, 'Wayloom-PFE-Defense.pdf')

// ─── Slide dimensions (must match ExportView.tsx + CSS) ──────────────────────
const SLIDE_W = 1280
const SLIDE_H = 720

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isPortFree(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const probe = createServer()
    probe.once('error', () => resolve(false))
    probe.once('listening', () => {
      probe.close()
      resolve(true)
    })
    probe.listen(port, '127.0.0.1')
  })
}

async function findViteUrl(devServer: ChildProcess, timeoutMs = 15_000): Promise<string> {
  return new Promise((resolve, reject) => {
    const deadline = Date.now() + timeoutMs
    let buffer = ''

    const checkBuffer = () => {
      if (buffer.includes('Local:')) {
        const match = buffer.match(/Local:\s+(http:\/\/[^\s]+)/)
        if (match) {
          resolve(match[1])
          return true
        }
      }
      return false
    }

    const onData = (chunk: Buffer) => {
      buffer += chunk.toString()
      if (checkBuffer()) {
        devServer.stdout?.removeListener('data', onData)
        devServer.stderr?.removeListener('data', onData)
      }
    }

    const checkTimer = setInterval(() => {
      if (Date.now() > deadline) {
        clearInterval(checkTimer)
        devServer.stdout?.removeListener('data', onData)
        devServer.stderr?.removeListener('data', onData)
        reject(new Error(`Could not find Vite URL within ${timeoutMs}ms`))
      }
    }, 500)

    devServer.stdout?.on('data', onData)
    devServer.stderr?.on('data', onData)
  })
}

async function waitForServer(url: string, timeoutMs = 45_000): Promise<void> {
  const deadline = Date.now() + timeoutMs
  let lastError: unknown

  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(3_000) })
      if (res.status < 500) return
    } catch (err) {
      lastError = err
    }
    await new Promise(r => setTimeout(r, 500))
  }

  throw new Error(
    `Server at ${url} did not become available within ${timeoutMs}ms. ` +
    `Last error: ${lastError}`,
  )
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  let devServer: ChildProcess | null = null
  let browser = null

  try {
    // ── 1. Always start a fresh dev server (auto-finds next available port)
    console.log(`[export] Starting fresh Vite dev server on port ${PORT}…`)

    devServer = spawn(process.execPath, [resolve(ROOT, 'node_modules', 'vite', 'bin', 'vite.js'), '--port', String(PORT), '--host', '127.0.0.1'], {
      cwd:      ROOT,
      stdio:    ['ignore', 'pipe', 'pipe'],
      detached: false,
    })

    devServer.stdout?.on('data', (chunk: Buffer) =>
      process.stdout.write(`[vite]  ${chunk}`),
    )
    devServer.stderr?.on('data', (chunk: Buffer) =>
      process.stderr.write(`[vite]  ${chunk}`),
    )

    console.log(`[export] Using Vite server URL…`)
    const baseUrl = BASE_URL
    const exportUrl = baseUrl.includes('?') ? `${baseUrl}&export=true` : `${baseUrl}?export=true`

    console.log(`[export] Waiting for → ${exportUrl}`)
    await waitForServer(exportUrl)
    console.log('[export] Server is ready.')

    // ── 2. Launch Chromium ─────────────────────────────────────────────────
    const chromeFallback = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    browser = await chromium.launch({
      headless: true,
      ...(process.platform === 'win32' && existsSync(chromeFallback) ? { executablePath: chromeFallback } : {}),
    })
    const context = await browser.newContext({
      viewport: { width: SLIDE_W, height: SLIDE_H },
    })
    const page = await context.newPage()

    // ── 3. Navigate and wait for full render ──────────────────────────────
    console.log('[export] Loading export page…')
    await page.goto(exportUrl, {
      waitUntil: 'networkidle',
      timeout:   60_000,
    })

    await page.waitForSelector('#export-deck', { timeout: 15_000 })
    await page.evaluate(() => document.fonts.ready)

    const slideCount = await page.locator('.export-page').count()
    console.log(`[export] ${slideCount} slide pages detected.`)

    // Brief final paint buffer
    await new Promise(r => setTimeout(r, 1_000))

    // ── 4. Export PDF ──────────────────────────────────────────────────────
    console.log('[export] Generating PDF…')

    await page.pdf({
      path:              OUTPUT_PDF,
      printBackground:   true,
      preferCSSPageSize: true,
      width:             `${SLIDE_W}px`,
      height:            `${SLIDE_H}px`,
    })

    const fileSize = statSync(OUTPUT_PDF).size
    console.log(`\n✅  PDF exported → ${OUTPUT_PDF}`)
    console.log(`    ${slideCount} slides · ${SLIDE_W}×${SLIDE_H} px each · 16:9 landscape`)
    console.log(`    File size: ${formatFileSize(fileSize)}\n`)

  } finally {
    if (browser) {
      await (browser as Awaited<ReturnType<typeof chromium.launch>>).close()
    }
    if (devServer) {
      devServer.kill()
    }
  }
}

main().catch(err => {
  console.error('[export] Fatal error:', err)
  process.exit(1)
})
