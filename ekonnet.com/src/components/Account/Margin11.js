import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import margin12 from '../assets/margin12.png'
import margin13 from '../assets/margin13.png'
import margin14 from '../assets/margin14.png'
import margin15 from '../assets/margin15.png'

const Margin11 = () => {
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
                    <Nav.Link as={Link} to={"/Using-Reserved-Funding-for-a-position-on-Ekonnet"}><button id='button_active'>Using Reserved Funding for a position on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/The-error-message-Insufficient-Balance-on-Ekonnet"}><button>The error message "Insufficient Balance" on Ekonnet</button></Nav.Link>         
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Using Reserved Funding for a position on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    Reserved Funding on Ekonnet refers to an allocated amount matched at a specified rate to be used whenever a leveraged position is open or increased and requires funding. Your reserved funding will appear under the Taken: Unused widget that can be found on your Funding page.
                    <br/><br/>
                    <img src={margin12} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <h3>Why is the reserved funding not being used in an active position</h3><br/>
                    The reason for your funding not being used in an active position is the absence of positions that require funding or the fact that the required funding amount has not met the minimum amount.
                    <br/><br/>
                    <h3>How to allocate reserved funding to my position</h3><br/>
                    1. Firstly, go to the Funding page and confirm that you have reserved the funding under Taken: Unused.
                    <br/><br/>
                    Note: Make sure you have reserved funding in the currency required for your position. 
                    <br/><br/>
                    <img src={margin13} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    2. Then, go to the Taken: Using widget to find the funding you are currently using for your margin long/short position.
                    <br/><br/>
                    <img src={margin14} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    3. Close your taken funding by clicking on the x button.
                    <br/><br/>
                    <img src={margin15} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    4. The system should automatically use your reserved funding in the Taken: Unused widget.
                    <br/><br/>
                    If you have any inquiries, please feel free to contact Ekonnet Support. We are always happy to help!                                    
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

export default Margin11