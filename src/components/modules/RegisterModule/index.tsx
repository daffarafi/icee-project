import { GlowingSpan } from '@elements'
import Link from 'next/link'
import React from 'react'
// import {HeroSection, FAQSection} from './sections
// import {} from './module-elements'

export const RegisterModule: React.FC = () => {
  // TODO: Write module's logic

  return (
    <section className="flex flex-col gap-10 justify-center items-center min-h-screen">
      <div className="grid grid-cols-2 gap-10">
        <Link
          href={'/register/bcc'}
          className="flex flex-col items-center group"
        >
          <span className="text-9xl -mb-8 font-Sarmandy tracking-[0.2em] font-extrabold">
            <GlowingSpan color="blue">BCC</GlowingSpan>
          </span>
          <span className="text-[#c6e2de]">3 Members</span>
        </Link>
        <Link href={'/register/bridge'} className="flex flex-col items-center">
          <span className="text-9xl -mb-8 font-Sarmandy tracking-[0.2em] font-extrabold">
            <GlowingSpan color="blue">BRIDGE</GlowingSpan>
          </span>
          <span className="text-[#c6e2de]">3-4 Members </span>
        </Link>
      </div>
      <Link href={'/register/cetc'} className="flex flex-col items-center">
        <span className="text-9xl -mb-8 font-Sarmandy tracking-[0.2em] font-extrabold">
          <GlowingSpan color="blue">CETC</GlowingSpan>
        </span>
        <span className="text-[#c6e2de]">2-3 Members </span>
      </Link>
    </section>
  )
}
