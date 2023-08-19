import React from 'react'
import { Navbar } from '../../elements/Navbar/Navbar'
import { EventSection } from './sections/EventSection'
import { NumberSection } from './sections/NumberSection'
import { CompetitionSection } from './sections/CompetitionSection'
import { SponsorSection } from './sections/SponsorSection'
import { HeroSection } from './sections/HeroSection'
import { VisionSection } from './sections/VisionSection'
import { Footer } from '../../elements/Footer/Footer'
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
        <WavySection color="#1c6c6e" />
        <VisionSection />
        <EventSection />
        <NumberSection />
        <CompetitionSection />
        <SponsorSection />
      </section>
      <Footer />
    </>
  )
}
