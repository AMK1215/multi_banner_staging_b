import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'
import launchGame from '../hooks/LaunchGame'
import { IoSearchOutline } from 'react-icons/io5'
import { Spinner } from 'react-bootstrap'


const GamesPage = () => {
  const [searchParams] = useSearchParams();
  let provider_id = searchParams.get('provider');
  let type_id = searchParams.get('type');
  const [name, setName] = useState("");
  const [url, setUrl] = useState(BASE_URL + "/gamelist/" + provider_id + "/" + type_id);
  const { data: games, loading } = useFetch(url);
  const { data } = useFetch(BASE_URL + "/gameTypeProducts/" + type_id);
  let providers = data?.products;
  let provider = providers?.find((item) => item.id == provider_id).provider_name;

  const search = (e) => {
    e.preventDefault();
    setUrl(url + "?name=" + name);
  }

  const [showNoGamesMessage, setShowNoGamesMessage] = useState(false);

  useEffect(() => {
    if (games.length === 0) {
      const timer = setTimeout(() => {
        setShowNoGamesMessage(true);
      }, 3000);

      return () => clearTimeout(timer); // Clear the timer on component unmount or re-render
    } else {
      setShowNoGamesMessage(false); // Reset if games are found
    }
  }, [games]);


  return (
    <div className='p-3'>
      <div className="mb-4 d-flex align-items-center justify-content-between">
        <p className='fw-semibold pt-2'>{provider && provider}</p>
        <form onSubmit={search}>
          <div className="form-group d-flex align-items-center">
            <input type="text"
              className='form-control form-control-sm bg-transparent text-white'
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='Search Games...' />
            <button type='submit' className="btn btn-sm btn-danger">
              <IoSearchOutline />
            </button>
          </div>
        </form>
      </div>
      <div className="row mb-5">
        {/* {
          loading && <p className='text-center text-white'>Loading...</p>
        } */}
        {games && games.map((item, index) => {
          return <div key={index} className='col-4  col-md-3 col-lg-4 px-2 px-md-3 px-lg-2 text-center cursor-pointer mb-2' onClick={launchGame(item.game_code)}>
            <img src={item.image_url} className='gameImg w-100' />
            <small className="gameName fw-semibold ">{item.game_name}</small>
            <p className="gameProvider fw-bold">{provider && provider}</p>
          </div>
        })}
        {
          games.length === 0 && (
          <div className='text-center'>
            <Spinner animation="border" variant="danger" />
            {showNoGamesMessage && <p className="text-white">No Games Found</p>}
          </div>
          )
        }
      </div>
    </div>
  )
}

export default GamesPage
