import { GlowingSpan } from '@elements'
import Image from 'next/image'
export const HeroSection: React.FC = () => (
  <section
    id="home"
    className="px-5 sm:px-10 pt-16 sm:pt-20 w-full h-[90vh] bg-[#2c3531]"
  >
    <div className="flex flex-col sm:flex-row h-[70vh] sm:mt-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-10 m-4">
        <div className="flex flex-col gap-5 sm:gap-10 sm:ml-10 w-full sm:w-[60%]">
          <h2 className="font-Sarmandy text-3xl mt-8 md:mt-4 sm:text-4xl font-extrabold tracking-[0.5em]">
            <GlowingSpan color="yellow">WHAT IS ICEE</GlowingSpan>
          </h2>
          <p className="text-base sm:text-2xl mt-10 font-thin">
            ITB Civil Engineering Expo (ICEE) is an annual event organized by
            the Civil Engineering Student Association (Himpunan Mahasiswa Sipil
            ITB) which is present as a forum for collaboration for students in
            developing themselves through various events that are integrated
            with the technical issues raised.
          </p>
        </div>
        <Image
          src="/herologo.svg"
          alt="/herologo.svg"
          width={80}
          height={40}
          className="mt-10 w-80 h-40 sm:h-60 md:mt-24"
        />
      </div>
    </div>
  </section>
)
