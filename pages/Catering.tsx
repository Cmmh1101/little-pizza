import React from 'react'
import Head from 'next/head'
import Banner from '../components/catering/Banner'
import ReactZoom from '../components/catering/ReactZoom'

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Little Italy East Memphis | Catering</title>
        <meta name="description" content="Contact us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
          <Banner />
          <ReactZoom />
    </>
  )
}

export default AboutUs