import React from 'react'
import '../PaperTrading/papertrading.css';
import AffiliateImg from '../assets/home-banner-bg.png';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
import h1 from '../assets/order1.png'
import h2 from '../assets/order2.png'
const MarketOrder = () => {
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
                    <Nav.Link as={Link} to={"/market-order"}><button id='button_active'>Market Order</button>             
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
                    <Nav.Link as={Link} to={"/trailing-limit-order"}><button>Trailing Limit Order</button>  
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/active-book-order"}><button>Active Book Order</button>     
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/scaled-pro-order"}><button>Scaled Pro Order</button>
                    </Nav.Link>
                    
                    </div>
                </div>
                <div className='col-lg-8 summary'>
                    <h2>What is a Market order on Ekonnet</h2>
                    <h5>Last updated 30 March, 2023</h5>
                    <p>A Market order is an order type that executes immediately against the best price available. As longas there are willing sellers and buyers, market orders are filled.</p>
                    <h3>How to place a Market order on Ekonnet</h3>
                   <p><bold>1.</bold> Firstly, <span>log in </span>to your Ekonnet account.</p>
                   <p><bold>2.</bold> Then, you will be redirected to the Trading page of the Ekonnet platform.</p>
                   <p><bold>3.</bold> Here, you can select the relevant trading pair from the ticker.</p>
                   <p><bold>4.</bold> Following, you will navigate to the order form and select Market from the drop-down box.</p>
                   <img src={h1} alt="main-heading" className='img-fluid mx-auto' />
                   <p><bold>5.</bold> Then, depending on the sort of order you want to execute, you can choose between Exchange or Margin from the same order form.</p>
                   <img src={h2} alt="main-heading" className='img-fluid mx-auto' />
                   <p className='mt-0'>Note: The default will be Exchange. </p>
                   <p><bold>6.</bold> You can then fill out the amount and proceed to either sell or buy.</p>
                   <p>Note: A market sell will match the best available bids on the order book, and a market buy will match against the best available asks on the order book.</p>
                   <h2>How to use a Market order</h2>
                   <p>Market orders are often used when rapid execution is prioritised over the price at which the order executes. When placing this order, the user wishes that the trade takes place as soon as possible at the best price available.</p>
                   <p>If you have any questions, please feel free to reach out to Ekonnet Support. We are happy to help!</p>

                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default MarketOrder
