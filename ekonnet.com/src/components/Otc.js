import React from 'react'
import './Otc.css';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet} from 'react-helmet';
const Otc = () => {
  return (
    <>
    <Helmet>
        <title>Ekonnet | OTC </title>
      </Helmet>
      <section id='otc_hero' className='otc_hero'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h1>Ekonnet OTC trading</h1>
                    <p>Over-the-counter (OTC) trading lets you buy and sell crypto without slippage. 
                     <br/>Get deep liquidity, quick executions, and minimal market impact.</p>
                </div>
            </div>
        </div>
      </section>
      <section id='otc_buy' className='otc_buy'>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-4'></div>
         <div className='col-lg-4'>
         <div className='otc_button d-flex '>
            <Nav.Link as={Link} to={""}><button id='Buy_active'>Buy</button></Nav.Link> 
            <Nav.Link as={Link} to={"/otc-sell"}><button>Sell</button></Nav.Link> 
            <Nav.Link as={Link} to={"/two-way"}><button>Two-Way</button></Nav.Link> 
          </div>
          <div className='otc_input d-flex'>
            <div>
            <label>Buy</label>
            <input type="text" placeholder=''></input>
            </div>
            <div>
            <label>Crypto</label>
            <button className='btn btn-primary dropdown-toggle'>BTC</button>
            </div>
          </div>
          <div className='otc_input d-flex'>
            <div>
            <label>Pay</label>
            <input type="text" placeholder=''></input>
            </div>
            <div>
            <label>Currency</label>
            <button className='btn btn-primary dropdown-toggle'>USD</button>
            </div>
          </div>
          <div className='otc_quato'>
            <button className='btn btn-primary '>Get a quato</button>
          </div>
            
         </div>
         
         <div className='col-lg-4'></div>
        </div>
      </div>
    </section> 
    </>
  )
}



export default Otc
