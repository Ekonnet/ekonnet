import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const Report = () => {
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
         <h3>Reports</h3>
         <ul>
         <Nav.Link as={Link} to={"/what-are-my-orders-reports"}><li>What are my Orders Reports</li></Nav.Link>
         <Nav.Link as={Link} to={"/what-is-positions-on-ekonnet-report"}><li>What is Positions on Ekonnet Report</li></Nav.Link>
         <Nav.Link as={Link} to={"/what-is-a-ekonnet-report"}><li>What is a Ekonnet Report</li></Nav.Link>
         <Nav.Link as={Link} to={"/what-is-a-funding-report-on-ekonnet"}><li>What is a Funding Report on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/what-are-my-trades-reports"}><li>What are my Trades Reports</li></Nav.Link>
         <Nav.Link as={Link} to={"/what-is-my-wallet-history-on-ekonnet"}><li>What is my Wallet History on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/what-is-my-movements-report-at-ekonnet"}><li>What is my Movements Report at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/full-tax-report-ekonnet-reporting-application"}><li>Full Tax Report — Ekonnet Reporting Application</li></Nav.Link>
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

export default Report
