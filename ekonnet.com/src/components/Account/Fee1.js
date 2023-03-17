import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'


const Fee1 = () => {
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
                    <Nav.Link as={Link} to={"/How-to-pay-less-trading-fees-at-Ekonnet"}><button id='button_active'>How to pay less trading fees at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-fees-does-Ekonnet-charge"}><button >What fees does Ekonnet charge</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Ekonnet-Fees"}><button>Ekonnet Fees</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Does-Ekonnet-offer-traders-preferential-fee-discounts"}><button>Does Ekonnet offer traders preferential fee discounts</button></Nav.Link>       
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>How to pay less trading fees at Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    Trading Fees are  the primary source of revenue for exchanges. They are typically charged on both fiat-crypto trades as well as crypto-crypto trades.
                    <br/><br/>
                    Ekonnet charges taker and maker fees based on the order type you place. <br/><br/>
                    <h3>How to pay fewer costs while trading on Ekonnet</h3><br/>
                    <h3>1. Increase your volume</h3>
                    Ekonnet has a range of fee tiers based on a user's 30-day volume, which is assessed every 12 hours. Increasing your volume will allow you to take advantage of a variety of discounts. 
                    <br/><br/>
                    You can find out what your account fee tier is by visiting the following page:
                    <br/><br/>
                    https://report.ekonnet.com/account_summary. 
                    <br/><br/>
                    <h3>2. Hold UNUS SED LEO tokens</h3><br/>
                    You may be eligible for one of three levels of taker fee discounts if you have UNUS SED LEO tokens in your account.<br/>
                    The levels will be determined by the average number of UNUS SED LEO tokens held in your account over the last 30 days, as well as the type of Ekonnet trade conducted.<br/>
                    This means that simply holding at least 1 Tether USDt LEO equivalent for the past 30 days qualifies your account for a 15% discount on taker trading fees for crypto-to-crypto and crypto-to-stable coin pairs.                    
                    <br/><br/>
                    Note: UNUS SED LEO benefits are only available for UNUS SED LEO holders; LEO-EOS and LEO-ERC20 tokens need to be converted to UNUS SED LEO in order to contribute to LEO discounts. Conversion can be done via the Currency Conversion tool found on the Wallets page.
                    <br/><br/>
                    Important: Trading discounts range from 15 to up to 25.000 %+ 6bps for Digital Token-to-Digital Token pairs, Digital Token-to-Stablecoin, and Digital Token-to-Fiat, depending on the tiers you're on.
                    <br/><br/>
                    Refer to the Knowledge Base and the Ekonnet Fees page for further details.
                    <br/><br/>
                    <h3>3. Take advantage of the Developers’ Reward</h3><br/>
                    If you use Ekonnet API to create API tools or trading libraries, you can take advantage of the Developers' Reward, which gives you a 5% rebate on any trading fees paid using Ekonnet API. Furthermore, if your tools are used by other traders, you might receive a further discount on your trading fees as well as additional earnings.
                    <br/><br/>
                    <h3>4. The Affiliate Program</h3><br/>
                    <ul>
                        <li>New users, who sign up on Ekonnet through our Affiliate Program, receive a 6% discount on trading costs.</li><br/>
                        <li>Existing users, who become Ekonnet Affiliates, can earn fees from up to three levels of connection within their network through a commission-based structure.</li>
                    </ul>
                    For further information, please see our Fees page at https://www.ekonnet.com/fees/, and if you have any questions, please feel free to contact Ekonnet Support.
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

export default Fee1