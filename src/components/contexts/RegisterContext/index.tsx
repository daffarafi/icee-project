'use client'

import React, { createContext, useContext, useState } from 'react'
import {
  RegisterContextProps,
  RegisterContextProviderProps,
  teamDataProps,
} from './interface'
import {
  PaymentDataProps,
  RegistrarProps,
} from 'src/components/modules/RegisterCompetitionModule/interface'
// import { useRouter } from 'next/navigation'

const RegisterContext = createContext({} as RegisterContextProps)

export const useRegisterContext = () => useContext(RegisterContext)

export const RegisterContextProvider: React.FC<
  RegisterContextProviderProps
> = ({ children }) => {
  //   const router = useRouter()
  const [teamData, setTeamDataState] = useState<teamDataProps | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  const setTeamData = async (
    teamName: string,
    competition: string,
    leaderData: RegistrarProps,
    membersData: RegistrarProps[],
    paymentData: PaymentDataProps
  ) => {
    setTeamDataState
    try {
      setLoading(true)

      const members = [
        {
          name: leaderData.name,
          university: leaderData.university,
          major: leaderData.major,
          WANumber: leaderData.whatsapp,
          email: leaderData.email,
          address: leaderData.address,
          role: 'LEADER',
        },
      ]

      for (let i = 0; i < membersData.length; i++) {
        members.push({
          name: membersData[i].name,
          university: membersData[i].university,
          major: membersData[i].major,
          WANumber: membersData[i].whatsapp,
          email: membersData[i].email,
          address: membersData[i].address,
          role: 'MEMBER',
        })
      }

      const jsonFile = {
        teamName: teamName,
        competition: competition,
        totalPayment: 225000,
        paymentMethod: paymentData.paymentMethod,
        referralCode: paymentData.referralCode,
        members,
      }

      console.log(jsonFile)

      const body = new FormData()
      //   let tyest = {
      //     jsonFile: JSON.stringify(jsonFile),
      //     paymentProof: paymentData.paymentProof,
      //     leaderKTM: leaderData.ktm,
      //     leaderActive: leaderData.activeStudentProof,
      //     leader3x4: leaderData.photo,
      //     leaderTwibbon: leaderData.twibbon,
      //   }
      body.append('jsonFile', JSON.stringify(jsonFile))
      body.append('paymentProof', paymentData.paymentProof as File)
      body.append('leaderKTM', leaderData.ktm as Blob)
      body.append('leaderActive', leaderData.activeStudentProof as File)
      body.append('leader3x4', leaderData.photo as File)
      body.append('leaderTwibbon', leaderData.twibbon as File)

      for (let i = 0; i < membersData.length; i++) {
        const pos = i + 1
        console.log(membersData[i])
        // body = {
        //   ...body,
        //   [`member${pos}KTM`]: membersData[i].ktm,
        //   [`member${pos}Active`]: membersData[i].activeStudentProof,
        //   [`member${pos}3x4`]: membersData[i].photo,
        //   [`member${pos}Twibbon`]: membersData[i].twibbon,
        // }
        body.append(`member${pos}KTM`, membersData[i].ktm as File)
        body.append(
          `member${pos}Active`,
          membersData[i].activeStudentProof as File
        )
        body.append(`member${pos}3x4`, membersData[i].photo as File)
        body.append(`member${pos}Twibbon`, membersData[i].twibbon as File)
      }

      console.log(body)
      // const form = e.target as HTMLFormElement

      // const teamLeader = {
      //     members: form.
      // } as teamDataPronullps

      // setTeamDataState({teamLeader:})
      // router.push('/payment')}
      await fetch(`https://iceeitb-backend.vercel.app/register`, {
        method: 'post',
        body,
      })

      //   const responseJson = response.json()

      setSuccess(true)
    } catch (err) {
      console.log(err)
      setSuccess(false)
    } finally {
      setLoading(false)
    }
  }
  const contextValue = {
    teamData,
    setTeamData,
    loading,
    success,
  }

  return (
    <RegisterContext.Provider value={contextValue}>
      {children}
    </RegisterContext.Provider>
  )
}
