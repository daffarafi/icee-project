import React from 'react'
import { FileInputProps } from '../interface'

export const FileInput: React.FC<FileInputProps> = ({ id, label }) => {
  return (
    <div className="flex w-full">
      <label htmlFor={id} className="w-2/6 whitespace-nowrap">
        {label}
      </label>
      <input id={id} type={'file'} className="w-full" />
    </div>
  )
}
