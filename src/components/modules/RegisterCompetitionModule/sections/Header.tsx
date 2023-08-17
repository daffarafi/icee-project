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
      case 'cetc':
        return 'Civil Engineering Tender Competition'
    }
  }

  return (
    <header className="flex flex-col items-center">
      <h1 className="font-Sarmandy text-9xl -mb-8 text-center font-extrabold tracking-[0.25em]">
        <GlowingSpan color="blue">{competitionType.toUpperCase()}</GlowingSpan>
      </h1>
      <span className="text-[#c6e2de]">{getTaglineByCompeType()}</span>
    </header>
  )
}
