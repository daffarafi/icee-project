'use client'

import React, { useState } from 'react'
import { RegisterCompetitionModuleProps, RegistrarProps } from './interface'
import { EMPTY_REGISTRAR_DATA } from './constant'
import {
  Header,
  NavigateSection,
  TeamMemberRegistrationSection,
  TeamRegistrationSection,
} from './sections'
import { useRegisterContext } from '@contexts'

export const RegisterCompetitionModule: React.FC<
  RegisterCompetitionModuleProps
> = ({ competitionType }) => {
  const { setTeamData, teamData } = useRegisterContext()

  const [teamName, setTeamName] = useState<string>(
    teamData ? teamData.teamName : ''
  )
  const [leaderData, setLeaderData] = useState<RegistrarProps>(
    teamData ? teamData.teamLeader : EMPTY_REGISTRAR_DATA
  )

  const [totalTeamMembers, setTotalTeamMembers] = useState<number>(
    teamData
      ? teamData.totalTeamMembers
      : ['bridge', 'bcc'].includes(competitionType)
      ? 3
      : 2
  )

  const [membersData, setMembersData] = useState<RegistrarProps[]>(
    teamData
      ? teamData.members
      : Array.from({ length: totalTeamMembers - 1 }, () => EMPTY_REGISTRAR_DATA)
  )
  const addMember = () => {
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
    setTotalTeamMembers((totalMember) => totalMember + 1)
    setMembersData((prevMembers) => [...prevMembers, EMPTY_REGISTRAR_DATA])
  }

  const removeMember = (indexToRemove: number) => {
    switch (competitionType) {
      case 'bcc':
        if (totalTeamMembers === 3) {
          return
        }
        break
      case 'bridge':
        if (totalTeamMembers === 3) {
          return
        }
        break
      case 'cetc':
        if (totalTeamMembers === 2) {
          return
        }
        break
    }
    setTotalTeamMembers((totalMember) => totalMember - 1)
    setMembersData((prevMembers) =>
      prevMembers.filter((_, index) => index !== indexToRemove)
    )
  }

  const paymentButtonHandler = () => {
    setTeamData({
      teamName,
      totalTeamMembers,
      teamLeader: leaderData,
      members: membersData,
    })
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
        competitionType={competitionType}
        leaderData={leaderData}
        membersData={membersData}
        setLeaderData={setLeaderData}
        setMembersData={setMembersData}
        totalTeamMembers={totalTeamMembers}
        addMember={addMember}
        removeMember={removeMember}
      />
      <NavigateSection paymentButtonHandler={paymentButtonHandler} />
    </div>
  )
}
