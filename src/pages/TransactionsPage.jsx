import React, { useContext, useEffect, useState } from 'react'
import { Badge, Button, Table } from 'react-bootstrap'
import { LanguageContext } from '../contexts/LanguageContext';
import BASE_URL from '../hooks/baseUrl';
import useFetch from '../hooks/useFetch';
import { useNavigate, useSearchParams } from 'react-router-dom';

const TransactionsPage = () => {
  const navigate = useNavigate();
  const tab = useSearchParams()[0].get('tab');
  const { content } = useContext(LanguageContext);
  const [url, setUrl] = useState(BASE_URL + "/depositlog");
  const { data: logs, loading } = useFetch(url);

  useEffect(() => {
    navigate('/transactions?tab=deposit')
  }, [])

  useEffect(() => {
    if (tab == "deposit") {
      setUrl(BASE_URL + "/depositlog");
    } else if (tab == "withdraw") {
      setUrl(BASE_URL + "/withdrawlog");
    }
  }, [tab]);

  return (
    <div className='p-3'>
      <p className="d-block fw-semibold">{content?.wallet?.trans_history}</p>
      <div className="d-flex align-items-center gap-2 cursor-pointer">
        <p onClick={() => navigate('/transactions?tab=deposit')} className={`${tab == "deposit" ? 'tableActive' : ''} fw-semibold px-3`} >{content?.wallet?.deposit}</p>
        <p onClick={() => navigate('/transactions?tab=withdraw')} className={`${tab == "withdraw" ? 'tableActive' : ''} fw-semibold px-3`} >{content?.wallet?.withdraw}</p>
      </div>

      <div className="table-responsive">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>{content?.log?.account}</th>
              <th>{content?.log?.name}</th>
              <th>{content?.log?.bank}</th>
              <th>{content?.log?.amount}</th>
              <th>{content?.log?.status}</th>
              <th>{content?.log?.date}</th>
            </tr>
          </thead>
          <tbody>
            {logs.length <= 0 ? (
              <tr>
                <td className='text-center fw-semibold' colSpan={7}>No Data Found</td>
              </tr>
            ) : (
              logs.map((log, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{log.account_number}</td>
                  <td>{log.account_name}</td>
                  <td>{log.payment_type}</td>
                  <td>{log.amount}</td>
                  <td>
                    <span>
                      <Badge bg={log.status == "Success" ? "success" : log.status == "Pending" ? "warning" : "danger"}>{log.status}</Badge>
                    </span>
                  </td>
                  <td>{log.datetime}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default TransactionsPage
