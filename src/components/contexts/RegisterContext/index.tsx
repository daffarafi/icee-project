'use client'

import React, { FormEvent, createContext, useContext, useState } from 'react'
import {
  RegisterContextProps,
  RegisterContextProviderProps,
  teamDataProps,
} from './interface'
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

  const setTeamData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)

      //   const jsonFile = {
      //     teamName: 'Sipilin',
      //     competition: 'BCC',
      //     totalPayment: 10000,
      //     paymentMethod: 'BCA',
      //     members: [
      //       {
      //         name: 'Budi',
      //         university: 'Institut Teknologi Bandung',
      //         major: 'Teknik Sipil',
      //         WANumber: '08123456789',
      //         email: 'test@gmail.com',
      //         address: 'Jalan Sudirman No.4',
      //         role: 'LEADER',
      //       },
      //       {
      //         name: 'Cheryl',
      //         university: 'Institut Teknologi Bandung',
      //         major: 'Teknik Sipil',
      //         WANumber: '08123456789',
      //         email: 'test@gmail.com',
      //         address: 'Jalan Sudirman No.4',
      //         role: 'MEMBER',
      //       },
      //     ],
      //   }

      //   const body = {
      //     jsonFile,
      //     paymentProof: null,
      //     leaderKTM: null,
      //     leaderActive: null,
      //     leader3x4: null,
      //     leaderTwibbon: null,
      //     member1KTM: null,
      //     member1Active: null,
      //     member13x4: null,
      //     member1Twibbon: null,
      //   }
      // const form = e.target as HTMLFormElement

      // const teamLeader = {
      //     members: form.
      // } as teamDataPronullps

      setTeamDataState(null)
      // router.push('/payment')}
      setSuccess(true)
    } catch (err) {
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
