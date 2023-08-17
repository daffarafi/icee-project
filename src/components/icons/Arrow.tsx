import React from 'react'
import { IconProps } from './interface'

export const Arrow: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  return (
    <svg viewBox="0 0 25 25" className={`${className} ${size}`}>
      <path
        d="M10.4167 17.7084L15.625 12.5001L10.4167 7.29175"
        className={`${stroke} ${fill}`}
        strokeWidth="2.08333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
