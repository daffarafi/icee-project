import React from 'react'
import { NumberSection } from './sections/NumberSection'
import { CompetitionSection } from './sections/CompetitionSection'
import { SponsorSection } from './sections/SponsorSection'
import { HeroSection } from './sections/HeroSection'
import { VisionSection } from './sections/VisionSection'
import { WavySection } from './module-elements/WavySection'

export const HomeModule: React.FC = () => {
  return (
    <>
      <section className="snap-y snap-mandatory">
        <HeroSection />
        <WavySection color="#1c6c6e" />
        <VisionSection />
        {/* <EventSection /> */}
        <NumberSection />
        <CompetitionSection />
        <SponsorSection />
      </section>
    </>
  )
}
