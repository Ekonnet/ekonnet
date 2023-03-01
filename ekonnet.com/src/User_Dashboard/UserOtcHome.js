import React from 'react'
import otc from '../components/assets/u2.png';
import { Helmet } from 'react-helmet';
const UserOtcHome = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | User OTC</title>
      </Helmet>
     <img src={otc} alt='' className='image-fluid' style={{width: "100%"}} />
 
    </>
  )
}

export default UserOtcHome
