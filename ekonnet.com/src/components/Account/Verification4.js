import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import lost5 from '../assets/lost5.png'

const Verification4 = () => {
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
                    <Nav.Link as={Link} to={"/how-long-does-ekonnet-verification-take"}><button id='button_active'>How long does Ekonnet verification take</button></Nav.Link>
                    <Nav.Link as={Link} to={"/verification-frequently-asked-questions(FAQ)"}><button>Verification — Frequently Asked Questions (FAQ)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-master-and-sub-accounts"}><button>Ekonnet master and sub-accounts</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Verification at Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    {/* <h3>What is Ekonnet Turkiye</h3> */}
                    <p>On Ekonnet, verification refers to the more commonly known KYC, an acronym for “know your customer” or also “know your client”. 
                    <br/><br/>
                    As of November 9th, 2022, new users will be able to open a Ekonnet account at the Basic Access level in an access-only (view-only) mode.
                    <br/><br/>
                    You can upgrade your verification level to Basic Plus to access most of the available Ekonnet features such as deposits and withdrawals of listed cryptocurrencies including Tether tokens, make Exchange Trading and have access to the Ekonnet OTC market.
                    <br/><br/>
                    Further verification is required for users wishing to use Margin Trading and Funding, deposit/withdraw fiat currencies (e.g. USD), for selected utility and stablecoins, and/or to access advanced trading options.
                    <br/><br/>
                    Important:
                    <br/>
                    <ul>
                        <li>Margin Trading, Margin Funding, Ekonnet Borrow, and Lending Pro requires at least Intermediate level verification for all Ekonnet accounts created after March 1, 2022. Only Ekonnet accounts created before March 1st, 2022 will be able to access these features with Basic Plus verification.</li>
                    </ul>
                    For more information, please view Verification levels at Ekonnet. 
                    <br/><br/>
                    <h3>How long is the verification process</h3>
                    To verify for different levels of verification, you will need to submit relevant documents that our compliance team will review. The processing time for these requests vary depending on the level you are requesting: 
                    <br/><br/>
                    <ul>
                        <li>Intermediate and Full verification processing time for most applications is within 2-3 working days, depending on levels of public interest.</li>
                        <li>Basic Plus verification is instant and takes only 10-30 seconds to complete. </li>
                    </ul>
                    Note: Applications can take longer if they are incomplete or if they are submitted during periods of significant public interest in cryptocurrencies. We apologise for any prolonged delays and want to assure you that we are working tirelessly to verify your account.
                    <br/><br/>
                    <h3>Where can I see the progress of my verification request</h3>
                    You can monitor the progress of your account verification by going to your Verification page or by selecting Verification from the main navigation menu.
                    <br/><br/>
                    <img src={lost5} alt="main-heading" className='img-fluid mx-auto'/>
                    <br/><br/>
                    Here you will see your current verification level on the top right corner.
                    <br/><br/>
                    You will also be able to see the status of your provided documents in the Status field under each section.
                    <br/><br/>
                    Important: All the required sections need to be in Complete status for your verification request to begin the verification process.
                    <br/><br/>
                    Also, be sure to monitor your email for official correspondence from the Ekonnet compliance team requesting any additional documentation that may be required for verification. 
                    <br/><br/>
                    If you have any inquiries about your verification, please feel free to reach out to Ekonnet Support. We are happy to help!
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

export default Verification4
