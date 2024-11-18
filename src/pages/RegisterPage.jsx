import React, { useContext, useState } from 'react'
import '../assets/css/auth.css'
import logo from '../assets/images/logo.png'
import { Form, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useRegister from '../hooks/useRegister'
import BASE_URL from '../hooks/baseUrl'
import { LanguageContext } from '../contexts/LanguageContext'

const RegisterPage = () => {
  const { content } = useContext(LanguageContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [refCode, setRefCode] = useState("");

  const {register, error, loading} = useRegister();

  const handleRegister = async(e) => {
    e.preventDefault();
    let url = BASE_URL + '/register';
    let inputData = {
      name,
      phone,
      password,
      password_confirmation,
      referral_code: refCode
    }
    await register(url, inputData);
  }

  return (
    <div className='authBg py-3 px-3'>
      <div className="text-center">
      <img src={logo} className='logo' />
      </div>
      <div className="authForm p-4 mt-4">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{content?.auth?.name}</Form.Label>
          <Form.Control type="text"  
          onChange={(e) => setName(e.target.value)}
          value={name}
          />
          {error && error.name && <p className='text-white'>{error.name}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{content?.auth?.phone}</Form.Label>
          <Form.Control type="text"  
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          />
          {error && error.phone && <p className='text-white'>{error.phone}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{content?.auth?.password}</Form.Label>
          <Form.Control type="password"  
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
          {error && error.password && <p className='text-white'>{error.password}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{content?.auth?.confirm_password}</Form.Label>
          <Form.Control type="password"  
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          value={password_confirmation}
          />
          {error && error.password_confirmation && <p className='text-white'>{error.password_confirmation}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{content?.auth?.ref_code}</Form.Label>
          <Form.Control type="text"  
          onChange={(e) => setRefCode(e.target.value)}
          value={refCode}
          />
          {error && error.referral_code && <p className='text-white'>{error.referral_code}</p>}
        </Form.Group>
        <div className="text-center">
          <button type='submit' className="btnWhite py-2 ">
            {loading && <Spinner size="sm" /> }
            {content?.auth?.register}
          </button>
        </div>
      </Form>
     
      <hr className='my-3'/>
      <div className="text-center ">
      <Link className="btnGold py-2 px-5" to={'/login'}>
        {/* <button> */}
        {content?.auth?.login}
        {/* </button> */}
      </Link>
      </div>
      </div>
    </div>
  )
}

export default RegisterPage
