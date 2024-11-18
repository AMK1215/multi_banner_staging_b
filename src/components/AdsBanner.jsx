
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'

const AdsBanner = () => {
    const MySwal = withReactContent(Swal)
    const {data: popup} = useFetch(BASE_URL + "/popup-ads-banner");
    // console.log(popup);
    
    const adsFire=()=>{
        MySwal.fire({
             imageUrl: popup?.img_url,
            imageHeight:150,
             text:"🙏🏻မင်္ဂလာရှိသော နေ့ခင်းလေးပါ👦🏻 သူငယ်ချင်းမိတ်ဆက် 10%💰 🏠အိမ်မှာနေရင်း 🎰 Golden Jack မှာပူးပေါင်းပြီး🤝 အလွယ်တကူ ဝင်ငွေရှာလိုက်ပါ သူငယ်ချင်းမိတ်ဆက်ပေးပြီး ဘယ်မှာမှ မရနှိင်တဲ့ 🏆ဆုလက်ဆောင် 10% များရယူပါနော်  Golden Jack 🙏🙏🙏🤝🙏🙏🙏"
           })
    }
    useEffect(()=>{
      if(popup.img_url){
        adsFire()
      }
    },[popup.img_url]);
  return (
    <div>
      
    </div>
  )
}

export default AdsBanner
