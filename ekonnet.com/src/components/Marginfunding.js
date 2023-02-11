import React from 'react'
import exchange from '../components/assets/exchange.png';
import { Helmet } from 'react-helmet';
const Marginfunding = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | Margin Funding </title>
      </Helmet>
    <img src={exchange} alt='' className='image-fluid mw-100 h-auto' />
    </>
  )
}

export default Marginfunding