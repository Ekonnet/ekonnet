import React from 'react'
import '../PaperTrading/papertrading.css';
import AffiliateImg from '../assets/home-banner-bg.png';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
import h10 from '../assets/order10.png'
import h11 from '../assets/order11.png'
const ImmediateOrder = () => {
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
                    <Nav.Link as={Link} to={"/immediate-cancellation-order"}><button id='button_active'>Immediate Cancellation Order</button>  
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
                <h2>What is a Immediate or Cancel Order on Ekonnet</h2>
                    <h5>Last updated 5 March, 2023</h5>
                    <p>An Immediate or Cancel order requires all or a part of the order to be executed immediately, and any unfilled parts of the order are cancelled.</p>
                    <p>Note: Partial fills are accepted with this type of order duration, unlike a Fill or Kill order, which must be filled immediately in its entirety or be cancelled.</p>
                    <h3>How to place an Immediate or Cancel order on Ekonnet</h3>
                   <p><bold>1.</bold> Firstly, <span>log in </span>to your Ekonnet account.</p>
                   <p><bold>2.</bold> Then, you will be redirected to the Trading page of the Ekonnet platform.</p>
                   <p><bold>3.</bold> Here, you can select the relevant trading pair from the ticker.</p>
                   <p><bold>4.</bold> Following, you will navigate to the order form and select Immediate Or Cancel from the drop-down box.</p>
                   <img src={h10} alt="main-heading" className='img-fluid mx-auto' />
                   <p><bold>5.</bold> Then, depending on the order you want to execute, you can choose between Exchange or Margin from the same order form.</p>
                   <img src={h11} alt="main-heading" className='img-fluid mx-auto' />
                   <p className='mt-0'>Note: The default will be Exchange. </p>
                   <p><bold>6.</bold> You can then fill out the Amount and Price proceed to either sell or buy. In this instance, the order will be executed in its entirety, or if partially executed, the remaining of the order will be cancelled.</p>
                   <h2>How to use a Fill or Kill Order</h2>
                  <p>Due to the fact that Immediate or Cancel orders are completed at least partially at the set price, the user would attempt to fill as much as possible in a fast-moving market.</p>
                  <p>If you have any questions, please feel free to reach out to Ekonnet Support. We are happy to help!</p>
                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default ImmediateOrder