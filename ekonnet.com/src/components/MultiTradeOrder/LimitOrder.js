import React from 'react'
import '../PaperTrading/papertrading.css';
import AffiliateImg from '../assets/home-banner-bg.png';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
import h3 from '../assets/order3.png'
import h4 from '../assets/order4.png'

const LimitOrder = () => {
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
                    <Nav.Link as={Link} to={"/limit-order"}><button id='button_active'>Limit Order</button>
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/stop-order"}> <button>Stop Order</button>                    
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
                <h2>What is a Limit Order on Ekonnet</h2>
                    <h5>Last updated 5 March, 2023</h5>
                    <p>A Limit Order enables you to buy or sell at your chosen price. Your limit order will be executed if the market hits your limit price. Conversely, your order will not be executed if the market does not reach your limit price.</p>
                    <h3>How to place a Limit order on Ekonnet</h3>
                   <p><bold>1.</bold> Firstly, <span>log in </span>to your Ekonnet account.</p>
                   <p><bold>2.</bold> You will be redirected directly to the Trading page. Or, you can navigate to your Trading page using this link.</p>
                   <p><bold>3.</bold> Proceeding, select the relevant trading pair from the ticker.</p>
                   <p><bold>4.</bold> Following that, from the order form drop-down option, choose Limit. </p>
                   <img src={h3} alt="main-heading" className='img-fluid mx-auto' />
                   <p><bold>5.</bold> Here, depending on the sort of order you want to execute, you can also select Exchange or Margin from the same order form.</p>
                   <img src={h4} alt="main-heading" className='img-fluid mx-auto' />
                   <p className='mt-0'>Note: The default will be Exchange. </p>
                   <p><bold>6.</bold> You can then fill out the price and amount and proceed to either sell or buy.</p>
                   <h2>How to use a Limit Order</h2>
                   <p>A Limit Order is one of the most basic and widely used order types as it allows you simply to specify a price and amount you would like to buy or sell. </p>
                  <p>Example: If the current market price is 250 and I want to buy lower than that at 249, then I would place a limit buy order at 249. If the market reaches 249 and a seller’s ask matches with my bid, my limit order will be executed at 249.</p>
                  <p>You can find more information about additional Ekonnet Orders here. </p>
                  <p>If you have any questions about the limit orders, feel free to contact Ekonnet Support for further assistance. </p>

                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default LimitOrder