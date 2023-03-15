import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import report11 from '../assets/report11.png'

const Report6 = () => {
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
                    <Nav.Link as={Link} to={"/what-is-my-wallet-history-on-ekonnet"}><button id='button_active'>What is my Wallet History on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-my-movements-report-at-ekonnet"}><button>What is my Movements Report at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/full-tax-report-ekonnet-reporting-application"}><button>Full Tax Report — Ekonnet Reporting Application</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>What is my Wallet History on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>The Wallet History section of Ekonnet reports provides a snapshot of the current holdings in your Ekonnet wallets. There are three main wallets on Ekonnet: <br/>
                     <ul>
                    <li>Exchange Wallet;</li>
                    <li>Margin Wallet; </li>
                    <li>Funding Wallet. </li>
                </ul>
                  Note: You can learn more about Ekonnet wallets here. <br/><br/>
                    <h3>How to get Ekonnet Wallet History</h3><br/>
                    1. Firstly, navigate to the Wallet History page which can be found under Manage Account / Reports or by clicking this link.
                    <br/><br/>
                    2. Then, on the left side of the menu select Wallets or go to this link.  
                    <br/><br/>
                    3. After that, you can select Export to get a snapshot of the balance in your wallet.
                    <br/><br/>
                    <img src={report11} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Note: The Wallet History report only displays current holdings and does not allow you to change the date range.
                    <br/><br/>
                    4. To finish, a pop-up will appear asking you to confirm your export request as well as the date format you want your report to be in.
                    <br/><br/>
                     All reports will be sent to your Ekonnet linked email and are downloaded in a CSV format. 
                     <br/><br/>
                    If you have any questions about your reports, get in touch with Ekonnet Support for further information.
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

export default Report6
