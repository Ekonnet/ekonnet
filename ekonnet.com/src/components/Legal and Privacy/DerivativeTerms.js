import React from 'react'
import './GeneralNoticeAndTerms.css';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
const DerivativeTerms = () => {
  return (
    <>
    <Helmet>
        <title>Ekonnet | Legal And Privacy </title>
      </Helmet>
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
                    <Nav.Link as={Link} to={"/derivative-terms"}><button id='button_active'>Derivative Terms</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/privacy"}><button>Privacy</button>
                    
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
                    <h2>Derivatives Terms of Service</h2>
                    <h5>Last updated 30 November, 2022</h5>
                    <p>IMPORTANT: By creating or funding a Derivative Account or accessing or using any of the Derivative Services (each as defined below), you acknowledge that you have read, understand, and completely agree to these Derivative Terms of Service, as updated and amended from time to time. If you do not agree to be bound by these Derivative Terms of Service or with any subsequent amendments, changes or updates, you may not access or use any of the Derivative Services, and if you do access or use any of the Derivative Services, you will be bound by these Derivative Terms of Service, as updated and amended from time to time; your only recourse in the case of your unwillingness to be bound by these Derivative Terms of Service is to stop using all of the Derivative Services. These Derivative Terms of Service were last updated November 4, 2022.
                    <br/><br/>  
                    Only eligible Persons are permitted to access or use the Derivative Services. Any Person that is not eligible that utilizes the Derivative Services or that accesses the Derivative Site (defined below) will be in breach of these Derivative Terms of Service and may have any Fiat, Digital Tokens, Derivative Products, funds, proceeds or other property, confiscated (all as defined below).
                     <br/><br/>  
                     These Derivative Terms of Service apply to users of the Derivative web pages (the “Derivative Site”) of Ekonnet.com (all web pages at such address, including the Derivative Site, are sometimes referred to as the “Site”). You should read these Derivative Terms of Service carefully to determine which provisions apply to you. These Derivative Terms of Service should be read in conjunction with the terms of service applicable to other web pages of the Site (the “Other Site Terms of Service” and, together with these Derivative Terms of Service, the “Site Terms of Service”) which will continue to apply to you in respect of all other services on the Site, which shall be in addition to these Derivative Terms of Service and shall not be exclusive.
                    </p>

                </div>
            </div>
        </div>
    </setion>
    
    </>
  )
}

export default DerivativeTerms
