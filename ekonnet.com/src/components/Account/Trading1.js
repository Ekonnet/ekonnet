import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import trade1 from '../assets/trading1.png'
import trade2 from '../assets/trading2.png'
import trade3 from '../assets/trading3.png'
import trade4 from '../assets/trading4.png'

const Trading1 = () => {
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
                    <Nav.Link as={Link} to={"/currency-conversion-tool-on-ekonnet"}><button id='button_active'>Currency Conversion Tool on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-trade-on-ekonnet"}><button>How to trade on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/paper-trading-at-ekonnet-test-learn-and-simulate-trading-strategies"}><button>Paper Trading at Ekonnet — test, learn and simulate trading strategies</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-order-types-and-order-options"}><button>Ekonnet Order Types and Order Options</button></Nav.Link>
                    <Nav.Link as={Link} to={"/understanding-ekonnet-over-the-counter-(otc)"}><button>Understanding Ekonnet Over the Counter (OTC)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-check-you-are-paying-the-right-trading-fees-on-ekonnet"}><button>How to check you are paying the right trading fees on Ekonnet</button></Nav.Link>
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
                    <h2>Currency Conversion Tool on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>The Currency Conversion tool can be found on the Wallets page and is used to convert currencies to different transport protocols supported on the Ekonnet platform. Currency conversion is instant and free of charge.
                  <br/><br/>
                    <h3>How to use the Currency Conversion tool</h3><br/>
                    1. Find the Currency Conversion tool on Wallets page.
                    <br/><br/>
                    2. In the <b>From</b> drop-down menu, find the currency that you want to convert.<br/>
                    In this example, we will select Bitcoin.                    
                    <br/><br/>
                    <img src={trade1} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    3. In the <b>To</b> drop-down menu, find the currency type you want to convert your current currency into.<br/>
                    In this example, we will search for Bitcoin Lightning Network.
                    <br/><br/>
                    <img src={trade2} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    4. Select the <b>From Wallet</b> where the currency you would like to convert is currently being held.
                    <br/><br/>
                    5. Select the <b>To Wallet</b> where you want your converted currency to be credited.<br/>
                    Note: You can also select the same wallet.
                    <br/><br/>
                    <img src={trade3} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    6. Then enter the amount that you want to have converted.<br/>
                    Note: An error message will appear if you attempt to convert an amount more than which you have in your wallet.
                    <br/><br/>
                    7. Finally, click on <b>Convert</b> to finish the conversion.
                    <br/><br/>
                    8. And that’s it! The converted currency will now appear in your <b>Balances.</b>
                    <br/>
                    You can also find the conversion history in your Reports page under <b>Ledgers.</b>
                    <br/><br/>
                    <img src={trade4} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    If you have any questions, please feel free to contact Ekonnet Support.
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

export default Trading1
