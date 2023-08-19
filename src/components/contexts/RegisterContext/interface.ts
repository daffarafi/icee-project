import { RegistrarProps } from 'src/components/modules/RegisterCompetitionModule/interface'

export interface teamDataProps {
  teamName: string
  totalTeamMembers: number
  teamLeader: RegistrarProps
  members: RegistrarProps[]
}

export interface RegisterContextProps {
  teamData: teamDataProps | null
  setTeamData: React.Dispatch<React.SetStateAction<teamDataProps | null>>
}

export interface RegisterContextProviderProps {
  children: React.ReactNode
}
