import { GlowingSpan } from '@elements'
import React from 'react'
import { InputTeamLeader, InputTeamMember } from './index'

export const TeamMemberRegistrationSection: React.FC<
  TeamMemberRegistrationSectionProps
> = ({
  membersData,
  setMembersData,
  leaderData,
  setLeaderData,
  totalTeamMembers,
}) => {
  return (
    <section>
      <h2 className="font-Sarmandy text-3xl font-extrabold tracking-[0.25em]">
        <GlowingSpan color="yellow">TEAM MEMBER REGISTRATION</GlowingSpan>
      </h2>
      <div className="flex flex-col gap-6">
        <InputTeamLeader
          leaderData={leaderData}
          setLeaderData={setLeaderData}
        />
        {Array.from({ length: totalTeamMembers - 1 }, (_, index) => (
          <InputTeamMember
            key={index}
            index={index}
            membersData={membersData}
            setMembersData={setMembersData}
          />
        ))}
      </div>
    </section>
  )
}
