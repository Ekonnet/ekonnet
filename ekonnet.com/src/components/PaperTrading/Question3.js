import React from 'react'
import AffiliateImg from '../assets/home-banner-bg.png';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
const Question3 = () => {
  return (
    <>
    <Helmet>
        <title>Ekonnet | Paper Trading </title>
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
      
    <setion id='question_section' className='question_section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='question'>
                    
                    <Nav.Link as={Link} to={"/Currency-Switch-Tool-on-Ekonnet"}><button>Currency Switch Tool on Ekonnet</button>             
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/How-to-trade-on-Ekonnet"}><button>How to trade on Ekonnet</button>
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/Paper-Trading-at-Ekonnet-test-learn-and-simulate-trading-strategies"}> <button id='button_active'>Paper Trading at Ekonnet — test, learn and simulate trading strategies</button>                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/Ekonnet-Order-Types-and-Order-Options"}><button>Ekonnet Order Types and Order Options</button>
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/Understanding-Ekonnet-Over-the-Counter(OTC)"}><button>Understanding Ekonnet Over the Counter (OTC)</button>    
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/How-to-check-you-are-paying-the-right-trading-fees-on-Ekonnet"}><button>How to check you are paying the right trading fees on Ekonnet</button>  
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/What-is-the-minimum-order-size-on-Ekonnet"}><button>What is the minimum order size on Ekonnet</button>  
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/Order-and-Funding-Books-terms-on-Ekonnet"}><button>Order and Funding Books terms on Ekonnet</button>     
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/The-Ekonnet-Chart-Layout-Customisation-&-Ekonnet-Trade-Desk"}><button>The Ekonnet Chart, Layout Customisation & Ekonnet Trade Desk</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/Customisation-on-Ekonnet"}><button>Customisation on Ekonnet</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/Bitcoin(Satoshi)-Mode"}><button>Bitcoin (Satoshi) Mode</button>
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/Ekonnet-Interface-loading-issues-Frequently-Asked-Questions(FAQ)"}><button>Ekonnet Interface loading issues — Frequently Asked Questions (FAQ)</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/Price-alert-setting-on-Ekonnet"}><button>Price alert setting on Ekonnet</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/What-is-a-settlement-on-Ekonnet"}><button>What is a settlement on Ekonnet</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/Why-are-BTC-profits-on-Ekonnet"}><button>Why are BTC profits on Ekonnet</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/Trading-Error-Message"}><button>Trading Error Message</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/Editing-orders-and-viewing-order-history-in-bulk"}><button>Editing orders and viewing order history in bulk</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/How-is-precision-calculated-using-significant-digits-on-Ekonnet"}><button>How is precision calculated using significant digits on Ekonnet</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/Orders-execution-on-Ekonnet"}><button>Orders execution on Ekonnet</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/Why-a-stop-order-might-not-be-filled-at-the-stop-price-on-Ekonnet"}><button>Why a stop order might not be filled at the stop price on Ekonnet</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/Chain-Split-Tokens-and-Token-Manager-on-Ekonnet"}><button>Chain Split Tokens and Token Manager on Ekonnet</button>
                    </Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summary'>
                    <h2>Paper Trading at Ekonnet — test, learn and simulate trading strategies</h2>
                    <h5>Last updated 30 November, 2022</h5>
                    <h3>What is Paper Trading</h3>
                    <p>Paper Trading is a simulated market environment where you can develop your trading strategies. On Ekonnet, newly created sub-accounts can be set to paper trade. 
                    <br/><br/>  
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br/><br/>  
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br/><br/>  
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </p>
                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default Question3