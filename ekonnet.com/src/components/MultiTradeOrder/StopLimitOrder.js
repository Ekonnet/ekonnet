import React from 'react'
import '../PaperTrading/papertrading.css';
import AffiliateImg from '../assets/home-banner-bg.png';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
import h7 from '../assets/order7.png'


const StopLimitOrder = () => {
  return (
    <>
    <Helmet>
        <title>Ekonnet | Multi-Trades Order </title>
      </Helmet>
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
      
    <setion id='market_section' className='market_section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='market'>
                    <Nav.Link as={Link} to={"/market-order"}><button>Market Order</button>             
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/limit-order"}><button>Limit Order</button>
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/stop-order"}> <button>Stop Order</button>                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/stop-limit-order"}><button id='button_active'>Stop limit Order</button>
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/fill-or-kill-order"}><button>Fill or Kill Order</button>    
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/immediate-cancellation-order"}><button>Immediate Cancellation Order</button>  
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/trailing-limit-order"}><button>Trailing Limit Order</button>  
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/active-book-order"}><button>Active Book Order</button>     
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/scaled-pro-order"}><button>Scaled Pro Order</button>
                    </Nav.Link>
                    
                    </div>
                </div>
                <div className='col-lg-8 summary'>
                <h2>What is a Stop-Limit Order on Ekonnet</h2>
                    <h5>Last updated 5 March, 2023</h5>
                    <p>A stop-limit order is a buy or a sell order that combines the features of a stop order with a limit order. When the stop price hits, the stop-limit order transforms into a limit order, which is executed at a predetermined price (or better).</p>
                    <p>A stop-limit order allows you to specify a stop price at which the order is triggered as well as a limit price at which the order may be filled. As long as matching bids or asks are available on the book, the order will only execute between the stop and the limit.</p>
                    <p>Note: If the market price surpasses the limit price, the order may not be entirely filled.</p>
                    <p>The limit order is automatically added to the book when the stop order is triggered. If the market price does not reach the stop price, the order is not triggered and remains unfulfilled. Likewise, if the stop is triggered and the limit order is placed, but the market price does not reach the limit price, the order will be unfilled as well.</p>
                    <p>If the market price moves quickly and gaps above the limit price, there may not be enough matching offers available between your stop and limit price to fulfill the order.</p>
                    <p>Example: If you want to buy when the market price reaches 250 but do not want to pay more than 252, you can use a stop-limit order to specify a limit price of 252 and a stop price of 250 at the same time. The stop order is triggered when the market price reaches 250 and will match the best available asks up to 252. If the market price exceeds 252.01, the order may be partially filled due to the limit price.</p>
                   <img src={h7} alt="main-heading" className='img-fluid mx-auto' />
                   <p>You can find more information about additional Ekonnet Orders here.</p>
                   <p>If you have any questions about the stop-limit orders, feel free to contact Ekonnet Support for further assistance. </p>
                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default StopLimitOrder