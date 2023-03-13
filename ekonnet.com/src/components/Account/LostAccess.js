import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import lost from '../assets/lost.png'

const LostAccess = () => {
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
                    
                    <Nav.Link as={Link} to={"/lost-access-to-google-authenticator-2fa-of-a-ekonnet-account"}><button id='button_active'>Lost access to Google Authenticator 2FA of a Ekonnet account</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-reset-change-your-ekonnet-password"}><button>How to reset/change your Ekonnet password</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/what-is the-invalid-token-message"}><button>What is the Invalid Token message</button>
                    </Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Lost access to Google Authenticator 2FA of a Ekonnet account</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    {/* <h3>What is Ekonnet Turkiye</h3> */}
                    <p>Google Authenticator generates a six-to-eight-digit one-time password that users must enter in addition to their login and password when logging into Ekonnet and modifying services or security-related settings.
                    <br/><br/>
                    Google Authenticator is typically used as a phone application. If you've lost your phone or simply lost access to your Google Authenticator, you can reset your 2FA by visiting the following link: 
                    https://setting.Ekonnet.com/reset-2fa.
                    <br/><br/>
                    Alternatively, you can find the reset link on the login page as displayed below:
                    <br/><br/>
                    <img src={lost} alt="main-heading" className='img-fluid mx-auto' />
                    <br/>
                    Note: You qualify for a 2FA self-reset if your account total equity is below $10,000 equivalent; otherwise, please contact our customer support team. More information on the procedure is available at How to reset a 2FA at Ekonnet.
                    <br/><br/>
                    If you have any questions on how to reset your 2FA feel free to contact Ekonnet Support for assistance. We will be happy to help!
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

export default LostAccess
