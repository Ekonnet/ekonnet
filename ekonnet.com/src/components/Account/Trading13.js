import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import trade54 from '../assets/trading54.png'
import trade55 from '../assets/trading55.png'
import trade56 from '../assets/trading56.png'
import trade57 from '../assets/trading57.png'
import trade58 from '../assets/trading58.png'

const Trading13 = () => {
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
                    <Nav.Link as={Link} to={"/order-and-funding-books-terms-on-ekonnet"}><button>Order and Funding Books terms on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/the-ekonnet-chart-layout-customisation-and-ekonnet-trade-desk"}><button>The Ekonnet Chart, Layout Customisation & Ekonnet Trade Desk</button></Nav.Link>
                    <Nav.Link as={Link} to={"/customisation-on-ekonnet"}><button>Customisation on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-satoshi-mode"}><button>Ekonnet (Satoshi) Mode</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-interface-loading-issues-frequently-asked-questions"}><button>Ekonnet Interface loading issues — Frequently Asked Questions (FAQ)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/price-alert-setting-on-ekonnet"}><button id='button_active'>Price alert setting on Ekonnet</button></Nav.Link>
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
                    <h2>Price alert setting on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    <h3>What is a price alert on Ekonnet</h3><br/>
                    A price alert informs you of market activity by notifying you when a particular buy or sell price is reached. You can receive a notification in your browser, desktop, and/or mobile device.
                    <br/><br/>
                    Note: You can customise your notifications using the Ekonnet notifications setting. 
                    <br/><br/>
                    <h3>How to set a price alert on Ekonnet</h3><br/>
                    After you log in to your Ekonnet account, there are two ways you can set a price alert on Ekonnet.<br/>
                    While you are on the Trading page, you can either:
                    <br/><br/>
                    1. Navigate to the Order Book of the trading pair and click on the bell next to the displayed price;
                    <br/><br/>
                    <img src={trade54} alt="main-heading" className='img-fluid mx-auto' /><br/> 
                    Note: The bell will appear when you hover over the slide edges of the price row you are interested in.
                    <br/><br/>
                    2. Or you can click on the bell icon at the top right-hand corner of the order book.<br/><br/>
                    <img src={trade55} alt="main-heading" className='img-fluid mx-auto' /><br/> 
                    A Pop-up page will appear where you can:<br/>
                    <ul>
                      <li>choose the audio tone, </li>
                      <li>change the trading pair,</li>
                      <li>enter price alerts.</li>
                    </ul>
                    <img src={trade56} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Note: You can also delete price alerts from previously created alerts from this page.
                    <br/><br/>
                   <h3>How to set a price alert using the Ekonnet Mobile App</h3><br/> 
                   1. Firstly, log in to your Ekonnet Mobile App.
                  <br/><br/>
                  Note: You may find instructions on creating and logging in to the Ekonnet Mobile Application here.
                  <br/><br/>
                  2. Choose the order pair you would like to create the price alert for on the ticker.
                  <br/><br/>
                  3. Then, after selecting whether to sell or buy, click on the bell icon in the top right-hand corner of the screen.
                  <br/><br/>
                  <img src={trade57} alt="main-heading" className='img-fluid mx-auto' /><br/>
                  4. Finally, on the Price Alert page, enter the Price and click on the Place price alert button. After that, you will see your request appear under the Alerts section.
                  <br/><br/>
                  Important: You can choose not to relieve an alert by clicking X next to it.
                  <br/><br/>
                  <img src={trade58} alt="main-heading" className='img-fluid mx-auto' /><br/>
                  You can learn more about how to customise your notifications on your mobile application in our article Setting up the Ekonnet Mobile App notifications. 
                  <br/><br/>
                  If you have any questions, please feel free to reach out to Ekonnet Support. We are happy to help! 
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

export default Trading13