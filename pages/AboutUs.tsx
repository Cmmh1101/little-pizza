import React from 'react'
import SmallHero from '../components/utils/smallHero'
import AboutUsContent from '../components/aboutUs/AboutUsContent'
import Head from 'next/head'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <>
      <Head>
        <title>Little Italy East Memphis | About Us</title>
        <meta name="description" content="Contact us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SmallHero />
      <AboutUsContent />
    </>
  )
}

export default AboutUs