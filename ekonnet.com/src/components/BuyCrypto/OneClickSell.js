import React from 'react';
import './OneClickBuy.css';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const OneClickSell = () => {
  return (
    <>
    <section id='one_click' className='one_click'>
      <div className='container'>
        <div className='row'>
         <div className='col-lg-12'>
          <div className='one_click_button d-flex'>
            <button id="one_click_active">One-Click Buy</button>
            <Nav.Link as={Link} to={"/P2p-trading-fees"}><button>P2P</button></Nav.Link> 
            <Nav.Link as={Link} to={"/fiat-deposite"}><button>Fiat-Deposite</button></Nav.Link> 
          </div>
         </div>
        </div>
      </div>
    </section>
    <section id='one_click_buy' className='one_click_buy'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className=' d-flex text-center'>
              <div className='col-lg-6'>
              <Nav.Link as={Link} to={"/one-click-buy"}><h1>Buy</h1></Nav.Link>
              </div>
              <div className='col-lg-6'>
              <h1 id='one_click_sell_border'>Sell</h1>
              </div>
              </div>
              <div className='d-flex'>
              <div>
              <label>Spend</label>
              <input type="text" placeholder='15.00 - 12500.00' className='text'></input> 
              </div>
              <div>
              <button className='dropdown-toggle'>EUR</button>
              </div>
              </div>
              <div className='d-flex'>
              <div>
              <label>Receive</label>
              <input type="text" placeholder='0.000186' className='text'></input> 
              </div>
              <div>
              <button className='dropdown-toggle'>BTC</button>
              </div>
              </div>    
            </div>
            <div className='one_click_sell_login'>
              <button>Sign In</button>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default OneClickSell
