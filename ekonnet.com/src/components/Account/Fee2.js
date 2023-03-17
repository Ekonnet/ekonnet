import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import fee1 from '../assets/fee1.png'
import fee2 from '../assets/fee2.png'
import fee3 from '../assets/fee3.png'
import fee4 from '../assets/fee4.png'



const Fee2 = () => {
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
                    <div className='derivat'>  
                    <Nav.Link as={Link} to={"/How-to-pay-less-trading-fees-at-Ekonnet"}><button>How to pay less trading fees at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-fees-does-Ekonnet-charge"}><button id='button_active'>What fees does Ekonnet charge</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Ekonnet-Fees"}><button>Ekonnet Fees</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Does-Ekonnet-offer-traders-preferential-fee-discounts"}><button>Does Ekonnet offer traders preferential fee discounts</button></Nav.Link>              
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>What fees does Ekonnet charge</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    <h3>What are trading fees on Ekonnet</h3><br/>
                    Trading fees refer to fees deducted when you make a trade on Ekonnet and can be further defined as a maker fee or a taker fee.
                    <br/><br/>
                    <h3>What is a maker fee</h3><br/>
                    Maker fees are paid when you add liquidity to our order book by placing a limit order at or below the ticker price for buy and at or above the ticker price for sell.
                    <br/><br/>
                    Example: If the current market price is $2000 for one Bitcoin and you place a limit buy order for Bitcoin at $1995, this would be placing an order that sits in the order book.
                    <br/><br/>
                    Once the order executes when the market moves to $1995, you will pay the maker fee for your trade.
                    <br/><br/>
                    Note: The post-only limit order option is an option to ensure that your order is charged only the maker fee or else be cancelled (unless when matched with a hidden order).<br/><br/>
                    <h3>What is a taker fee</h3><br/>
                    Taker fees are paid when you remove liquidity from our order book by placing any order executed against an order of the order book.
                    <br/><br/>
                    Example: If the current market price is $2000 for one Bitcoin and you place a market buy order for Bitcoin at the current price, this would be taking the current order immediately from the order book, and therefore, you are a “taker”.
                    <br/><br/>
                    The market order will execute immediately, and you will pay the taker fee for your trade.
                    <br/><br/>
                    Note: If you place a hidden order, you will always pay the taker fee. If you place a limit order that matches a hidden order, you will always pay the maker fee.
                    <br/><br/>
                    <h3>What is the trading fee rate on Ekonnet</h3><br/>
                    The trading fee rate differs according to various factors, such as your trading activity in the last 30 days, the amount of UNUS SED LEO tokens you hold on your account, etc. 
                    <br/><br/>
                    For more information about the fee rate, please view our guide How to pay less trading fees at Ekonnet.
                    <br/><br/>
                    For a detailed overview of trading fees, please visit our Fees page.
                    <br/><br/>
                    <h3>Deposit fees on Ekonnet</h3><br/>
                    You pay no fees for cryptocurrency deposits to Ekonnet.
                    <br/><br/>
                    For fiat deposits, the fee is 0.100%, with a minimum fee of 60 (USD/Euro). 
                    <br/><br/>
                    <img src={fee1} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    For a detailed overview of deposit fees, please visit our Fees page.
                    <br/><br/>
                    <h3>Withdrawal fees on Ekonnet</h3><br/>
                    Withdrawal fees are fees paid to Ekonnet when making a withdrawal from the platform.
                    <br/><br/>
                    Different tokens have different fees depending on the network, transport methods, etc. For details, we advise you to check the Withdrawal page of the token you are looking to withdraw or have a look at our Fees page.
                    <br/><br/>
                    For fiat withdrawals, the fee is 0.100%, with a minimum fee of 60 (USD/Euro).
                    <br/><br/>
                    For express bank wire withdrawals, the fee is 1.000%, with a minimum fee of 100 (USD/Euro).
                    <br/><br/>
                    Withdrawals towards another Ekonnet user's address are free of charge. Learn more about internal transfers within Ekonnet here.
                    <br/><br/>
                    <h3>Margin Funding fees on Ekonnet</h3><br/>
                    As a funding recipient (a borrower that takes funds from the Ekonnet funding market), you will be charged funding interest in one-second increments. The funding interest rate is determined by you through the Funding page or can be automatically chosen by Ekonnet.
                    <br/><br/>
                    For more details, please view What interest rate is charged on margin positions.
                    <br/><br/>
                    As a funding provider (if you borrow your funds to be lent in the Ekonnet funding market), you will be charged a 15% fee on all generated funding earnings.
                    <br/><br/>
                    If you provided funding using a hidden offer, an 18% fee is charged on your funding earnings.
                    <br/><br/>
                    <img src={fee2} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Note: If a funding recipient borrows funds from the Ekonnet funding market and subsequently returns it without using the funds in a financed position, the funding recipient will be charged a minimum of one hour of interest. After one hour, interest will accrue in one-second increments. 
                    <br/><br/>
                    In such a case, the funding provider will receive the full hour’s interest minus the funding fee.
                    <br/><br/>
                    <h3>Derivative fees on Ekonnet</h3><br/>
                     Derivative trading fees are also charged depending on if your order is a taker or maker.
                     <br/><br/>
                     For makers, there are maker rebates which is a rebate that is paid to you upon execution of your order that was not executed immediately and contributed to the liquidity of the order book.
                     <br/><br/>
                     For takers, there are taker fees for removing liquidity from the order book by placing an order that is executed immediately against another order in the order book.
                     <br/><br/>
                    <img src={fee3} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    For details on the fees charged for derivative trading, please visit our Fees page.
                    <br/><br/>
                    For more information, you can also view the Derivative Fee and Margin Schedule.
                    <br/><br/>
                    <h3>Ekonnet Borrow fees</h3><br/>
                    If you are borrowing funds through Ekonnet Borrow, you will be charged the maker fee two times upon creating the loan and returning the loan.
                    <ul>
                        <li>Firstly, a loan creation fee that is the same amount as your maker fee as you would be creating a loan order position.</li>
                        <li>Then, when you return the borrowed funds to get your collateral back, you would need to claim the position and therefore pay maker fees again.</li>
                    </ul>
                    <img src={fee4} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    You will also be charged interest fees for your loan. Ekonnet will automatically route the best interest rate for your loan. Also, you can manually set up the interest rates depending on the Ekonnet funding market.
                    <br/><br/>
                    You can also choose a fixed interest rate or variable interest rate. Learn more about this on our Ekonnet Borrow guide.
                    <br/><br/>
                    <h3>OTC fees on Ekonnet</h3><br/>
                    There is no trading fee for OTC trades done through the Ekonnet OTC Desk. 
                    <br/><br/>
                    For OTC trades that need to be negotiated for instant liquidity, there is a fee of 10 basis points on both sides.
                    <br/><br/>
                     You can find more information about the Ekonnet OTC desk here or directly on your OTC page when logged in to your Ekonnet account.
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

export default Fee2