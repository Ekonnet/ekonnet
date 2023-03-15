import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import report7 from '../assets/report7.png'

const Report4 = () => {
  return (
    <>
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
      
    <setion id='lost_section' className='lost_section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='report'>
                    
                    <Nav.Link as={Link} to={"/what-are-my-orders-reports"}><button>What are my Orders Reports</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-positions-on-ekonnet-report"}><button>What is Positions on Ekonnet Report</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-a-ekonnet-report"}><button>What is a Ekonnet Report</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-a-funding-report-on-ekonnet"}><button id='button_active'>What is a Funding Report on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-are-my-trades-reports"}><button>What are my Trades Reports</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-my-wallet-history-on-ekonnet"}><button>What is my Wallet History on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-my-movements-report-at-ekonnet"}><button>What is my Movements Report at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/full-tax-report-ekonnet-reporting-application"}><button>Full Tax Report — Ekonnet Reporting Application</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>What is a Funding Report on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>The Funding Report gives you a detailed breakdown of your funding history on the Ekonnet platform. <br/><br/>
                    <h3>How to get a Funding Report on Ekonnet</h3><br/>
                    1. Firstly, navigate to the Reports page, which can be found under Manage Account / Reports.
                    <br/><br/>
                    2. Then, on the left side of the menu, select from the four types of funding reports available on Ekonnet:
                    <br/>
                    <ul>
                        <li>Funding Bids & Offers;</li>
                        <li>Funding Loans (Unused);</li>
                        <li>Funding Credit (Used);</li>
                        <li>Funding Earnings. </li>
                    </ul>
                    3. Proceeding, you can specify a date range you prefer.
                    <br/><br/>
                    4. Finally, click Export to download the report. 
                    <br/><br/>
                    Note: All reports will be sent to your Ekonnet linked email and can be downloaded in a CSV format.                    
                   <br/><br/>
                   <img src={report7} alt="main-heading" className='img-fluid mx-auto' />
                   <br/><br/>
                   Note: Funding Loans (unused) are funding bids and offers that were not yet used in a margin position. And as soon as these funding bids & offers become used in an active margin position, you will notice the report will move it to the Funding Credits (Used) section of the reports giving you a better overview of how your funding was used. 
                   <br/><br/>
                   If you have any questions regarding your Ekonnet Reports, do not hesitate to contact Ekonnet Support. We are happy to assist you!
                   </p>
                    <hr className='mt-5 mb-5'></hr>
                    <h4>Can't you find what you are looking for?</h4>
                    <p className='mt-0'>If you are having any problems or you have any questions, please talk to one of our friendly support representatives.</p>
                    <Nav.Link as={Link} to={"/frequently-asked-question"}><button className='btn btn-primary mb-5'>Contact Support</button></Nav.Link>
                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default Report4
