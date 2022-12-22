import React from 'react';
import './OneClickBuy.css';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const OneClickBuy = () => {
  return (
    <>
    <section id='one_click' className='one_click'>
      <div className='container'>
        <div className='row'>
         <div className='col-lg-12'>
          <div className='one_click_button d-flex'>
            {/* <button id="one_click_active">One-Click Buy</button> */}
            <Nav.Link id="one_click_active" as={Link} to={""}><button>One-Click Buy</button></Nav.Link>
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
              <h1 id='one_click_buy_border'>Buy</h1>
              </div>
              <div className='col-lg-6'>
              <Nav.Link as={Link} to={"/one-click-sell"}><h1>Sell</h1></Nav.Link> 
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
              <div className='payment'>
              <label>Payment Method</label>
              <input list="payment" className="browser dropdown-toggle" placeholder='Select payment method' data-bs-toggle="dropdown"></input>
              <datalist id="payment">
              <option value="P2P"/>
              <option value="Phonepe"/>
              <option value="Local Card"/>
             </datalist>
              </div>
              
            </div>
            <div className='one_click_buy_login'>
            <Nav.Link as={Link} to={"/sign-in"}><button>Sign In</button></Nav.Link> 
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default OneClickBuy
