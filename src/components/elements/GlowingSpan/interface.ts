import React from 'react'

export interface GlowingSpanProps extends React.ComponentProps<'span'> {
  className?: string
  color: 'blue' | 'yellow'
}
