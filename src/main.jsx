import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routers'
import { LanguageContextProvider } from './contexts/LanguageContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <RouterProvider router={routers} />
    </LanguageContextProvider>
  </React.StrictMode>,
)
