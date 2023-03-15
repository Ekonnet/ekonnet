import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import trade27 from '../assets/trading27.png'
import trade28 from '../assets/trading28.png'
const Trading8 = () => {
  return (
    <>
   <section id='paper_hero' className='paper_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
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
      
    <setion id='lost_section' className='lost_section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='trade'>  
                    <Nav.Link as={Link} to={"/currency-conversion-tool-on-ekonnet"}><button>Currency Conversion Tool on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-trade-on-ekonnet"}><button>How to trade on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/paper-trading-at-ekonnet-test-learn-and-simulate-trading-strategies"}><button>Paper Trading at Ekonnet — test, learn and simulate trading strategies</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-order-types-and-order-options"}><button>Ekonnet Order Types and Order Options</button></Nav.Link>
                    <Nav.Link as={Link} to={"/understanding-ekonnet-over-the-counter-(otc)"}><button>Understanding Ekonnet Over the Counter (OTC)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-check-you-are-paying-the-right-trading-fees-on-ekonnet"}><button>How to check you are paying the right trading fees on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-the-minimum-order-size-on-ekonnet"}><button>What is the minimum order size on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/order-and-funding-books-terms-on-ekonnet"}><button id='button_active'>Order and Funding Books terms on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/the-ekonnet-chart-layout-customisation-and-ekonnet-trade-desk"}><button>The Ekonnet Chart, Layout Customisation & Ekonnet Trade Desk</button></Nav.Link>
                    <Nav.Link as={Link} to={"/customisation-on-ekonnet"}><button>Customisation on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-satoshi-mode"}><button>Ekonnet (Satoshi) Mode</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-interface-loading-issues-frequently-asked-questions"}><button>Ekonnet Interface loading issues — Frequently Asked Questions (FAQ)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/price-alert-setting-on-ekonnet"}><button>Price alert setting on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-a-settlement-on-ekonnet"}><button>What is a settlement on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/why-are-btc-profits-on-ekonnet-account-converted-to-usd-when-the-margin-position-is-closed"}><button>Why are BTC profits on Ekonnet account converted to USD when the margin position is closed</button></Nav.Link>
                    <Nav.Link as={Link} to={"/trading-error-message"}><button>Trading Error Message</button></Nav.Link>
                    <Nav.Link as={Link} to={"/editing-orders-and-viewing-order-history-in-bulk"}><button>Editing orders and viewing order history in bulk</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-is-precision-calculated-using-significant-digits-on-ekonnet"}><button>How is precision calculated using significant digits on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/orders-execution-on-ekonnet"}><button>Orders execution on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/why-a-stop-order-might-not-be-filled-at-the-stop-price-on-ekonnet"}><button>Why a stop order might not be filled at the stop price on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/chain-split-tokens-and-token-manager-on-ekonnet"}><button>Chain Split Tokens and Token Manager on Ekonnet</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Order and Funding Books terms on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    An Order Book is a ledger that contains all outstanding orders, with trader instructions to buy or sell cryptocurrencies.  The order book has elements like:<br/>
                    <ul>
                      <li>Count;</li>
                      <li>Amount;</li>
                      <li>Total;</li>
                      <li>Price.</li>
                    </ul>
                    The Funding Book is a ledger located on the Funding page that contains all open funding requests. The elements of the funding book are as follows:
                    <ul>
                      <li>Per (Period);</li>
                      <li>Rate;</li>
                      <li>Frequency.</li>
                    </ul>
                    <h3>What are the Order Book terms on Ekonnet</h3><br/>
                    <img src={trade27} alt="main-heading" className='img-fluid mx-auto' /><br/>  
                    <h3>1 — Bids/Asks</h3>
                    The Bid side of the order book is on the left and is coloured green, while the Ask side is on the right and is coloured red.
                    <br/><br/>
                    <h3>2 — Count</h3>
                    The count represents the total number of orders placed at that point. A count of one (1) indicates that there is just one order at that price point. A count of six (6) indicates that there are six orders at that price point.
                    <br/><br/>
                    <h3>3 — Amount</h3>
                    The amount is the number of digital assets offered or requested at a specific price point.
                    <br/><br/>
                    <h3>4 —Total</h3>
                    The total means the total quantity of digital assets offered or requested at a given pricing point. In other words, this is the total of all amounts in the order book that led to this price level.
                    <br/><br/>
                    <h3>5 — Price</h3>
                    The price is the offer price by a trader or traders at a specific price point.
                    <br/><br/>
                    Important: At the bottom of the order book, when selecting Full Book, you can reveal the entire order book and provide a longer set of information on a new tab. <br/><br/>
                    <h3>What are the Funding Book terms on Ekonnet</h3><br/>
                    <img src={trade28} alt="main-heading" className='img-fluid mx-auto' /><br/>
                   <h3>6 — Per</h3>
                   Per (i.e. Period) is the amount of time the funding is requested (by bidders) or offered for in the funding order book (by funding providers). It might range between 2 and 120 days.
                   <br/><br/>
                   Note: Only that period will be displayed if there is just one offer at a given rate for the same period. If there are many offers at the same rate but at different times, a range will appear (2-120).
                   <br/><br/>
                  <h3>7 — Rate</h3>
                  The interest rate bid by the trader or offered by the funding provider is referred to as the rate.
                  <br/><br/>
                  <h3>On both the order and funding book, you will find</h3><br/>
                  <h3>8 — Precision (- / +)</h3>
                  The precision of offers displayed in the order book can be decreased or increased.<br/>
                  To see orders grouped for a broader perspective of the complete order book, press the (-) key; to see more information in the order book, press the (+) key.
                  <br/><br/>
                  Important: On both order and funding books, when you select Real-Time, you will see immediate results of order book changes as they happen. When you select Throttled 5s, the order book will be updated every 5 seconds.
                  <br/><br/>
                  Note: When selecting Full Book, reveal the entire order book and provide longer information set on a new tab. 
                  <br/><br/>
                  If you have any questions regarding the order or funding book, contact Ekonnet Support. We are happy to assist you.
                   </p>
                    <hr className='mt-5 mb-5'></hr>
                    <h4>Can't you find what you are looking for?</h4>
                    <p className='mt-0'>If you are having any problems or you have any questions, please talk to one of our friendly support representatives.</p>
                    <Nav.Link as={Link} to={"/frequently-asked-question"}><button className='btn btn-primary mb-5'>Contact Support</button></Nav.Link>
                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default Trading8