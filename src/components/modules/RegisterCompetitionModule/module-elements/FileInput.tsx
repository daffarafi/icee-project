import React from 'react'
import { FileInputProps } from '../interface'

export const FileInput: React.FC<FileInputProps> = ({
  id,
  label,
  name,
  setValue,
}) => {
  return (
    <div className="flex gap-1 flex-col lg:flex-row w-full">
      <label htmlFor={id} className="w-2/6 whitespace-nowrap">
        {label}
      </label>
      <input
        id={id}
        type={'file'}
        onChange={setValue}
        className="w-full"
        name={name}
        required
      />
    </div>
  )
}
