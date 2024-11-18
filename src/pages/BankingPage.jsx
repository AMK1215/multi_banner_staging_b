import React, { useState } from 'react'
import kpay from '../assets/images/kpay.png'
import wavepay from '../assets/images/wavepay.png'
import kbz from '../assets/images/kbz.png'
import { Dropdown } from 'react-bootstrap'
const BankingPage = () => {
    const banks=[
        {id:1,img:kpay,type:'Kpay'},
        {id:2,img:wavepay,type:'Wave Pay'},
        {id:3,img:kbz,type:'KBZ Bank'},
     ]
     const [selectedBank,setSelectedBank]=useState(null);
  return (
    <div className='p-3 pb-5 mb-5 '>
            <p className='fw-semibold'>Bank Account Information  </p>
            <div className="mb-3">
        <small className="d-block fw-semibold mb-2">Bank Account Type

        </small>
        <Dropdown style={{width:'100%'}} data-bs-theme="">
        <Dropdown.Toggle style={{width:'100%'}} className='customInput p-2 text-start ' id="dropdown-button-dark-example1" variant="">
        Bank Account Type

        </Dropdown.Toggle>

        <Dropdown.Menu style={{width:'100%'}}>
             {banks.map((item)=>{
                return <Dropdown.Item onClick={()=>setSelectedBank(item)} className='p-1' >
                <img src={item.img} className='inputImg me-2' />
                <small>{item.type}</small>
              </Dropdown.Item>
            })}
        </Dropdown.Menu>
      </Dropdown>
       </div>
       <div className="mb-3">
      <small className="d-block fw-semibold mb-2">Bank Account Username
       </small>
      <input type="text" className='customInput p-2 ' />
       </div>
       <div className="mb-3">
      <small className="d-block fw-semibold mb-2">Bank Account Number
       </small>
      <input type="text" className='customInput p-2 ' />
       </div>
       <button className="btn bg-white w-full mt-3 text-black rounded-5">Submit</button>
    </div>
  )
}

export default BankingPage
