import React from 'react'
import { Navbar } from './sections/Navbar'
import { HeroSection } from './sections/HeroSection'
import { VisionSection} from './sections/VisionSection'
import { WavySection } from './module-elements/WavySection'
// import {HeroSection, FAQSection} from './sections
// import {} from './module-elements'

export const HomeModule: React.FC = () => {
  // TODO: Write module's logic

  return (
    <>
<Navbar />
      <section className='snap-y snap-mandatory'>
         
          <HeroSection /> 
          <WavySection/>
          <VisionSection/>
      </section>
  </>
  )
}
