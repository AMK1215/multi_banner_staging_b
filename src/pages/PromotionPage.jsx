import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseUrl';



const MySwal = withReactContent(Swal)
const showPromo=(title,text)=>{
  MySwal.fire({
    title: <p>{title}</p>,
    text:text
   })
}
const PromotionPage = () => {
  const {data} = useFetch(BASE_URL + "/promotion");


  return (
    <div className='px-2 py-4 mb-5'>
      {data && data.map((item,index)=>{
       return <div key={index} className='promoCard rounded-3 mb-4'>
            <img src={item.img_url} className='bannerImg  rounded-3' />
            <div className="d-flex align-items-center justify-content-between px-2">
                <div className="d-flex align-items-center gap-3">
                {/* <img src={money} className='money' /> */}
                {/* <p className='mt-2 fw-semibold animateText'>{item.title}</p> */}
                {/* <img src={money}  className='money' /> */}
                </div>
                {/* <Button onClick={()=>showPromo(item.title,item.text)} variant="outline-danger" className='rounded-5 px-4 py-1'>Details</Button> */}
            </div>
        </div>
      })}
    </div>
  )
}

export default PromotionPage
