import React from 'react'

interface Props {
    item: ItemData;
}
interface ItemData {
    name: string;
    image: string;
    url?: string;
}

const MenuItem = ({item}: Props) => {
  return (
      <div className='w-60 flex flex-col items-center my-6'>
          <a href={item.url} target="_blank" rel="nonrreferer" className='px-5 py-2 text-2xl text-white font-semibold rounded-full border border-red-200 bg-red-600 hover:text-white hover:bg-red-500  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2'>{item.name}</a>
      </div>
  )
}

export default MenuItem