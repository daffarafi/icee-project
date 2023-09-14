import React from 'react'
import { FileInput, TextInput } from '../module-elements'
import { InputTeamLeaderProps } from '../interface'
import Link from 'next/link'

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

  const leaderInputFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name
    const files = e.target.files
    if (!files) return
    setLeaderData({
      ...leaderData,
      [field]: files[0],
    })
  }

  return (
    <div className="px-6 flex flex-col gap-2">
      <h3 className="font-bold text-base lg:text-xl">Team Leader :</h3>
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
        type="email"
        id="leaderEmail"
      />
      <TextInput
        setValue={leaderInputHandler}
        value={leaderData.address}
        label="Current Address"
        name={'address'}
        id="leaderAddress"
      />
      <FileInput
        name="ktm"
        setValue={leaderInputFileHandler}
        label="Student ID (KTM)"
        id="leaderKtm"
      />
      <FileInput
        setValue={leaderInputFileHandler}
        name="activeStudentProof"
        label="Active Student Proof"
        id="leaderActiveStudentProof"
      />
      <FileInput
        setValue={leaderInputFileHandler}
        name="photo"
        label="3x4 Photo"
        id="leaderPhoto"
      />
      <FileInput
        setValue={leaderInputFileHandler}
        name="instagram"
        label="Follow Instagram ICEE ITB"
        id="leaderFollowInstagram"
      />
      <FileInput
        setValue={leaderInputFileHandler}
        name="twibbon"
        label="Twibbon"
        id="leaderTwibbon"
      />
      <span className="italic">
        *Silahkan cek{' '}
        <Link
          className="underline text-blue-400"
          href={'http://bit.ly/TwibbonCompeICEE2024'}
          target="_blank"
        >
          link ini
        </Link>{' '}
        untuk melihat template twibbon
      </span>
    </div>
  )
}
