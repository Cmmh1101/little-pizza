import React from 'react'

type Props = {}

const Footer = (props: Props) => {

  const year = new Date()

  return (
    <section className="w-full py-3 flex flex-col items-center text-center justify-center bg-black text-gray-200">
      <small>© Little Italy Pizza East Memphis {year.getFullYear()} | Website by <a href="https://inmotionwebsolutions.com">In Motion Web Solutions LLC</a></small>
    </section>
  )
}

export default Footer