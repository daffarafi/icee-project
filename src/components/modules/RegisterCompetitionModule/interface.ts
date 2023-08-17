export interface InputProps {
  id: string
  label: string
}

export interface TextInputProps extends InputProps {
  value: string
  setValue: (value: any) => void
  index?: number
  placeholder?: string
  name?: string
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
