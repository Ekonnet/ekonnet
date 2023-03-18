import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
// import lost from '../assets/lost.png'

const Token = () => {
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
                    <div className='lost'>
                    
                    <Nav.Link as={Link} to={"/lost-access-to-google-authenticator-2fa-of-a-ekonnet-account"}><button>Lost access to Google Authenticator 2FA of a Ekonnet account</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-reset-change-your-ekonnet-password"}><button>How to reset/change your Ekonnet password</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/what-is the-invalid-token-message"}><button id='button_active'>What is the Invalid Token message</button>
                    </Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>What is the Invalid Token message</h2>
                    <h5>Last updated 13 March, 2022</h5>
                    {/* <h3>What is Ekonnet Turkiye</h3> */}
                    <p>The error message "Invalid token. Please ensure you are logging in with the same browser within 15 minutes" usually occurs when you are trying to log in to your account through email confirmation.
                    <br/><br/>
                    Make sure that you are opening the email confirmation link:
                    <br/><br/>
                    1. using the same browser that your Ekonnet website is trying to log in on. For example, if you have started to log in using a Google Chrome browser, make sure to open the confirmation link in your Chrome browser also;   
                    <br/>
                    2. within 15 minutes from when you received the confirmation email.
                    {/* <img src={lost} alt="main-heading" className='img-fluid mx-auto' /> */}
                    <br/><br/>
                    If you are using Microsoft Office 365/Outlook, the issue could appear because of a feature on your email account called Safelinks that alters the link we sent to you.
                    <br/><br/>
                    <h3>How to fix the Safelinks login issue</h3>
                    <br/><br/>
                    1. First of all, you can temporarily turn Safelinks off by signing in to https://outlook.live.com.
                    <br/><br/>
                    2. Then, select Settings/Premium/Security. 
                    <br/><br/>
                    3. There’s a toggle under Advanced Security that you can use to turn off Safelinks.
                    <br/><br/>
                    Note: Turning off Safelinks will only affect future messages you receive. It won’t change the link format in messages you’ve already received.
                    <br/><br/>
                    4. You will now need to make a new login attempt after you have disabled Safelinks.
                    <br/><br/>
                    5. Once you have successfully logged in to your Ekonnetaccount, we recommend that you enable 2FA as soon as possible to protect your account and ensure that future logins no longer require email confirmation.
                    <br/><br/>
                    Note: You can turn Safelinks back on again once the link has been used.
                    <br/><br/>
                    If you still have inquiries, please feel free to contact EkonnetSupport for further assistance. We are happy to help!
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

export default Token
