import type { ReactNode } from 'react'

type Variant = 'teal' | 'coral' | 'navy' | 'full' | 'brand'

const variantClass: Record<Variant, string> = {
  teal:  'gradient-text-teal',
  coral: 'gradient-text-coral',
  navy:  'gradient-text-navy',
  full:  'gradient-text-teal',
  brand: 'gradient-text-brand',
}

interface GradientTextProps {
  children: ReactNode
  variant?: Variant
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p'
}

export default function GradientText({ children, variant = 'teal', className = '', as: Tag = 'span' }: GradientTextProps) {
  return (
    <Tag className={`${variantClass[variant]} ${className}`}>
      {children}
    </Tag>
  )
}
