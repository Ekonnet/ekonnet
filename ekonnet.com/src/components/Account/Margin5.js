import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import margin10 from '../assets/margin10.png'

const Margin5 = () => {
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
                    <Nav.Link as={Link} to={"/Margin-call-policy-on-Ekonnet"}><button  id='button_active'>Margin call policy on Ekonnet</button></Nav.Link>
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
                    <h2>Margin call policy on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    <h3>What is a margin call</h3><br/>
                    A margin call is a notification that a position is in danger of liquidation. 
                    <br/><br/>
                    To avoid the liquidation of your position, you must maintain the minimum maintenance margin. The maintenance margin is the minimum net equity* required to keep the position open, and this is represented as a percentage of the value of your open positions. 
                    <br/><br/>
                    * Net Equity = Margin Wallet Balance + P/L (incl. Fees to close) - Funding costs
                    <br/><br/>
                    You will receive a margin call (website and email notification when possible) when your net equity drops below 1.5x the maintenance margin of the value of your open positions. 
                    <br/><br/>
                    For example, the maintenance margin for BTC/USD is currently 5% - when your net equity is worth 5% of the value of your open position. You will be margin called for your BTC/USD position at 7.5%. 
                    <br/><br/>
                    Note: When you have multiple positions open, the minimum maintenance margin is a weighted average of all positions.
                    <br/><br/>
                    When the net value of your account equity falls below the required maintenance margin, your positions will be force-liquidated.
                    <br/><br/>
                    Important: In the case of a sudden and wide market movement, the email notification might not be delivered quickly enough or not delivered at all if your account equity drops below 1.5x the maintenance margin. Market movement such as this could lead to the force-liquidation of your positions within seconds. During periods of high volatility, make sure to hold enough collateral to sustain your positions and monitor the website for further notifications. 
                    <br/><br/>
                    The maintenance margin varies according to the trading pairs you open positions with. If you are trading pairs that Ekonnet considers higher risk, you may see your position liquidated at a higher maintenance margin. With an open margin position, you will see an estimated liquidation price (the price at which your position would be liquidated).
                    <br/><br/>
                    Note: The liquidation price displayed is only indicative and not a contractual price.
                    <br/><br/>
                    <h3>What is the Required Equity</h3><br/>
                    For instance, if a margin position is worth $500 and a maintenance margin value of 15%, the Margin Wallet net equity must not fall below $75 to prevent a forced liquidation.
                    <br/><br/>
                    When a position is force-liquidated, the system places a limit order at the zero-equity price or a market order for smaller positions.
                    <br/><br/>
                    <h3>Which currencies are considered high-risk on Ekonnet</h3><br/>
                    Each trading pair has its own margin requirements. For certain pairs, the requirements are adjusted according to their current market risk.
                    <br/><br/>
                    You can see the Risk-Adjusted Initial Margin & Risk-Adjusted Maintenance Margin in the summary box, representing the new requirements.
                    <br/><br/>
                    Important: This list of currencies considered to be risk currencies are subject to change.
                    <br/><br/>
                    <img src={margin10} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    If you have any questions, please feel free to reach out to Ekonnet Support. We are happy to assist you through this process!
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

export default Margin5