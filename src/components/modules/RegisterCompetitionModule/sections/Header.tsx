import { GlowingSpan } from '@elements'
import React from 'react'
import { HeaderProps } from '../interface'

export const Header: React.FC<HeaderProps> = ({ competitionType }) => {
  return (
    <header className="flex flex-col items-center">
      <h1 className="font-Sarmandy text-9xl -mb-8 text-center font-extrabold tracking-[0.25em]">
        <GlowingSpan color="blue">{competitionType.toUpperCase()}</GlowingSpan>
      </h1>
      <span className="text-[#c6e2de]">
        Innovative Bridge Design Competition
      </span>
    </header>
  )
}
