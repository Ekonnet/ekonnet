import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const AccountAccessess = () => {
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
         <h3>Account Access</h3>
         <ul>
         <Nav.Link as={Link} to={"/lost-access-to-google-authenticator-2fa-of-a-ekonnet-account"}> <li>Lost access to Google Authenticator 2FA of a Ekonnet account</li></Nav.Link>
         <Nav.Link as={Link} to={"/how-to-reset-change-your-ekonnet-password"}><li>How to reset/change your Ekonnet password</li></Nav.Link>
         <Nav.Link as={Link} to={"/what-is the-invalid-token-message"}><li>What is the Invalid Token message</li></Nav.Link>
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

export default AccountAccessess
