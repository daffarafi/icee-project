import { GlowingSpan } from '@elements'
import React from 'react'
import { HeaderProps } from '../interface'

export const Header: React.FC<HeaderProps> = ({ competitionType }) => {
  const getTaglineByCompeType = () => {
    switch (competitionType) {
      case 'bridge':
        return 'Innovative Bridge Design Competition'
      case 'bcc':
        return 'Bussiness Case Competition'
      case 'tender':
        return 'Civil Engineering Tender Competition'
    }
  }

  return (
    <header className="flex flex-col items-center">
      <h1 className="font-Sarmandy text-2xl sm:text-5xl md:text-6xl lg:text-8xl  text-center font-extrabold tracking-[0.25em]">
        <GlowingSpan color="blue">{competitionType.toUpperCase()}</GlowingSpan>
      </h1>
      <span className="text-[#c6e2de] text-xs sm:text-md">
        {getTaglineByCompeType()}
      </span>
    </header>
  )
}
