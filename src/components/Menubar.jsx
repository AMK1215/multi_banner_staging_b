import React, { useContext } from 'react'
import home from '../assets/images/home.png'
import promotion from '../assets/images/promo.png'
import deposit from '../assets/images/deposit.png'
import game_log from '../assets/images/transaction.png'
import profile from '../assets/images/profile.png'
import { Link, useLocation } from 'react-router-dom'
import { LanguageContext } from '../contexts/LanguageContext'


const Menubar = () => {
  const { content } = useContext(LanguageContext);
    const menus=[
        {id:1,img:home,name: content?.nav?.home,link:'/'},
        {id:2,img:promotion,name: content?.nav?.promotion,link:'/promotion'},
        {id:3,img:deposit,name: content?.wallet?.deposit,link:'/deposit'},
        {id:4,img:game_log,name: content?.nav?.game_log,link:'/game_logs?tab=today'},
        {id:5,img:profile,name: content?.nav?.account,link:'/profile'},
     ]
     const location=useLocation();
     if(location.pathname==='/login' ||location.pathname==='/register') return null;
  return (
    <div className='bg-secondary menuBar rounded-top-4 px-2 pt-3'>
      <div className="d-flex align-items-center justify-content-between">
        {menus.map((item)=>{
            return <Link to={item.link} className='text-center' key={item.id}>
                <img src={item.img} className='mx-auto appMenuImg' />
                <p className='appMenuText'>{item.name}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default Menubar
