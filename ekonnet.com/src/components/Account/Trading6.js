import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import trade24 from '../assets/trading24.png'
import trade25 from '../assets/trading25.png'

const Trading6 = () => {
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
                    <Nav.Link as={Link} to={"/how-to-check-you-are-paying-the-right-trading-fees-on-ekonnet"}><button id='button_active'>How to check you are paying the right trading fees on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-the-minimum-order-size-on-ekonnet"}><button>What is the minimum order size on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/order-and-funding-books-terms-on-ekonnet"}><button>Order and Funding Books terms on Ekonnet</button></Nav.Link>
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
                    <h2>How to check you are paying the right trading fees on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    Ekonnet has maker and taker fees for traders based on a user’s 30-day volume, which is calculated every 12 hours. Your 30-day volume is a moving sum of all trades executed between the current time and the previous 30 days. The snapshots are taken every 00:00 UTC using daily volume-weighted average price (VWAP). This will determine the fee level you will be categorised under. 
                    <br/><br/>
                    <h3>What is the difference between taker and maker trading fees on Ekonnet</h3><br/>
                    Taker fees are usually higher, while maker fees are lower.
                    <ul>
                      <li>Maker fees are paid when you add liquidity to our order book by placing an order under the ticker price for buy and above the ticker price for sell. </li>
                      <li>Taker fees are paid when you remove liquidity from our order book by placing an order that is executed against an order of the order book.</li>
                    </ul>
                    Note: If you execute a Post-Only Limit Order, you will pay the maker fee rather than the taker fee unless it is matched with a hidden order.
                    <br/><br/>
                    You can find additional information regarding Ekonnet fees in the article What fees does Ekonnet charge.
                    <br/><br/>
                    <h3>How to find the 30-day volume of your Ekonnet account</h3><br/>
                    1. Firstly, log in to your Ekonnet account.
                    <br/><br/>
                    2. Then, navigate to the Reports page, which can be found under Manage Account / Reports.
                    <br/><br/>
                    3. Once on the Reports page, select Account Summary on the left side of the menu. This will provide you with a rundown of your account’s general fee information. 
                    <br/><br/>
                    <img src={trade24} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <h3>What is the Fees Calculator on Ekonnet</h3><br/>
                    The Fees Calculator can be used to estimate your approximate trading fees. On the calculator, you can enter a 30-day volume USD equivalent as well as any UNUS SED LEO holdings you may have or intend to have, which may reduce your fees.
                    <br/><br/>
                    <img src={trade25} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Note: If you want to pay less in trading fees, you may also read our article How to pay less trading fees at Ekonnet.
                    <br/><br/>
                    If you have any questions about the fee you were charged on Ekonnet, please contact us through Ekonnet Support and include the order ID in question so our team can take a closer look. We are happy to assist you. 
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

export default Trading6