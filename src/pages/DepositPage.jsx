import React, { useContext, useState } from 'react'
import kpay from '../assets/images/kpay.png'
import wavepay from '../assets/images/wavepay.png'
import kbz from '../assets/images/kbz.png'
import { Button, Dropdown, DropdownButton, Spinner } from 'react-bootstrap'
import toast from 'react-hot-toast'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'
import { LanguageContext } from '../contexts/LanguageContext'
import useFormSubmit from '../hooks/useFormSubmit'


const DepositPage = () => {
  const {content} = useContext(LanguageContext);
  const {data: banks} = useFetch(BASE_URL + "/agentPaymentType");
  const [selectedBank, setSelectedBank] = useState(null);
  const copyFn = (value) => {
    navigator.clipboard.writeText(value);
    toast.success('Copied to Clipboard!')
  }

  const [amount, setAmount] = useState(0);
  const [refrence_no, setRefrenceNo] = useState('');

  const { inputSubmit, error, loading } = useFormSubmit();

  const handleDeposit = async (e) => {
    e.preventDefault();
    let url = BASE_URL + "/deposit";
    let inputData = {
      amount, 
      refrence_no,
      agent_payment_type_id: selectedBank?.id
    }
    let method = "POST";
    let redirect = "/transactions?tab=deposit";
    let msg = "Deposit Success!"
    await inputSubmit(url, inputData, method, redirect, msg);
  }


  return (
    <form className='p-3 pb-5 mb-5' onSubmit={handleDeposit}>
      <p className='fw-semibold'>{content?.wallet?.deposit}</p>
      <div className="mb-3">
        <small className="d-block fw-semibold mb-2">{content?.wallet?.choose_bank}
        </small>
        <Dropdown style={{ width: '100%' }} data-bs-theme="">
          <Dropdown.Toggle style={{ width: '100%' }} className='customInput p-2 text-start ' id="dropdown-button-dark-example1" variant="">
            {content?.wallet?.choose_bank}
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ width: '100%' }}>
            {banks && banks.map((item, index) => {
              return <Dropdown.Item key={index} onClick={() => setSelectedBank(item)} className='p-1' >
                <img src={item.image} className='inputImg me-2' />
                <small>{item.payment_type}</small>
              </Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <p className='fw-semibold px-5'>{selectedBank?.type}</p>
      {selectedBank && <div className='d-flex justify-content-between align-items-center selectedBank py-2 px-4 my-3 mx-auto rounded-4 w-max'>
        <div className='text-center mb-2 me-3'>
          <img src={selectedBank.image} className='' width={50} />
        </div>
        <div className='d-flex align-items-center'>
          <div className='me-3'>
            <p className='my-0 py-0 fw-bold'>{selectedBank.account_name}</p>
            <p className='text-dark py-1  mb-0 fw-semibold'>{selectedBank.account_number}</p>
          </div>
          <div>
            <Button onClick={() => copyFn(selectedBank.account_number)} variant="secondary" size="sm">
              Copy
            </Button>
          </div>
        </div>
        
      </div>}
      {error && error.agent_payment_type_id && <span className='text-white'>{error.agent_payment_type_id}</span>}
      <div className="my-3">
        <small className="d-block fw-semibold mb-2">Amount
          <span className="text-danger"> ( Minimum amount 3,000 )</span>
        </small>
        <input type="number" 
        className='customInput p-2 ' 
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        />
        {error && error.amount && <span className='text-white'>{error.amount}</span>}
      </div>
      <div className="mb-3">
        <small className="d-block fw-semibold mb-2">{content?.wallet?.trans_id}
        </small>
        <input type="text" 
        className='customInput p-2 ' 
        onChange={(e) => setRefrenceNo(e.target.value)}
        value={refrence_no}
        />
        {error && error.refrence_no && <span className='text-white'>{error.refrence_no}</span>}
      </div>
      <button type='submit' className="btn bg-white w-full mt-3 text-black rounded-5">
        {loading && <Spinner className='me-2' animation="border" size="sm" />}
        {content?.btn?.submit}
      </button>
    </form>
  )
}

export default DepositPage
