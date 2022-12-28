import React from 'react'
import './GeneralNoticeAndTerms.css';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const GeneralNoticeAndTerms = () => {
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
                    <button>General Notices & Terms</button>
                    <ul>
                    <Nav.Link as={Link} to={"/general-notice-and-terms"}><li>Privacy Statement</li></Nav.Link> 
                    <Nav.Link as={Link} to={"/"}><li>Cookies Policy</li></Nav.Link>       
                    </ul >
                    <button>Ekonnet Pay Terms</button> 
                    <ul>
                    <Nav.Link as={Link} to={"/ekonnet-pay-terms"}><li>Ekonnet Pay Terms</li></Nav.Link> 
                    <Nav.Link as={Link} to={"/"}><li>Cookies Policy</li></Nav.Link>       
                    </ul>
                    
                    <button>Exchange Terms</button>
                    <ul>
                    <Nav.Link as={Link} to={"/"}><li>Privacy Statement</li></Nav.Link> 
                    <Nav.Link as={Link} to={"/"}><li>Cookies Policy</li></Nav.Link>       
                    </ul>
                    <button>Derivative Terms</button>
                    <ul>
                    <Nav.Link as={Link} to={"/"}><li>Privacy Statement</li></Nav.Link> 
                    <Nav.Link as={Link} to={"/"}><li>Cookies Policy</li></Nav.Link>       
                    </ul>
                    <button>Privacy</button>
                    <ul>
                    <Nav.Link as={Link} to={"/"}><li>Privacy Statement</li></Nav.Link> 
                    <Nav.Link as={Link} to={"/"}><li>Cookies Policy</li></Nav.Link>       
                    </ul>
                    <button>Cookies Policy</button>
                    <ul>
                    <Nav.Link as={Link} to={"/"}><li>Privacy Statement</li></Nav.Link> 
                    <Nav.Link as={Link} to={"/"}><li>Cookies Policy</li></Nav.Link>       
                    </ul>
                    <button>Cookies Preferences</button>
                    <ul>
                    <Nav.Link as={Link} to={"/"}><li>Privacy Statement</li></Nav.Link> 
                    <Nav.Link as={Link} to={"/"}><li>Cookies Policy</li></Nav.Link>       
                    </ul>
                    <button>Token Specific Terms</button>
                    <ul>
                    <Nav.Link as={Link} to={"/"}><li>Privacy Statement</li></Nav.Link> 
                    <Nav.Link as={Link} to={"/"}><li>Cookies Policy</li></Nav.Link>       
                    </ul>
                    <button>Trading Rulebook</button>
                    <ul>
                    <Nav.Link as={Link} to={"/"}><li>Privacy Statement</li></Nav.Link> 
                    <Nav.Link as={Link} to={"/"}><li>Cookies Policy</li></Nav.Link>       
                    </ul>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <h2>Ekonnet Privacy Statement</h2>
                    <h5>Last updated 30 November, 2022</h5>
                    <p>The following terms and conditions (the “API Terms of Service”) govern your access to, and use, of Ekonnet’s (meaning eFinex Inc., BFXWW Inc., BFXNA Inc., Unus Sed Leo Limited, eFinex Financial Technologies Limited, efinex Securities Ltd., as applicable) proprietary application programming interface, including our “REST API,” “Websocket API” and “efinex Pay API” (collectively, the “Bitfinex API”) and the related documentation, the current version of which is located at https://docs.ekonnet.com/docs (the “Ekonnet API Documentation”), all of which are designed to facilitate your access to, and use of the services and certain platforms available at ekonnet.com.
                    <br/><br/>  
                    These API Terms of Service supplements, and forms part of, the applicable terms of service, the current version of which is located at: (i) https://www.ekonnet.com/legal/exchange/terms; (ii) https://www.ekonnet.com/legal/derivative/terms or (iii) https://www.ekonnet.com/legal/securities/terms; (any of (i)-(iii), as applicable, “Terms of Service”), which includes terms and conditions governing your access to, and use of, our Ekonnet Pulse Service, the current version of which is located at: https://www.ekonnet.com/legal/exchange/pulse-terms (the “Ekonnet Pulse Terms of Service”). Accordingly, these API Terms of Service will be governed by and interpreted in accordance with those Terms of Service and use terms that are defined in the Terms of Service. In the event of any conflict or inconsistency between the API Terms of Service and the Terms of Service, these API Terms of Service will prevail, except that “Services” will include making available the Ekonnet API and Ekonnet API Documentation to you. 
                     </p>

                </div>
            </div>
        </div>
    </setion>
    
    </>
  )
}

export default GeneralNoticeAndTerms
