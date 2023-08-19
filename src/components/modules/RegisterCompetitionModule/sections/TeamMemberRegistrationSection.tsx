import { GlowingSpan } from '@elements'
import React from 'react'
import { InputTeamLeader, InputTeamMember } from './index'
import { TeamMemberRegistrationSectionProps } from '../interface'
import { Plus } from '@icons'

export const TeamMemberRegistrationSection: React.FC<
  TeamMemberRegistrationSectionProps
> = ({
  competitionType,
  membersData,
  setMembersData,
  leaderData,
  setLeaderData,
  totalTeamMembers,
  addMember,
  removeMember,
}) => {
  const renderAddButton = () => {
    switch (competitionType) {
      case 'bcc':
        if (totalTeamMembers === 4) {
          return
        }
        break
      case 'bridge':
        if (totalTeamMembers === 3) {
          return
        }
        break
      case 'cetc':
        if (totalTeamMembers === 3) {
          return
        }
        break
    }
    return (
      <button onClick={addMember} className="flex  gap-2 items-center w-fit">
        <span className="block bg-green-500 p-1">
          <Plus size="w-10 h-10" />
        </span>
        <span>Add Member</span>
      </button>
    )
  }

  const getIsRemoveButtonShowed = () => {
    switch (competitionType) {
      case 'bcc':
        if (totalTeamMembers === 3) {
          return false
        }
        break
      case 'bridge':
        if (totalTeamMembers === 3) {
          return false
        }
        break
      case 'cetc':
        if (totalTeamMembers === 2) {
          return false
        }
        break
    }
    return true
  }

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
            isRemoveButtonShowed={getIsRemoveButtonShowed()}
            key={index}
            index={index}
            membersData={membersData}
            setMembersData={setMembersData}
            removeMember={removeMember}
          />
        ))}
        {renderAddButton()}
      </div>
    </section>
  )
}
