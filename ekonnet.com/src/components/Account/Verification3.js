import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import lost3 from '../assets/lost4.png'

const Verification3 = () => {
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
                    <div className='verify'>
                    
                    <Nav.Link as={Link} to={"/verification-levels-at-ekonnet"}><button>Verification levels at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-verify-an-individual-ekonnet-account"}><button>How to verify an Individual Ekonnet account</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-verify-a-corporate-account-on-ekonnet"}><button id='button_active'>How to verify a corporate account on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-long-does-ekonnet-verification-take"}><button>How long does Ekonnet verification take</button></Nav.Link>
                    <Nav.Link as={Link} to={"/verification-frequently-asked-questions(FAQ)"}><button>Verification — Frequently Asked Questions (FAQ)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-master-and-sub-accounts"}><button>Ekonnet master and sub-accounts</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>How to verify a corporate account on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>The Ekonnet verification process is a standardised compliance measure for Anti-Money Laundering (AML), Know Your Customer (KYC), and Counter-Terrorist Financing (CTF) laws and regulations.
                    <br/><br/>
                    <h3>What documents are required for corporate account verification on Ekonnet:</h3>
                    <ul>
                        <li>Corporate documentation for the corporation and any shareholding entities (non-individual shareholders holding more than 10%): Certificate of Incorporation, Memorandum & Articles of Association, Director List, Shareholder List, and Certificate of Good Standing issued within the past 12 months;</li>
                        <li>Identification information: Two forms of photo ID, a proof of residential address no older than 90 days and a selfie photo for each corporate member;</li>
                        <li>Financial information for wire transfers and withdrawals from banking institutions (only required for Full verification level);</li>
                        <li>Additional required documents may vary according to the nature of the business.</li>
                    </ul>
                    In addition, identification information of the corporate members would also be required. Corporate members include:
                   <br/> <ul>
                        <li>Each of the director(s);</li>
                        <li>Significant shareholder (owning 10% or more of the company);</li>
                        <li>Authorized Signatory(ies)/Trader(s);</li>
                        <li>Ultimate Beneficial Owner(s).</li>
                    </ul>
                    Important: After completing the corporate verification form, an individual form for each director, significant shareholder(s) and Authorized Signatory(ies)/Trader(s), Ultimate Beneficial Owner(s) must be completed.
                    <br/><br/>
                    Note: The required documents list can be found as a downloadable PDF at the end of this article. <br/><br/>
                    <h3>How to verify a corporate account</h3>
                    1. Firstly, navigate to Account/Verification.
                    <br/><br/>
                    2. Then choose your account type Individual or Corporate — in this case, we will select Corporate.
                    <br/><br/>
                    3. Now you will see three levels of access; the default is Basic Access, then Intermediate and Full.<br/>
                    Note: Basic Access is a view-only mode. You can read more about Verification levels at Ekonnet here.
                    <br/><br/>
                    4. Finally, click on Start Verification to begin the process.
                    <br/><br/>
                    Important: A signed declaration confirming the accuracy of the given information is required before Ekonnet may proceed with the verification procedure.
                    <br/><br/>
                    Note: Verification processing timeframes might take up to one week, depending on the extent of public interest. The account verification process will begin once you have completed all sections. You can read more about verification timeframes here. <br/><br/>
                    <h3>Is my account already verified</h3>
                    From November 9th, 2022, new users will be able to open a Ekonnet account at the Basic Access level in an access-only (view-only) mode. 
                    <br/><br/>
                    You will need to upgrade your verification to Intermediate level which will enable you to:<br/><br/>
                    <ul>
                        <li>deposit and withdraw most listed cryptocurrencies on Ekonnet; </li>
                        <li>to make Exchange Trading;</li>
                        <li>to access the Ekonnet Over The Counter (OTC) Market;</li>
                        <li>to access Margin Trading and Funding*;</li>
                        <li>to utilise utility and stablecoins (e.g. LEO, Tether USDt tokens);</li>
                        <li>to access advanced trading options.</li>
                    </ul>
                    *Margin Trading, Margin Funding, Ekonnet Borrow, and Lending Pro requires at least Intermediate level verification for all Ekonnet accounts created after March 1, 2022. 
                    <br/><br/>
                    Important: You must complete additional Ekonnet Verification to Full level if you intend to deposit/withdraw fiat currency (e.g. USD).
                    <br/><br/>
                    For further details, please watch our guideline video below. 
                    <br/><br/>
                    <img src={lost3} alt="main-heading" className='img-fluid mx-auto' />
                    <br/>
                    If you have any questions about your corporate verification, contact Ekonnet support. We are happy to support you through this process!
                    </p>
                    <hr className='mt-5 mb-5'></hr>
                    <h4>Can't you find what you are looking for?</h4>
                    <p className='mt-0'>If you are having any problems or you have any questions, please talk to one of our friendly support representatives.
                    </p>
                    <Nav.Link as={Link} to={"/frequently-asked-question"}><button className='btn btn-primary mb-5'>Contact Support</button></Nav.Link>
                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default Verification3
