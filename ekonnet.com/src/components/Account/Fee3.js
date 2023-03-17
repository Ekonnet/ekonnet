import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import fee5 from '../assets/fee5.png'

const Fee3 = () => {
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
                    <div className='derivat'>  
                    <Nav.Link as={Link} to={"/How-to-pay-less-trading-fees-at-Ekonnet"}><button>How to pay less trading fees at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-fees-does-Ekonnet-charge"}><button>What fees does Ekonnet charge</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Ekonnet-Fees"}><button id='button_active'>Ekonnet Fees</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Does-Ekonnet-offer-traders-preferential-fee-discounts"}><button>Does Ekonnet offer traders preferential fee discounts</button></Nav.Link>              
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Ekonnet Fees</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    Ekonnet Fees are fees that users will pay to trade, fund, and use a variety of other services on the exchange.<br/><br/>
                    <h3>What are the Ekonnet account fees</h3><br/>
                    The overall fees on Ekonnet may be seen on the Fees page, which displays the fees associated with your account.<br/><br/>
                    This Fees page includes all services provided by Ekonnet, such as: 
                    <br/>
                    <ul>
                        <li>Order execution;</li>
                        <li>Derivatives order execution;</li>
                        <li>Ekonnet Borrow;</li>
                        <li>Margin Funding;</li>
                        <li>OTC desk;</li>
                        <li>Deposit;</li>
                        <li>Withdrawal.</li>
                    </ul>
                    Note: Fees tiers are calculated by 30-Day Trading Volume for trading.<br/><br/>
                    <h3>Fees Calculator</h3><br/>  
                    It is possible to generate an approximation of your fees using the Fees Calculator, which is based on your UNUS SED LEO holdings and 30-Day Trading Volume. 
                    <br/><br/>
                    <img src={fee5} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Important: There are various ways you could be paying less trading fees on Ekonnet. To learn more, you can read How to pay less trading fees at Ekonnet.<br/><br/>
                    <h3>How to download the Ekonnet account fees</h3><br/>
                    You can view your fees on the Reports page when logged in to your Ekonnet account. Here, you can view and download a self-auditable ledger of every activity for selected currencies and activities for the specified period.
                    <br/><br/>
                    In addition, you can also use the Ekonnet Reporting Application to download a full and comprehensive report which will include your fees.
                    <br/><br/>
                    Note: You can read Full Tax Report — Ekonnet Reporting Application to learn more about utilising this tool.
                    <br/><br/>
                     If you have any questions, please feel free to reach out to Ekonnet Support. We are happy to help!
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

export default Fee3