'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { WavySection } from '../module-elements/WavySection'
import { GlowingSpan } from '@elements'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'

export const EventSection: React.FC = () => {
  const sliderImages = [
    'placeholder.svg',
    'place2.svg',
    'place3.svg',
    'placeholder.svg',
    'place2.svg',
    'place3.svg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) =>
          prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
        )
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [isHovered])

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    )
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section className="bg-[#1c6c6e] h-[90vh] lg:h-[120vh]">
      <WavySection color="#2c3531" />
      <div className="flex bg-[#2c3531] flex-col gap-5 sm:gap-10 w-full"></div>
      <div className="px-5 sm:px-10 pt-16 bg-[#2c3531] sm:pt-20 w-full h-[120vh]">
        <div className="flex flex-col gap-5 pt-32 md:pt-4 sm:gap-10 sm:ml-10 w-full">
          <h2 className="font-Sarmandy text-3xl ml-4 mb-10 sm:text-4xl font-extrabold tracking-[0.5em]">
            <GlowingSpan color="yellow">OUR PAST EVENTS</GlowingSpan>
          </h2>
          <div className=" flex ml-4 justify-start">
            <div className=" mt-14 ml-4 md:ml-0 flex justify-center w-[90%] h-60 relative overflow-hidden">
              {sliderImages.map((imageName, index) => (
                <Image
                  key={index}
                  src={imageName}
                  alt=""
                  width={400}
                  height={300}
                  className={`absolute transition-transformX duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                  }}
                />
              ))}
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white"
                onClick={goToPrevSlide}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AiFillLeftCircle size={40} />
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white"
                onClick={goToNextSlide}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AiFillRightCircle size={40} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
