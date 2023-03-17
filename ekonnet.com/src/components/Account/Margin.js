import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const Margin = () => {
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
         <h3>Margin Trading</h3>
         <ul>
         <Nav.Link as={Link} to={"/What-is-Margin-Trading-on-Ekonnet"}><li>What is Margin Trading on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/How-to-open-close-a-margin-position-at-Ekonnet"}><li>How to open/close a margin position at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/What-interest-rate-is-charged-on-margin-positions-on-Ekonnet"}><li>What interest rate is charged on margin positions on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/How-to-claim-a-margin-position-on-Ekonnet"}><li>How to claim a margin position on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/Margin-call-policy-on-Ekonnet"}><li>Margin call policy on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/What-happens-to-a-Ekonnet-margin-position-if-the-underlying-funds-become-unavailable"}><li>What happens to a Ekonnet margin position if the underlying funds become unavailable</li></Nav.Link>
         <Nav.Link as={Link} to={"/Margin-Funding-on-Ekonnet"}><li>Margin Funding on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/Is-it-possible-to-open-multiple-Margin-Trading-positions-for-the-same-pair-on-Ekonnet"}><li>Is it possible to open multiple Margin Trading positions for the same pair on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/What-is-the-base-price-at-Ekonnet"}><li>What is the base price at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/How-to-replace-funding-in-a-margin-position"}><li>How to replace funding in a margin position</li></Nav.Link>
         <Nav.Link as={Link} to={"/Using-Reserved-Funding-for-a-position-on-Ekonnet"}><li>Using Reserved Funding for a position on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/The-error-message-Insufficient-Balance-on-Ekonnet"}><li>The error message "Insufficient Balance" on Ekonnet</li></Nav.Link>
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

export default Margin