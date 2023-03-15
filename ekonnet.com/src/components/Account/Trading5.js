import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import trade19 from '../assets/trading19.png'
import trade20 from '../assets/trading20.png'
import trade21 from '../assets/trading21.png'
import trade22 from '../assets/trading22.png'
import trade23 from '../assets/trading23.png'

const Trading5 = () => {
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
                    <Nav.Link as={Link} to={"/understanding-ekonnet-over-the-counter-(otc)"}><button  id='button_active'>Understanding Ekonnet Over the Counter (OTC)</button></Nav.Link>
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
                    <h2>Understanding Ekonnet Over the Counter (OTC)</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    <h3>What is Over the Counter (OTC)</h3><br/>
                    The Over the Counter (OTC) feature is used to execute larger trades directly with a counterparty without going through the public order books. Traders will be able to access liquidity without affecting the exchange market price.
                    <br/><br/>
                    <h3>How to use the Ekonnet OTC desk</h3><br/>
                    1. To use the Ekonnet OTC desk, you will first need to log in to your Ekonnet account.
                    <br/><br/>
                    2. Then, create an OTC nickname so that other traders can find you. To do this, go to Account / Account Info / OTC Nickname.              
                    <br/><br/>
                    <img src={trade19} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    3. Next, find the OTC option on the top navigation bar or click here.
                    <br/><br/>
                    <img src={trade20} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    4. You will see two options for you to use the Ekonnet OTC desk.
                    <br/><br/>
                    <h3>— Access instant liquidity through Ekonnet's OTC desk</h3><br/>
                    This will require that you contact Ekonnet's OTC trader Bill Brindise at bill@Ekonnet.com and provide the following information:
                    <br/>
                    <ul>
                      <li>What do you expect your average trade size will be?</li>
                    </ul>
                    Important: The minimum OTC user to user trade is 50 USD equivalent while the minimum for liquidity through our OTC desk is 100,000 USD equivalent.
                    <ul>
                      <li>What do you expect your average weekly OTC trading volume will be?</li>
                      <li>What currencies are you interested in trading? Please list in rank order of importance.</li>
                      <li>What are your trading hours?</li>
                      <li>Is your Ekonnet account verified (Intermediate level or higher)? If yes, do you have an Individual or Corporate account?</li>
                      <li>Do you have counterparties for OTC trades, or will you be looking for liquidity through our desk?</li>
                      <li>Where do you bank?</li>
                      <li>Do you intend to withdraw fiat or cryptocurrencies?</li>
                    </ul>
                    <h3>— Trade directly with another Ekonnet user</h3><br/>
                    To trade directly with another Ekonnet user, you need to know their OTC nickname and initiate an OTC trade.
                    <br/><br/>
                    1. To do that, firstly, create an OTC trade and enter the OTC nickname of the counterparty you are initiating a trade with.
                    <br/><br/>
                    <img src={trade21} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    2. Then, select the Trading Pair and the details of your trade, such as Amount and Price.
                    <br/><br/>
                    <img src={trade22} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    3. Click on Request Trade, and you will be prompted to enter your 2FA.
                    <br/><br/>
                    4. The counterparty will be emailed with your request and will need to accept it to complete the trade. Pending trades will appear on your OTC page under Active OTC orders.
                    <br/><br/>
                    Note: You can also select the TIF Date option below to specify a time limit in which you want the order to stay open for. If the counterparty does not respond within the specified time, the trade will be automatically cancelled and will no longer appear in your Active OTC orders.<br/>
                    For more information on Time in Force (TIF), please read our guide What is a Time in Force (TIF) order option on Ekonnet.
                    <br/><br/>
                    Notes:
                    <ul>
                      <li>The price spread cannot be above 10.0% of the current market price, or else an error message will appear, and the trade will be cancelled;</li>
                      <li>The OTC fee is 0.1% for both the buyer and the seller;</li>
                      <li>OTC trades are completed using funds in your exchange wallet;</li>
                      <li>Order size must be at least $50 in equivalent. You will be able to see the total USD value in the summary box below.</li>
                    </ul>
                    
                    <img src={trade23} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    If you have any inquiries, feel free to contact Ekonnet Support. We are happy to help!
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

export default Trading5