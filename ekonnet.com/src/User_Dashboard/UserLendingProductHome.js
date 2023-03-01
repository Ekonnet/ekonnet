import React from 'react'
import funding from '../components/assets/u2.png';
import { Helmet } from 'react-helmet';

const UserLendingProductHome = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | Lending Product</title>
      </Helmet>
      <img src={funding} alt='' className='image-fluid mw-100 h-auto' />
    </>
  )
}

export default UserLendingProductHome
