import React from 'react'
import '../PaperTrading/papertrading.css';
import AffiliateImg from '../assets/home-banner-bg.png';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
import h18 from '../assets/order18.png'
import h19 from '../assets/order19.png'
import h20 from '../assets/order20.png'
const ProOrder = () => {
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
                    <Nav.Link as={Link} to={"/active-book-order"}><button>Active Book Order</button>     
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/scaled-pro-order"}><button id='button_active'>Scaled Pro Order</button>
                    </Nav.Link>
                    
                    </div>
                </div>
                <div className='col-lg-8 summary'>
                <h2>What is a Scaled order on Ekonnet</h2>
                    <h5>Last updated 5 March, 2023</h5>
                    <p>A Scaled order is an algorithmic tool that enables advanced users to automatically create multiple limit orders across a user-determined price range. This tool also provides control over the diversity and distribution of orders within the price range.</p>  
                    <h3>How to place a Scaled order on Ekonnet</h3>
                   <p><bold>1.</bold> Firstly, <span>log in </span>to your Ekonnet account.</p>
                   <p><bold>2.</bold> You will then be redirected to the Trading page of the Ekonnet platform.</p>
                   <p><bold>3.</bold> Here, you can select the relevant trading pair from the ticker list.</p>
                   <p><bold>4.</bold> Then, navigate to the order form, select Scaled from the drop-down box, and choose if you intend to Exchange or Margin trade.</p>
                   <img src={h18} alt="main-heading" className='img-fluid mx-auto' />
                   <p><bold>5.</bold> On the Scaled order, the form will offer you an option of entering Lower and Upper Price, Amount, Order Count, along with Amount and Price Variance (in percentage). In addition, you can set the Distribution to control the share of the total amount each order receives. Then you can choose the action to sell or buy.</p>
                   <p><bold>6.</bold> Following the information you enter on the form, you may click Preview to see the limit orders that can be made based on your input or Submit to complete your order.</p>
                   <img src={h19} alt="main-heading" className='img-fluid mx-auto' />
                   <p>If you choose to Preview the information, you will see the orders and can Cancel or Submit them.</p>
                   <img src={h20} alt="main-heading" className='img-fluid mx-auto' />
                   <p><bold>7.</bold> Once submitted, your orders will be generated according to your specified specifications.</p>
                   <h2>How to use a Scaled order</h2>
                  <p>Scaled orders are a complex trade creation tool that enables traders to spend less time entering orders and more time concentrating on their strategy.</p>
                  <p>A Scaled order consists of many orders at various prices to mitigate the market impact of submitting a single large order. Additionally, it can be used to obtain a more favourable average price when entering or quitting a position.</p>
                 <p>If you have any questions, please feel free to reach out to Bitfinex Support. We are happy to help!</p>   
                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default ProOrder