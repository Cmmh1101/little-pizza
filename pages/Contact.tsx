import React from 'react'
import SmallHero from '../components/utils/smallHero'
import ContactSection from '../components/home/ContactSection'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div className='h-screen flex' style={{ backgroundImage: "url('/../assets/images/smallHero.jpg')", backgroundPosition: "bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}><ContactSection /></div>
  )
}

export default AboutUs