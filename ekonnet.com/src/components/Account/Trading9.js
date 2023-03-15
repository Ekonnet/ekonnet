import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import trade29 from '../assets/trading29.png'
import trade30 from '../assets/trading30.png'
import trade31 from '../assets/trading31.png'
import trade32 from '../assets/trading32.png'
import trade33 from '../assets/trading33.png'
import trade34 from '../assets/trading34.png'
import trade35 from '../assets/trading35.png'
import trade36 from '../assets/trading36.png'
import trade37 from '../assets/trading37.png'
import trade38 from '../assets/trading38.png'
import trade39 from '../assets/trading39.png'
import trade40 from '../assets/trading40.png'
import trade41 from '../assets/trading41.png'
import trade42 from '../assets/trading42.png'
import trade43 from '../assets/trading43.png'
import trade44 from '../assets/trading44.png'
import trade45 from '../assets/trading45.png'
import trade46 from '../assets/trading46.png'
import trade47 from '../assets/trading47.png'

const Trading9 = () => {
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
                    <Nav.Link as={Link} to={"/the-ekonnet-chart-layout-customisation-and-ekonnet-trade-desk"}><button id='button_active'>The Ekonnet Chart, Layout Customisation & Ekonnet Trade Desk</button></Nav.Link>
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
                    <h2>The Bitfinex Chart, Layout Customisation & Bitfinex Trade Desk</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    <ul>
                      <li>Bitfinex Chart</li>
                      <li>Layout Customisation</li>
                      <li>Bitfinex Trade Desk</li>
                      <li>Bitfinex Market Watch widget</li>
                      <li>Depth Chart</li>
                      <li>Price Alerts</li>
                    </ul>
                    <h3>What is Bitfinex Chart</h3><br/>
                    The Bitfinex Chart is supported by Trading View, building it into the Bitfinex trading UI and allowing you to use and customise charts to your own preferences. 
                    <br/><br/>
                    You will see that the toolbar on the left of the chart will include most of the drawing tools that can be used directly on the chart. Below we will go into more details on the functions that are available.
                    <br/><br/>
                    <img src={trade29} alt="main-heading" className='img-fluid mx-auto' /><br/>  
                    1 — Cursor style options;
                    <br/> <br/> 
                    2 — Candle interval selection: e.g. 1h means each red/green candle represents one hour;
                    <br/> <br/> 
                    3 — Update Candle’s performance: e.g. Bars, Hollow Candles or Lines etc.;
                    <br/> <br/> 
                    4 — Quick access chart tools: each one is customisable by selecting its slideout arrow;
                    <br/> <br/> 
                    5 — Opens a large database of additional chart indicators;
                    <br/> <br/> 
                    6 — Individual indicator properties: e.g. “Volume” bars indicator;
                    <br/> <br/> 
                    7 — Open (O), High (H), Low (L), and Close (C) price for the selected candle;
                    <br/> <br/> 
                    8 — Chart window total timeframe;
                    <br/> <br/> 
                    9 — View chart of a particular date and time;
                    <br/> <br/> 
                    10 — Change price axis to a percentage, logarithmic view, and manual/auto-scaling;
                    <br/> <br/> 
                    11 — Current market price*;
                    <br/> <br/> 
                    12 — Show/Hide liquidation feed;
                    <br/> <br/> 
                    13 — Load previously saved charts, indicators, drawings, etc.;
                    <br/> <br/> 
                    14 — Chart properties allowing colour changes, scale parameters, etc.;
                    <br/> <br/> 
                    15 — Expand the chart to fill the screen;
                    <br/> <br/> 
                    16 — Screenshot the current chart window and create a link to save or share the image.
                    <br/> <br/> 
                    17 — Executed orders: view executed buy/sell orders on the chart.
                    <br/> <br/> 
                    *Active positions, orders, and price alerts will also appear in a similar fashion (different colours) as the current market price line.
                    <br/> <br/> 
                    <h3>Layout Customisation on Bitfinex</h3>
                    <br/>
                    Layout Customisation allows you to customise your Bitfinex trading page according to your preferences. Different widgets can be added on and removed, and you can also adjust the size of each widget.
                    <br/><br/>
                    1. Customise your page layout by finding the Customized Layout icon on the top navigation bar.
                    <br/><br/>
                    <img src={trade30} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    2. You will now enter editing mode and be able to adjust the size and position of all the widget cells available. You can also add on any widgets you would like to use by clicking on them and selecting Add.
                    <br/><br/>
                    <img src={trade31} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    3. Any of the widgets can also be deleted by pressing the x on the upper right of each widget.<br/>
                    The widgets can be pulled to adjust the size and restored to the default size again through the Reset size button.
                    <br/><br/>
                    <img src={trade32} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    4. Once all edits have been made, you will need to press Save for the edits to be confirmed and available for your Trading page.
                    <br/><br/>
                    <img src={trade33} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    5. If you would like to reset your entire Trading page back to the default UI, you can select Disable Custom Layout. This will remove all previous customised layouts you had on your page.
                    <br/><br/>
                    <img src={trade34} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Note: Layout customisation supports widescreen sizes.
                    <br/><br/>
                    <h3>What is Bitfinex Trade Desk</h3><br/>
                    The Bitfinex Trade Desk allows you to create custom trading views with the ability to tailor many components, such as charts, orders, and books, to specific trading pairs, making it easier to monitor or place frequent trades.
                    <br/><br/>
                    <h3>How to use Bitfinex Trade Desk</h3><br/>
                    1. The Bitfinex Trade Desk is accessible through the Layout icon in the top navigation bar. Here, you will gain access to an array of customisable widgets and the ability to create various editable templates based on pairs and parameters of your liking.
                    <br/><br/>
                    <img src={trade35} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    2. Proceeding, when you click on Configure new template, you will be able to begin building your custom template.
                    <br/><br/>
                    <img src={trade36} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    3. From here, you can select from a wide range of components such as:     
                    <ul>
                    <li>Balances;</li>
                    <li>Bids & Offers;</li>
                    <li>Bitfinex Pulse;</li>
                    <li>Chart;</li>
                    <li>Depth Chart;</li>
                    <li>Funding Book;</li>
                    <li>Liquidations;</li>
                    <li>Liquidations (Derivatives);</li>
                    <li>Matched;</li>
                    <li>Offer form;</li>
                    <li>Order book;</li>
                    <li>Order form;</li>
                    <li>Order history;</li>
                    <li>Orders;</li>
                    <li>Positions;</li>
                    <li>Summary;</li>
                    <li>Ticker;</li>
                    <li>Ticker list;</li>
                    <li>Trades;</li>
                    <li>Bitfinex Market Watch.</li>
                    </ul>
                    <img src={trade37} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Note: Balances, Bitfinex Pulse, Liquidation, Derivative (Liquidations), Orders, Positions, Order History, Bids & Offers cannot be configured. You can only use the Add, Remove, Move and Resize functions.
                    <br/><br/>
                    <img src={trade38} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    As shown in the image above, all other tickers and trading components can be configured for all available trading pairs.
                    <br/><br/>
                    4. Finally, you can save the template with your desired configuration. If needed, you can use the Edit Template function, to make changes to saved templates.
                    <br/><br/>
                    <img src={trade39} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Note: Multiple types of templates, each with its own configurations, can be saved.
                    <br/><br/>
                    <h3>What is Bitfinex Market Watch widget</h3><br/>
                    Bitfinex Market Watch is a powerful tool which features customisable ticker tiles showing:
                    <ul>
                      <li>Ticker;</li>
                      <li>Price;</li>
                      <li>Volume;</li>
                      <li>24h change in Price;</li>
                      <li>24h Chart.</li>
                    </ul>
                    <img src={trade40} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    You can either customise the Bitfinex Market Watch widget with pairs of your choice or use the following pre-built presets found in Settings:
                    <ul>
                      <li>Top by volume</li>
                      <li>24H best performers</li>
                      <li>24H worst performers</li>
                    </ul>
                    <img src={trade41} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    To customise the ticker tiles you would like to see in the Bitfinex Market Watch widget, select the Choose the tickers to display option and then click the cogwheel on the right to configure.
                    <br/><br/>
                    <img src={trade42} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Then, you can select as many trading pairs as you would like from all the available trading pairs on Bitfinex. The pairs can be easily accessed and edited anytime via the settings.
                    <br/><br/>
                    <img src={trade43} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <h3>What is Depth Chart</h3><br/>
                    The Depth Chart is market depth visualised and labelled so you can see total order quantity, price and slippage at every level of the order book. Use the depth chart to easily:
                    <ul>
                      <li>assess market supply and demand at a glance;</li>
                      <li>calculate potential trade costs on the fly;</li>
                      <li>identify significant support and resistance levels.</li>
                    </ul>
                    <img src={trade44} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    The Depth Chart will be available on your Bitfinex trading page by default, and you can also choose to remove it using “Customise Layout” as described in the previous section above:
                    <ul>
                      <li>X-axis: Price;</li>
                      <li>Y-axis: Total amount of orders;</li>
                      <li>Green lines: Bid orders;</li>
                      <li>Red lines: Ask orders.</li>
                    </ul>
                    You can also use the precision buttons on the top right tab to get book depth at various precision levels:
                    <ul>
                      <li>Set Single Tick: This will display 1 price point on each side.</li>
                      <li>Set Double Ticks: This will display 2 price points on each side.</li>
                      <li>Set Volume Based Ticks: This will indicate significant support and resistance levels dynamically on each side.</li>
                    </ul>
                    Useful Tips:<br/>
                    <ul>
                    <li>Hover the main chart area to see quantity, price and slippage at different points in the order book.</li>
                    <li>Click + / - or scroll the chart area to zoom in and out of the order book and see slippage and significant support and resistance levels at different market depths.</li>
                    <li>Using the Customise Layout option, you can render the depth chart vertically or in your preferred dimensions.</li>
                    </ul>
                    <br/>
                    <h3>What is Price Alerts</h3><br/>
                    Price Alerts provide you with a notification in your browser, desktop, and/or mobile device.
                    <br/><br/>
                    <h3>How to create a Price Alert on Bitfinex</h3><br/>
                    1. First, click on the bell icon at the top of the order book.
                    <br/><br/>
                    <img src={trade45} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    2. Here you will be able to Add or Delete price alerts.
                    <br/><br/>
                    <img src={trade46} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Note: You can also select the audio cue when your Price Alerts are triggered.
                    <br/><br/>
                    Alternatively, you can also quickly set price alerts by clicking directly in the order book:
                    <br/><br/>
                    1. When you hover over a row in the order book on the Trading page, a bell icon will appear at the outer edge of the row. 
                    <br/><br/>
                    2. Click the bell icon to toggle a price alert at that price point.
                    <br/><br/>
                    <img src={trade47} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    If you have any inquiries, feel free to reach out to Bitfinex Support. Our team is happy to help!
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

export default Trading9