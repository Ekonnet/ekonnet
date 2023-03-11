
import React from 'react'
import '../PaperTrading/papertrading.css';
import AffiliateImg from '../assets/home-banner-bg.png';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
import h14 from '../assets/order14.png'
import h15 from '../assets/order15.png'
import h16 from '../assets/order16.png'
import h17 from '../assets/order17.png'
const BookOrder = () => {
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
                    <Nav.Link as={Link} to={"/trailing-limit-order"}><button>Trailing Limit Order</button>  
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/active-book-order"}><button id='button_active'>Active Book Order</button>     
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/scaled-pro-order"}><button>Scaled Pro Order</button>
                    </Nav.Link>
                    
                    </div>
                </div>
                <div className='col-lg-8 summary'>
                <h2>What is the Interactive Book order on Ekonnet</h2>
                    <h5>Last updated 5 March, 2023</h5>
                    <p>An Interactive Book is an order that can be executed by clicking at a price on the order book. </p>     
                    <h3>How to place an Interactive Book order on Ekonnet</h3>
                   <p><bold>1.</bold> Firstly, <span>log in </span>to your Ekonnet account.</p>
                   <p><bold>2.</bold> You will then be redirected to the Trading page of the Ekonnet platform.</p>
                   <p><bold>3.</bold> Here, you can select the relevant trading pair from the ticker list.</p>
                   <p><bold>4.</bold> Then, navigate to the order form and select Interactive Book from the drop-down box.</p>
                   <img src={h14} alt="main-heading" className='img-fluid mx-auto' />
                   <p><bold>5.</bold> Depending on the order you want to execute, you can choose between Exchange or Margin.</p>
                   <img src={h15} alt="main-heading" className='img-fluid mx-auto' />
                   <p className='mt-0'>Note: The default will be Exchange. </p>
                   <p><bold>6.</bold> Next, select the interaction mode you prefer, you can choose to either Click to Place or Click to Execute.</p>
                   <p>Note:<br/> •	Click to Execute mode: Clicking an order book row will instantly create a Limit Order in the opposite direction to the selected order, at the selected order price.<br/>
                   •	Click to Place mode: Clicking an order book row will instantly create a Limit Order in the same direction to the selected order, at the selected order price.</p>
                   <p><bold>7.</bold> Then click on the I Understand, Enable Interactive Book checkbox found on the form to confirm that you have understood the feature. By unclicking the same box, you can disable the order type.</p>
                   <img src={h16} alt="main-heading" className='img-fluid mx-auto' />
                   <p><bold>8.</bold> Then enter the Amount of the order you would like to place and click on the Interactive Book to either place an order or execute an order.</p>
                   <img src={h17} alt="main-heading" className='img-fluid mx-auto' />
                   <h2>How to use Interactive Book order</h2>
                  <p>This order type enables users to place limit orders quickly based on the given price and amount shown.</p>
                  <p>By using the Interactive Book order, traders can access the order book's moving market and execute instantaneous orders.</p>
                 <p>If you have any questions, please feel free to reach out to Ekonnet Support. We are happy to help!</p>
                 
                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default BookOrder