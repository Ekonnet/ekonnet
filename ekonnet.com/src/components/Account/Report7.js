import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import report12 from '../assets/report12.png'


const Report7 = () => {
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
                    <Nav.Link as={Link} to={"/what-is-a-funding-report-on-ekonnet"}><button>What is a Funding Report on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-are-my-trades-reports"}><button>What are my Trades Reports</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-my-wallet-history-on-ekonnet"}><button>What is my Wallet History on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-my-movements-report-at-ekonnet"}><button id='button_active'>What is my Movements Report at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/full-tax-report-ekonnet-reporting-application"}><button>Full Tax Report — Ekonnet Reporting Application</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>What is my Movements Report at Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>The Movements Report shows an in-depth overview of your Ekonnet account’s deposits and withdrawals. 
                  <br/><br/>
                    <h3>How to get the Movements Report on Ekonnet</h3><br/>
                    1. Firstly, navigate to the Reports page, which can be found under Manage Account / Reports.
                    <br/><br/>
                    2. Then, on the left side of the menu, select Movements.
                    <br/><br/>
                    3. Proceeding, you can specify a date range you prefer.
                    <br/><br/>
                    4. Finally, you can click Export to download the report. 
                    <br/><br/>
                    Note: All reports will be sent to your Ekonnet linked email and are downloaded in a CSV format.
                    <br/><br/>
                    <img src={report12} alt="main-heading" className='img-fluid mx-auto' /><br/>
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

export default Report7
