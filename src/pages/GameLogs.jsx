import React, { useContext, useEffect, useState } from 'react'
import { Badge, Button, Table } from 'react-bootstrap'
import { LanguageContext } from '../contexts/LanguageContext';
import BASE_URL from '../hooks/baseUrl';
import useFetch from '../hooks/useFetch';
import { useNavigate, useSearchParams } from 'react-router-dom';

const GameLogs = () => {
  const navigate = useNavigate();
  const tab = useSearchParams()[0].get('tab');
  const { content } = useContext(LanguageContext);
  const [url, setUrl] = useState(BASE_URL + "/wager-logs?type=" + tab);
  const { data: logs, loading } = useFetch(url);
  
  useEffect(() => {
    if (tab == "today") {
      setUrl(BASE_URL + "/wager-logs?type=" + tab);
    } else if (tab == "yesterday") {
      setUrl(BASE_URL + "/wager-logs?type=" + tab);
    }else if(tab == "this_week"){
      setUrl(BASE_URL + "/wager-logs?type=" + tab);
    }else if(tab == "last_week"){
      setUrl(BASE_URL + "/wager-logs?type=" + tab);
    }
  }, [tab]);

  return (
    <div className='p-3'>
      <p className="d-block fw-semibold">{content?.log?.game_log}</p>
      <div className="d-flex align-items-center gap-2 cursor-pointer mb-3">
        <small onClick={() => navigate('/game_logs?tab=today')} className={`${tab == "today" ? 'tableActive' : ''} fw-semibold px-3`} >{content?.log?.today}</small>
        <small onClick={() => navigate('/game_logs?tab=yesterday')} className={`${tab == "yesterday" ? 'tableActive' : ''} fw-semibold px-3`} >{content?.log?.yesterday}</small>
        <small onClick={() => navigate('/game_logs?tab=this_week')} className={`${tab == "this_week" ? 'tableActive' : ''} fw-semibold px-3`} >{content?.log?.this_week}</small>
        <small onClick={() => navigate('/game_logs?tab=last_week')} className={`${tab == "last_week" ? 'tableActive' : ''} fw-semibold px-3`} >{content?.log?.last_week}</small>
      </div>

      <div className="table-responsive">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>
                <small>
                {content?.log?.from}
                </small>
              </th>
              <th>
                <small>
                  {content?.log?.to}
                </small>
              </th>
              <th>
                <small>
                  {content?.log?.game_name}
                </small>
              </th>
              <th>
                <small>
                {content?.log?.count}
                </small>
              </th>
              <th>
                <small>
                {content?.log?.bet_amount}
                </small>
              </th>
              <th>
                <small>
                {content?.log?.win_amount}
                </small>
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className='text-center fw-semibold' colSpan={7}>Loading...</td>
              </tr>
            ) : logs.length <= 0 ? (
              <tr>
                <td className='text-center fw-semibold' colSpan={7}>No Data Found</td>
              </tr>
            ) : (
              logs.map((log, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{log.from_date}</td>
                  <td>{log.to_date}</td>
                  <td>{log.product}</td>
                  <td>{log.total_count}</td>
                  <td>
                   {log.total_bet_amount}
                  </td>
                  <td>{log.total_transaction_amount}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default GameLogs
