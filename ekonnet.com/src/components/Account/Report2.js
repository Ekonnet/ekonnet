import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import report4 from '../assets/report4.png'
import report5 from '../assets/report5.png'

const Report2 = () => {
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
                    <Nav.Link as={Link} to={"/what-is-positions-on-ekonnet-report"}><button id='button_active'>What is Positions on Ekonnet Report</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-a-ekonnet-report"}><button>What is a Ekonnet Report</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-a-funding-report-on-ekonnet"}><button>What is a Funding Report on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-are-my-trades-reports"}><button>What are my Trades Reports</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-my-wallet-history-on-ekonnet"}><button>What is my Wallet History on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-my-movements-report-at-ekonnet"}><button>What is my Movements Report at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/full-tax-report-ekonnet-reporting-application"}><button>Full Tax Report — Ekonnet Reporting Application</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>What is Positions on Ekonnet Report</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>The Positions on the Ekonnet Reports present data on both active and past positions. This report provides you with an in-depth summary of your Positions (status and amount for each position). 
                    <br/><br/>
                    <h3>How to get Positions History on Ekonnet</h3><br/>
                    1. Firstly, navigate to the Report page, which can be found under Manage Account / Reports or by clicking here.
                    <br/><br/>
                    2. Then, on the left side of the menu, select Positions or go to this link.
                    <br/><br/>
                    3. Proceeding, you can specify a date range you prefer.
                    <br/><br/>
                    4. Finally, you can click Export to download the report. 
                    <br/><br/>
                    <img src={report4} alt="main-heading" className='img-fluid mx-auto' />
                   <br/><br/>
                   Note: All reports will be sent to your Ekonnet linked email and are downloaded in a CSV format.
                   <br/><br/>
                  <h3>How to get a Positions Audit on Ekonnet Report</h3>
                   <br/>
                   The position ID links on the Positions History page will provide you with the Positions Audit. The audit offers an insight into the sub-positions that make up any of the positions.
                   <br/><br/>
                   After you've followed the steps outlined above to navigate to the Positions page and chosen the period range, you may proceed with the steps outlined below to obtain the position audit.
                   <br/><br/>
                   1. Firstly, select the desired position ID to redirect you to Position Audit
                   <br/><br/>
                   2. Then, press Export to download the position's report.
                   <br/><br/>
                   Note: The reports will be delivered to your Ekonnet-linked email address, where they may be downloaded in CSV format.<br/><br/>
                   <img src={report5} alt="main-heading" className='img-fluid mx-auto' />
                    <br/>
                    Alternatively, when on the Audit page, selecting positions will redirect you to the Positions page, where you can select the desired date and position of interest.
                    <br/><br/>
                    If you have any questions about your reports, please contact Ekonnet Support. We are happy to assist you!                    <br/><br/>
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

export default Report2
