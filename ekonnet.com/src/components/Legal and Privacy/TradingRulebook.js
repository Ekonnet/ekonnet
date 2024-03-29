import React from 'react'
import './GeneralNoticeAndTerms.css';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
const TradingRuleBook = () => {
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
                    <Nav.Link as={Link} to={"/token-specific-terms"}><button>Token Specific Terms</button>    
                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/trading-rulebook"}><button id='button_active'>Trading Rulebook</button>
                    
                    </Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <h2>Trading Rulebook</h2>
                    <h5>Last updated 30 November, 2022</h5>
                    <p>Ekonnet (including the entities owning and operating the platform at and on Ekonnet.com, and the platform at and on Ekonnet.com itself, collectively, the “Exchange”) is committed to offering a free and fair market for users of the Ekonnet.com platform (the “Platform”), where the prices of digital tokens are determined by an open market and consumers through supply and demand. To help users find the best market prices for tokens, the Exchange’s trade surveillance program is introducing this Trading Rule Book to set out the compliance procedures that the Exchange will use to perform market surveillance functions for trades executed on the Platform. These market surveillance functions are intended to detect, address, and restrict market manipulation as defined in this Trading Rule Book. This Trading Rule Book is subject to change at any time, at the Exchange’s sole discretion, as circumstances develop and warrant. New rules may come into effect at any time, with notice.
                    <br/><br/>  
                     Digital tokens, (also known as digital assets, virtual assets, tokens, and virtual currency), are a nascent asset class for which clearly defined regulations related to market manipulation are currently unavailable. As part of the Exchange’s efforts to operate a free and fair market, Ekonnet is adopting existing rules from some of the world’s largest regulated markets to create and enforce best market practices within the Platform.
                     <br/><br/> 
                     Manipulation can involve various techniques to affect the supply of or demand for an asset. Such techniques can include spreading false or misleading information, and rigging quotes, prices, or trades to create a false or deceptive picture of the demand for an asset.  
                     <br/><br/>

                    </p>

                </div>
            </div>
        </div>
    </setion>
    
    </>
  )
}

export default TradingRuleBook

