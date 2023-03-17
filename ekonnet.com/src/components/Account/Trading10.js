import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import trade48 from '../assets/trading48.png'
import trade49 from '../assets/trading49.png'

const Trading10 = () => {
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
                    <Nav.Link as={Link} to={"/customisation-on-ekonnet"}><button id='button_active'>Customisation on Ekonnet</button></Nav.Link>
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
                    <h2>Customisation on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    A Ekonnet account can be tailored to your specifications. You may customise your interface, modify chart presentations, how your order book is visualised, select themes, and adjust the ticker to your preferences using the available customisation options.
                    <br/><br/>
                    You may obtain the minimum size and other details for all trading pairs through this APIYou can learn more in our article The Ekonnet Chart, Layout Customisation & Ekonnet Trade Desk. 
                    <br/><br/>
                    <h3>How to customise the Ekonnet interface</h3><br/>
                    1. Firstly, log in to your Ekonnet account.  
                    <br/><br/>
                    2. Then, navigate to the Manage Account / Interface. In the Interface section, you can modify the following:
                    <ul>
                      <li>Charts;</li>
                      <li>Layout;</li>
                      <li>Order Book;</li>
                      <li>Theme;</li>
                      <li>Tickers.</li>
                    </ul>
                    <img src={trade48} alt="main-heading" className='img-fluid mx-auto' /><br/> 
                    3. Finally, after making changes to any of the adjustable customisations, you must click on Save Changes at the bottom of the screen. Alternatively, you can Revert to Default.
                    <br/><br/>
                    <h3>What can be customised on Ekonnet charts</h3><br/>
                    The Ekonnet Charts configuration options allow you to choose whether to display or hide your orders, positions, or price alerts on the trading chart. By default, you will be able to view all of these on the chart.
                    <br/><br/>
                    <img src={trade49} alt="main-heading" className='img-fluid mx-auto' /><br/> 
                    <h3>What can be customised on Ekonnet layout</h3><br/>
                    On the layout customisation, you can choose the location of the trading sidebar to be on the right or left of your trading page interface. 
                    <br/><br/>
                    In addition to this section, you can choose Bitcoin view mode from Satoshi Mode (SAT), Bit Mode (BIT) or Bitcoin (default). 
                    <br/><br/>
                    The Ekonnet Satoshi Mode allows you to view Bitcoin in Satoshi units. When chosen, all trading pairs with BTC will be displayed in SAT units (1 SAT = 0.00000001 BTC). You can learn more in the article Bitcoin (Satoshi) Mode.
                    <br/><br/>
                    The BIT Mode, in turn, allows you to view all trading pairs with BTC in BIT units, where one BIT is worth 0.000001 BTC.
                    <br/><br/>
                    Note: The default mode is Bitcoin, which represents the entire unit. 
                    <br/><br/>
                    <h3>What can be customised on the Ekonnet order book</h3><br/>
                    Customisation of the Ekonnet order book enables you to choose your order book depth visualisation, choose the order of the columns in the order book, and the order book amount and total format numbers. 
                    <br/><br/>
                    <h3>What are the available themes on Ekonnet </h3><br/>
                    You can choose your interface colour theme and preference. Under the colour theme, you can choose between the default, classic, high contrast, and colour blind options for accessibility. 
                    <br/><br/>
                    The colour preference enables you to choose your candle colour. 
                    <br/><br/>
                    In addition, at the bottom of the page, you can create your custom theme by adjusting the Saturation, Contrast, and Brightness settings using the customisation tool.
                    <br/><br/>
                    Note: Before executing the changes, you can view a demonstration on the theme page by clicking on the option buttons of your choice.
                    <br/><br/>
                    <h3>What can be customised on the Ekonnet ticker</h3><br/>
                    On this customisation option, you can choose your trading volume units to either show volume in terms of the first currency in the pair, which is your default setting, or show the volume in US Dollar, Bitcoin, or Ethereum. 
                    <br/><br/>
                    In addition, you can also choose the order of the currencies are displayed. The currency sort order is adjusted regularly to place the most traded currencies first by default. However, if you prefer to keep the list in the order you want, you can drag and drop the currencies below in any order.
                    <br/><br/>
                    Note: If a new currency is added to the platform, it will be added at the end of the list by default.
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

export default Trading10