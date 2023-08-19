import React from 'react'
import { IconProps } from './interface'

export const Plus: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  return (
    <svg viewBox="0 0 25 25" className={`${className} ${stroke} ${size}`}>
      <path
        d="M19.7917 13.5396H13.5417V19.7896H11.4584V13.5396H5.20837V11.4563H11.4584V5.2063H13.5417V11.4563H19.7917V13.5396Z"
        className={fill}
      />
    </svg>
  )
}
