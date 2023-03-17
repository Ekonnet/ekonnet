import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import margin1 from '../assets/margin1.png'
import margin2 from '../assets/margin2.png'

const Margin1 = () => {
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
                    <Nav.Link as={Link} to={"/What-is-Margin-Trading-on-Ekonnet"}><button id='button_active'>What is Margin Trading on Ekonnet</button></Nav.Link>
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
                    <Nav.Link as={Link} to={"/The-error-message-Insufficient-Balance-on-Ekonnet"}><button>The error message "Insufficient Balance" on Ekonnet</button></Nav.Link>         
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>What is Margin Trading on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>Margin Trading, also known as Leveraged Trading, is a strategy of trading crypto assets that involves borrowing funds and allows traders to leverage their positions with higher funds than they have.
                    <br/><br/>
                    Ekonnet allows users with Basic Plus Verification* level and above to trade with up to 10x leverage by receiving borrowed funds from the peer-to-peer (P2P) market on the Margin Funding platform. 
                    <br/><br/>
                    *Important:
                    <ul>
                      <li>Margin Trading, Margin Funding, Ekonnet Borrow, and Lending Pro requires at least Intermediate level verification for all Ekonnet accounts created after March 1, 2022.<br/>
                      Only Ekonnet accounts created before March 1st, 2022 will be able to access these features with Basic Plus verification.</li>
                    </ul>
                    You can enter an order to borrow the desired amount of funding at the rate and duration of your choice, or you can simply open a position, and Ekonnet will take out funding for you at the best available rate at that time.
                    <br/><br/>
                    Note: Margin traders must be aware of and accountable for their positions and collateral conditions while trading on Margin.
                    <br/><br/>
                    Please read our Terms of Service and Risk Disclosure Statement to learn more. 
                    <br/><br/>
                    <h3>What is Initial Equity</h3><br/>
                    Initial Equity refers to the number of funds that a trader must personally put up from their assets. 
                    <br/><br/>
                    Note: The initial equity on Ekonnet varies according to the trading pair.
                    <br/><br/>
                    For example, if you want to trade BTC/USD, the initial equity required is 10% of the value of the position you wish to open, but on ETH/USD, the requirement is higher at 20%.<br/><br/>
                    <h3>What is Collateral</h3><br/>
                    Collateral refers to assets that a lender accepts as security for a loan.<br/>
                    These funds guarantee that you will always repay what you borrowed if you start losing money in a position.
                    <br/><br/>
                    The collateral required to open/increase a position is dependent on the Margin Trading pairs.
                    <br/><br/>
                    For example, if you have 1000 USD in your margin wallet, that 1000 USD will serve as collateral for opening margin positions to a maximum of 10:1, which is a margin position with a USD value of up to 10,000 USD.
                    <br/><br/>
                    The maximum leverage is slightly reduced when holding a currency as collateral that is not the quote currency of the position you wish to open. The quote currency is the second currency of the pair.
                    <br/><br/>
                    Note: The price of an asset is always the quote currency.
                    <br/><br/>
                    Additionally, haircuts, which are the difference between market value and collateral value, will be applied for specific tokens used as collateral for Margin Trading. Haircuts reduce the USD value of certain currencies by a set percentage, and the leverage will be applied to the new reduced value of the collateral. 
                    <br/><br/>
                    For example, ADA has a collateral haircut of 70%. This percentage means that its leverageable value is reduced by 70% when held as collateral. Therefore, if you hold $100 worth of ADA in the margin wallet, only $30 worth (30%) will contribute to your collateral.
                    <br/><br/>
                    <img src={margin1} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <h3>What type of position can I open</h3><br/>
                    As long as you have the initial equity in your margin wallet, Ekonnet's P2P funding market allows you to borrow funds to open long and short positions.
                    <br/><br/>
                    To open a long position means purchasing an asset now to sell it in the future at a higher price.
                    <br/><br/>
                    To open a short position means to sell an asset now to buy it back in the future at a lower price, thus making a profit on the difference.
                    <br/><br/>
                    <h3>What is a margin call and a force-liquidation</h3><br/>
                    A Margin Call occurs when the value of a trader’s net equity falls below the required amount. Therefore, where the net value of your account equity (Margin Wallet Balance + P/L (incl. Fees to close) - Funding costs) falls below 1.5x the minimum maintenance margin ratio, you will get a margin call by website notification and email (when possible).
                    <br/><br/>
                    Note: We cannot guarantee that you will receive an email in moments of high market volatility. It is up to you to monitor your margin ratio and maintain enough funds in the margin wallet.
                    <br/><br/>
                    Minimum Maintenance Margin = The minimum % net equity in your margin wallet (Net Equity = Margin Wallet Balance + P/L (incl. Fees to close) - Funding costs) required to keep positions open and avoid liquidation.
                    <br/><br/>
                    If the net value of your account equity falls below the minimum maintenance margin, your positions will be force-liquidated.
                    <br/><br/>
                    Force-liquidation happens if you fail to meet the maintenance margin requirements, the system will place an order to close your positions and liquidate them, debiting the loss from the margin wallet. 
                    <br/><br/>
                    For example, let’s say you open a long 40 BTC/USD position at 250 USD, with your current balance at 1000 USD, and you have 10x leverage, and the price starts dropping.
                    <br/><br/>
                    The position is worth 40 * 250 =10000 USD
                    <br/><br/>
                    10% of that is 1000 USD (your initial equity)
                    <br/><br/>
                    5% of that is 500 USD (BTC/USD maintenance margin)
                    <br/><br/>
                    If the loss on the position is 1000 - 500 = 500 USD, the net value of your margin balance will be 5% (500 USD) of the value of your position (10000 USD), and your position will be force-liquidated.
                    <br/><br/> 
                    This will happen when your position has a sale value of 10000 - 500 = 9500 USD.
                    <br/><br/>
                    So to calculate an approximation of your liquidation price, you can use the formula below:
                    <br/><br/>
                    Position sale value/ Position Size = Approximate Liquidation Price
                    <br/><br/>
                    9500 / 40  = 237.5 USD per BTC
                    <br/><br/>
                    Note: The price indicated on the Trading page is indicative and not a contractual price.
                    <br/><br/>
                    Please read more about our Margin Call Policy for more information.
                    <br/><br/>
                    Important: Your positions can also force-liquidate if the value of your collateral decreases and is no longer enough to support the position at the minimum maintenance ratio.
                    <br/><br/>
                    <h3>How to get funding for margin positions</h3><br/>
                    When you use Margin Trading, you will be borrowing funds where interest rates may be charged. 
                    <br/><br/>
                    The rate is determined by our P2P liquidity providing platform and depends on offer and demand. 
                    <br/><br/>
                    There are two ways you can borrow funds when you open a margin position (long or short):
                    <br/><br/>
                    1. The engine can automatically borrow at the best available rate.
                    <br/><br/>
                    2. You can decide to bid for funding on the Funding page. For more information, please refer to the article How to manually reserve funding. 
                    <br/><br/>
                    In addition, Advanced Funding Options, which provides quick access to funding parameters, allows you to see and select some conditions for the required Margin Funding. 
                    <br/><br/>
                    <img src={margin2} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Note: When a margin funding contract used in an active margin position expires, the system automatically renews the Margin Funding with the best available offer(s) at the time. You can learn more about Margin Funding here. 
                    <br/><br/>
                    If you have any questions about Margin Trading, please contact Ekonnet Support for assistance.

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

export default Margin1