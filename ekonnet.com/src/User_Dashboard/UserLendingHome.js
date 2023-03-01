import React from 'react'
import lending from '../components/assets/u3.png';
import { Helmet } from 'react-helmet';
const UserLendingHome = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | User Lending Pro </title>
      </Helmet>
           <img src={lending} alt='' className='image-fluid' style={{width: "100%"}} />
  
    </>
  )
}

export default UserLendingHome
