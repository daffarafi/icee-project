import { RegisterCompetitionModule } from '@modules'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'
import { notFound } from 'next/navigation'

const COMPE_TYPE = ['bridge', 'bcc', 'tender']

const RegisterCompetition = ({
  params,
}: {
  params: { competitionType: 'bridge' | 'bcc' | 'tender' }
}) => {
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
