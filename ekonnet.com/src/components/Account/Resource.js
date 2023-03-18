import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'


const Resource = () => {
  return (
    <>
         <section id='web_hero' className='web_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
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
      <section>
        <div className='container'>
        <div className='row'>
         <div className='col-lg-2'>
         </div>
         <div className='col-lg-8 access'>
         <h3>Other Resources</h3>
         <h4>Competitions</h4>
         <ul>
         <Nav.Link as={Link} to={""}><li>Ekonnet & Origin Telegram Takeover AMA and Airdrop Quiz</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet & Spookyswap Telegram Takeover AMA and Airdrop Quiz</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet & The Hector Trading Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet & Retreeb Retweet Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Chain Telegram Takeover AMA and Airdrop Quiz</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Convergence Staking Airdrop - Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet x Fenerbahçe Trading Volume - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>GXT Telegram Takeover AMA and Airdrop Quiz</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Verasity Telegram Takeover & Treasure Hunt - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Score50K The $50,000 Fenerbahçe Token Giveaway - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Polygon Telegram Takeover - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet Pulse Content Competition</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>HEZ today, gone tomorrow - 100,000 HEZ up for grabs - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Global Grid Trading Competition - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>The Fellowship of Elrond - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>#GameOnUltra - Trading Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>The Crown of Elrond - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Fetch it! Once Again - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Fetch it! FET trading Competition - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Go Fetch it! 300,000 FET up for grabs - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Rey del Papel - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Win and trade like a LION - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Bitcoin Pizza Day, Bitcoin Pizza Yay - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>sTake a Ekonnet T-Shirt - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Score and Win with CHZ! - Competition Description</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Take Flight with TRX! Competition Description</li></Nav.Link>
         
         <h4>Other</h4>
         <Nav.Link as={Link} to={""}><li>Understanding Ekonnet Turkiye</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>2016 Security Breach Bitcoin Recovery — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ontario (Canada) Customers on Ekonnet — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ethereum 2.0 Staking on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Staking Rewards on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is Ekonnet Terminal</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to change Sweatcoin to Bitcoin on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet Delists BCI and BBN</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is the Ekonnet API</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet customer support</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>U.S. Person — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to deactivate a Ekonnet account</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Crypto terms definition</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is the BitLicense?</li></Nav.Link>
         <h4>Ekonnet Pay</h4>
         <Nav.Link as={Link} to={""}><li>The Ekonnet Pay APIs</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet Pay — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to configure Ekonnet Pay on Wordpress</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet Pay Customer Experience</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Understanding the Ekonnet Pay Merchant Dashboard</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to create a Ekonnet Pay Merchant Account</li></Nav.Link>



         
         </ul>
         </div>
         <div className='col-lg-2'>
         </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Resource