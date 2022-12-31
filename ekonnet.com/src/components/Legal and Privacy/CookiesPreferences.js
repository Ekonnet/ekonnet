import React from 'react'
import './GeneralNoticeAndTerms.css';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const CookiesPreferences = () => {
  return (
    <>
    <section id='legal_hero' className='legal_hero'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                <h1>Legal and Privacy</h1>
                </div>
            </div>
        </div>
    </section>
    <setion id='side_section' className='side_section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='section'>
                    <Nav.Link as={Link} to={"/general-notice-and-terms"}><button>General Notices & Terms</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-pay-terms"}><button>Ekonnet Pay Terms</button> 
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/exchange-terms"}> <button>Exchange Terms</button>                    
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/derivative-terms"}><button>Derivative Terms</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/privacy"}><button>Privacy</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/cookies-policy"}><button>Cookies Policy</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/cookies-preferences"}><button id='button_active'>Cookies Preferences</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/token-specific-terms"}><button>Token Specific Terms</button>    
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/trading-rulebook"}><button>Trading Rulebook</button>
                    
                    </Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <h2>Cookies Preferences</h2>
                    <h5>Last updated 30 November, 2022</h5>
                    <p>Welcome to Ekonnet.com (“the Site”). This cookies policy should be read in conjunction with our Privacy Policy.
                    <br/><br/>  
                    The Site may use “cookies”. A cookie is a small text file containing a unique identification number that identifies a customer’s browser each time that customer visits a website. The use of cookies is industry standard practice and many major browsers are initially set up to accept them. You can reset your browser to either refuse to accept all cookies or to notify you when you have received a cookie. However, if you refuse to accept cookies, you may not be able to use some of the features available on the Site.
                     <br/><br/>  
                    If you choose to disable or block our cookies on your computer or other device you will need to do this through your browser. Click on the 'Help' menu on your particular browser to learn how to manage your cookie preferences. Alternatively, you can visit www.aboutcookies.org or www.youronlinechoices.eu for comprehensive information on how to manage cookies.
                     <br/><br/>
                    We set cookies (first party cookies) on web pages, however, where we require additional information, we may also allow other companies to host cookies on our Site (third party cookies). These companies have been carefully selected by us and are required to meet contractual obligations they have with us.
                    </p>

                </div>
            </div>
        </div>
    </setion>
    
    </>
  )
}

export default CookiesPreferences

