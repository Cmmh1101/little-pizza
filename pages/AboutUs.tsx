import React from 'react'
import SmallHero from '../components/utils/smallHero'
import AboutUsContent from '../components/aboutUs/AboutUsContent'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div>
      <SmallHero />
      <AboutUsContent />
    </div>
  )
}

export default AboutUs