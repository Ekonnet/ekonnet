import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import report6 from '../assets/report6.png'
const Report3 = () => {
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
                    <Nav.Link as={Link} to={"/what-is-a-ekonnet-report"}><button id='button_active'>What is a Ekonnet Report</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-a-funding-report-on-ekonnet"}><button>What is a Funding Report on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-are-my-trades-reports"}><button>What are my Trades Reports</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-my-wallet-history-on-ekonnet"}><button>What is my Wallet History on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-my-movements-report-at-ekonnet"}><button>What is my Movements Report at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/full-tax-report-ekonnet-reporting-application"}><button>Full Tax Report — Ekonnet Reporting Application</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>What is a Ekonnet Report</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>The Ekonnet Report is a tool that allows traders to more conveniently track, manage and analyse trading, funding, movements, and logs activity across their Ekonnet account.
                    <br/><br/>
                    <h3>What are the available types of reports at Ekonnet</h3><br/>
                    The following data is available for your account through the Ekonnet Report. 
                    <br/><br/>
                    <ul>
                        <li><b>Ledgers</b> display all your most recent entries shown by default, and a time filter is available to retrieve time-specific data.</li><br/>
                        <li><b>Trades</b> displays your most recent trades, which you can retrieve by default, and a time filter is available to retrieve time-specific data.</li><br/>
                        <li><b>Orders</b> display the historic closed or cancelled orders.</li><br/>
                        <li><b>Movements</b> show your past deposits/withdrawals. You can specify a currency to retrieve movements specific to that currency.</li><br/>
                        <li><b>Positions</b> show the data on active and past positions. Results for a specific period can be retrieved using timestamps.</li>
                        Note: When you click on the position ID, it brings up an audit of your positions.
                        <br/><br/>
                        <img src={report6} alt="main-heading" className='img-fluid mx-auto' />
                        <br/><br/>
                        <li><b>Wallets</b> records account wallet balances.</li><br/>
                        <li><b>Funding Bids & Offers</b> shows past inactive funding offers.</li><br/>
                        <li><b>Funding Loans (Unused)</b> shows inactive funds not used in positions.</li><br/>
                        <li><b>Funding Credit (Used)</b> shows inactive funds used in positions.</li><br/>
                        <li><b>Funding Earnings</b> displays your interest earnings ledger entries from the past. By default, the most recent entries are shown; however, a timestamp can receive time-specific data.</li><br/>
                        <li><b>Staking Earnings</b> highlights your staking payment ledger entries from the past.<br/>
                        Although the most recent entries are returned by default, a timestamp can be used to receive time-specific entries.</li><br/>
                        <li><b>Affiliate Earnings</b> displays historical ledger entries for fee and affiliate rebate earned. By default, the most recent entries are returned. However, a timestamp can be used to retrieve time-specific entries.</li><br/>
                        <li><b>Public Trades</b> displays historical public trades and contains information such as the transaction’s price, size, and time. In addition, this section offers the option of synchronising specific pairs and periods.</li><br/>
                        <li><b>Public Funding</b> shows previous public funding and includes information such as price, size, and time. In addition, this section contains optional capabilities for synchronising specific pairs and periods.</li><br/>
                        <li><b>Tickers</b> display the history of recent tickers. Historical data of the best bid and ask at 10-second intervals is provided. In addition, data from the previous year is available. The oldest results are separated by 30 minutes. This section includes optional capabilities for synchronising specific pairs and periods.</li><br/>
                        <li><b>Derivatives</b> displays platform information regarding the status of derivatives pairs. This section includes optional capabilities for synchronising specific pairs and periods.</li><br/>
                        <li><b>Account Summary</b> provides a summary of your account's different fee rates, as well as the LEO discount level and the average amount of LEO held over the last 30 days.</li><br/>
                        <li><b>Logins</b> display a history of previous logins.</li><br/>
                        <li><b>Changelogs</b> detail any changes made to your account, allowing you to keep track of any modifications made. In addition, they indicate where changes have been made and enable the tracking of any suspicious activity.</li>
                    </ul>
                    Each reports section offers unique filters to retrieve the type of information you require. 
                   <br/><br/>
                   Note: We recommend that you read through our Reporting Application article if you're looking for a report which you can use for tax purposes. 
                   <br/><br/>
                   If you have any questions regarding your Ekonnet Reports, feel free to contact Ekonnet Support. 
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

export default Report3
