'use client'
import { GlowingSpan } from '@elements'
import Link from 'next/link'
import React from 'react'

export const RegisterModule: React.FC = () => {
  const gformLink =
    'https://docs.google.com/forms/d/e/1FAIpQLSdo2LLV8ghvtoF64cgUHFLiM1aiMjNrGHmGjwJ5tJ6Yfl__4w/viewform'

  return (
    <section className="flex flex-col gap-10 justify-center items-center min-h-screen py-44">
      <button
        onClick={() => alert('Pendaftaran Bridge Sudah Ditutup!')}
        className="flex flex-col items-center"
      >
        <span className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 font-Sarmandy tracking-[0.2em] font-extrabold">
          <GlowingSpan color="blue">BRIDGE</GlowingSpan>
        </span>
        <span className="text-[#c6e2de]">3 Members </span>
      </button>
      <Link href={gformLink} className="flex flex-col items-center group">
        <span className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 font-Sarmandy tracking-[0.2em] font-extrabold">
          <GlowingSpan color="blue">BCC</GlowingSpan>
        </span>
        <span className="text-[#c6e2de]">3-4 Members</span>
      </Link>
      <Link href={gformLink} className="flex flex-col items-center">
        <span className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 font-Sarmandy tracking-[0.2em] font-extrabold">
          <GlowingSpan color="blue">TENDER</GlowingSpan>
        </span>
        <span className="text-[#c6e2de]">2-3 Members </span>
      </Link>
    </section>
  )
}
