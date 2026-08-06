/**
 * SmallScreenBlocker — renders a full-screen overlay on viewports < 1100px.
 * Presentations require desktop dimensions (minimum 1100×700).
 */
import { useEffect, useState } from 'react'

const MIN_WIDTH = 1100
const MIN_HEIGHT = 600

export default function SmallScreenBlocker() {
  const [tooSmall, setTooSmall] = useState(false)
  const [dims, setDims] = useState({ w: window.innerWidth, h: window.innerHeight })

  useEffect(() => {
    function check() {
      const w = window.innerWidth
      const h = window.innerHeight
      setDims({ w, h })
      setTooSmall(w < MIN_WIDTH || h < MIN_HEIGHT)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!tooSmall) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#001027',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        padding: 32,
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      {/* Logo */}
      <img
        src="/wayloom-logo.png"
        alt="Wayloom.AI"
        style={{ height: 40, width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: 8 }}
      />

      {/* Icon */}
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: 20,
          background: 'rgba(0,184,179,0.12)',
          border: '1.5px solid rgba(0,184,179,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          {/* Monitor */}
          <rect x="3" y="6" width="30" height="20" rx="3" stroke="#00B8B3" strokeWidth="1.8" />
          <path d="M12 30h12M18 26v4" stroke="#00B8B3" strokeWidth="1.8" strokeLinecap="round" />
          {/* X mark */}
          <path d="M14 13l8 8M22 13l-8 8" stroke="#FE595A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Heading */}
      <div style={{ textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: '#F8FAFC',
            margin: 0,
            marginBottom: 10,
            letterSpacing: '-0.02em',
          }}
        >
          Desktop Required
        </h2>
        <p style={{ fontSize: 14, color: 'rgba(248,250,252,0.6)', margin: 0, lineHeight: 1.6, maxWidth: 340 }}>
          This presentation is optimised for large screens.
          <br />
          Please open it on a desktop or laptop browser at full size.
        </p>
      </div>

      {/* Current vs required */}
      <div
        style={{
          display: 'flex',
          gap: 16,
          marginTop: 4,
        }}
      >
        <div
          style={{
            padding: '10px 20px',
            borderRadius: 12,
            background: 'rgba(254,89,90,0.08)',
            border: '1px solid rgba(254,89,90,0.25)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 11, color: 'rgba(248,250,252,0.5)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Your screen
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#FE595A' }}>
            {dims.w} × {dims.h}
          </div>
        </div>
        <div
          style={{
            padding: '10px 20px',
            borderRadius: 12,
            background: 'rgba(0,184,179,0.08)',
            border: '1px solid rgba(0,184,179,0.25)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 11, color: 'rgba(248,250,252,0.5)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Minimum
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#00B8B3' }}>
            {MIN_WIDTH} × {MIN_HEIGHT}
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p
        style={{
          fontSize: 11,
          color: 'rgba(248,250,252,0.3)',
          margin: 0,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        Wayloom.AI · Cognitive Health, Continuously Monitored.
      </p>
    </div>
  )
}
