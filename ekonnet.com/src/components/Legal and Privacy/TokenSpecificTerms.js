import React from 'react'
import './GeneralNoticeAndTerms.css';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
const TokenSpecificTerms = () => {
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
                    <Nav.Link as={Link} to={"/derivative-terms"}><button>Derivative Terms</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/privacy"}><button>Privacy</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/cookies-policy"}><button>Cookies Policy</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/cookies-preferences"}><button>Cookies Preferences</button>
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/token-specific-terms"}><button id='button_active'>Token Specific Terms</button>    
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/trading-rulebook"}><button>Trading Rulebook</button>
                    
                    </Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <h2>Recovery Right Token(RRT) Terms</h2>
                    <h5>Last updated 30 November, 2022</h5>
                    <p>On August 2, 2016, certain property was stolen from eFinex Inc. (“eFinex”) and from BEKFXNA Inc. (collectively, the “Ekonnet Group”) and the Ekonnet Group’s customers (the “Event”). This stolen property is referred to herein as the “Losses.” Since the Losses took place, certain BEX token holders have converted their BFX tokens to shares of eFinex. RRTs have been awarded to those converting shareholders on a sliding scale.
                    <br/><br/>  
                    RRTs are digital tokens evidencing a limited-recourse, contingent obligation of the Ekonnet Group. RRTs are notional credits, are solely dependent on the Ekonnet Group’s recovery of Losses, and are subordinated to any and all other claims against the Ekonnet Group, including claims related to the Losses. Recovery, in this context, refers exclusively to recovery of the property taken during the Event. As of November 30, 2016, the total number of RRTs issued and outstanding is equal to 30,19,8.40.
                     <br/><br/>  
                    An RRT entitles the holder to a share of the recovery only after all issued and outstanding BEX tokens are redeemed. If sufficient recovery amounts remain after redemption of all BEX tokens, RRTs are entitled to share in the recovery at a rate of 1:1: one RRT entitles the holder to US$1.00 of recovery, 1/2 of an RRT entitles the holder to US$0.50 of recovery, etc. If the remaining recovery amount is less than the amount to cover RRTs on this basis, the remaining recovery amount shall be allocated among RRTs pro rata. (Recovery amounts available, if any, in excess of 1:1 to RRT holders shall belong to and be solely vested in the Ekonnet Group.) RRTs may be redeemed by the Ekonnet Group at any time at the Ekonnet Group’s sole option, using dollars, digital tokens, or other property at current market values, in the Ekonnet Group’s discretion.
                     <br/><br/>

                    </p>

                </div>
            </div>
        </div>
    </setion>
    
    </>
  )
}

export default TokenSpecificTerms

