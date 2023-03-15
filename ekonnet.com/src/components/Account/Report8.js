import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import report13 from '../assets/report13.png'
import report14 from '../assets/report14.png'
import report15 from '../assets/report15.png'
import report16 from '../assets/report16.png'
import report17 from '../assets/report17.png'
import report18 from '../assets/report18.png'


const Report8 = () => {
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
                    <Nav.Link as={Link} to={"/what-is-my-movements-report-at-ekonnet"}><button>What is my Movements Report at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/full-tax-report-ekonnet-reporting-application"}><button id='button_active'>Full Tax Report — Ekonnet Reporting Application</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Full Tax Report — Ekonnet Reporting Application</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>The Ekonnet Reporting Application* is an application tool that allows you access to more reporting sections than the online Ekonnet Reports page. Features include showing average win/loss graphs, account volume graphs, account snapshots and tax reports, among others.<br/><br/>
                    Of these features, the most commonly used feature is generating tax reports. You only need to select the required dates, and the Ekonnet platform will take care of the rest!
                    <br/><br/>
                    *The Reporting Application has been developed using Electron.
                    <br/><br/>
                    <h3>How to set up the Reporting App</h3><br/>
                    1. Download the application version for your operating system here.
                    <br/><br/>
                    <img src={report13} alt="main-heading" className='img-fluid mx-auto'/>
                    <br/>
                    2. Once you have downloaded and started the application, you will be requested to input your API key. Learn more about API key creation in our guide How to create and revoke a Ekonnet API Key.
                    <br/><br/>
                    <img src={report14} alt="main-heading" className='img-fluid mx-auto'/>
                    <br/>
                    Note: The Reporting Application will only require read permissions. For the safety of your account, we do not recommend making writing permissions available for the API key that is needed.                 
                    <br/><br/>
                    3. After entering the API key and API secret, you will be logged in, and the cloud synchronisation will begin, connecting your account information to the application. When synced, you can then select the reporting feature you need and choose the relevant timeframe.
                    <br/><br/>
                    <h3>How to create a tax report</h3><br/>
                    1. Firstly, select Tax Report from the list of features available in the Reporting Application.
                    <br/><br/>
                    <img src={report15} alt="main-heading" className='img-fluid mx-auto'/>
                    <br/>
                    2. Select the start and end of the period from the calendar icon at the top. The app will then create a snapshot both at the start and the end of the time frame selected.
                    <br/><br/>
                    <img src={report16} alt="main-heading" className='img-fluid mx-auto'/>
                    <br/>
                    3. The report will be displayed in the Final Result tab.
                    <br/><br/>
                    <img src={report17} alt="main-heading" className='img-fluid mx-auto'/>
                    <br/>
                    4. You can choose to download your tax report in CSV format by selecting the Export button.
                    <br/><br/>
                    <img src={report18} alt="main-heading" className='img-fluid mx-auto'/>
                    <br/>
                    For information about the other features available in the Ekonnet Reporting Application, feel free to check our dedicated page: https://reporting.ekonnet.com/.
                    <br/><br/>
                    If you have any questions, don’t hesitate to contact Ekonnet Support.                      
                    
                    
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

export default Report8
