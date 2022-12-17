import React from 'react';
import './OneClickBuy.css';
import f1 from '../assets/CoinExchange.png';

const OneClickBuy = () => {
  return (
    <>
    <section id='one_click' className='one_click'>
      <div className='container'>
        <div className='row'>
         <div className='col-lg-12'>
          <div className='one_click_box'>
            <ul>
              <li>One-Click Buy</li>
              <li>P2P</li>
              <li>Fiat Deposit</li>
            </ul>
          </div>
         </div>
        </div>
      </div>
    </section>
    <section id='buy_sell' className='buy_Sell'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 buy_sell_box'>
            <div className=' d-flex text-center'>
              <div className='col-lg-6'>
              <h1>Buy</h1>
              </div>
              <div className='col-lg-6'>
               <h1>Sell</h1>
              </div>
              </div>
              <div className='spend d-flex'> 
              <div><h1>spend</h1>   
              <p>100 - 200000</p>
              </div>
              <div className=''>
                <button className='spend_btn'>ARS</button>
              </div>
            </div>
            <div className='receive d-flex'>    
            <div><h1>Receive</h1>   
              <p>0.0000</p>
              </div>
              <div className=''>
                <button className='receive_btn'>USDT</button>
              </div>
            </div>
            <div className='payment_text'>
            <h3>Payment method</h3>
            </div>
            
            <div className='payment_method'> 
            <ul className='d-flex'>
              <li>P2P</li>
              <li>PhonePe</li>
              </ul>   
            </div>
            <div>
                <button className='one_click_login'>Log In</button>
            </div>

            </div>
            <div className='col-lg-6 peer_to_peer'>
            <h2>Peer-to-peer (P2P) trading</h2>
            <p>Decentralized exchange markets that allow users to buy and sell cryptocurrencies directly with one another</p>
            <img src={f1} alt='' className='img-fluid'></img>
            </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default OneClickBuy
