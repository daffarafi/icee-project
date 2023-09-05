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

const RegisterContext = createContext({} as RegisterContextProps)

export const useRegisterContext = () => useContext(RegisterContext)

export const RegisterContextProvider: React.FC<
  RegisterContextProviderProps
> = ({ children }) => {
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
        competition: competition.toUpperCase(),
        totalPayment: 225000,
        paymentMethod: paymentData.paymentMethod,
        referralCode: paymentData.referralCode,
        members,
      }

      const bodyTeam = new FormData()
      bodyTeam.append('jsonFile', JSON.stringify(jsonFile))

      const bodyPayment = new FormData()
      bodyPayment.append('paymentProof', paymentData.paymentProof as File)

      // let bodyRequestForTeam: { [key: string]: FormData } = {
      //   bodyTeam,
      //   bodyPayment,
      // }

      // LEADER form data
      const bodyLeaderKTM = new FormData()
      bodyLeaderKTM.append('memberKTM', leaderData.ktm as File)
      const bodyLeaderActive = new FormData()
      bodyLeaderActive.append(
        'memberActive',
        leaderData.activeStudentProof as File
      )
      const bodyLeader3x4 = new FormData()
      bodyLeader3x4.append('member3x4', leaderData.photo as File)
      const bodyLeaderTwibbon = new FormData()
      bodyLeaderTwibbon.append('memberTwibbon', leaderData.twibbon as File)

      const bodyMembers = [
        {
          ktm: bodyLeaderKTM,
          aktif: bodyLeaderActive,
          photo3x4: bodyLeader3x4,
          twibbon: bodyLeaderTwibbon,
        },
      ]
      // body.bodyLeaderKTM = bodyLeaderKTM
      // body.bodyLeaderActive = bodyLeaderActive
      // body.bodyLeader3x4 = bodyLeader3x4
      // body.bodyLeaderTwibbon = bodyLeaderTwibbon

      for (let i = 0; i < membersData.length; i++) {
        // const pos = i + 1

        const bodyKTM = new FormData()
        bodyKTM.append(`memberKTM`, membersData[i].ktm as File)
        const bodyActive = new FormData()
        bodyActive.append(
          `memberActive`,
          membersData[i].activeStudentProof as File
        )
        const body3x4 = new FormData()
        body3x4.append(`member3x4`, membersData[i].photo as File)
        const bodyTwibbon = new FormData()
        bodyTwibbon.append(`memberTwibbon`, membersData[i].twibbon as File)

        const bodyMember = {
          ktm: bodyKTM,
          aktif: bodyActive,
          photo3x4: body3x4,
          twibbon: bodyTwibbon,
        }
        bodyMembers.push(bodyMember)
        // body.append(`member${pos}KTM`, membersData[i].ktm as File)
        // body.append(
        //   `member${pos}Active`,
        //   membersData[i].activeStudentProof as File
        // )
        // body.append(`member${pos}3x4`, membersData[i].photo as File)
        // body.append(`member${pos}Twibbon`, membersData[i].twibbon as File)
      }

      // console.log(body.get('paymentProof'))
      const backendUrl = 'https://iceeitb-backend.vercel.app'
      let res = await fetch(`${backendUrl}/register`, {
        method: 'POST',
        body: bodyTeam,
      })
      const resJson = await res.json()
      const ids = resJson.ids

      res = await fetch(`${backendUrl}/register/team/${ids.teamId}`, {
        method: 'POST',
        body: bodyPayment,
      })

      for (let i = 0; i < bodyMembers.length; i++) {
        const memberId = ids.memberIds[i]
        const resKTM = await fetch(
          `${backendUrl}/register/member/ktm/${memberId}`,
          { method: 'POST', body: bodyMembers[i].ktm }
        )
        console.log(resKTM)
        const resActive = await fetch(
          `${backendUrl}/register/member/aktif/${memberId}`,
          { method: 'POST', body: bodyMembers[i].aktif }
        )
        console.log(resActive)
        const resPhoto3x4 = await fetch(
          `${backendUrl}/register/member/3x4/${memberId}`,
          { method: 'POST', body: bodyMembers[i].photo3x4 }
        )
        console.log(resPhoto3x4)
        const resTwibbon = await fetch(
          `${backendUrl}/register/member/twibbon/${memberId}`,
          { method: 'POST', body: bodyMembers[i].twibbon }
        )
        console.log(resTwibbon)
      }

      // fetch(`${backendUrl}/register`, { method: 'POST', body: bodyTeam })
      //   .then((res) => res.json())
      //   .then((resJson) => {
      //     const { teamId, memberIds } = resJson
      //     console.log(resJson)
      //     console.log(resJson.teamId)
      //     console.log(resJson.memberIds)
      //     console.log(resJson.memberIds[0])

      //     fetch(`${backendUrl}/register/team/${resJson.teamId}`, {
      //       method: 'POST',
      //       body: bodyPayment,
      //     }).then(async (res) => {
      //       for (let i = 0; i < bodyMembers.length; i++) {
      //         try {
      //           const memberId = resJson.memberIds[i]
      //           const resKTM = await fetch(
      //             `${backendUrl}/register/member/ktm/${memberId}`,
      //             { method: 'POST', body: bodyMembers[i].ktm }
      //           )
      //           console.log(resKTM)
      //           const resActive = await fetch(
      //             `${backendUrl}/register/member/aktif/${memberId}`,
      //             { method: 'POST', body: bodyMembers[i].aktif }
      //           )
      //           console.log(resActive)
      //           const resPhoto3x4 = await fetch(
      //             `${backendUrl}/register/member/3x4/${memberId}`,
      //             { method: 'POST', body: bodyMembers[i].photo3x4 }
      //           )
      //           console.log(resPhoto3x4)
      //           const resTwibbon = await fetch(
      //             `${backendUrl}/register/member/twibbon/${memberId}`,
      //             { method: 'POST', body: bodyMembers[i].twibbon }
      //           )
      //           console.log(resTwibbon)
      //         } catch (err) {
      //           alert(err)
      //         }
      //       }
      //     })
      //   })
      //   .catch((err) => {
      //     alert(err)
      //     setSuccess(false)
      //   })
      //   .finally(() => setLoading(false))

      // const response = await fetch(`${backendUrl}/register`, {
      //   method: 'post',
      //   body: bodyTeam,
      // })

      // const response = await fetch(
      //   `https://iceeitb-backend.vercel.app/register`,
      //   {
      //     method: 'post',
      //     body,
      //   }
      // )

      // const responseJson = await response.json()

      // if (response.status === 413) {
      //   throw new Error('Ukuran gambar terlalu besar!')
      // }

      // if (responseJson.statusCode !== 201) {
      //   throw new Error(responseJson.message)
      // }
      setSuccess(true)
    } catch (err: any) {
      alert(err)

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
