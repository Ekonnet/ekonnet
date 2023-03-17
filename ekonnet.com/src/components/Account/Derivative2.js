import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import derivative6 from '../assets/derivative6.png'


const Derivative2 = () => {
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
                    <Nav.Link as={Link} to={"/How-to-move-funds-to-the-Derivatives-wallet"}><button>How to move funds to the Derivatives wallet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Derivatives-Trading-on-Ekonnet"}><button id='button_active'>Derivatives Trading on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/The-Ekonnet-Derivatives-trading-interface"}><button>The Ekonnet Derivatives trading interface</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-is-Termination-on-Ekonnet"}><button>What is Termination on Ekonnet</button></Nav.Link>       
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Derivatives Trading on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    <h3>What is Derivatives Trading</h3><br/>
                    A derivative is a financial product whose value is derived from an underlying asset.
                    <br/><br/>
                    Derivatives Trading enables traders to speculate on the future price of an asset by purchasing or selling derivative contracts to earn a  bigger return than if they purchased the underlying asset outright.
                    <br/><br/>
                    Trading in derivatives on Ekonnet is only available to Intermediate, and higher-level verified users in approved eligible jurisdictions. 
                    <br/><br/>
                    Important: To trade derivatives, you must hold Bitcoin (BTC), Tether USDt Token (USDt), or Tether EURt Token (EURt) in your Derivatives wallet.
                    <br/>
                     To learn how to transfer funds to your Derivatives wallet, please visit How to move funds to the Derivatives wallet.
                    <br/><br/>
                    <h3>How to open a short position in Derivatives Trading</h3><br/>
                    1. Firstly, go to the Derivatives page / Select the desired pair.<br/>
                    For example, BTC-PERP.
                    <br/><br/>
                    2. Next, in the Order Form, create a Derivative Sell order by indicating the order type, price, and amount.
                    <br/><br/>
                    <img src={derivative6} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    3. Then, by dragging the slider or typing a number into the leverage box, select the leverage you wish to trade with. The leverage will determine the amount of allocated collateral.
                    <br/><br/>
                    Note: The maximum leverage for derivatives trading is up to 100x, depending on the derivative pair. 
                    <br/><br/>
                    4. Finally, to place your order click Derivative Sell.
                    <br/><br/>
                    <h3>How to close a short position in Derivatives Trading</h3><br/>
                    To close the position, you can:
                    <ul>
                        <li>Use the Close button to initiate a Market Derivative Buy order, which will result in the closure of the short position; or</li>
                        <li>Place a Derivative Buy order for the same amount of BTC as your short position.</li>
                    </ul>
                    <h3>How to open a long position on Derivatives Trading</h3><br/>
                    To open a leveraged long position, follow the same steps above, but this time select Derivative Buy.
                    <br/><br/>
                    <h3>How to close a long position in Derivatives Trading</h3>
                    To close your position, you may:
                    <ul>
                        <li>Use the Close button to trigger a Market Derivative Sell order, which will close your long position; or </li>
                        <li>You can place a Derivative Sell order of the same amount of BTC as your long position.</li>
                    </ul>
                    <br/>
                    <h3>What currency can be held as collateral</h3><br/>
                    Collateral is the USDt, EURt or BTC in your Derivatives wallet that serves as security for the position.
                    <br/><br/>
                    The USDt, EURt or BTC collateral allocated to a position must be at least 1% of the USDt, EURt or BTC notional value of the position you  seek to open.
                    <br/><br/>
                    For example: If you have 100 USDt in your derivative wallet, you can use it as collateral to open positions with a leverage of up to 1:100. Margin positions with a USDt value of up to 10,000 USDt, for example.
                    <br/><br/>
                    Funding payments and trading fees will be debited from the collateral allocated to an active position if there are not enough funds in the derivatives wallet, which, as a result, will lower your collateral level. While the minimum maintenance margin is 0.5% according to our Derivative Fee and Margin Schedule, failure to maintain a collateral level above the maintenance margin (i.e. collateral allocated divided by position value, disregarding unrealized profits) will result in liquidation. In the event of a liquidation, you will forfeit your collateral as well as your profit in that position.
                    <br/><br/>
                    In contrast to our asset margin trading platform, our derivatives platform uses isolated margining, which means that you can commit a specified amount of collateral to a position rather than using all of the funds in the wallet to cover all active positions in the account.
                    <br/><br/>
                    Note: As a result of slippage, losses from manually executed trades can still be more than the allocated collateral.
                    <br/><br/>
                    For example: Let’s say you have 1000 USDt and you want to open two positions. 
                    <br/><br/>
                    The price of BTC is $8000. You can open positions with a total value of up to 100,000 USDt (1000x100).
                    <br/><br/>
                    The first position you open is a long 1.25 BTC/USDt worth 10,000 USDt, and you choose 20x leverage for that position. This allocates 500 USDt as collateral.
                    <br/><br/>
                    You now have 500 USDt available in your derivatives wallet. The price of ETH is $400. You decide to open another long for 40 ETH/USDt worth 16,000 USDt, using 80x leverage. This allocates 200 USDt as collateral, leaving 300 USDt available in your derivatives wallet.
                    <br/><br/>
                    <h3>Relevant links</h3><br/>
                    To learn more about Derivatives Trading, please visit the following links:<br/>
                    <ul>
                    <li>The Terms of Service for Derivatives can be found here:<br/>
                    https://www.ekonnet.com/legal/derivative/terms.</li><br/>
                    <li>Description of Derivative Products for various pairs:<br/>
                    https://www.ekonnet.com/legal/derivative/product.</li><br/>
                    <li>Please refer to our article on the Liquidation Policy as our Initial Equity and Notional Value requirements change according to the size of the position:<br/>
                    https://www.ekonnet.com/legal/derivative/fee.</li><br/>
                    <li>Here's where you can discover more about the Funding Payment Summary:<br/>
                    https://www.Ekonnet.com/legal/derivative/funding.</li><br/>
                    <li>Derivatives Risk Disclosure Statement for Derivative Products:
                    <br/>https://www.Ekonnet.com/legal/derivative/risk.</li><br/>
                      </ul> 
                      If you have any questions about Derivatives trading, feel free to contact Ekonnet Support for assistance.    
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

export default Derivative2