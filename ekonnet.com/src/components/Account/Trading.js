import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const Trading = () => {
  return (
    <>
      <section id='web_hero' className='web_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
        <div className='container'>
            <div className='row'>
                 <div className='col-lg-12 text-center'>
                 <h1>Welcome to the Ekonnet Help Center</h1>
                    <form>
                    <input type='search' placeholder='Search' id="search" name="search"></input>
                    </form>
                    </div>
            </div>
        </div>
      </section>
      <section>
        <div className='container'>
        <div className='row'>
         <div className='col-lg-2'>
         </div>
         <div className='col-lg-8 access'>
         <h3>Trading Overview</h3>
         <ul>
         <Nav.Link as={Link} to={"/currency-conversion-tool-on-ekonnet"}><li>Currency Conversion Tool on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/how-to-trade-on-ekonnet"}><li>How to trade on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/paper-trading-at-ekonnet-test-learn-and-simulate-trading-strategies"}><li>Paper Trading at Ekonnet — test, learn and simulate trading strategies</li></Nav.Link>
         <Nav.Link as={Link} to={"/ekonnet-order-types-and-order-options"}><li>Ekonnet Order Types and Order Options</li></Nav.Link>
         <Nav.Link as={Link} to={"/understanding-ekonnet-over-the-counter-(otc)"}><li>Understanding Ekonnet Over the Counter (OTC)</li></Nav.Link>
         <Nav.Link as={Link} to={"/how-to-check-you-are-paying-the-right-trading-fees-on-ekonnet"}><li>How to check you are paying the right trading fees on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/what-is-the-minimum-order-size-on-ekonnet"}><li>What is the minimum order size on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/order-and-funding-books-terms-on-ekonnet"}><li>Order and Funding Books terms on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/the-ekonnet-chart-layout-customisation-and-ekonnet-trade-desk"}><li>The Ekonnet Chart, Layout Customisation & Ekonnet Trade Desk</li></Nav.Link>
         <Nav.Link as={Link} to={"/customisation-on-ekonnet"}><li>Customisation on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/ekonnet-satoshi-mode"}><li>Ekonnet (Satoshi) Mode</li></Nav.Link>
         <Nav.Link as={Link} to={"/ekonnet-interface-loading-issues-frequently-asked-questions"}><li>Ekonnet Interface loading issues — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <Nav.Link as={Link} to={"/price-alert-setting-on-ekonnet"}><li>Price alert setting on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/what-is-a-settlement-on-ekonnet"}><li>What is a settlement on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/why-are-btc-profits-on-ekonnet-account-converted-to-usd-when-the-margin-position-is-closed"}><li>Why are BTC profits on Ekonnet account converted to USD when the margin position is closed</li></Nav.Link>
         <Nav.Link as={Link} to={"/trading-error-message"}><li>Trading Error Message</li></Nav.Link>
         <Nav.Link as={Link} to={"/editing-orders-and-viewing-order-history-in-bulk"}><li>Editing orders and viewing order history in bulk</li></Nav.Link>
         <Nav.Link as={Link} to={"/how-is-precision-calculated-using-significant-digits-on-ekonnet"}><li>How is precision calculated using significant digits on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/orders-execution-on-ekonnet"}><li>Orders execution on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/why-a-stop-order-might-not-be-filled-at-the-stop-price-on-ekonnet"}><li>Why a stop order might not be filled at the stop price on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/chain-split-tokens-and-token-manager-on-ekonnet"}><li>Chain Split Tokens and Token Manager on Ekonnet</li></Nav.Link>
         </ul>
         </div>
         <div className='col-lg-2'>

         </div>
        </div>

        </div>
      </section>
      
    </>
  )
}

export default Trading
