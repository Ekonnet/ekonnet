import React from 'react'
import '../PaperTrading/papertrading.css';
import AffiliateImg from '../assets/home-banner-bg.png';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
import h12 from '../assets/order12.png'
import h13 from '../assets/order13.png'
const TrailingOrder = () => {
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
                    <Nav.Link as={Link} to={"/stop-limit-order"}><button>Stop limit Order</button>
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/fill-or-kill-order"}><button>Fill or Kill Order</button>    
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/immediate-cancellation-order"}><button>Immediate Cancellation Order</button>  
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/trailing-limit-order"}><button id='button_active'>Trailing Limit Order</button>  
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/active-book-order"}><button>Active Book Order</button>     
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/scaled-pro-order"}><button>Scaled Pro Order</button>
                    </Nav.Link>
                    
                    </div>
                </div>
                <div className='col-lg-8 summary'>
                <h2>What is a Trailing Stop order on Ekonnet</h2>
                    <h5>Last updated 5 March, 2023</h5>
                    <p>A Trailing Stop order is an order which has a Stop (order trigger) that trails the market price by a set distance (Trailing Distance) when the price moves in the desired direction but remains in place when the price moves in the opposite way.</p>
                    <p>Note: A Trailing Stop is more flexible than a stop order as it executes once the market moves against you by a certain price, known as the price distance.</p>
                    <h3>How to place a Trailing Stop on Ekonnet</h3>
                   <p><bold>1.</bold> Firstly, <span>log in </span>to your Ekonnet account.</p>
                   <p><bold>2.</bold> Proceeding, you should land on the Trading page. Otherwise, you can use this link to get to your Trading page.</p>
                   <p><bold>3.</bold> Then, the relevant trading pair can be selected from the ticker</p>
                   <p><bold>4.</bold> Following that, from the order form's drop-down option, pick Trailing Stop. </p>
                   <img src={h12} alt="main-heading" className='img-fluid mx-auto' />
                   <p><bold>5.</bold> Here, depending on the sort of order you want to execute, you can also select Exchange or Margin from the same order form.</p>
                   <img src={h13} alt="main-heading" className='img-fluid mx-auto' />
                   <p className='mt-0'>Note: The default will be Exchange. </p>
                   <p><bold>6.</bold> Here, depending on the sort of order you want to execute, you can also select Exchange or Margin from the same order form.</p>
                   <p>Note: The stop price trails behind the market price by the price distance indicated, allowing the stop to react to the market if the market swings in a profitable direction. When the stop price is reached, and the order is triggered, it executes like a market order. </p>
                   <h2>How to use a Trailing Stop order</h2>
                  <p>Trailing Stop order can be used on both Exchange and Margin modes of trading. However, it is usually used to protect profits when trading on margin.</p>
                  <p>For instance, if a trader is in a long position and the current market price is 250 following a rapid climb from 225, the trader can set a Trailing Stop with a price distance of 5. This order will result in a sell stop order being placed at 245. In contrast to a regular stop order, if the market price continues to rise to 275, the Trailing stop rises in line, always remaining five behind the market price; in this case, rising to 270.</p>
                  <p>Note: A Trailing Stop order is modified based on the best bid/best ask with the stop order triggered by the ticker (last traded price), updated every 15 seconds. As a result, if the price increases in a favourable direction but reverses before the next ticker is updated (i.e. within 15 seconds), the trigger price will not be modified.</p>
                  <p>For example, if a trader has a Trailing Stop buy with a price distance of 10, the ticker price is 200, and the price drops to 190, then returns to 200, a stop order will be triggered. However, the stop order will not be triggered if the price falls from 200 to 190 USD and then returns to 200 before the ticker adjusts.</p>
                  <p>You can find more information about additional Ekonnet Orders here.</p>
                  <p>If you have any questions about Trailing Stop orders, please contact Ekonnet Support. We will be happy to help!</p>
                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default TrailingOrder