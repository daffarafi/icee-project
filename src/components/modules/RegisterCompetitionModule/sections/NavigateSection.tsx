import { Arrow } from '@icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { NavigateSectionProps } from '../interface'

export const NavigateSection: React.FC<NavigateSectionProps> = ({
  paymentButtonHandler,
}) => {
  const router = useRouter()
  return (
    <section className="w-full flex items-center justify-center gap-20">
      <button onClick={() => router.back()} className="flex items-center">
        <Arrow
          size="w-6 h-6"
          stroke="stroke-white"
          fill="fill-transparent"
          className=" rotate-180"
        />
        <span>Back</span>
      </button>
      <Link href={'/payment'}>
        <button onClick={paymentButtonHandler} className="flex items-center">
          <span>Payment</span>
          <Arrow stroke="stroke-white" fill="fill-transparent" size="w-6 h-6" />
        </button>
      </Link>
    </section>
  )
}
