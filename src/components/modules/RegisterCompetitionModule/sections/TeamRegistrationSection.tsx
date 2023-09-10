import { GlowingSpan } from '@elements'
import React from 'react'
import { TextInput } from '../module-elements'
import { TeamRegistrationSectionProps } from '../interface'
import Link from 'next/link'

export const TeamRegistrationSection: React.FC<
  TeamRegistrationSectionProps
> = ({ teamName, setTeamName, totalTeamMembers, TORLink }) => {
  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value)
  }

  return (
    <section className="flex flex-col gap-3">
      <span className="italic">
        *Silahkan cek{' '}
        <Link
          className="text-blue-400 underline"
          href={TORLink}
          target="_blank"
        >
          link ini
        </Link>{' '}
        untuk melihat Terms of Reference
      </span>
      <h2 className="font-Sarmandy text-md text-center  lg:text-start sm:text-lg md:text-2xl lg:text-3xl font-extrabold tracking-[0.25em]">
        <GlowingSpan color="yellow">TEAM REGISTRATION</GlowingSpan>
      </h2>
      <div className="px-6 flex flex-col gap-2">
        <TextInput
          index={0}
          label="Team Name"
          id={'teamName'}
          value={teamName}
          setValue={setValue}
        />
        <div className="flex gap-2 w-full">
          <span className="lg:w-2/6 whitespace-nowrap">
            Total Team Members :{' '}
          </span>
          <span className="lg:w-full">{totalTeamMembers}</span>
        </div>
      </div>
    </section>
  )
}
