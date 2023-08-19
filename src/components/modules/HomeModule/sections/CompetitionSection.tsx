import React from 'react';
import { GlowingSpan } from '@elements';
import { WavySection } from '../module-elements/WavySection';

export const CompetitionSection: React.FC = () => (
  <section className="bg-[#1c6c6e] pt-20 sm:pt-10 md:pt-20 h-auto md:h-[90vh] lg:min-h-[130vh]">
    <WavySection color="#2c3531" />
    <div className="flex bg-[#2c3531] flex-col gap-5 sm:gap-10 w-full"></div>
    <div className="px-5 sm:px-10 pt-16 bg-[#2c3531] sm:pt-20 w-full md:min-h-[100vh]">
      <div className="pt-4 sm:gap-10 sm:ml-10 w-full">
        <h2 className="font-Sarmandy text-3xl ml-3 lg:text-4xl font-extrabold tracking-[0.5em]">
          <GlowingSpan color="yellow">OUR COMPETITION</GlowingSpan>
        </h2>
      </div>

      <div className="flex flex-col  lg:flex-row justify-center items-center
         mt-5 md:mt-32 mx-2 md:mx-0 md:ml-2 text-center">
        <div className="flex flex-col gap-4 mt-10 mr-2 md:ml-3 lg:mt-0 md:gap-8 lg:mr-10">
          <h1 className="font-Sarmandy text-lg  md:text-2xl -mb-2 md:-mb-8 text-center font-extrabold tracking-[0.25em]">
            <GlowingSpan color="blue" className='text-base md:text-lg'>BCC</GlowingSpan>
          </h1>
          <p className='text-[#c6e2de] font-Sarmandy text-xs md:text-base'>Business Case Competition</p>
        </div>
        <div className="flex flex-col mt-10 lg:mt-0 gap-4 md:gap-14 ml-2">
          <h1 className="font-Sarmandy text-4xl md:text-9xl -mb-2 md:-mb-8 text-center font-extrabold tracking-[0.25em]">
            <GlowingSpan color="blue">BRIDGE</GlowingSpan>
          </h1>
          <p className='text-[#c6e2de] font-Sarmandy text-base md:text-2xl'>Innovative Bridge Design Competition</p>
        </div>
        <div className="flex flex-col  mt-14 lg:mt-0 gap-4 md:gap-8 md:ml-3">
          <h1 className="font-Sarmandy text-lg md:text-2xl -mb-2 md:-mb-8 text-center font-extrabold tracking-[0.25em]">
            <GlowingSpan color="blue" className='text-base md:text-lg'>TENDER</GlowingSpan>
          </h1>
          <p className='text-[#c6e2de] font-Sarmandy text-xs md:text-base'>Civil Engineering Competition</p>
        </div>
      </div>
    </div>
  </section>
);

export default CompetitionSection;
