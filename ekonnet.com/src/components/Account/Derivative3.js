import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import derivative7 from '../assets/derivative7.png'
import derivative8 from '../assets/derivative8.png'

const Derivative3 = () => {
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
                    <div className='derivat'>  
                    <Nav.Link as={Link} to={"/How-to-move-funds-to-the-Derivatives-wallet"}><button>How to move funds to the Derivatives wallet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Derivatives-Trading-on-Ekonnet"}><button >Derivatives Trading on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/The-Ekonnet-Derivatives-trading-interface"}><button id='button_active'>The Ekonnet Derivatives trading interface</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-is-Termination-on-Ekonnet"}><button>What is Termination on Ekonnet</button></Nav.Link>       
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>The Ekonnet Derivatives trading interface</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    <h3>What is Derivatives Trading</h3><br/>
                    A derivative is a financial product whose value is derived from an underlying asset. You can read more about it in the Derivatives Trading on Ekonnet article. 
                    <br/><br/>
                    <h3>Order Form on the Ekonnet derivatives </h3><br/>
                    The order form is where you put together the order you want to place. 
                    <br/><br/>
                    <img src={derivative7} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    The order form includes: 
                    <br/><br/>
                    <b>Order Type —</b> The drop-down list, located on the top left of the order form, allows you to select the sort of order you wish to place;
                    <br/><br/>
                    <b>Price Box —</b> If placing a Limit/Stop order, here, you can specify the price at which you would like the order to execute/trigger;
                    <br/><br/>
                    <b>Amount —</b> Enter the amount you wish to purchase or sell;
                    <br/><br/>
                    <b>Leverage —</b> Using the slider, select the amount of leverage you would like for the position. You may also write the number in the leverage box.
                    <br/><br/>
                    <h3>Ekonnet derivatives positions box </h3><br/>
                    The positions box shows all the open positions. When you place an order on the Derivatives platform, you open a position. As you can only have one position per pair, multiple orders on the same pair will contribute to the same position. The amount will become a sum of the orders, and the base price will be a weighted average.  
                    <br/><br/>
                    You will find on the positions box: <br/><br/>
                    <b>Pair —</b> The derivative pair;
                    <br/><br/>
                    <b>Amount  —</b> The size of your position;
                    <br/><br/>
                    <b>Note:</b> Positive means it is a long, and negative denotes a short.
                    <br/><br/>
                    <b>Base Price —</b> The break-even price;
                    <br/><br/>
                    <b>Liq Price —</b> The marked price at which your liquidation will trigger;
                    <br/><br/>
                    <b>P/L—</b> The profit and loss shown in the base currency;
                    <br/><br/>
                    <b>P/L% —</b> The profit and loss shown as a percentage;
                    <br/><br/>
                    <b>Collateral —</b> The amount of collateral assigned to this position.
                    You can take two actions on the positions box by using the marked buttons displayed in the figure above:
                    <br/><br/>
                    1 — Close the position with a market order
                    <br/><br/>
                    2 — Edit the amount of collateral assigned to the position.
                    <br/><br/>
                    <h3>Summary Box on the Ekonnet derivatives</h3><br/><br/>
                    The summary box varies according to the pairs chosen and contains a wealth of information about each pair. The following are the descriptions:
                    <br/><br/>
                    <img src={derivative8} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <b>Price Derivative —</b> The price at which the derivative is trading;
                    <br/><br/>
                    <b>Price Spot —</b> The price at which the underlying asset is trading;
                    <br/><br/>
                    <b>Mark Price —</b> Average price of the underlying asset based upon the BFX Composite Index (BFXCI), an index of prices obtained from several leading cryptocurrency exchanges in the BTC/USDt and ETH/USDt markets;
                    <br/><br/>
                    <b>Spread —</b>  The difference in price between the derivative mid-price and the spot price as a percentage;
                    <br/><br/>
                    <b>Note:</b> A positive spread indicates that the derivative is trading at a price higher than the market price (at a premium - e.g. 0.25 per cent). A negative spread indicates that the derivative is being traded at a lower price than the market price (at a discount, e.g. -0.25 per cent).
                    <br/><br/>
                    <b>Liquidation Fund Balance —</b> the funds currently available in the liquidation fund;
                    <br/><br/>
                    <b>Funding Rate (current period) —</b> The funding rate to be applied at the end of the current period;
                    <br/><br/>
                    <b>Predicted rate —</b> The predicted funding rate to be applied at the end of the next period;
                    <br/><br/>
                    <b>Next funding event in —</b> Countdown to the next funding event;
                    <br/><br/>
                    <b>Open interest —</b> Total number of contracts held in an active position.
                    <br/><br/>
                    If you have any questions about Derivatives trading, feel free to contact Ekonnet Support for assistance. 
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

export default Derivative3