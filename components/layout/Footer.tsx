import React from 'react'

type Props = {}

const Footer = (props: Props) => {

  const year = new Date()

  return (
    <div className="w-full py-3 flex flex-col items-center justify-center bg-red-900 text-gray-200">
      <small>© Little Italy Pizza East Memphis {year.getFullYear()} | Website by <a href="https://carlamontano.tech">Carla Montano Co.</a></small>
    </div>
  )
}

export default Footer