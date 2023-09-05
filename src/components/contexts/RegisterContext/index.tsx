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
import { getBase64, getFileNameExt } from '@utils'

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

      const body = new FormData()
      body.append('jsonFile', JSON.stringify(jsonFile))
      body.append(
        'paymentProof',
        JSON.stringify({
          base64: (await getBase64(paymentData.paymentProof as File))?.split(
            ','
          )[1],
          ext: getFileNameExt(paymentData.paymentProof?.name as string),
          contentType: (await getBase64(paymentData.paymentProof as File))
            ?.split(';')[0]
            .split(':')[1],
        })
      )
      body.append(
        'leaderKTM',
        JSON.stringify({
          base64: (await getBase64(leaderData.ktm as File))?.split(',')[1],
          ext: getFileNameExt(leaderData.ktm?.name as string),
          contentType: (await getBase64(leaderData.ktm as File))
            ?.split(';')[0]
            .split(':')[1],
        })
      )
      body.append(
        'leaderActive',
        JSON.stringify({
          base64: (
            await getBase64(leaderData.activeStudentProof as File)
          )?.split(',')[1],
          ext: getFileNameExt(leaderData.activeStudentProof?.name as string),
          contentType: (await getBase64(leaderData.activeStudentProof as File))
            ?.split(';')[0]
            .split(':')[1],
        })
      )
      body.append(
        'leader3x4',
        JSON.stringify({
          base64: (await getBase64(leaderData.photo as File))?.split(',')[1],
          ext: getFileNameExt(leaderData.photo?.name as string),
          contentType: (await getBase64(leaderData.photo as File))
            ?.split(';')[0]
            .split(':')[1],
        })
      ) // leaderData.photo as File
      body.append(
        'leaderTwibbon',
        JSON.stringify({
          base64: (await getBase64(leaderData.twibbon as File))?.split(',')[1],
          ext: getFileNameExt(leaderData.twibbon?.name as string),
          contentType: (await getBase64(leaderData.twibbon as File))
            ?.split(';')[0]
            .split(':')[1],
        })
      ) // leaderData.twibbon as File

      for (let i = 0; i < membersData.length; i++) {
        const pos = i + 1
        body.append(
          `member${pos}KTM`,
          JSON.stringify({
            base64: (await getBase64(membersData[i].ktm as File))?.split(
              ','
            )[1],
            ext: getFileNameExt(membersData[i].ktm?.name as string),
            contentType: (await getBase64(membersData[i].ktm as File))
              ?.split(';')[0]
              .split(':')[1],
          })
        ) // membersData[i].ktm as File
        body.append(
          `member${pos}Active`,
          JSON.stringify({
            base64: (
              await getBase64(membersData[i].activeStudentProof as File)
            )?.split(',')[1],
            ext: getFileNameExt(
              membersData[i].activeStudentProof?.name as string
            ),
            contentType: (
              await getBase64(membersData[i].activeStudentProof as File)
            )
              ?.split(';')[0]
              .split(':')[1],
          })
        ) // membersData[i].activeStudentProof as File
        body.append(
          `member${pos}3x4`,
          JSON.stringify({
            base64: (await getBase64(membersData[i].photo as File))?.split(
              ','
            )[1],
            ext: getFileNameExt(membersData[i].photo?.name as string),
            contentType: (await getBase64(membersData[i].photo as File))
              ?.split(';')[0]
              .split(':')[1],
          })
        )
        body.append(
          `member${pos}Twibbon`,
          JSON.stringify({
            base64: (await getBase64(membersData[i].twibbon as File))?.split(
              ','
            )[1],
            ext: getFileNameExt(membersData[i].twibbon?.name as string),
            contentType: (await getBase64(membersData[i].twibbon as File))
              ?.split(';')[0]
              .split(':')[1],
          })
        )
      }

      const response = await fetch(
        `https://iceeitb-backend.vercel.app/register`,
        {
          method: 'post',
          body,
        }
      )

      const responseJson = await response.json()

      if (response.status === 413) {
        throw new Error('Ukuran gambar terlalu besar!')
      }

      if (responseJson.statusCode !== 201) {
        throw new Error(responseJson.message)
      }
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
