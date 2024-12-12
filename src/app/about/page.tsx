import AboutCard from '@/components/AboutCard'
import AboutHero from '@/components/AboutHero'
import FeaturesSection from '@/components/FeatureSection'
import React from 'react'

const about = () => {
  return (
    <div>
      <AboutHero/>
      <FeaturesSection/>
      <AboutCard/>
    </div>
  )
}

export default about