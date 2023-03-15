import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import report8 from '../assets/report8.png'
import report9 from '../assets/report9.png'
import report10 from '../assets/report10.png'

const Report5 = () => {
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
                    <Nav.Link as={Link} to={"/what-are-my-trades-reports"}><button  id='button_active'>What are my Trades Reports</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-my-wallet-history-on-ekonnet"}><button>What is my Wallet History on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-my-movements-report-at-ekonnet"}><button>What is my Movements Report at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/full-tax-report-ekonnet-reporting-application"}><button>Full Tax Report — Ekonnet Reporting Application</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>What are my Trades Reports</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>The Trade Reports show an in-depth overview of your account’s trade history. <br/><br/>
                    <h3>How to get Ekonnet Trades Reports</h3><br/>
                    1. Firstly, navigate to your Reports under Manage Account / Reports. Alternatively, you can access the page by clicking this link. 
                    <br/><br/>
                    <img src={report8} alt="main-heading" className='img-fluid mx-auto' />
                    <br/><br/>
                    2. Then, select Trades from the left side of the menu on the reports page. Or you can also get to the section by clicking on this link.
                    <br/><br/>
                    3. After that, select the relevant Date Range and the desired pair/s through the Symbol Filter.<br/><br/>
                    <img src={report9} alt="main-heading" className='img-fluid mx-auto'/>
                    <br/>
                    Note: When choosing a date range, you may also select the custom option to construct a date range tailored to your exact requirements.
                    <br/><br/>
                    4. After that, you can click on Export to get a breakdown of your trades delivered to your email.<br/><br/>
                    <img src={report10} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    5. To finish, a pop-up will appear asking you to confirm your export request as well as the date format you want your report to be in.
                    <br/><br/>
                    Note: All the requested reports will be sent to your Ekonnet linked email in a CSV format. 
                    <br/><br/>
                    If you have any questions about your trade reports, get in touch with Ekonnet Support for further information. We will be happy to assist you!
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

export default Report5
