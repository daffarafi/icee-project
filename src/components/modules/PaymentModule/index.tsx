'use client'

import { useRegisterContext } from '@contexts'
import React from 'react'
// import {HeroSection, FAQSection} from './sections
// import {} from './module-elements'

export const PaymentModule: React.FC = () => {
  const { teamData } = useRegisterContext()

  console.log(teamData)

  return (
    <>
      <section>
        <h2>Detail Team</h2>
        <div>
          <h3>Team Leader</h3>
          <div></div>
        </div>
        <div>
          <h3>Team Member 1</h3>
          <div></div>
        </div>
      </section>
      <section>
        <h2>Payment</h2>
      </section>
    </>
  )
}
