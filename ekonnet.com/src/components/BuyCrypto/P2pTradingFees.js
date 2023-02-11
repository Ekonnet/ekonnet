import React from 'react';
import './P2pTradingFees.css';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';

const P2pTradingFees = () => {
  return (
    <>
    <Helmet>
        <title>Ekonnet | P2P Trading Fees</title>
      </Helmet>
    <section id='p_to_p' className='p_to_p'>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-4'></div>
         <div className='col-lg-4'>
          <div className='p_to_p_button d-flex'>
            <Nav.Link as={Link} to={"/one-click-buy"}><button>One-Click Buy</button></Nav.Link> 
            <Nav.Link as={Link} to={""}><button id='p2p_active'>P2P</button></Nav.Link> 
            <Nav.Link as={Link} to={"/fiat-deposite"}><button>Fiat-Deposite</button></Nav.Link> 
          </div>
         </div>
         <div className='col-lg-4'></div>
        </div>
      </div>
    </section>
    <section id='p_to_p_buy' className='p_to_p_buy'>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-4'></div>
          <div className='col-lg-4'>
            <div className=' d-flex text-center'>
              <div className='col-lg-6'>
              <h1 id='one_click_buy_border'>Buy</h1>
              </div>
              <div className='col-lg-6'>
              <Nav.Link as={Link} to={"/p2p-trading-fees-sell"}><h1>Sell</h1></Nav.Link> 
              </div>
            </div>
            <div className=''>
              <label>PRICE EUR</label>
              <input type="text" placeholder='87.35' className='text'></input>
              <div>
              <label>VOLUME BTC</label>
              <input type="text" placeholder='0' className='text'></input>
              </div>
              <div>
              <label>TOTAL EUR</label>
              <input type="text" placeholder='0.00' className='text'></input>
              </div>
              <div className='p_to_p_optional'>
              <input type="text" placeholder='Add preferred seller (Optional)' className='text'></input>
              </div>
            </div>
            <div className='p_to_p_buy_button'>
              <button>Buy</button>
            </div>
            <div>
              <h6>Fee:0.00%</h6>
            </div>
          </div>
          <div className='col-lg-4'></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default P2pTradingFees