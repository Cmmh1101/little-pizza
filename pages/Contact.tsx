import React from 'react'
import ContactUsArea from '../components/contact/ContactUsArea'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div className='h-screen flex' style={{ backgroundImage: "url('/../assets/images/italy-view.jpg')", backgroundPosition: "bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}><ContactUsArea /></div>
  )
}

export default AboutUs