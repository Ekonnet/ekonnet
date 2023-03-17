import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const Fee = () => {
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
         <h3>Fees</h3>
         <ul>
         <Nav.Link as={Link} to={"/How-to-pay-less-trading-fees-at-Ekonnet"}><li>How to pay less trading fees at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/What-fees-does-Ekonnet-charge"}><li>What fees does Ekonnet charge</li></Nav.Link>
         <Nav.Link as={Link} to={"/Ekonnet-Fees"}><li>Ekonnet Fees</li></Nav.Link>
         <Nav.Link as={Link} to={"/Does-Ekonnet-offer-traders-preferential-fee-discounts"}><li>Does Ekonnet offer traders preferential fee discounts</li></Nav.Link>         
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

export default Fee