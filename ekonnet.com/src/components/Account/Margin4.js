import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import margin7 from '../assets/margin7.png'
import margin8 from '../assets/margin8.png'
import margin9 from '../assets/margin9.png'

const Margin4 = () => {
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
                    <Nav.Link as={Link} to={"/How-to-claim-a-margin-position-on-Ekonnet"}><button  id='button_active'>How to claim a margin position on Ekonnet</button></Nav.Link>
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
                    <h2>How to claim a margin position on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>When you open a leveraged margin position with Ekonnet, you borrow funds through the Ekonnet P2P funding system. When you are ready to exit your position, you either need to close or claim the position to return the funds you have been borrowing.
                    <br/><br/>
                    <h3>What is the difference between claiming and closing a position</h3><br/>
                    <h3>What is closing a margin position</h3><br/>
                    To close a position, you will be trading against it. This means that you can use any available order type to execute a trade of the opposite direction and size.
                    <br/><br/>
                    You can also select the x button in your Positions widget, and this will close the position completely by executing a market order.
                    <br/><br/>
                    <img src={margin7} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Closing the position means that you buy or sell the asset and use the proceeds to settle your funding costs to the lender.
                    <br/><br/>
                    Note: The fees for closing a position could be either maker or taker, depending on the order type used to close it.<br/><br/>
                    <h3>What is claiming a margin position</h3><br/>
                    To claim a position means that you use the funds in your margin wallet to settle part of or the entire position as an exchange buy or sell.
                    <br/><br/>
                    Important: Claiming some or all of a position requires that you have enough realized profit and/or own enough funds in your margin wallet to satisfy the cost of the purchase/sale and the outstanding funding interests for your position. 
                    <br/><br/>
                    Notes:<br/>
                    <ul>
                      <li>For a short position, you will need to own the base currency in your margin wallet in order to claim successfully.</li>
                      <li>The only time you can claim a position when you do not own the quote currency is if you have a negative base price (i.e. when you have reduced your position at such a profit that you now have a negative base price - for long positions only);</li>
                      <li>You cannot use the unrealized profit to claim a position. When you claim a BTC/USD long position, for example, you own the asset in BTC, and the P/L will be reflected in a change in value to your wallet. The unrealized profit (in USD) is not credited and therefore cannot be used to claim.</li>
                    </ul>
                    <h3>How to claim a margin position on Ekonnet</h3><br/>
                    As mentioned above, to claim a margin position, you need to own the funds required to settle the purchase/sale in your margin wallet. For a long position, you need to own enough of the quote currency (margin wallet + P/L) to purchase at the base price value (amount*base price). For a short position, you need to own the base currency in the exact amount.
                    <br/><br/>
                    Let's use a long LTC/USD margin trade as an example.
                    <br/><br/>
                    1. Firstly, find the position you would like to claim in your Positions widget.
                    <br/><br/>
                    <img src={margin8} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    2. Check your wallets to ensure that you have the funds that will be used to claim the position within your margin wallet. 
                    <br/><br/>
                    3. Click on the downwards arrow icon that reads Claim this position.
                    <br/><br/>
                    4. A pop up will appear, indicating how much of the position you can claim based on the funds in your margin wallet. You can choose to claim the position fully or to claim it partially.
                    <br/><br/>
                    Note: When there are not enough funds in your margin wallet that can be used to claim a position, the following message will appear, requesting that you add more funds in order to either fully or partially claim a position:
                    <br/><br/>
                    <img src={margin9} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    5. If the claim is successful, the funds in your margin wallet will be debited, and you will be credited with the proceeds from your purchase/sale at the base price.<br/><br/>
                    <h3>What are the fees for claiming a position</h3><br/>
                    The fee for claiming a position is the maker fee and is based on the volume tier that you are currently on. The currency that the fees will be deducted depends on if it is a long position or a short position. 
                    <br/><br/>
                    Using BTC/USD as an example:
                    <br/>
                    <ul>
                      <li>For a BTC/USD short, claiming the position would result in crediting the USD value to your balance, i.e., the base price multiplied by the size of the position (sell size of the position). A 0.1% fee is taken in BTC.</li>
                      <li>For a BTC/USD long, claiming the position would result in crediting the BTC to your balance. A 0.1% fee is taken in USD.</li>
                    </ul>
                    If you have any questions, please feel free to reach out to us at Ekonnet Support. We are happy to help!
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

export default Margin4