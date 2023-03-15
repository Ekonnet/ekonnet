import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import trade11 from '../assets/trading11.png'
import trade12 from '../assets/trading12.png'
import trade13 from '../assets/trading13.png'
import trade14 from '../assets/trading14.png'
import trade15 from '../assets/trading15.png'

const Trading3 = () => {
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
                    <Nav.Link as={Link} to={"/paper-trading-at-ekonnet-test-learn-and-simulate-trading-strategies"}><button id='button_active'>Paper Trading at Ekonnet — test, learn and simulate trading strategies</button></Nav.Link>
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
                    <h2>Paper Trading at Ekonnet — test, learn and simulate trading strategies</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    <h3>What is Paper Trading</h3><br/>
                    Paper Trading is a simulated market environment where you can develop your trading strategies. On Ekonnet, newly created sub-accounts can be set to paper trade.                  
                    <br/><br/>
                    Through Paper Trading, you can learn and strategise with:                    
                    <br/><br/>
                    <ul>
                      <li>Exchange, Margin and Derivatives Trading;</li>
                      <li>Margin Funding which lets you offer and reserve test funding;</li>
                      <li>Ekonnet Borrow which allows you to test borrowing funds from other users by using your test cryptocurrency or test fiat assets as collateral as well as exercise the Increase Position feature;</li>
                      <li>Honey Framework to create custom order types;</li>
                      <li>OTC trading desk to experiment with large orders without having to go through the public order books.</li>
                    </ul>
                    Note: On Paper Trading, the following test tokens will be available: TESTBTC,  TESTUSDT, TESTUSD, TESTAAA and TESTBBB.                     <br/><br/>
                    Important: These tokens do not represent any value and can only be traded in this mock environment. 
                    <br/><br/>
                    <h3>How to create a Paper Trading account at Ekonnet</h3><br/>
                    1. Firstly, log in to your Ekonnet account.
                    <br/><br/>
                    2. Then, go to the Sub-Accounts section that can be found in the main navigation bar. Also, you can use this link. 
                    <br/><br/>
                    <img src={trade11} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    3. Here, click on the Paper Trading account.
                    <br/><br/>
                    <img src={trade12} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    4. Then, accept the Paper Trading Terms of Service.
                    <br/><br/>
                    <img src={trade13} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    5. After that, you should enter the sub-account Email, Username, Password and confirm the password again. Then click the Create button.
                    <br/><br/>
                    Important: 
                    <ul>
                      <li>A new email and username should be used when creating a sub-account.</li>
                      <li>Once a sub-account has been created and enabled for paper trading, it cannot be later converted to a regular account.</li>
                    </ul>
                    <br/>
                    <h3>How to create a Paper Trading account for Honey Framework</h3>
                    <br/>
                    Honey Framework enables Ekonnet users to create custom order types or event-driven automated trading strategies in your paper trading sub-accounts. This allows you to test Honey Framework trading strategies in a simulated environment.
                    <br/><br/>
                    <h3>How to create an account</h3>
                    <br/>
                    When logging in, select Paper from the trading mode and add the API keys created in the settings page of your sub-account to complete the setup.
                    <br/><br/>
                    Important: If you are using the Honey Framework application, you will need to create an API key in your Paper Trading sub-accounts
                    <br/><br/>
                    <h3>How to top up a Paper Trading account</h3><br/>
                    1. On your Paper Trading account, navigate to the Trading page, where you will have the balances widget.
                    <br/><br/>
                    <img src={trade14} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    2. Here, select Refill Paper Balances, and this will redirect you to the refill form.
                    <br/><br/>
                    <img src={trade15} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    3. Refill your paper balances and try to develop your own trading strategies.
                    <br/><br/>
                    Note: The total balance per sub-account is refilled only to up to $1,000,000 equivalent at maximum and up to $100,000 equivalent per paper currency.                    
                    <br/><br/>
                    If you have any questions, contact Ekonnet Support. Our team is happy to help!
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

export default Trading3