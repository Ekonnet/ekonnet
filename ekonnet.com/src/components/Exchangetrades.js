import React from 'react'
import exchange from '../components/assets/exchange.png';
import { Helmet } from 'react-helmet';
const Exchangetrades = () => {
  return (
    <>
    <Helmet>
        <title>Ekonnet | ExchangeTrades </title>
      </Helmet>
      {/* <section id='exchange_trade' className='exchange_trade'>
      <div className='container-fluid'>
      <div className='row'>
      <div className='col-lg-12'> */}
      <img src={exchange} alt='' className='image-fluid mw-100 h-auto' />
      {/* </div>


      </div>
      </div>

      </section> */}

    </>
  )
}

export default Exchangetrades