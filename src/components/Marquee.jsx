import React from 'react'
import { AiOutlineSound } from 'react-icons/ai'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'

const Marquee = () => {
  const { data: bannerText } = useFetch(BASE_URL + "/bannerText");

  return (
    <div className='my-2 py-1 px-2 rounded-4 bg-secondary d-flex align-items-center gap-2'>
      <AiOutlineSound size={20} />
      <marquee className='marqueeText' direction="left">
        {bannerText.text}
      </marquee>
    </div>
  )
}

export default Marquee
