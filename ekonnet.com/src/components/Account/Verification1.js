import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
// import lost from '../assets/lost.png'

const Verification1 = () => {
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
                    
                    <Nav.Link as={Link} to={"/verification-levels-at-ekonnet"}><button id='button_active'>Verification levels at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-verify-an-individual-ekonnet-account"}><button>How to verify an Individual Ekonnet account</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-verify-a-corporate-account-on-ekonnet"}><button>How to verify a corporate account on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-long-does-ekonnet-verification-take"}><button>How long does Ekonnet verification take</button></Nav.Link>
                    <Nav.Link as={Link} to={"/verification-frequently-asked-questions(FAQ)"}><button>Verification — Frequently Asked Questions (FAQ)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-master-and-sub-accounts"}><button>Ekonnet master and sub-accounts</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Verification levels at Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    {/* <h3>What is Ekonnet Turkiye</h3> */}
                    <p>The verification process for Ekonnet is a standardised compliance measure for Anti-Money Laundering (AML), Know Your Customer(KYC), and Counter-Terrorism Financing (CTF) laws and regulations.
                    <br/><br/>
                    There are four levels available on Ekonnet:
                    <br/>
                    <ul>
                        <li>Basic Access;</li>
                        <li>Basic Plus;</li>
                        <li>Intermediate;</li>
                        <li>Full.</li>
                    </ul>
                    Important: From November 9th, 2022, new users will be able to open a Ekonnet account at the Basic Access level in an access-only (view-only) mode.
                    <br/><br/>
                    If you are either an Individual or a Corporate account holder, you can upgrade your verification level to get access to advanced trading features and a wider offer of products and digital assets. 
                    {/* <img src={lost} alt="main-heading" className='img-fluid mx-auto' /> */}
                    <br/><br/>
                    <h3>Ekonnet Verification levels comparison</h3>
                    <br/>
                    Note: Basic Access is a view-only mode.
                    <br/>
                    <table className='tb'>
                     <tr>
                        <td></td>
                        <td>Basic Plus</td>
                        <td>Intermediate</td>
                        <td>Full</td>
                        </tr>
                    </table>
                    <table className='tab'>
                        <tr>
                        
                        <th>Trading and Lending:</th>  
                        
                        </tr>
                        <tr>
                            <td>Exchange Trading¹</td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Margin Trading¹</td>	
                            <td></td>
                            <td>✔‎²</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>OTC Trading¹</td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Derivatives Trading³</td>	
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Margin Funding</td>	
                            <td></td>
                            <td>✔‎²</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Lending Pro</td>	
                            <td></td>
                            <td>✔‎²</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Ekonnet Borrow</td>	
                            <td></td>
                            <td>✔‎²</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Increase position</td>	
                            <td></td>
                            <td>✔‎²</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                        
                        <th>Deposits:</th> 
                        </tr>
                        <tr>
                            <td>Crypto transfers¹</td>	
                            <td>✔</td>
                            <td>✔⁵</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Tether tokens </td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Other stable tokens¹</td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>International bank transfers⁶</td>	
                            <td></td>
                            <td></td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>SEPA (OpenPayd)⁶</td>	
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>On ramp (happyCOINS)</td>	
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Credit/Debit Cards</td>	
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Mercuryo</td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Simplex</td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>OWNR Wallet</td>	
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>

                        <th>Withdrawals:</th>  
                        </tr>
                        <tr>
                            <td>Crypto transfers¹</td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Tether tokens </td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Other stable tokens¹</td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>International bank transfers⁶</td>	
                            <td></td>
                            <td></td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>SEPA (OpenPayd)⁶</td>	
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>        
                        <th>Other features:</th>  
                        </tr>
                        <tr>
                            <td>Ekonnet Pulse</td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Multipliers in Affiliate Program</td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Participate in Competitions⁴</td>	
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Bitrefill</td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Staking Rewards</td>	
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Ekonnet Pay</td>	
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>UNUS SED LEO discounts</td>	
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                        
                        <th>Security:</th> 
                        </tr>
                        <tr>
                            <td>UNUS SED LEO discounts</td>	
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                    </table>
                    Note: 
                    <br/>
                    1. Certain tokens necessitate at least the Basic Plus level and may be restricted to specific jurisdictions; check the requirements for each token.
                    <br/> <br/>
                    2. Intermediate verification is required to access Margin Trading, Margin Funding, Lending Pro, Ekonnet Borrow, and Increase Position. This applies to users who created an account after March 1, 2022. Basic Plus verification is required for accounts created between January 1st, 2022 and March 1st, 2022. Accounts created before these dates will be able to continue without having to upgrade their verification levels.
                    <br/> <br/>
                    3. Restrictions applied in certain jurisdictions.
                    <br/> <br/>
                    4. Restrictions applied in certain jurisdictions.
                    <br/> <br/>
                    5. As time is a critical component in trading, Intermediate level and above verified account users can enjoy fewer confirmations when depositing cryptocurrencies.
                    <br/> <br/>
                    6. Ekonnet supports fiat currencies such as USD/EUR/GBP/JPY/CNH.

                    <br/> <br/>
                    Note: The minimum deposit and withdrawal amount via an international bank transfer (manual transfer) in fiat currency is 10,000 USD/EUR/GBP, 1,000,000 JPY, 75,000 CNH and 10,000 TRY.<br/>
                    For Euro or Pound Sterling transactions using OpenPayd services via SEPA, there is no minimum or maximum deposit amount and the minimum withdrawal amount is €25/£25 with a transfer fee of €0.50/£0.50 per transaction. 
                    <br/> <br/>
                    Important: If you use the third-party service provider OpenPayd for your Euro or Pound Sterling transfer, you only need to verify your account at the Intermediate level or higher.
                    <br/> <br/>
                    7. This applies to withdrawal holds triggered after making specific security setting changes.
                    <br/><br/>
                    <h3>How to upgrade the verification level at Ekonnet</h3>
                    <br/>
                    On your Verification page, you may easily upgrade your account verification by uploading the information based on your level and the verification level you want to achieve.
                    <br/><br/>
                     To upgrade to the Basic Plus verification level,upload your: 
                     <br/>
                     <ul>
                        <li>Official Photo ID;</li>
                        <li>Biometric photo (selfie);</li>
                        <li>Phone Number;</li>
                        <li>Residence Address.</li>
                    </ul>
                
                    To upgrade to the Intermediate verification level, you need to upload:
                     <br/>
                     <ul>
                        <li>All information in Basic Plus Verification Level;</li>
                        <li>Second official photo identification;</li>
                        <li>Proof of Address;</li>
                        <li>Financial Questionnaire;</li>
                        <li>KYC Declaration. </li>
                    </ul>
                    To upgrade to the Full verification level, you need to upload:                     <br/>
                     <ul>
                        <li>All information in Intermediate verification level, and:</li>
                        <li>Bank Statement.</li>
                    </ul>
                    If you have any questions regarding the Ekonnet Verification process, contact Ekonnet Support for assistance. 
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

export default Verification1
