import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import derivative1 from '../assets/derivative1.png'
import derivative2 from '../assets/derivative2.png'
import derivative3 from '../assets/derivative3.png'
import derivative4 from '../assets/derivative4.png'
import derivative5 from '../assets/derivative5.png'

const Derivative1 = () => {
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
                    <Nav.Link as={Link} to={"/How-to-move-funds-to-the-Derivatives-wallet"}><button id='button_active'>How to move funds to the Derivatives wallet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Derivatives-Trading-on-Ekonnet"}><button>Derivatives Trading on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/The-Ekonnet-Derivatives-trading-interface"}><button>The Ekonnet Derivatives trading interface</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-is-Termination-on-Ekonnet"}><button>What is Termination on Ekonnet</button></Nav.Link>       
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>How to move funds to the Derivatives wallet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>The Ekonnet derivatives wallet is a wallet you use when trading in the derivatives market.
                    <br/><br/>
                    Important: In order to trade with derivatives, you will need to hold Tether USDt, Tether EURt tokens, or Bitcoin in your derivatives wallet. 
                    <br/><br/>
                    There are two ways that you can move your Bitcoin, Tether USDt, and/or Tether EURt tokens from your margin, exchange, and/or funding wallets to your derivatives wallet:
                    <ul>
                      <li>Quick Transfer</li>
                      <li>Balances Widget</li>
                    </ul>
                    <h3>Quick Transfer</h3>
                    <br/>
                    1. Go to your Wallets page.
                    <br/><br/>
                    2. Find the Quick Transfer tool available at the top. 
                    <br/><br/>
                    Note: Quick Transfer allows you to transfer funds from one of your wallets to another. 
                    <br/><br/>
                    3. Choose the Amount, the Currency (BTC, USDt, or EURt) and the From wallet that holds the funds you wish to transfer out of, and then select Derivatives as the To wallet.
                    <br/><br/>
                    <img src={derivative1} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    4. Click on Transfer, and now your funds will appear in your derivatives wallet, available for trading!
                    <br/><br/>
                    <h3>Balances Widget</h3><br/>
                    The balances widget can be found on your main trading page and displays all your account balances.
                    <br/><br/>
                    1. To move funds to your derivatives wallet, tap on USDt (EURt or BTC).
                    <br/><br/>
                    <img src={derivative2} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    2. Now, you will see multiple options available, and to proceed, you should select Transfer USDt (EURt or BTC).
                    <br/><br/>
                    <img src={derivative3} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    3. Select the wallet that holds your USDt (EURt or BTC) funds and from which you would like to transfer funds. In this example, it is the exchange wallet.
                    <br/><br/>
                    Then select the destination wallet that your funds will be going to — derivatives.
                    <br/><br/>
                    <img src={derivative4} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    4. Finally, you will need to confirm the amount, then click Transfer to complete the move.
                    <br/><br/>
                    <img src={derivative5} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    5. Great! Your funds will now appear in your derivatives wallet, available for trading.
                    <br/><br/>
                    If you have any questions, feel free to contact us at Ekonnet Support.


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

export default Derivative1