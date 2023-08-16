import React from 'react'
import { TextInputProps } from '../interface'

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  placeholder,
  value,
  name,
  index,
  setValue,
}) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e)
  }

  return (
    <div className="flex w-full">
      <label htmlFor={id} className="w-2/6 whitespace-nowrap">
        {label}
      </label>
      <input
        data-index={index}
        id={id}
        name={name}
        type={'text'}
        className="w-full text-black px-2"
        placeholder={placeholder}
        value={value}
        onChange={inputHandler}
      />
    </div>
  )
}
