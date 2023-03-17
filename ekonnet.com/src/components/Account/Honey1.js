import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import honey from '../assets/honey1.png'
import honey1 from '../assets/honey2.png'


const Honey1 = () => {
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
                    <div className='honey'>  
                    <Nav.Link as={Link} to={"/Ekonnet-Honey-Algorithmic-Orders"}><button id='button_active'>Ekonnet Honey Algorithmic Orders</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Ekonet-Honey"}><button>Ekonnet Honey</button></Nav.Link>
                    
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Ekonnet Honey Algorithmic Orders</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    <h3>What are trading fees on Ekonnet</h3><br/>
                    The sophisticated algorithms found on Ekonnet Honey enable users to automate trading and execute hundreds of orders. 
                    <br/><br/>
                    You can also use the strategy libraries to write, backtest, and execute your ideas on live markets and historical data. The library, which comes with 45+ indicators, is available for Python and JavaScript.<br/><br/>
                    <h3>Algorithmic Orders</h3><br/>
                    While Ekonnet Honey enables users to customise their experiences, it also comes with several built-in algorithmic orders, with more to come.  
                    <br/><br/>
                    <img src={honey} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <h3>TWAP</h3><br/>
                    TWAP (Time-Weighted-Average-Price) spreads an order out through time to fill at the TWAP, calculated between the time the order is submitted to the final atomic order close.
                    <br/><br/>
                    The price can be specified as a fixed external target, such as the top bid/ask or last trade price, or as an explicit target that must be matched against the top bid/ask/last trade/etc.
                    <br/><br/>
                    <h3>Iceberg</h3><br/>
                    Iceberg allows you to place a large order on the market while ensuring only a small part of it is ever filled at once. By enabling the Excess As Hidden option, it is possible to offer up the remainder as a hidden order, allowing for minimal market disruption when executing large trades. The most common use of this order type is to minimise market disruption.<br/><br/>
                    <h3>Accumulate/Distribute</h3><br/>
                    Accumulate/Distribute allows users to split a large order into smaller randomised portions, submitted at regular and/or irregular intervals.
                    <br/><br/>
                    By enabling the Await Fill or Catch Up options, the algorithm will either ensure each component fills before submitting subsequent orders or will ignore the slice interval for the next order, thereby ensuring the time-to-fill for the entire order is not adversely affected.<br/><br/>
                    <ul>
                        <li>For the Limit order type: the price must be manually specified as limitPrice;</li>
                        <li>For the Relative order type: the price must be a combination of a price offset;</li>
                        <li>For the Market order type: orders execute using market atomic orders and offer no price control.</li>
                    </ul>
                    <h3>Ping/Pong </h3><br/>
                   Ping/pong submits multiple ping orders; once a ping order fills, an associated pong order is submitted.
                   <br/><br/>   
                    Multiple ping/pong pairs can be created by specifying an order count greater than 1, a suitable min/max ping price, and a pong distance. Multiple ping orders will be created between the specified min/max prices, with the associated pongs offset by the pong distance from the ping price. When operating in Endless mode, new ping orders will be submitted when their associated pongs fill.
                    <br/><br/>
                    <img src={honey1} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <h3>MA Crossover</h3><br/>
                    The MA Crossover is a special algorithmic order type triggered by an indicator condition. Specifically, the moment two configurable moving averages cross each other. Either exponential MA or the normal MA can be used, with individually configurable timeframes and periods for both, to trigger the execution of a MARKET or LIMIT order. 
                    <br/><br/>
                    <h3>Order creates OCO</h3><br/>
                    The Order creates OCO option allows you to place a regular LIMIT/MARKET order and then schedule an OCO order to be created after the initial order has been executed. 
                    <br/><br/>
                    The OCO order places a pair of orders stipulating that if one order is executed fully or partially, the other is automatically cancelled. An OCO order combines a stop order with a limit order. This option allows you to place both take-profit and stop-loss targets for your position (only for limit orders). 
                    <br/><br/>
                    Note: If you manually cancel one of the OCO orders, i.e. the stop or the limit, the Honey Framework automatically cancels the other one as well, thereby stopping the Order creates OCO algo order execution.
                    <br/><br/>
                    If you have any questions, please contact our Ekonnet Support team. We will be happy to help!                                    
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

export default Honey1