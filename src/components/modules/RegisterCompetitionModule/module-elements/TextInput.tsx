import React from 'react'
import { TextInputProps } from '../interface'

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  placeholder,
  value,
  name,
  index,
  type = 'text',
  required = true,
  setValue,
}) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e)
  }

  return (
    <div className="flex flex-col gap-1 lg:flex-row w-full">
      <label
        htmlFor={id}
        className="w-2/6 text-sm lg:text-base whitespace-nowrap"
      >
        {label}
      </label>
      <input
        data-index={index}
        id={id}
        name={name}
        type={type}
        className="w-full text-black px-2"
        placeholder={placeholder}
        value={value}
        onChange={inputHandler}
        required={required}
      />
    </div>
  )
}
