import React from 'react'
import { GlowingSpanProps } from './interface'

export const GlowingSpan: React.FC<GlowingSpanProps> = ({
  children,
  className,
  color,
  ...props
}) => {
  const getTextColor = () => {
    switch (color) {
      case 'blue':
        return 'text-[#c6e2de] '
      case 'yellow':
        return 'text-[#ffcb9a]'
      default:
        return 'text-white'
    }
  }

  return (
    <span className="relative block">
      <span
        className={`${getTextColor()} ${className} relative z-[1]`}
        {...props}
      >
        {children}
      </span>
      <span
        className={`${getTextColor()} absolute top-0 left-0 blur-2xl pointer-events-none`}
        {...props}
      >
        {children}
      </span>
    </span>
  )
}
