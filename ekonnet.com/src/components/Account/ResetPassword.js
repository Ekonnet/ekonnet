import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import lost1 from '../assets/lost1.png'
import lost2 from '../assets/lost2.png'
import lost3 from '../assets/lost3.png'

const ResetPassword = () => {
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
                    <Nav.Link as={Link} to={"/how-to-reset-change-your-ekonnet-password"}><button id='button_active'>How to reset/change your Ekonnet password</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/what-is the-invalid-token-message"}><button>What is the Invalid Token message</button>
                    </Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>How to reset/change your Ekonnet password</h2>
                    <h5>Last updated 8 March, 2022</h5>
                    <p>A password on Ekonnet is needed to gain access to your Ekonnet account.
                    <br/><br/>
                    Note: Your passwords must be at least eight characters with one uppercase letter, one number, and one special character.
                    <br/><br/>
                    <h3>How to reset a password on Ekonnet</h3>
                    <br/>
                    If you have lost your password, you can reset it using the following link:<br/><br/>
                    https://setting.Ekonnet.com/password_reset.
                    <br/><br/>
                    Alternatively, you can find the Forgot Password? option on the login page and select this option following the instructions mentioned on the website.
                    <br/><br/>
                    <img src={lost1} alt="main-heading" className='img-fluid mx-auto' />
                    <br/>
                    Important: Requesting a password reset will put your account on a five-day withdrawal hold. For more information, please view Why do I have a withdrawal hold at Ekonnet.
                    <br/><br/>
                    <h3>How to change a password on Ekonnet</h3>
                    If you are logged into your Ekonnet account, you can change your password by going to your Account page.<br/><br/>
                    <img src={lost2} alt="main-heading" className='img-fluid mx-auto' />
                    <br/>
                    Important: You will need to enter your current Ekonnet password before changing it to a new one.<br/><br/>
                    <img src={lost3} alt="main-heading" className='img-fluid mx-auto' />
                    <br/>
                    Note: To change your password, you will need to enter your 2FA (Google Authenticator or U2F); therefore, you will need access to your 2FA token or key. 
                    <br/><br/>If you have lost both your password and your 2FA code, please get in touch with Ekonnet Support. Our team will be happy to assist.
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

export default ResetPassword
