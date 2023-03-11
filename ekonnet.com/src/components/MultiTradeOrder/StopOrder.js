import React from 'react'
import '../PaperTrading/papertrading.css';
import AffiliateImg from '../assets/home-banner-bg.png';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
import h5 from '../assets/order5.png'
import h6 from '../assets/order6.png'

const StopOrder = () => {
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
                    <Nav.Link as={Link} to={"/stop-order"}> <button id='button_active'>Stop Order</button>                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/stop-limit-order"}><button>Stop limit Order</button>
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
                <h2>What is a Stop Order on Ekonnet</h2>
                    <h5>Last updated 5 March, 2023</h5>
                    <p>A stop order is used to trigger a market sell when the market drops to your trigger (stop) price or used to trigger a market buy if the market rises to your trigger (stop) price. </p>
                    <h3>How to place a Stop Order on Ekonnet</h3>
                   <p><bold>1.</bold> Firstly, <span>log in </span>to your Ekonnet account.</p>
                   <p><bold>2.</bold> Upon login, you should be landing on the trading page. Alternatively, you can navigate to your trading page using this link. </p>
                   <p><bold>3.</bold> Here, you can select the relevant trading pair from the ticker. </p>
                   <p><bold>4.</bold> Following that, from the order form drop-down option, pick Stop.</p>
                   <img src={h5} alt="main-heading" className='img-fluid mx-auto' />
                   <p><bold>5.</bold> Then, depending on the sort of order you want to execute, you can also select Exchange or Margin from the same order form.</p>
                   <img src={h6} alt="main-heading" className='img-fluid mx-auto' />
                   <p className='mt-0'>Note: The default will be Exchange. </p>
                   <p><bold>6.</bold> You can then fill out the price and amount and proceed to either sell or buy. </p>
                   <p>Note: To execute a stop order on Ekonnet, you must first check the I Understand What Stop Order Is box.</p>
                   <h2>How to use a Stop Order</h2>
                   <p>A Stop order can be used on both Exchange and Margin modes of trading. But it’s more frequently used as a stop-loss order if the market is moving against an open margin position. Stop orders will fully execute as a market order once the trigger price is reached.</p>
                   <p>Example: If the current market price is 250, the trader in a long position might want to sell if the price reaches 245. A stop sell at 245 will be used in this case.</p>
                   <p>A trader would place a stop buy above the current price if shorting. This means that if the market moves against their favour (going up), they can reduce their losses by closing or reducing their short position by buying.</p>
                   <p>A trader would place a stop buy above the current price if shorting. This means that if the market moves against their favour (going up), they can reduce their losses by closing or reducing their short position by buying.</p>
                   <p>You can find more information about additional Ekonnet Orders here.</p>
                   <p>If you have any questions about the stop orders, feel free to contact Ekonnet Support for further assistance.</p>

                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default StopOrder