import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const Depos = () => {
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
         <h3>Deposits/Withdrawals</h3>
         <h4>Crypto Deposits & Withdrawals</h4>
         <ul>
         <Nav.Link as={Link} to={""}><li>How to withdraw crypto from Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Internal transfer within Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to buy crypto on Ekonnet instantly</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is the minimum withdrawal at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Lightning Network BTC (LN-BTC) Deposits & Withdrawals</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Solana Program Library (SPL) Deposits & Withdrawals at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>EOS Deposits & Withdrawals at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Stellar Lumen (XLM) Deposits & Withdrawals at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ethereum Deposits at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Monero (XMR) Deposits & Withdrawals at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ripple (XRP) Deposits & Withdrawals at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What happens if I accidentally change my deposit address on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Where is my cryptocurrency deposit or withdrawal</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How long does it take for a cryptocurrency withdrawal to be processed on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Unconfirmed crypto deposit at Ekonnet — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Deposit of the wrong tokens or to the wrong addresses on Ekonnet — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Delisted token recovery on Ekonnet — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <h4>Wallets Transfers and Balances</h4>
          <Nav.Link as={Link} to={""}><li>Why are there different wallets at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to transfer funds between Ekonnet wallets</li></Nav.Link>
         <h4>Bank wires</h4>
         <Nav.Link as={Link} to={""}><li>How to make a Bank Wire Withdrawal at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to make a Bank Wire Deposit to Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Proof of Payment at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Wire deposit and withdrawal with OpenPayd on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Fiat on Ekonnet — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <h4>Token conversion</h4>
         <Nav.Link as={Link} to={""}><li>Unus Sed LEO Token Conversion</li></Nav.Link>
         <h4>FAQ</h4>
         <Nav.Link as={Link} to={""}><li>Deposit fees at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What does the status of my withdrawal mean on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Why was my withdrawal cancelled at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Why do I have a withdrawal hold at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to transfer funds to third-party wallets</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to transfer funds to third-party wallets</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Online payments with a Ekonnet account</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is Tether</li></Nav.Link>
         
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

export default Depos