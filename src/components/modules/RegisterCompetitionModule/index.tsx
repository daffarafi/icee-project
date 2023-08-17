'use client'

import React, { useState } from 'react'
import { RegisterCompetitionModuleProps, RegistrarProps } from './interface'
import { EMPTY_REGISTRAR_DATA } from './constant'
import {
  Header,
  TeamMemberRegistrationSection,
  TeamRegistrationSection,
} from './sections'

export const RegisterCompetitionModule: React.FC<
  RegisterCompetitionModuleProps
> = ({ competitionType }) => {
  const [teamName, setTeamName] = useState<string>('')
  const [leaderData, setLeaderData] =
    useState<RegistrarProps>(EMPTY_REGISTRAR_DATA)

  const [totalTeamMembers, setTotalTeamMembers] = useState<number>(2)

  const [membersData, setMembersData] = useState<RegistrarProps[]>(
    Array.from({ length: totalTeamMembers - 1 }, () => EMPTY_REGISTRAR_DATA)
  )
  const addMember = () => {
    setTotalTeamMembers((totalMember) => totalMember + 1)
    setMembersData((prevMembers) => [...prevMembers, EMPTY_REGISTRAR_DATA])
  }

  const removeMember = (indexToRemove: number) => {
    setTotalTeamMembers((totalMember) => totalMember - 1)
    setMembersData((prevMembers) =>
      prevMembers.filter((_, index) => index !== indexToRemove)
    )
  }

  return (
    <div className="container flex flex-col gap-6">
      <Header competitionType={competitionType} />
      <TeamRegistrationSection
        setTeamName={setTeamName}
        teamName={teamName}
        totalTeamMembers={totalTeamMembers}
      />
      <TeamMemberRegistrationSection
        leaderData={leaderData}
        membersData={membersData}
        setLeaderData={setLeaderData}
        setMembersData={setMembersData}
        totalTeamMembers={totalTeamMembers}
        addMember={addMember}
        removeMember={removeMember}
      />
    </div>
  )
}
