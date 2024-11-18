import React from 'react'

const UpdateProfilePage = () => {
  return (
    <div  className='p-3 pb-5 mb-5 '>
    <p className='fw-semibold'>My Profile</p>
     
    <div className="mb-3">
  <small className="d-block fw-semibold my-2">Username
   </small>
  <input type="text" className='customInput p-2 ' value={'User123'} />
   </div> 
   <div className="mb-3">
  <small className="d-block fw-semibold my-2">Phone
   </small>
  <input type="text" className='customInput p-2 ' value={'0912345689'} />
   </div>
  
   <button className="btn bg-white w-full mt-3 text-black rounded-5">Submit</button>


</div>
  )
}

export default UpdateProfilePage
