import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const Verfications = () => {
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
         <h3>Verification</h3>
         <ul>
         <Nav.Link as={Link} to={"/verification-levels-at-ekonnet"}><li>Verification levels at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/how-to-verify-an-individual-ekonnet-account"}><li>How to verify an Individual Ekonnet account</li></Nav.Link>
         <Nav.Link as={Link} to={"/how-to-verify-a-corporate-account-on-ekonnet"}><li>How to verify a corporate account on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/how-long-does-ekonnet-verification-take"}><li>How long does Ekonnet verification take</li></Nav.Link>
         <Nav.Link as={Link} to={"/verification-frequently-asked-questions(FAQ)"}><li>Verification — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <Nav.Link as={Link} to={"/ekonnet-master-and-sub-accounts"}><li>Ekonnet master and sub-accounts</li></Nav.Link>
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

export default Verfications
