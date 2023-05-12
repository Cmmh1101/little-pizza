import React from 'react'

type Props = {}

const Footer = (props: Props) => {

  const year = new Date()

  return (
    <section className="w-full py-3 flex flex-col items-center justify-center bg-black text-gray-200">
      <small>© Little Italy Pizza East Memphis {year.getFullYear()} | Website by <a href="https://carlamontano.tech">Carla Montano Co.</a></small>
    </section>
  )
}

export default Footer