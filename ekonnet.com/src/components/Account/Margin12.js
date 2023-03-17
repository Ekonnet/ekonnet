import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import margin16 from '../assets/margin16.png'


const Margin12 = () => {
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
                    <Nav.Link as={Link} to={"/Margin-Funding-on-Ekonnet"}><button>Margin Funding on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Is-it-possible-to-open-multiple-Margin-Trading-positions-for-the-same-pair-on-Ekonnet"}><button>Is it possible to open multiple Margin Trading positions for the same pair on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-is-the-base-price-at-Ekonnet"}><button>What is the base price at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/How-to-replace-funding-in-a-margin-position"}><button>How to replace funding in a margin position</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Using-Reserved-Funding-for-a-position-on-Ekonnet"}><button>Using Reserved Funding for a position on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/The-error-message-Insufficient-Balance-on-Ekonnet"}><button id='button_active'>The error message "Insufficient Balance" on Ekonnet</button></Nav.Link>         
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>The error message "Insufficient Balance" on Bitfinex</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    If you receive the error message “Insufficient Balance” when trying to open a margin position on Bitfinex, this may be due to various reasons.
                    <br/><br/>
                    <h3>What are the reasons for “Insufficient Balance” error</h3><br/>
                    <h3>No funding available</h3>
                    When trading on margin, you may need to receive funding from funding providers, depending on your position value and your collateral.
                    <br/><br/>
                    If funding is required, but there is no funding provider available, your order will be cancelled with the status message “Insufficient Balance”, which could mean no funding available when the order should have been executed.
                    <br/><br/>
                    <h3>Not enough tradable balance</h3>
                    To open positions on Bitfinex, you will need to have a tradable balance used as collateral to place orders for a certain amount.
                    <br/><br/>  
                    However, as the market moves, it may be that the value of your collateral decreases, and you no longer have enough tradable balance for executing the entire order.
                    <br/><br/>
                    <h3>Funding is over 0.75%</h3>
                    An order can be cancelled if the funding rate of all available funding is over 0.75%* and the Maximum Margin Rate option is checked in the Advanced Funding Options. When this is selected, the platform will not take funding over 0.75%* when opening new positions.
                    <br/><br/>
                    *The %/day rate can be manually adjusted.
                    <br/><br/>
                    <img src={margin16} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <h3>Market order max buy</h3>
                    Due to slippage, it is possible that a part of your order will be cancelled due to an insufficient tradable balance.
                    <br/><br/>
                    If you have any inquiries, please feel free to contact Bitfinex Support. We are always happy to help!                           
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

export default Margin12