import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import lost6 from '../assets/lost6.png'

const Verification5 = () => {
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
                    <Nav.Link as={Link} to={"/how-to-verify-a-corporate-account-on-ekonnet"}><button>How to verify a corporate account on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-long-does-ekonnet-verification-take"}><button>How long does Ekonnet verification take</button></Nav.Link>
                    <Nav.Link as={Link} to={"/verification-frequently-asked-questions(FAQ)"}><button id='button_active'>Verification — Frequently Asked Questions (FAQ)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-master-and-sub-accounts"}><button>Ekonnet master and sub-accounts</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Verification — Frequently Asked Questions (FAQ)</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <h3>What is the KYC Verification</h3>
                    <p>On Ekonnet, verification refers to the more commonly known KYC, an acronym for “know your customer” or “know your client”. 
                    <br/><br/>
                    The verification process is used to validate a customer’s identity. It includes information such as a valid government-issued identification card, utility bills with name and residential address, bank statement, etc. 
                    <br/><br/>
                    <h3>— Is there a guide to the verification process?</h3>
                    <br/>
                    Yes! The video below will take you through the procedure.
                    <br/><br/>
                    <img src={lost6} alt="main-heading" className='img-fluid mx-auto' />
                    <br/><br/>
                    <h3>— Do I need to verify my account to start trading?</h3>
                    <br/>
                    As of November 9th, 2022, new users will be able to open a Ekonnet account at the Basic Access level in an access-only (view-only) mode. 
                    <br/><br/>
                    If you are using an individual account, you can upgrade your verification level to Basic Plus to access most of the available Ekonnet features such as deposits and withdrawals of listed cryptocurrencies including Tether tokens, make Exchange Trading and have access to the Ekonnet OTC market.
                    <br/><br/>
                    For corporate accounts, at least Intermediate level is required to access Ekonnet features, including deposits, withdrawals, trading, etc.
                    <br/><br/>
                    Further verification is required if you wish to deposit/withdraw fiat currencies (e.g. USD), for Margin Trading* and Margin Funding*, for selected utility and stablecoins and/or to access advanced trading options. 
                    <br/><br/>
                    *Important: 
                    <ul>
                        <li>Margin Trading, Margin Funding, Ekonnet Borrow, and Lending Pro requires at least Intermediate level verification for all Ekonnet accounts created after March 1, 2022. </li>
                    </ul>
                    Note: As per our Terms of Service, we reserve the right to ask for KYC information at any point in time if your account activity raises flags.<br/><br/>
                    <h3>— Which types of accounts are available?</h3>
                    <br/>
                    Ekonnet offers two types of verification options:
                    <br/><br/>
                    1. Individual account - for professionals and individual traders <br/>
                    2. Corporate account - for institutional investors and corporations<br/><br/>
                    <h3>— What levels of access to Ekonnet are available?</h3>
                    <br/>
                    For individual accounts:
                    <br/>
                    <ul>
                        <li>Basic Access;</li>
                        <li>Basic Plus; </li>
                        <li>Intermediate;</li>
                        <li>Full. </li>
                    </ul>
                    For corporate accounts:
                    <br/>
                    <ul>
                        <li>Basic Access;</li>
                        <li>Intermediate;</li>
                        <li>Full. </li>
                    </ul>
                    Each level of access offers different advantages. For a complete overview, please check our dedicated article.<br/><br/>
                    <h3>— How long does each verification level take?</h3><br/>
                    Basic Access is available immediately when creating an account and linking your email address.
                    <br/><br/>
                    Basic Plus offers an instant verification, only taking 10-30 seconds to complete. 
                    <br/><br/>
                     Intermediate and Full account verification levels take 2-3 working days.
                     <br/><br/> 
                     Note: Verification requests can take longer if they are incomplete or if they are submitted during periods of significant public interest in cryptocurrencies. You will be notified by email when your account is verified.
                     <br/><br/>
                    <h3>— What if my ID does not have an expiration date?</h3><br/>
                    If your ID does not have an expiration date, please select the last date available on our verification page.
                    <br/><br/>
                    <h3>— What if I don't have an Area Code for my phone number?</h3><br/>
                    Please enter a “0” instead of the area code. 
                    <br/><br/>
                    <h3>— Which documents do you accept as Proof of Residence?</h3><br/>
                    <ul>
                        <li>Utility bill (water, gas, mobile, internet, etc.);</li>
                        <li>Letter from a government department;</li>
                        <li>Tax statement;</li>
                        <li>Insurance statement;</li>
                        <li>Credit card statement;</li>
                        <li>A certified statement from a Notary;</li>
                    </ul>
                    Note: The Proof of Residence provided must be no older than 90 days.          
                    <br/><br/>
                    If you have any questions, please feel free to contact Ekonnet Support.


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

export default Verification5
