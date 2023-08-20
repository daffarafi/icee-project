'use client'
import React, { useState, useEffect, ReactNode } from 'react'

const Slideshow = ({ slides }: { slides: ReactNode[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slideshow relative overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide flex-shrink-0 w-full">
            {slide}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slideshow
