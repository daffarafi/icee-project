import {
  PaymentDataProps,
  RegistrarProps,
} from 'src/components/modules/RegisterCompetitionModule/interface'

export interface teamDataProps {
  teamName: string
  totalTeamMembers: number
  teamLeader: RegistrarProps
  members: RegistrarProps[]
}

export interface RegisterContextProps {
  teamData: teamDataProps | null
  setTeamData: (
    teamName: string,
    competition: string,
    leaderData: RegistrarProps,
    membersData: RegistrarProps[],
    paymentData: PaymentDataProps
  ) => void
  loading: boolean
  success: boolean
}

export interface RegisterContextProviderProps {
  children: React.ReactNode
}
