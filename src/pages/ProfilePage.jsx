import React, { useContext, useState } from 'react'
import '../assets/css/profile.css'
import profile from '../assets/images/user.png'
import deposit from '../assets/images/deposit.png'
import withdraw from '../assets/images/withdraw.png'
import transaction from '../assets/images/transaction.png'
import name from '../assets/images/name.png'

import bank from '../assets/images/bank.png'
import logoutBtn from '../assets/images/logout.png'
import { Link } from 'react-router-dom'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { LanguageContext } from '../contexts/LanguageContext'
import { AuthContext } from '../contexts/AuthContext'
import useLogout from "../hooks/useLogout";
import ChangePasswordModal from '../components/ChangePasswordModal'

const ProfilePage = () => {
  const { content } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);
  const { logout, loading } = useLogout();
  // console.log(user);
  
  const lists = [
    { id: 1, img: deposit, link: '/deposit', name: content?.wallet?.deposit },
    { id: 2, img: withdraw, link: '/with-draw', name: content?.wallet?.withdraw },
    { id: 3, img: transaction, link: '/transactions', name: content?.log?.transfer_log },
  ]

  return (
    <div className='p-3' >
      <div className="profileBg rounded-4 p-2 p-sm-3 ">
        <div className="row">
          <div className="col-3 col-sm-4">
            <img src={profile} className='user' />
          </div>
          <div className="col-9 col-sm-8">
            <small className='d-block my-0 py-1'>{content?.auth?.name} : {user?.user_name}</small>
            <small className='d-block my-0 py-1'>{content?.wallet?.balance} : {user?.balance} {content?.wallet?.kyat}</small>
            {/* <small className='d-block my-0 py-1'>Commission : 0 MMK</small> */}
            <small className='d-block my-0 py-1'>{content?.auth?.phone} : {user?.phone}</small>
          </div>
        </div>
      </div>
      <div className="profileBg my-2 rounded-4 p-2 p-sm-3 d-flex align-items-center justify-content-between">
        {lists.map((item) => {
          return <Link key={item.id} to={item.link} className='text-center'>
            <img src={item.img} className='icon' />
            <small className='d-block'>{item.name}</small>
          </Link>
        })}
      </div>
      <div className="profileBg rounded-4 pt-3 p-2 p-sm-3 mb-5">
        <ChangePasswordModal content={content} />
        <div className="mb-3 cursor-pointer" onClick={logout}>
          {loading ? <Spinner size="sm" /> : <img src={logoutBtn} className='icon me-2' />}
          <small>{content?.profile?.logout}</small>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
