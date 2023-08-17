import React from 'react'
import { FileInput, TextInput } from '../module-elements'
import { InputTeamLeaderProps } from '../interface'

export const InputTeamLeader: React.FC<InputTeamLeaderProps> = ({
  setLeaderData,
  leaderData,
}) => {
  const leaderInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name
    const value = e.target.value
    setLeaderData((prevData) => ({
      ...prevData,
      [field]: value,
    }))
  }

  return (
    <div className="px-6 flex flex-col gap-2">
      <h3 className="font-bold text-xl">Team Leader :</h3>
      <TextInput
        setValue={leaderInputHandler}
        label="Name"
        name={'name'}
        value={leaderData.name}
        id="leaderName"
      />
      <TextInput
        setValue={leaderInputHandler}
        label="University"
        name={'university'}
        value={leaderData.university}
        id="leaderUniversity"
      />
      <TextInput
        setValue={leaderInputHandler}
        value={leaderData.major}
        label="Major"
        name={'major'}
        id="leaderMajor"
      />
      <TextInput
        setValue={leaderInputHandler}
        value={leaderData.whatsapp}
        label="Whatsapp Number"
        name={'whatsapp'}
        id="leaderWhatsapp"
      />
      <TextInput
        setValue={leaderInputHandler}
        value={leaderData.email}
        label="Email"
        name={'email'}
        id="leaderEmail"
      />
      <TextInput
        setValue={leaderInputHandler}
        value={leaderData.address}
        label="Current Address"
        name={'address'}
        id="leaderAddress"
      />
      <FileInput label="Student ID (KTM)" id="leaderKtm" />
      <FileInput label="Active Student Proof" id="leaderActiveStudentProof" />
      <FileInput label="3x4 Photo" id="leaderPhoto" />
    </div>
  )
}
