import { RegisterCompetitionModule } from '@modules'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'
import { notFound } from 'next/navigation'

const COMPE_TYPE = ['bridge', 'bcc', 'cetc']

const RegisterCompetition = ({
  params,
}: {
  params: { competitionType: 'bridge' | 'bcc' | 'cetc' }
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
