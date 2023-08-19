export interface RegisterCompetitionModuleProps {
  competitionType: 'bridge' | 'bcc' | 'cetc'
}

export interface HeaderProps extends RegisterCompetitionModuleProps {}

export interface totalTeamMembers {
  totalTeamMembers: number
}

export interface membersDataProps {
  membersData: RegistrarProps[]
  setMembersData: React.Dispatch<React.SetStateAction<RegistrarProps[]>>
}

export interface TeamRegistrationSectionProps extends totalTeamMembers {
  teamName: string
  setTeamName: (value: string) => void
}

export interface InputTeamLeaderProps {
  setLeaderData: React.Dispatch<React.SetStateAction<RegistrarProps>>
  leaderData: RegistrarProps
}

export interface InputTeamMemberProps extends membersDataProps {
  index: number
  removeMember: (indexToRemove: number) => void
  isRemoveButtonShowed: boolean
}

export interface TeamMemberRegistrationSectionProps
  extends membersDataProps,
    InputTeamLeaderProps,
    totalTeamMembers,
    RegisterCompetitionModuleProps {
  addMember: () => void
  removeMember: (indexToRemove: number) => void
}

export interface InputProps {
  id: string
  label: string
}

export interface TextInputProps extends InputProps {
  value: string
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  index?: number
  placeholder?: string
  name?: string
}

export interface NavigateSectionProps {
  paymentButtonHandler: () => void
}

export interface FileInputProps extends InputProps {}

export interface RegistrarProps {
  name: string
  university: string
  major: string
  whatsapp: string
  email: string
  address: string
  ktm: File | null
  activeStudentProof: File | null
  photo: File | null
}
