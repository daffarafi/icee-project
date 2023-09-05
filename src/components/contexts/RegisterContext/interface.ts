import { FormEventHandler } from 'react'
import { RegistrarProps } from 'src/components/modules/RegisterCompetitionModule/interface'

export interface teamDataProps {
  teamName: string
  totalTeamMembers: number
  teamLeader: RegistrarProps
  members: RegistrarProps[]
}

export interface RegisterContextProps {
  teamData: teamDataProps | null
  setTeamData: FormEventHandler<HTMLFormElement>
  loading: boolean
  success: boolean
}

export interface RegisterContextProviderProps {
  children: React.ReactNode
}
