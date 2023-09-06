import React from 'react'
import { GlowingSpan } from '@elements'
import Slideshow from '../module-elements/Slideshow'
export const NumberSection: React.FC = () => {
  const slides = [
    <div key={0} className="flex flex-col gap-4">
      <p className="text-5xl">495</p>
      <p>Group Participants</p>
    </div>,
    <div key={1} className="flex flex-col gap-4">
      <p className="text-5xl">2095</p>
      <p>National Seminar Participants</p>
    </div>,
    <div key={2} className="flex flex-col gap-4">
      <p className="text-5xl">1800+</p>
      <p>Workshop Participants</p>
    </div>,
    <div key={3} className="flex flex-col gap-4">
      <p className="text-5xl">9000+</p>
      <p>Total Participants</p>
    </div>,
    <div key={4} className="flex flex-col gap-4">
      <p className="text-5xl">4372</p>
      <p>Expo Participants</p>
    </div>,
    <div key={5} className="flex flex-col gap-4">
      <p className="text-5xl">300+</p>
      <p>Conference Participants</p>
    </div>,
  ]

  return (
    <section className="bg-[#2c3531] h-[90vh] md:h-[80vh] lg:h-[120vh]">
      {/* kasih pt-20 ^^ */}
      {/* <WavySection color="#1c6c6e" /> */}
      <div className="flex bg-[#1c6c6e] flex-col gap-5 sm:gap-10 w-full"></div>
      <div className="px-5 sm:px-10 pt-16 bg-[#1c6c6e] sm:pt-20 w-full h-[120vh]">
        <div className="flex flex-col h-[90vh] m-4">
          <div className="flex flex-col gap-5 pt-4 sm:gap-10 sm:ml-10 w-full">
            <h2 className="font-Sarmandy text-3xl ml-3 sm:text-4xl font-extrabold tracking-[0.5em]">
              <GlowingSpan color="yellow">ICEE IN NUMBERS</GlowingSpan>
            </h2>
          </div>

          <div
            className="flex justify-center text-center
           mt-48 md:mt-44 gap-2  text-[#FAF9F6] font-Adam"
          >
            <Slideshow slides={slides} />
          </div>
        </div>
      </div>
    </section>
  )
}
