import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import lost7 from '../assets/lost7.png'
import lost8 from '../assets/lost8.png'
import lost9 from '../assets/lost9.png'
import lost10 from '../assets/lost10.png'
import lost11 from '../assets/lost11.png'
import lost12 from '../assets/lost12.png'

const Verification6 = () => {
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
                    <Nav.Link as={Link} to={"/verification-frequently-asked-questions(FAQ)"}><button>Verification — Frequently Asked Questions (FAQ)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-master-and-sub-accounts"}><button id='button_active'>Ekonnet master and sub-accounts</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>What is a sub-account</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>On Ekonnet, a sub-account is a segregated account that is linked to another main account. The main account (the master account) and the sub-account will share trading volume and fee tiers, among other benefits. The sub-account feature also enables the master account to manage multiple trading accounts easily under one account.
                    <br/><br/>
                    <h3>What are the benefits of having a sub-account</h3>
                    <br/>
                    <ul>
                        <li>Combined trading volume:<br/>
                        Ekonnet will use the combined trading volume (sum of the volumes) of all linked accounts, offering a shared volume with fee discounts across all accounts based on the cumulative fee tier.<br/>
                        For more information on our fee tiers, look through our Fees page.</li><br/>
                        <li>Independent trading strategies:<br/>
                        Provides independence to experiment with various trading strategies at the same time. This allows you to track your strategies more accurately. 
                        </li><br/>
                        <li>Individual and merged reports:<br/>
                        Individual sub-account reports can be found on the Reports page and can be used to track sub-account activity.<br/>
                        Aggregated data such as volume and performance metrics for all sub-accounts can be found using the Reporting Application.
                        </li><br/>
                        <li>Shared verification information:<br/>
                        If your account is verified above the Basic Plus level, you can decide with which sub-accounts you want to share the same verification information. This allows your sub-accounts to benefit from the verified status advantages.</li><br/>
                        Note: Sub-accounts can also be verified individually.<br/>
                        <br/>
                        <li>Transfer funds free of charge:<br/>
                        Easily transfer funds between your master account and your sub-account wallets.</li><br/>
                        <li>Create sub-accounts for Paper Trading:<br/>
                        You can create a sub-account that can be used for Paper Trading, enabling you to simulate the Ekonnet platform features such as margin trading, margin funding, derivatives, the OTC desk and others. To learn more, read our Paper Trading guide. 
                        </li><br/>
                        <li>Participate in competitions:<br/>
                        Sub-accounts can also be created for competition purposes, and users can choose to mark these as a Trading Competition Account. For more information on Competitions, please view our Knowledge Base guides.</li><br/>
                        <li>Create a Merchant account to use Ekonnet Pay:
                        If you are a business and would like to use Ekonnet Pay, you will need to create a Merchant Account using the sub-account feature.<br/>
                        For more information, please read our guide Ekonnet Pay.
                        </li><br/>
                        <li>Share Pulses:<br/>
                        Basic Plus and higher verified sub-accounts can also share Pulses with charts of their exchange wallet composition and the portfolio exposure percentage.<br/>
                        To learn more, read our Ekonnet Pulse guide.</li>
                    </ul>
                    <br/>
                    <h3>What is a master account</h3>
                    <br/>
                    A master account is the main account that creates the sub-accounts. When creating sub-accounts, they will all be linked to the first account, which will become the master account.
                    <br/><br/>
                    <h3>What benefits does the master account have</h3><br/>
                    <ul>
                      <li>View and make changes to sub-accounts:<br/>
                      You can switch between accounts to access, view and make changes to the various sub-accounts.</li><br/>
                      Note: To switch to a sub-account, you need to have confirmed your sub-account email address and have 2FA enabled.<br/><br/>
                      <li>Set security restrictions:<br/>
                      Security restrictions to the sub-accounts include restricting withdrawals.</li><br/>
                      <li>Set the verification status:<br/>
                      Your sub-accounts can inherit the verification status of the master account.</li><br/>
                      <li>Only the master account can create sub-accounts:<br/>
                      The master account can create up to 100 sub-accounts. A sub-account cannot have its own sub-accounts.</li><br/>
                      Note: A sub-account can be unlinked to a master account and act as an independent account. Also, this will allow the account to create sub-accounts of its own.
                    </ul>
                    The master account can view all the available edits here on the Sub-accounts page:<br/><br/>
                    <img src={lost7} alt="main-heading" className='img-fluid mx-auto' />
                    <br/>
                    <h3>How to create sub-accounts on Ekonnet</h3><br/>
                    1. Firstly, log in to the account you want to become the master account. If you don’t have an account yet, you can easily sign up here. 
                    <br/><br/>
                    2. On the top right-hand corner, choose Sub-Accounts from the drop-down menu.<br/><br/>
                    <img src={lost8} alt="main-heading" className='img-fluid mx-auto' />
                    <br/><br/>
                    3. On the sub-account page, you will find the option to Create a new sub-account.
                    <br/><br/>
                    <img src={lost9} alt="main-heading" className='img-fluid mx-auto' />
                    <br/>
                    You will need to fill in the following fields for your new sub-account:
                    <br/>
                    <ul>
                      <li>Email</li>
                      <li>Username</li>
                      <li>Password</li>
                    </ul>
                    Important: A new email and username should be used when creating a sub-account.
                     <br/><br/>
                    Note: If you want to create a sub-account for specific purposes such as Paper Trading, Competitions or Ekonnet Pay (Merchant), you must select the option before creating the account. After creation, the sub-account type cannot be changed.
                    <br/><br/>
                    4. Once all the fields have been completed with valid information, click the Create button. 
                    <br/><br/>
                    Important: Always use strong and unique passwords. Do not share  passwords within different accounts. 
                    <br/><br/>
                    5. Once you have created a sub-account, it will be shown in your sub-accounts administration panel. Here, you can set different permissions according to the purposes of the different sub-accounts.
                    <br/><br/>
                    <img src={lost10} alt="main-heading" className='img-fluid mx-auto' />
                    <br/><br/>
                    <h3>Ekonnet master and sub-accounts — Frequently Asked Questions (FAQ)</h3><br/>
                    <h3>— How to transfer funds between master and sub-accounts?</h3>
                    <br/>
                    Funds can be transferred, with no fees, using the Quick Transfer widget on the Wallets page from the master to a sub-account and vice versa.<br/><br/>
                    You can select the linked Ekonnet account you would like to transfer funds to in the To Account section.<br/><br/>
                    <img src={lost11} alt="main-heading" className='img-fluid mx-auto' />
                    <br/><br/>
                    Notes: 
                    <br/>
                    <ul>
                      <li>Regardless of the verification status of sub-accounts, all cryptocurrencies, stablecoins and fiat currencies can be transferred between master and sub-accounts.</li><br/>
                      <li>Sub-accounts can not transfer funds to other sub-accounts.</li><br/>
                      <li>For security reasons, the account that initiates the funds transfer needs to have 2FA enabled (Google Authenticator or Universal 2nd Factor-U2F).</li><br/>
                    </ul>
                    Important: Even if you have disabled withdrawals on your security settings for sub-accounts, transfers to and from master accounts would still occur.<br/><br/>
                   <h3>— How do I access a sub-account?</h3><br/>
                     To enter the sub-accounts context switch, simply click on the username.
                     <br/><br/>
                    Note: Before you access the sub-account, you must first have confirmed the account’s email. Only then can you access and change security and verification settings. Once done, the Email Confirmed field will show a Yes value.
                    <br/><br/>
                    <h3>— Can a sub-account be unlinked?</h3><br/>
                    Yes, when a sub-account is unlinked, it will become a separate account and act independently.
                    <br/><br/>
                    Therefore, an unlinked sub-account will be able to create its network of sub-accounts.
                   <br/><br/>
                   Notes:<br/>
                   <ul>
                    <li>When a sub-account is unlinked, it will lose all previous KYC information.</li><br/>
                    <li>Only regular sub-accounts could be unlinked. It’s not possible to unlink Paper Trading, Competitions, and Ekonnet Pay (Merchant) sub-accounts. </li><br/>
                    <li>Once a sub-account is unlinked, it can not be linked again.</li><br/>
                   </ul>
                   <img src={lost12} alt="main-heading" className='img-fluid mx-auto' />
                   <br/><br/>
                  <h3> — Can I deactivate my master account?</h3><br/>
                  Yes, however if you keep your sub-accounts linked, they will be deactivated together with the master account.
                  <br/><br/>
                  If you wish to keep your sub-accounts, you must first unlink them in the Sub-Accounts list before the deactivation procedure.
                  <br/><br/>
                  Note: Sub-account verification information shared from your Master account will be lost and your unlinked sub-accounts’ verification will be reset to the sub-accounts’ original verification level.
                  <br/><br/>
                 <h3>— Can I deactivate my sub-account?</h3> <br/>
                 Yes, however you will need to unlink it from a Master account first, and after that deactivate option will appear. Note that only regular sub-account could be unlinked. It’s not possible to unlink and deactivate Paper Trading, Competitions and Ekonnet Pay (Merchant) sub-accounts.
                 <br/><br/>
                 
                 If you have any further questions, feel free to contact Ekonnet Support. We are happy to help!
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

export default Verification6
