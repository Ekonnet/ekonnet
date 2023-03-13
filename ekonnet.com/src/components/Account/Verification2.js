import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
// import lost from '../assets/lost.png'

const Verification2 = () => {
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
                    <Nav.Link as={Link} to={"/how-to-verify-an-individual-ekonnet-account"}><button id='button_active'>How to verify an Individual Ekonnet account</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-verify-a-corporate-account-on-ekonnet"}><button>How to verify a corporate account on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-long-does-ekonnet-verification-take"}><button>How long does Ekonnet verification take</button></Nav.Link>
                    <Nav.Link as={Link} to={"/verification-frequently-asked-questions(FAQ)"}><button>Verification — Frequently Asked Questions (FAQ)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-master-and-sub-accounts"}><button>Ekonnet master and sub-accounts</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>How to verify an Individual Ekonnet account</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>The verification process for Ekonnet is a standardised compliance measure for Anti-Money Laundering (AML), Know Your Customer (KYC), and Counter-Terrorism Financing (CTF) laws and regulations.
                    <br/><br/>
                    Note: Processing times for verification takes 2-3 working days, depending on the level of public interest and verification type. 
                    <br/><br/>
                    Please see the article How long does Ekonnet verification take for more information.<br/><br/>
                    {/* <img src={lost} alt="main-heading" className='img-fluid mx-auto' /> */}
                    <h3>Is my account already verified</h3>
                   <br/>
                    As of November 9th, 2022, new users will be able to open a Ekonnet account at the Basic Access level in an access-only (view-only) mode.
                    <br/><br/>
                    You can upgrade your verification level to Basic Plus to access most of the available Ekonnet features such as deposits and withdrawals of listed cryptocurrencies including Tether tokens, make Exchange Trading and have access to the Ekonnet OTC market.                   
                    <br/>
                     <br/>
                     Important: You must upgrade your Ekonnet verification level if you intend: 
                     <br/>
                      <ul>
                      <li>to deposit/withdraw fiat currency (e.g. USD); </li>
                      <li>to access Margin Trading and Funding*;</li>
                      <li>to utilise utility and stablecoins; </li>
                      <li>to access advanced trading options. </li>
                      </ul>
                          <br/>
                        *Important: 
                        <br/>
                        <ul>
                        <li>Margin Trading, Margin Funding, Ekonnet Borrow, and Lending Pro requires at least Intermediate level verification for all Ekonnet accounts created after March 1, 2022.</li> 
                    </ul>
                    Read Verification levels at Ekonnet for further details.<br/><br/>
                    <h3>What information should be provided when verifying an account</h3>
                    
                    A complete list of the verification documents that are necessary for each level can be found here.
                    <br/><br/>
                    Individual account requirements differ based on whether you're verifying for an Intermediate or Full Verification level; however, you can review the list of the required information below:
                    <br/><br/>
                    <ul>
                        <li>Age: You must be at least 18 years old to open an account.</li>
                        <li>Personal Information: Your telephone number, email address, residential address are all required.</li>
                        <li>Identification: Two forms of valid government-issued identification with photo, i.e., passport, national ID card, driving license, residency card, employment permit card, etc.</li>
                    </ul>
                    Note: If you do not have two forms of ID, you can provide one and contact compliance@Ekonnet.com to arrange for a Skype call.
                    <br/><br/>
                    In addition, you will have to submit a selfie confirming your identity.<br/><br/> <ul>
                        <li>Bank Statement: A statement showing your name as the bank account holder as your deposit to Ekonnet must come from this account.</li>
                        <br/>Note: This is only a requirement if you are applying for the Full Verification level.<br/><br/>
                        <li>Proof of Residential Address: A statement can’t be older than three months from a utility, service company, licensed corporation or government authority indicating your name and residential address.</li>
                        <li>Declaration: A signed declaration confirming the accuracy of the submitted information is required, authorising Ekonnet to complete the verification process.</li>
                    </ul>
                    <h3>How to verify an account</h3>
                    1. Firstly, navigate to Manage Account/Verification.
                    <br/><br/>
                    2. Then, choose Individual as your account type.
                    <br/><br/>
                    3. Now, select the level of verification you need: Basic Plus, Intermediate or Full, and complete relevant sections presented as per the level.
                    <br/><br/>
                    Note: You can update anytime by uploading the remaining necessary information.
                    <br/><br/>
                    4. Once you complete the sections, click Submit to finalise your verification request.
                    <br/><br/>
                    Note: Only once all the sections are marked as submitted the account verification process can start. 
                    <br/><br/>
                    The Ekonnet Compliance team will contact you through email to request any further documents or confirm that your application was successful.
                    <br/><br/>
                    As per our Terms of Service, we reserve the right to ask for KYC information at any point in time if your account activity raises flags.  
                    <br/><br/>
                    If you have any questions about the verification procedure, feel free to contact Ekonnet Support.
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

export default Verification2
