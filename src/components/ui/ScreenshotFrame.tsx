/**
 * ScreenshotFrame — renders a screenshot image with a styled browser-frame.
 * Falls back to a styled placeholder when the image file is missing/fails.
 */
import { useState } from 'react'

interface ScreenshotFrameProps {
  src: string
  alt: string
  caption?: string
  placeholder?: string
  className?: string
}

export default function ScreenshotFrame({ src, alt, caption, placeholder, className = '' }: ScreenshotFrameProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div
        className="rounded-xl overflow-hidden border border-[var(--border)] shadow-lg"
        style={{ background: '#FFFFFF' }}
      >
        {/* Browser chrome bar */}
        <div
          className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)]"
          style={{ background: '#F8FAFC' }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#FE595A]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEC849]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
          <div className="flex-1 mx-2 h-4 rounded bg-gray-200 flex items-center px-2">
            <span className="text-xs text-gray-400 font-mono truncate">portal.wayloom-ai.com</span>
          </div>
        </div>

        {/* Content */}
        {!failed ? (
          <img
            src={src}
            alt={alt}
            className="w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className="flex flex-col items-center justify-center py-12 px-6"
            style={{ background: 'linear-gradient(135deg, #F8FAFC, #E6FAF9)', minHeight: 180 }}
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--teal-lt)] border border-[rgba(0,184,179,0.2)] flex items-center justify-center mb-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4" width="16" height="12" rx="2" stroke="#00B8B3" strokeWidth="1.5" />
                <path d="M7 9l2 2 4-4" stroke="#00B8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-xs font-semibold text-[var(--teal)]">{alt}</p>
            <p className="text-xs text-[var(--muted)] mt-1 text-center max-w-sm">
              {placeholder ?? 'Replace with a platform screenshot before the defense'}
            </p>
          </div>
        )}
      </div>
      {caption && (
        <p className="text-xs text-center text-[var(--muted)]">{caption}</p>
      )}
    </div>
  )
}
