import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import margin3 from '../assets/margin3.png'
import margin4 from '../assets/margin4.png'
import margin5 from '../assets/margin5.png'


const Margin2 = () => {
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
                    <Nav.Link as={Link} to={"/How-to-open-close-a-margin-position-at-Ekonnet"}><button id='button_active'>How to open/close a margin position at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-interest-rate-is-charged-on-margin-positions-on-Ekonnet"}><button>What interest rate is charged on margin positions on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/How-to-claim-a-margin-position-on-Ekonnet"}><button>How to claim a margin position on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Margin-call-policy-on-Ekonnet"}><button>Margin call policy on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-happens-to-a-Ekonnet-margin-position-if-the-underlying-funds-become-unavailable"}><button>What happens to a Ekonnet margin position if the underlying funds become unavailable</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Margin-Funding-on-Ekonnet"}><button>Margin Funding on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Is-it-possible-to-open-multiple-Margin-Trading-positions-for-the-same-pair-on-Ekonnet"}><button>Is it possible to open multiple Margin Trading positions for the same pair on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-is-the-base-price-at-Ekonnet"}><button>What is the base price at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/How-to-replace-funding-in-a-margin-position"}><button>How to replace funding in a margin position</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Using-Reserved-Funding-for-a-position-on-Ekonnet"}><button>Using Reserved Funding for a position on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/The-error-message-Insufficient-Balance-on-Ekonnet"}><button>The error message "Insufficient Balance" on Ekonnet</button></Nav.Link>         
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>How to open/close a margin position at Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>A margin position is a position you open on Ekonnet that uses the funds you have in your Margin wallet as collateral for opening a leveraged position. For more information on Margin Trading, please view our guide What is Margin Trading. 
                    <br/><br/>
                    *Important:
                    <ul>
                      <li>Margin Trading, Margin Funding, Ekonnet Borrow, and Lending Pro requires at least Intermediate level verification for all Ekonnet accounts created after March 1, 2022.<br/>
                      Only Ekonnet accounts created before March 1st, 2022 will be able to access these features with Basic Plus verification.</li>
                    </ul>
                    <h3>How to open a margin position</h3>
                    1. When trading on margin, firstly, make sure that your funds are in your Margin wallet. Learn more about how to transfer funds between your wallets here.
                    <br/><br/>
                    2. Next, go to the Trading page.
                    <br/><br/>
                    3. Click on your desired pair from the Tickers box.
                    <br/><br/>
                    4. In the Order Form, find Margin on the top right corner.
                    <br/><br/>
                    <img src={margin3} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    5. Choose the Order Type and fill in the Amount and Price, as you normally would when making an exchange trade.
                    <br/><br/>
                    6. Once your margin order executes in the order book, your position will be created, and you will find it under the Positions widget.
                    <br/><br/>
                    Note: Trading fees will be debited from the wallet when an order executes. The fees charged will depend on your trading volume in the last 30 days and can be viewed on the Fees page.
                    <br/><br/>
                    <img src={margin4} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Note: When your margin order executes and opens or increases your position, Ekonnet will automatically acquire funding for you at the best rate currently available (if it is required). Alternatively, you can manually reserve funding at any time and use it when you decide to open/increase a margin position.
                    <br/><br/>
                    <h3>How to close a margin position</h3><br/>
                    When you decide to close an opened position, you can either:
                    <br/>
                    <ul>
                      <li>use the Close button (a market margin sell or buy order will close a long or short position respectively); or</li>
                      <li>place an order in the opposite of your open position with the same amount as your open position.</li>
                    </ul>
                    When the order is completely filled, the position is closed, borrowed funds are repaid, and profit will be credited to / loss will be debited from your margin wallet balance.
                    <br/><br/>
                    <h3>Using the Close button as an example to close a position</h3><br/>
                    1. In your Positions widget, find the position you would like to close.
                    <br/><br/>
                    2. Scroll to the right side to find the x button that will read as Close this position with a MARKET order.
                    <br/><br/>
                    <img src={margin5} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    3. When a confirmation message appears, click on the Okay button to complete.
                    <br/><br/>
                    Alternatively, if you would like to claim your position, feel free to learn more about it in our guide How to claim a margin position on Ekonnet.
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

export default Margin2