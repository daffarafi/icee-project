'use client'

import React, { useState } from 'react'
import {
  PaymentDataProps,
  RegisterCompetitionModuleProps,
  RegistrarProps,
} from './interface'
import { EMPTY_PAYMENT_DATA, EMPTY_REGISTRAR_DATA } from './constant'
import {
  Header,
  NavigateSection,
  PaymentSection,
  TeamMemberRegistrationSection,
  TeamRegistrationSection,
  Thanks,
} from './sections'
import { useRegisterContext } from '@contexts'
import Image from 'next/image'

export const RegisterCompetitionModule: React.FC<
  RegisterCompetitionModuleProps
> = ({ competitionType }) => {
  const { teamData, setTeamData, loading, success } = useRegisterContext()

  const [teamName, setTeamName] = useState<string>(
    teamData ? teamData.teamName : ''
  )
  const [leaderData, setLeaderData] = useState<RegistrarProps>(
    teamData ? teamData.teamLeader : EMPTY_REGISTRAR_DATA
  )

  const [showQRCode, setShowQRCode] = useState<boolean>(false)

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

  const [paymentData, setPaymentData] =
    useState<PaymentDataProps>(EMPTY_PAYMENT_DATA)

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
      case 'tender':
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
      case 'tender':
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

  let TORLink = ''
  let priceStr = ''
  if (competitionType == 'bcc') {
    TORLink = 'https://bit.ly/TORUmumBCCICEE2024'
    priceStr = '300.000'
  } else if (competitionType == 'bridge') {
    TORLink = 'https://bit.ly/TORUmumIBDCICEE2024'
    priceStr = '300.000'
  } else if (competitionType == 'tender') {
    TORLink = 'http://bit.ly/TORUmumCETCICEE2024'
    priceStr = '300.000'
  }

  if (success) return <Thanks />

  return (
    <div className="container py-28 flex flex-col gap-6">
      <Header competitionType={competitionType} />
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setTeamData(
            teamName,
            competitionType,
            leaderData,
            membersData,
            paymentData
          )
        }}
        className="flex flex-col gap-6"
      >
        <TeamRegistrationSection
          setTeamName={setTeamName}
          teamName={teamName}
          totalTeamMembers={totalTeamMembers}
          TORLink={TORLink}
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
        <PaymentSection
          paymentData={paymentData}
          setPaymentData={setPaymentData}
          setShowQRCode={setShowQRCode}
          price={priceStr}
        />
        <input
          type="text"
          className="hidden"
          name={'competition'}
          defaultValue={competitionType}
        />
        <input
          type="text"
          className="hidden"
          name={'totalTeamMembers'}
          defaultValue={totalTeamMembers}
        />
        <NavigateSection />
      </form>
      {loading && (
        <div className="fixed top-0 left-0 bg-white/40 w-screen h-screen flex justify-center items-center">
          <div className="w-20 h-20  rounded-full border-8 border-gray-700 border-l-transparent animate-spin" />
        </div>
      )}
      {showQRCode && (
        <div
          onClick={() => setShowQRCode(false)}
          className="fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center "
        >
          <div className="absolute top-0 left-0 w-full h-full  bg-black/40" />
          <div className="absolute w-full max-w-2xl px-10 h-full max-h-[30rem]">
            <Image
              fill
              src={'/qr.jpg'}
              alt="QR Code"
              className="object-contain "
            />
          </div>
        </div>
      )}
    </div>
  )
}
