import React, { useContext, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../contexts/LanguageContext'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'
import useFormSubmit from '../hooks/useFormSubmit'

const WithDrawPage = () => {
  const { content } = useContext(LanguageContext);
  const { data: banks } = useFetch(BASE_URL + "/agentPaymentType");
  const [amount, setAmount] = useState(0);
  const [payment_type_id, setPaymentTypeId] = useState("");
  const [account_name, setAccountName] = useState("");
  const [account_number, setAccountNumber] = useState("");

  const { inputSubmit, error, loading, errMsg } = useFormSubmit();

  const handleWithdraw = async (e) => {
    e.preventDefault();
    let url = BASE_URL + "/withdraw";
    let inputData = {
      amount, payment_type_id, account_name, account_number
    }
    let method = "POST";
    let redirect = "/transactions?tab=withdraw";
    let msg = "Withdrawal successful";
    await inputSubmit(url, inputData, method, redirect, msg);
  }

  return (
    <div className='p-3 pb-5 mb-5 '>
      <p className='fw-semibold'>{content?.wallet?.withdraw} </p>
      <form onSubmit={handleWithdraw}>
        <div className="mb-3">
          <small className="d-block fw-semibold my-2">{content?.wallet?.choose_bank}</small>
          <select className='form-control form-select'
          onChange={(e) => setPaymentTypeId(e.target.value)}
          value={payment_type_id}
          >
            <option value="">{content?.wallet?.choose_bank}</option>
            {banks && banks.map((bank, index) => (
              <option key={index} value={bank.payment_type_id}>{bank.payment_type}</option>
            ))}
          </select>
          {error && error.payment_type_id && <span>{error.payment_type_id}</span>}
        </div>
        <div className="mb-3">
          <small className="d-block fw-semibold my-2">{content?.wallet?.account_name}</small>
          <input type="text"
            className='customInput p-2 '
            onChange={(e) => setAccountName(e.target.value)}
            value={account_name}
          />
          {error && error.account_name && <span>{error.account_name}</span>}
        </div>
        <div className="mb-3">
          <small className="d-block fw-semibold my-2">{content?.wallet?.account}</small>
          <input type="text"
            className='customInput p-2 '
            onChange={(e) => setAccountNumber(e.target.value)}
            value={account_number}
          />
          {error && error.account_number && <span>{error.account_number}</span>}
        </div>
        <div className="mb-3">
          <small className="d-block fw-semibold my-2">{content?.wallet?.amount}</small>
          <input type="number"
            className='customInput p-2 '
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          {error && error.amount && <span>{error.amount}</span>}
          {errMsg && errMsg && <span>{errMsg}</span>}
        </div>
        <button 
        className="btn bg-white w-full mt-3 text-black rounded-5"
        type='submit'
        >
          {loading && <Spinner size='sm' className='me-2' />}
          {content?.btn?.submit}
        </button>
      </form>



    </div>
  )
}

export default WithDrawPage
