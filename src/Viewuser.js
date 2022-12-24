import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Viewuser() {
  const params = useParams();
  const searchParams =useSearchParams()
  useEffect(()=> {
console.log(searchParams)
  },[])
  return (
    <div className='container'>
        <div className='row'>
          <div><h1>Profile<br></br></h1>
         
          <h4>ID : {params.id}</h4></div>
            <div className='col-lg-6'>
                Username :person1
            </div>
            <div className='col-lg-6'>
              Email: person 1
            </div>
            <div className='col-lg-6'>
              Country : person 1
            </div>
            <div className='col-lg-6'>
              State: person 1
            </div>
            <div className='col-lg-6'>
              City : person 1
            </div>
            <div className='col-lg-6'>
              Phone : person 1
            </div>
            <div className='col-lg-6'>
              dob : person 1
            </div>
            <div className='col-lg-6'>
              Gender : person 1
            </div>

        </div>

    </div>
  )
}

export default Viewuser