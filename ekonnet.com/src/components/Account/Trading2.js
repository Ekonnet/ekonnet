import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import trade5 from '../assets/trading5.png'
import trade6 from '../assets/trading6.png'
import trade7 from '../assets/trading7.png'
import trade8 from '../assets/trading8.png'
import trade9 from '../assets/trading9.png'
import trade10 from '../assets/trading10.png'


const Trading2 = () => {
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
                    <Nav.Link as={Link} to={"/how-to-trade-on-ekonnet"}><button id='button_active'>How to trade on Ekonnet</button></Nav.Link>
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
                    <h2>How to trade on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>Exchange trading, also known as spot trading, is the process of using the funds on your account to buy or sell for other funds. 
                    <br/><br/>
                    <h3>How to make an exchange trade</h3><br/>
                    1. Firstly, log in to your Ekonnet account.                    
                    <br/><br/>
                    2. Make sure you have enough funds in your Exchange wallet.
                    <br/>
                    Note: The minimum order size differs for each trading pair. You can view more information in our article What is the minimum order size on Ekonnet.                   
                    <br/><br/>
                    3. On the main trading page that you are directed to after logging in, find the Tickers box.
                    <br/><br/>
                    Here, you will be able to search the trading pairs to find the one that you wish to trade with.
                    <br/><br/>
                    <img src={trade5} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    4. In our example, we will look to sell Tether USDt tokens and buy some Bitcoin.<br/>
                    Therefore, let’s look for the BTC/USDt pair. You can enter BTC into the tickers box and also use the drop-down menu on the left to search for the quote currency that is USDt.
                    <br/><br/>
                    <img src={trade6} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    5. Now, on the same trading page, find the <b>Order Form </b>widget.<br/>
                    This is where you will be entering the details of the trade you wish to make.
                    <br/><br/>
                    6. Since this is an exchange trade, be sure to select <b>Exchange</b> on the top left-hand corner of the order form.
                    <br/><br/>
                    <img src={trade7} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    7. If you select Limit order as your order type, you will need to enter the order size and the price. You can also choose from a variety of other order types from the drop-down menu and learn more about order types here.
                    <br/><br/>
                    Using the BTC/USDt example, this would mean specifying how much BTC you would like to buy for what price in USDt.
                    <br/><br/>
                    Alternatively, if you choose a Market order, your order will be executed at a current market price, and therefore there is no need to fill in a price.
                    <br/><br/>
                    <img src={trade8} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    8. Great! Now your order will appear in your Orders widget, showing information about your trade before it executes. You can also cancel and edit the trade or trades as you wish. For more information, please view Order Bulk Editing & Selection Options.
                    <br/><br/>
                    <img src={trade9} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    9. Once your trade has been executed, the funds will be credited to your Exchange wallet.
                    <br/><br/>
                    10. The executed order will then move to the Order History widget.
                    <br/><br/>
                    <img src={trade10} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    11. You can also track your orders on your Reports page, under either Orders or directly under Ledgers.
                    <br/><br/>
                    <h3>What are trading fees at Ekonnet</h3>
                    <br/>
                    You will be charged maker or taker fees, respectively, depending on the type of order that you made and whether it added or took liquidity from the Ekonnet order books.
                    <br/><br/>
                    For more information, please view the Fees page or our guideline What fees does Ekonnet charge.
                    <br/><br/>
                    If you have any inquiries, please don’t hesitate to reach out to Ekonnet Support.
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

export default Trading2
