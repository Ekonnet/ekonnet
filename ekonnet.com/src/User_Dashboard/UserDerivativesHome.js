import React from 'react'
import trade from '../components/assets/u1.png';
import { Helmet } from 'react-helmet';

const UserDerivativesHome = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | User Derivatives</title>
      </Helmet>
   <img src={trade} alt='' className='image-fluid' style={{width: "100%"}} />
    </>
  )
}

export default UserDerivativesHome
