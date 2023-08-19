import React from 'react'
import { FileInput, TextInput } from '../module-elements'
import { InputTeamMemberProps } from '../interface'
import { Minus } from '@icons'

export const InputTeamMember: React.FC<InputTeamMemberProps> = ({
  index,
  membersData,
  setMembersData,
  removeMember,
  isRemoveButtonShowed,
}) => {
  const removeButtonHandler = () => {
    removeMember(index)
  }

  const memberInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.getAttribute('data-index') as string)
    const field = e.target.name
    const value = e.target.value

    const updatedMember = [...membersData]
    updatedMember[index] = { ...updatedMember[index], [field]: value }
    setMembersData(updatedMember)
  }
  return (
    <div className="px-6 flex flex-col gap-2">
      <div className="relative flex  items-center">
        {isRemoveButtonShowed && (
          <button
            onClick={removeButtonHandler}
            className="absolute bg-red-500 rounded-full -left-6"
          >
            <Minus size={'w-5 h-5'} />
          </button>
        )}
        <h3 className="font-bold text-xl">Team Member {index + 1} :</h3>
      </div>
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
      <FileInput label={`Student ID (KTM)`} id={`member${index + 1}Ktm`} />
      <FileInput
        label={`Active Student Proof`}
        id={`member${index + 1}ActiveStudentProof`}
      />
      <FileInput label={`3x4 Photo`} id={`member${index + 1}Photo`} />
    </div>
  )
}
