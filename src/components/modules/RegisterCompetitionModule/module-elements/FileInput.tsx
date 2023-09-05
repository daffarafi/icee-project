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

          if (file.size > 2 * 1024 * 1024) {
            alert('File tidak boleh lebih dari 2 MB.')
            e.target.value = ''
            return
          }
          setValue(e)
        }}
        className="w-full"
        name={name}
        required
      />
    </div>
  )
}
