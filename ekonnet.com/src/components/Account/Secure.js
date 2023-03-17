import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const Secure = () => {
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
         <h3>Security</h3>
         <h4>Basics</h4>
         <ul>
         <Nav.Link as={Link} to={""}><li>Getting Set Up: Securing Your Bitfinex Account</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Security Features on the Bitfinex Platform</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Best security practices on Bitfinex</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to change the email linked to a Bitfinex account</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to protect a Bitfinex account from phishing scams</li></Nav.Link>
         
         <h4>Two-factor Authentication (2FA)</h4>
         <Nav.Link as={Link} to={""}><li>How to set up a 2FA at Bitfinex</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to reset a 2FA at Bitfinex</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to change a 2FA device at Bitfinex</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Google Authenticator 2FA Troubleshooting</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to set up Universal 2nd Factor (U2F) 2FA</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Universal 2nd Factor (U2F) Troubleshooting on Bitfinex</li></Nav.Link>

         <h4>Other security features</h4>
         <Nav.Link as={Link} to={""}><li>How to generate a Signed Message</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Whitelisting withdrawal addresses at Bitfinex</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to whitelist an IP address at Bitfinex</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>IP Address: Static vs Dynamic</li></Nav.Link>         
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

export default Secure