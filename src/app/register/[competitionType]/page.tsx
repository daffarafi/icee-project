import { RegisterCompetitionModule } from '@modules'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'
import { notFound, redirect } from 'next/navigation'

const COMPE_TYPE = ['bridge', 'bcc', 'tender']

const RegisterCompetition = ({
  params,
}: {
  params: { competitionType: 'bridge' | 'bcc' | 'tender' }
}) => {
  const gformLink =
    'https://docs.google.com/forms/d/e/1FAIpQLSdo2LLV8ghvtoF64cgUHFLiM1aiMjNrGHmGjwJ5tJ6Yfl__4w/viewform'
  redirect(gformLink)
  try {
    const { competitionType } = params
    if (!COMPE_TYPE.includes(competitionType)) {
      throw new PageNotFoundError(competitionType)
    } else {
      return <RegisterCompetitionModule competitionType={competitionType} />
    }
  } catch (err) {
    notFound()
  }
}

export default RegisterCompetition
