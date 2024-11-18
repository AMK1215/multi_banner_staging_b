import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Menubar from './Menubar'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from '../contexts/AuthContext';

const Layout = () => {
  return (
    <AuthContextProvider>
      <div className='layout'>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
        />
        <Header />
        <Outlet />
        <Menubar />
      </div>
    </AuthContextProvider>
  )
}

export default Layout
