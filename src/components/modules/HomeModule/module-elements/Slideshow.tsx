'use client'
import React, { ReactNode } from 'react'
import Slider from 'react-slick'

const Slideshow = ({ slides }: { slides: ReactNode[] }) => {
  return (
    <div className=" relative overflow-hidden">
      <Slider
        slidesToShow={4}
        slidesToScroll={1}
        autoplay
        autoplaySpeed={3000}
        responsive={[
          { breakpoint: 640, settings: { slidesToShow: 1 } },
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 1280, settings: { slidesToShow: 3 } },
        ]}
      >
        {slides.map((slide, index) => (
          <div key={index} className="">
            {slide}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Slideshow
