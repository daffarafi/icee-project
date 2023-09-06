import React from 'react'
import { GlowingSpan } from '@elements'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'
import { BsPencilFill } from 'react-icons/bs'

export const VisionSection: React.FC = () => (
  <section className="px-5 sm:px-10 pt-16 bg-[#1c6c6e] sm:pt-10 w-full h-[130vh] md:h-[80vh]">
    <div className="flex flex-col sm:flex-row h-[90vh] sm:mt-6 justify-center m-4">
      <div className="flex flex-col gap-5 pt-32 md:pt-4 sm:gap-10 sm:ml-10 w-full">
        <h2 className="font-Sarmandy  text-3xl sm:text-4xl font-extrabold tracking-[0.5em]">
          <GlowingSpan color="yellow">VISION AND VALUE</GlowingSpan>
        </h2>
        <div className="flex justify-center mt-14 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <div className="flex flex-col gap-8 items-center mt-4 sm:w-1/3">
              <p className="text-2xl sm:text-3xl px-4">LEARN</p>
              <HiOutlineLightBulb className="text-7xl" />
              <p>
                LEARN is a cognitive process of acquiring new knowledge, skills,
                or understanding, facilitating personal and professional growth.
              </p>
            </div>

            <div className="flex flex-col gap-8 items-center mt-4 sm:w-1/3">
              <p className="text-2xl sm:text-3xl px-4">INNOVATE</p>
              <AiFillSetting className="text-7xl" />
              <p>
                INNOVATE is to creatively introduce novel ideas, methods, or
                technologies, fostering positive change and advancement within
                an organization or industry.
              </p>
            </div>

            <div className="flex flex-col gap-8 items-center mt-4 sm:w-1/3">
              <p className="text-2xl sm:text-3xl px-4">CONTRIBUTE</p>
              <BsPencilFill className="text-7xl" />
              <p>
                CONTRIBUTE means actively and purposefully provide valuable
                input, resources, or effort toward a particular goal or cause,
                with the intention of enhancing its success or impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
