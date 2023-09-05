export const getFileNameExt = (filename: string) => {
  const lastDot = filename.lastIndexOf('.')

  const ext = filename.substring(lastDot + 1)

  return ext
}
