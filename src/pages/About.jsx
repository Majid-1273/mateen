import React from 'react'
import AboutSection from '../components/about/AboutSection'
import ContactCTA from '../components/about/ContactCTA'
import HeroSection from '../components/about/HeroSection'
import LocationsSection from '../components/about/LocationsSection'
import StorySection from '../components/about/StorySection'
import TeamSection from '../components/about/TeamSection'
import ValuesSection from '../components/about/ValuesSection'

const About = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <LocationsSection />
      <ContactCTA />
    </>
  )
}

export default About