interface LogoProps {
  height?: number
  /** 'color' = brand logo (default), 'white' = inverted for dark backgrounds */
  variant?: 'color' | 'white'
}

export default function Logo({ height = 32, variant = 'color' }: LogoProps) {
  return (
    <img
      src="/wayloom-logo.png"
      alt="Wayloom.AI"
      height={height}
      style={{
        height,
        width: 'auto',
        flexShrink: 0,
        display: 'block',
        filter: variant === 'white' ? 'brightness(0) invert(1)' : 'none',
      }}
    />
  )
}
