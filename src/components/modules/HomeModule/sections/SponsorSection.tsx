import React from 'react';
import Image from 'next/image'; // Import Image from 'next/image'
import { GlowingSpan } from '@elements';
import { WavySection } from '../module-elements/WavySection';

export const SponsorSection: React.FC = () => {
  const ImageSponsor = [
    '/placelogo.png',
    '/placelogo.png',
    '/placelogo.png',
    '/placelogo.png',
    '/placelogo.png',
    '/placelogo.png'
  ];
  const ImagePartner = [
    '/placelogo.png',
    '/placelogo.png',
    '/placelogo.png',
    '/placelogo.png',
    '/placelogo.png',
    '/placelogo.png'
  ];
  return (
    <section className="bg-[#2c3531] pt-20 h-auto md:h-auto lg:h-auto">
      <WavySection color="#1c6c6e" />
      <div className="flex bg-[#1c6c6e] flex-col gap-5 sm:gap-10 w-full">
        <div className="flex flex-col mb-10 md:flex-row h-auto ">
          <div className="flex flex-col gap-5 pt-14 sm:gap-10 sm:ml-10 w-full">
            <h2 className="font-Sarmandy text-3xl ml-3 sm:text-4xl font-extrabold tracking-[0.5em]">
              <GlowingSpan color="yellow">OUR SPONSOR</GlowingSpan>
            </h2>
            <div className="bg-white h-[40vh] lg:h-[60vh] flex flex-row gap-4 md:gap-8  shadow-lg rounded-lg 
            p-4 mt-6 md:mt-10 w-[90%] ml-5 md:ml-0">
              <div className="flex flex-wrap">
                {ImageSponsor.map((item, index) => (

                  <div className="w-[50%]" key={index}>
                    <Image
                      src={item}
                      alt="Sponsor Logo"
                      width={200}
                      height={150}
                    />
                  </div>
                ))}

              </div>

            </div>
          </div>
          <div className="flex flex-col pt-14 sm:ml-10 w-full">
            <h2 className="font-Sarmandy text-3xl ml-3 sm:text-4xl font-extrabold tracking-[0.5em]">
              <GlowingSpan color="yellow">OUR MEDIA PARTNER</GlowingSpan>
            </h2>
            <div className="bg-white h-[40vh] lg:h-[60vh]
            flex flex-row gap-4 md:gap-8  shadow-lg rounded-lg p-4 mt-6 md:mt-10 w-[90%]
            ml-5 md:ml-0">
              <div className="flex flex-wrap">
                {ImagePartner.map((item, index) => (

                  <div className="w-[50%]" key={index}>
                    <Image
                      src={item}
                      alt="Sponsor Logo"
                      width={200}
                      height={150}
                    />
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
