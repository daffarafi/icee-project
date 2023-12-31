import React from 'react'
import { WavySectionProps } from '../interface'

export const WavySection: React.FC<WavySectionProps> = ({ color }) => (
  <div className="w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill={color}>
      <path
        fillOpacity="1"
        d="M0,192L40,186.7C80,181,160,171,240,160C320,149,
        400,139,480,144C560,149,640,171,720,197.3C800,224,
        880,256,960,261.3C1040,267,1120,245,1200,213.3C1280,
        181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,
        320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,
        320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  </div>
)
