import React from 'react'
import funding from '../components/assets/u2.png';
import { Helmet } from 'react-helmet';
const UserFundingHome = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | User Funding </title>
      </Helmet>
       <img src={funding} alt='' className='img-fluid' style={{width: "100%"}}/>

    </>
  )
}

export default UserFundingHome