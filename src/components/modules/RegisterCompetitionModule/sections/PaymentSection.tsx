import { GlowingSpan } from '@elements'
import React from 'react'
import { FileInput, TextInput } from '../module-elements'
import { PaymentSectionProps } from '../interface'

export const PaymentSection: React.FC<PaymentSectionProps> = ({
  paymentData,
  setPaymentData,
}) => {
  const referralCodeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData((paymentData) => ({
      ...paymentData,
      referralCode: e.target.value,
    }))
  }

  const paymentMethodHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData((paymentData) => ({
      ...paymentData,
      paymentMethod: e.target.value,
    }))
  }

  const paymentProofHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    setPaymentData((paymentData) => ({
      ...paymentData,
      paymentProof: (e.target.files as FileList)[0],
    }))
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-Sarmandy text-md sm:text-lg md:text-2xl text-center lg:text-start lg:text-3xl font-extrabold tracking-[0.25em]">
        <GlowingSpan color="yellow">PAYMENT</GlowingSpan>
      </h2>
      <div className="flex px-6 flex-col gap-2">
        <div className="flex gap-2 w-full">
          <span className="lg:w-2/6 whitespace-nowrap">Payment Details : </span>
          <span className="lg:w-full">Rp.225.000,-</span>
        </div>
        <TextInput
          setValue={referralCodeHandler}
          value={paymentData.referralCode}
          label="Referral Code"
          id="referralCode"
        />
        <p>BCA 2820700760 an. Rose Amelie</p>
        <TextInput
          setValue={paymentMethodHandler}
          value={paymentData.paymentMethod}
          label="Payment Methods"
          id="paymentMethod"
        />
        <FileInput
          setValue={paymentProofHandler}
          label={`Payment Proof`}
          id={`paymentProof`}
        />
      </div>
    </section>
  )
}
