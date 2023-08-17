'use client'

import React, { useState } from 'react'
import { GlowingSpan } from '@elements'
import { TextInput, FileInput } from './module-elements'
import { RegistrarProps } from './interface'
import { EMPTY_REGISTRAR_DATA } from './constant'

export const RegisterCompetitionModule: React.FC = () => {
  const [teamName, setTeamName] = useState<string>('')
  const [totalTeamMembers, setTotalTeamMembers] = useState<number>(2)

  const [membersData, setMembersData] = useState<RegistrarProps[]>(
    Array.from({ length: totalTeamMembers - 1 }, () => EMPTY_REGISTRAR_DATA)
  )

  const checkData = () => {
    console.log(leaderData)
    console.log(membersData)
  }

  const addMember = () => {
    setTotalTeamMembers((totalMember) => totalMember + 1)
  }

  const removeMember = () => {
    setTotalTeamMembers((totalMember) => totalMember - 1)
  }

  const [leaderData, setLeaderData] =
    useState<RegistrarProps>(EMPTY_REGISTRAR_DATA)

  const leaderInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name
    const value = e.target.value
    setLeaderData((prevData) => ({
      ...prevData,
      [field]: value,
    }))

    console.log(leaderData)
    console.log(membersData)
  }

  const memberInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.getAttribute('data-index') as string)
    const field = e.target.name
    const value = e.target.value

    const updatedMember = [...membersData]
    updatedMember[index] = { ...updatedMember[index], [field]: value }
    setMembersData(updatedMember)
    console.log(leaderData)
    console.log(membersData)
  }

  return (
    <div className="container flex flex-col gap-6">
      <header className="flex flex-col items-center">
        <h1 className="font-Sarmandy text-9xl -mb-8 text-center font-extrabold tracking-[0.25em]">
          <GlowingSpan color="blue">BRIDGE</GlowingSpan>
        </h1>
        <span className="text-[#c6e2de]">
          Innovative Brigde Design Competition
        </span>
      </header>
      <section className="flex flex-col gap-3">
        <h2 className="font-Sarmandy text-3xl font-extrabold tracking-[0.25em]">
          <GlowingSpan color="yellow">TEAM REGISTRATION</GlowingSpan>
        </h2>
        <div className="px-6 flex flex-col gap-2">
          <TextInput
            index={0}
            label="Team Name"
            id={'teamName'}
            value={teamName}
            setValue={setTeamName}
          />
          <div className="flex w-full">
            <span className="w-2/6 whitespace-nowrap">Total Team Members</span>
            <span className="w-full">{totalTeamMembers}</span>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-Sarmandy text-3xl font-extrabold tracking-[0.25em]">
          <GlowingSpan color="yellow">TEAM MEMBER REGISTRATION</GlowingSpan>
        </h2>
        <div className="flex flex-col gap-6">
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
            <FileInput
              label="Active Student Proof"
              id="leaderActiveStudentProof"
            />
            <FileInput label="3x4 Photo" id="leaderPhoto" />
          </div>
          {Array.from({ length: totalTeamMembers - 1 }, (_, index) => (
            <div key={index} className="px-6 flex flex-col gap-2">
              <h3 className="font-bold text-xl">Team Member {index + 1} :</h3>
              <TextInput
                value={membersData[index].name}
                setValue={memberInputHandler}
                index={index}
                label={`Name`}
                name="name"
                id={`member${index + 1}Name`}
              />
              <TextInput
                value={membersData[index].university}
                setValue={memberInputHandler}
                index={index}
                label={`University`}
                name="university"
                id={`member${index + 1}University`}
              />
              <TextInput
                value={membersData[index].major}
                setValue={memberInputHandler}
                index={index}
                label={`Major`}
                name="major"
                id={`member${index + 1}Major`}
              />
              <TextInput
                value={membersData[index].whatsapp}
                setValue={memberInputHandler}
                index={index}
                label={`Whatsapp Number`}
                name="whatsapp"
                id={`member${index + 1}Whatsapp`}
              />
              <TextInput
                value={membersData[index].email}
                setValue={memberInputHandler}
                index={index}
                label={`Email`}
                name="email"
                id={`member${index + 1}Email`}
              />
              <TextInput
                value={membersData[index].address}
                setValue={memberInputHandler}
                index={index}
                label={`Current Address`}
                name="address"
                id={`member${index + 1}Address`}
              />
              <FileInput
                label={`Student ID (KTM)`}
                id={`member${index + 1}Ktm`}
              />
              <FileInput
                label={`Active Student Proof`}
                id={`member${index + 1}ActiveStudentProof`}
              />
              <FileInput label={`3x4 Photo`} id={`member${index + 1}Photo`} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <button onClick={checkData}>CheckData</button>
        <button onClick={addMember}>Add member</button>
        <button onClick={removeMember}>removRemove member</button>
      </section>
    </div>
  )
}
