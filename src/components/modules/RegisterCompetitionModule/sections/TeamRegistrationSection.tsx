import { GlowingSpan } from '@elements'
import React from 'react'
import { TextInput } from '../module-elements'
import { TeamRegistrationSectionProps } from '../interface'

export const TeamRegistrationSection: React.FC<
  TeamRegistrationSectionProps
> = ({ teamName, setTeamName, totalTeamMembers }) => {
  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value)
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-Sarmandy text-3xl font-extrabold tracking-[0.25em]">
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
        <div className="flex w-full">
          <span className="w-2/6 whitespace-nowrap">Total Team Members</span>
          <span className="w-full">{totalTeamMembers}</span>
        </div>
      </div>
    </section>
  )
}
