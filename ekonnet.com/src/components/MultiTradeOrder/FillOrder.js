import React from 'react'
import '../PaperTrading/papertrading.css';
import AffiliateImg from '../assets/home-banner-bg.png';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
import h8 from '../assets/order8.png'
import h9 from '../assets/order9.png'
const FillOrder = () => {
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
                    <Nav.Link as={Link} to={"/fill-or-kill-order"}><button id='button_active'>Fill or Kill Order</button>    
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
                <h2>What is a Fill or Kill Order on Ekonnet</h2>
                    <h5>Last updated 5 March, 2023</h5>
                    <p>A Fill or Kill order is an order that must be filled immediately in its entirety, at a specific price (or better), or it is cancelled (killed).</p>
                    <h3>How to place a Fill or Kill Order on Ekonnet</h3>
                   <p><bold>1.</bold> Firstly, <span>log in </span>to your Ekonnet account.</p>
                   <p><bold>2.</bold> Then, you will be taken to the Ekonnet platform's Trading page.</p>
                   <p><bold>3.</bold> Here, you can select the relevant trading pair from the ticker.</p>
                   <p><bold>4.</bold> Following, navigate to the order form and select Fill or Kill from the drop-down box.</p>
                   <img src={h8} alt="main-heading" className='img-fluid mx-auto' />
                   <p><bold>5.</bold> Then, depending on the sort of order you want to execute, you can choose between Exchange or Margin from the same order form.</p>
                   <img src={h9} alt="main-heading" className='img-fluid mx-auto' />
                   <p className='mt-0'>Note: The default will be Exchange. </p>
                   <p><bold>6.</bold> Now, you can fill in the Price and Amount and place a buy or sell order. </p>
                   <p><bold>7.</bold> Once the order is in the order book, it will either be filled in its entirety at your specified price or else cancelled (killed).</p>
                   <h2>How to use a Fill or Kill Order</h2>
                   <p>Once the order is in the order book, it will either be filled in its entirety at your specified price or else cancelled (killed). </p>
                  <p>If you have any questions, please feel free to reach out to Ekonnet Support. We are happy to help!</p> 
                 
                </div>
            </div>
        </div>
    </setion>
  
    </>
  )
}

export default FillOrder