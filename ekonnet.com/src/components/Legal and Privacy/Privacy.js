import React from 'react'
import './GeneralNoticeAndTerms.css';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Privacy = () => {
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
                    <Nav.Link as={Link} to={"/privacy"}><button id='button_active'>Privacy</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/cookies-policy"}><button>Cookies Policy</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/cookies-preferences"}><button>Cookies Preferences</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/token-specific-terms"}><button>Token Specific Terms</button>    
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/trading-rulebook"}><button>Trading Rulebook</button>
                    
                    </Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <h2>Ekonnet Privacy Statement</h2>
                    <h5>Last updated 30 November, 2022</h5>
                    <p>Thank you for visiting https://www.ekonnet.com/ (the “Site”). The Site is owned and operated by eFinex Inc. and its affiliates, (together “Ekonnet”). “we”, “our”, or “us” means either or respectively: eFinex Inc., BFXWW Inc., BFXNA Inc., Unus Sed Leo Limited and eFinex Financial Technologies Limited.
                    <br/><br/>  
                    This privacy notice (“Privacy Statement”) sets out the basis on which any Personal Information we collect from you (“you”, “your”, or “customer”) or that you provide to us, will be processed by us. By “Personal Information”, we mean any information which, either alone or in combination with other data, enables you to be directly or indirectly identified, for example your name, email address, username, contact details or any unique identifier such as an IP address, device ID or other online identifier
                     <br/><br/>  
                     Capitalized terms that are not defined in this Privacy Statement shall have the meaning ascribed in our Terms of Service (which can be found at https://www.ekkonet.com/legal/exchange/terms).
                     <br/><br/>
                     Please read the following carefully to understand what Personal Information we collect, how that Personal Information is used and the ways it can be shared by us.
                    </p>

                </div>
            </div>
        </div>
    </setion>
    
    </>
  )
}

export default Privacy
