import React from 'react'
import { Carousel } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'

const Banners = () => {
  const {data: banners} = useFetch(BASE_URL + "/banner");
  

  return (
    <Carousel>
       {banners && banners.map((item,index)=>{
        return <Carousel.Item key={index}>
         <img src={item.img_url} className='bannerImg rounded-2' />
      </Carousel.Item>
      })}
    </Carousel>
  )
}

export default Banners
