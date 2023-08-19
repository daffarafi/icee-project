'use client'

import React, { createContext, useContext, useState } from 'react'
import {
  RegisterContextProps,
  RegisterContextProviderProps,
  teamDataProps,
} from './interface'

const RegisterContext = createContext({} as RegisterContextProps)

export const useRegisterContext = () => useContext(RegisterContext)

export const RegisterContextProvider: React.FC<
  RegisterContextProviderProps
> = ({ children }) => {
  const [teamData, setTeamData] = useState<teamDataProps | null>(null)

  const contextValue = {
    teamData,
    setTeamData,
  }

  return (
    <RegisterContext.Provider value={contextValue}>
      {children}
    </RegisterContext.Provider>
  )
}
