export interface RegisterCompetitionModuleProps {
  competitionType: 'bridge' | 'bcc' | 'tender'
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
  TORLink: string
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
  name?: string
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface TextInputProps extends InputProps {
  index?: number
  value: string | undefined
  placeholder?: string
  type?: 'email' | 'text'
  required?: boolean
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
  instagram: File | null
  twibbon: File | null
}

export interface PaymentSectionProps {
  paymentData: PaymentDataProps
  setPaymentData: React.Dispatch<React.SetStateAction<PaymentDataProps>>
  price: string
}

export interface PaymentDataProps {
  referralCode: string
  paymentMethod: string
  paymentProof: File | null
}
