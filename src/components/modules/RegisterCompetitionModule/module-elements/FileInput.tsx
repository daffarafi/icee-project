import React from 'react'
import { FileInputProps } from '../interface'

export const FileInput: React.FC<FileInputProps> = ({
  id,
  label,
  name,
  setValue,
}) => {
  return (
    <div className="flex items-center gap-1 flex-col lg:flex-row w-full">
      <label
        htmlFor={id}
        className="w-full text-start block lg:w-2/6  whitespace-nowrap"
      >
        {label}
      </label>
      <div className="w-full flex flex-col">
        <input
          id={id}
          type={'file'}
          accept="image/*"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files
            if (!files) return
            const file = files[0]
            if (!file) {
              alert('Mohon masukan file!')
              e.target.value = ''
              return
            }
            if (!file.type.startsWith('image/')) {
              alert('File harus bertipe gambar.')
              e.target.value = ''
              return
            }
            if (file.size > 3.5 * 1024 * 1024) {
              alert('File tidak boleh lebih dari 3.5 MB.')
              e.target.value = ''
              return
            }
            setValue(e)
          }}
          className="w-fit"
          name={name}
          required
        />
        <span className="italic text-xs">(max size: 3.5mb)</span>
      </div>
    </div>
  )
}
