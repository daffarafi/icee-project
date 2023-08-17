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

  const checkData = () => {
    console.log(leaderData)
    console.log(membersData)
  }
  const [totalTeamMembers, setTotalTeamMembers] = useState<number>(2)

  const [membersData, setMembersData] = useState<RegistrarProps[]>(
    Array.from({ length: totalTeamMembers - 1 }, () => EMPTY_REGISTRAR_DATA)
  )
  const addMember = () => {
    setTotalTeamMembers((totalMember) => totalMember + 1)
    setMembersData((prevMembers) => [...prevMembers, EMPTY_REGISTRAR_DATA])
  }

  const removeMember = () => {
    setTotalTeamMembers((totalMember) => totalMember - 1)
    setMembersData((prevMembers) => prevMembers.slice(0, totalTeamMembers - 1))
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
      />
      <section>
        <button onClick={checkData}>CheckData</button>
        <button onClick={addMember}>Add member</button>
        <button onClick={removeMember}>removRemove member</button>
      </section>
    </div>
  )
}
