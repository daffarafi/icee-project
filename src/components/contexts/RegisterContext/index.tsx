'use client'

import React, { FormEvent, createContext, useContext, useState } from 'react'
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
      body.append('paymentProof', paymentData.paymentProof)
      body.append('leaderKTM', leaderData.ktm)
      body.append('leaderActive', leaderData.activeStudentProof)
      body.append('leader3x4', leaderData.photo)
      body.append('leaderTwibbon', leaderData.twibbon)

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
        body.append(`member${pos}KTM`, membersData[i].ktm)
        body.append(`member${pos}Active`, membersData[i].activeStudentProof)
        body.append(`member${pos}3x4`, membersData[i].photo)
        body.append(`member${pos}Tqwibbon`, membersData[i].twibbon)
      }

      console.log(body)
      // const form = e.target as HTMLFormElement

      // const teamLeader = {
      //     members: form.
      // } as teamDataPronullps

      // setTeamDataState({teamLeader:})
      // router.push('/payment')}
      const response = await fetch(`http://localhost:8000/register`, {
        method: 'post',
        body,
      })

      const responseJson = response.json()

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
