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
    try {
      e.preventDefault()
      setLoading(true)
      setTeamDataState(null)
      // const form = e.target as HTMLFormElement

      // const teamLeader = {
      //     members: form.
      // } as teamDataProps

      // setTeamDataState({teamLeader:})
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
