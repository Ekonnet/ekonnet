import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const Margin7 = () => {
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
                    <div className='marg'>  
                    <Nav.Link as={Link} to={"/What-is-Margin-Trading-on-Ekonnet"}><button>What is Margin Trading on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/How-to-open-close-a-margin-position-at-Ekonnet"}><button>How to open/close a margin position at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-interest-rate-is-charged-on-margin-positions-on-Ekonnet"}><button>What interest rate is charged on margin positions on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/How-to-claim-a-margin-position-on-Ekonnet"}><button>How to claim a margin position on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Margin-call-policy-on-Ekonnet"}><button>Margin call policy on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-happens-to-a-Ekonnet-margin-position-if-the-underlying-funds-become-unavailable"}><button>What happens to a Ekonnet margin position if the underlying funds become unavailable</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Margin-Funding-on-Ekonnet"}><button id='button_active'>Margin Funding on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Is-it-possible-to-open-multiple-Margin-Trading-positions-for-the-same-pair-on-Ekonnet"}><button>Is it possible to open multiple Margin Trading positions for the same pair on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-is-the-base-price-at-Ekonnet"}><button>What is the base price at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/How-to-replace-funding-in-a-margin-position"}><button>How to replace funding in a margin position</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Using-Reserved-Funding-for-a-position-on-Ekonnet"}><button>Using Reserved Funding for a position on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/The-error-message-Insufficient-Balance-on-Ekonnet"}><button>The error message "Insufficient Balance" on Ekonnet</button></Nav.Link>         
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Margin Funding on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    Margin Funding on Ekonnet allows users with Intermediate verification level* and above to provide funds through the peer-to-peer (P2P) funding platform for traders to use in Margin Trading. Funding providers will thereby earn interest that is generated from their provided funds. 
                    <br/><br/>
                    *Important: 
                     <ul>
                      <li>Margin Funding and Lending Pro requires at least Intermediate level verification for all Ekonnet accounts created after March 1, 2022.<br/>
                      Only Ekonnet accounts created before March 1st, 2022 will be able to access these features with Basic Plus verification.</li>
                     </ul>
                     <h3>How to use Ekonnet Margin Funding</h3><br/>
                     <h3>Step 1: Make a deposit</h3><br/>
                    To provide funds, you will firstly need to ensure that you have funds in your Ekonnet account. You can learn how to make a deposit here:
                    <ul>
                      <li>How to make a deposit at Ekonnet</li>
                      <li>How to make a Bank Wire Deposit to Ekonnet</li>
                    </ul>
                    Note: For cryptocurrency deposits, you can choose to create a deposit address for your Funding Wallet.
                    <br/><br/>
                    <h3>Step 2: Move funds to Funding Wallet</h3><br/>
                    There are different wallets on the Ekonnet platform, all with different purposes. The Funding Wallet is used for providing margin funding/financing to other traders. If needed, you can move your funds easily between wallets free of charge. Learn more in our guide How to transfer funds between Ekonnet wallets.
                    <br/><br/>
                    <h3>Step 3: Create a funding order</h3><br/>
                    Go to the Funding page to find the Funding order form. Here, you will specify the details of your funding order.  This includes:
                    <br/><br/>
                    <b>Rate:</b> This is the interest rate that you can manually enter. You can view the current funding market via the funding book;<br/>
                    <b>Period:</b> This is the duration that you wish to borrow your funds out for, the minimum is two days, and the maximum is 120 days;<br/>
                    <b>Amount:</b> The number of funds that you will be making available in the current offer.
                    <br/><br/>
                    For more details on the process of creating a funding order, please refer to our guide What is Margin Funding.
                    <br/><br/>
                    <h3>Step 4: Wait for your trade to match</h3><br/>
                    After creating an order, it will be placed in the order book and will match the same rate and period bid.<br/><br/>
                    <h3>Step 5: Track funding interest</h3><br/>
                    Funding interest is calculated using following formula:
                    <br/><br/>
                    amount * rate% * (seconds / seconds in a day) * (1 - fee%)
                    <br/><br/>
                    You can track your interest directly on the Reports page. More details can be found in our guide Funding Earning Credits and Reports.<br/><br/>
                    <h3>What is the Margin Funding supply at Ekonnet</h3><br/>
                    If all of the offers in the funding book are used up, and no new funding is available to sustain active margin positions, Ekonnet would become the lender of last resort for already active positions that need financing.
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

export default Margin7