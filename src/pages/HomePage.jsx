import React from 'react'
import Marquee from '../components/Marquee'
import Banners from '../components/Banners'
import GameTab from '../components/GameTab'
import AdsBanner from '../components/AdsBanner'
 
const HomePage = () => {
  return (
    <div className='p-2'>
      <Banners/>
      <Marquee/>
      <GameTab/>
      <AdsBanner/>
     </div>
  )
}

export default HomePage
