import React, { useContext, useState } from 'react'
import logo from '../assets/images/logo.png'
import noti from '../assets/images/noti.png'
import customer from '../assets/images/customer.png'
import en from '../assets/images/en.png'
import mm from '../assets/images/mm.png'
import { Dropdown } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { LanguageContext } from '../contexts/LanguageContext'
import { AuthContext } from '../contexts/AuthContext'
import { WalletOutlined, UserOutlined } from '@ant-design/icons';

const Header = () => {
  const { updateLanguage, content, lan } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);
  const langs = [
    { img: en, name: 'English', value: 'en' },
    { img: mm, name: 'မြန်မာ', value: 'mm' },
  ]
  const [selectedLang, setSelectedLang] = useState(langs[0]);
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register') return null;

  return (
    <header className='cursor-pointer bg-secondary py-2 px-3 d-flex align-items-center justify-content-between'>
      <Link to={'/'}>
        <img src={logo} className='logo' />
      </Link>
      <div className=' d-flex align-items-center gap-sm-2'>
        <div>
          <Link to={'/profile'} >
          <span>
            <UserOutlined className="me-1" style={{ "fontSize": "15px" }} />
            {user?.name}
          </span>
            <span className='headerBalance fw-semibold d-block'>
              <WalletOutlined className="me-1" style={{ "fontSize": "15px" }} />
              {user?.balance} {content?.wallet?.kyat}
            </span>
          </Link>
        </div>

        {/* <img src={noti} className='noti' /> */}
        {/* <Link to={'https://telegram.org/'}>
          <img src={customer} className='noti' />
        </Link> */}
        <Dropdown className='m-0 p-0'>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <img src={lan == "mm" ? mm : en} width="25px" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {langs.map((item) => {
              return <Dropdown.Item onClick={() => updateLanguage(item.value)} key={item.value}>
                <img className="me-2" src={item.img} width="20px" alt="" />
                {item.name}
              </Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header
