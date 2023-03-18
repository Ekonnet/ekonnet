import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../../components/assets/home-banner-bg.png';
import '../../components/Account/Account.css'

const TradingLending = () => {

    

    return (
        <>
          <section id='web_hero' className='web_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
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
      <section>
        <div className='container'>
        <div className='row'>
         <div className='col-lg-2'>
         </div>
         <div className='col-lg-8 access'>
         <h3>Trading & Lending</h3>
         <h4>Trading</h4>
         <ul>
         <Nav.Link as={Link} to={""}><li>Currency Conversion Tool on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to trade on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Paper Trading at Ekonnet — test, learn and simulate trading strategies</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet Order Types and Order Options</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Understanding Ekonnet Over the Counter (OTC)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to check you are paying the right trading fees on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is the minimum order size on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Order and Funding Books terms on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>The Ekonnet Chart, Layout Customisation & Ekonnet Trade Desk</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Customisation on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Bitcoin (Satoshi) Mode</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet Interface loading issues — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Price alert setting on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a settlement on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Why are BTC profits on Ekonnet account converted to USD when the margin position is closed</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Trading Error Message</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Editing orders and viewing order history in bulk</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How is precision calculated using significant digits on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Orders execution on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Why a stop order might not be filled at the stop price on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Chain Split Tokens and Token Manager on Ekonnet</li></Nav.Link>

         

         <h4>Derivatives</h4>
         <Nav.Link as={Link} to={""}><li>How to move funds to the Derivatives wallet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Derivatives Trading on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>The Ekonnet Derivatives trading interface</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is Termination on Ekonnet</li></Nav.Link>

         
         <h4>Fees</h4>
         <Nav.Link as={Link} to={""}><li>How to pay less trading fees at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What fees does Ekonnet charge</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet Fees</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Does Ekonnet offer traders preferential fee discounts</li></Nav.Link>
         
         <h4>Ekonnet Securities</h4>
         <Nav.Link as={Link} to={""}><li>What is Ekonnet Securities</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to create a Ekonnet Securities account</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet Securities Restrictions: Prohibited Persons and Prohibited Jurisdictions</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to get listed on Ekonnet Securities</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to get listed directly at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to hold a Capital Raise event at Ekonnet Securities</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to Participate in a Capital Raise Offering on Ekonnet Securities</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to trade on the Ekonnet Securities platform</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to fund a Ekonnet Securities account</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to make a manual BMN withdrawal on Ekonnet Securities</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to make a BMN deposit on Ekonnet Securities</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Blockstream Mining Note (BMN)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Exordium Limited (EXO)</li></Nav.Link>
         </ul>
         </div>
         <div className='col-lg-2'>
         </div>
        </div>
        </div>
      </section>  


        </>
    )
}

export default TradingLending
