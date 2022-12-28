import React from 'react'
import './GeneralNoticeAndTerms.css';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const EkonnetPayTerms = () => {
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
                    <h2>Ekonnet Pay Terms</h2>
                    <h5>Last updated 30 November, 2022</h5>
                    <p>IMPORTANT: By creating a Merchant Wallet or accessing or using any of the Merchant Services (each as defined below), you (“you”, “your”, “Merchant”) acknowledge that you have read, understand, and completely agree on behalf of the Merchant to these terms of service (as updated and amended from time to time, the “Merchant Terms of Service”). If you do not agree to be bound by these Merchant Terms of Service or with any subsequent amendments, changes or updates, you may not access or use any of the Merchant Services, and if you do access or use any of the Merchant Services, you will be bound by these Merchant Terms of Service, as updated and amended from time to time; your only recourse in the case of your unwillingness to continue to be bound by these Merchant Terms of Service is to stop using all of the Merchant Services and close your Merchant Wallet. These Merchant Terms of Service were last updated on November 24th, 2022.
                    <br/><br/>  
                    Only Eligible Merchants (as defined below) are permitted to access or use the Merchant Services. Any Person that is not an Eligible Merchant that utilizes the Merchant Services will be in breach of these Merchant Terms of Service and may have any Fiat, Digital Tokens (each as defined below), funds, proceeds or other property, confiscated (whether from a Merchant Wallet, Account or any other Digital Tokens Wallet).                    
                     <br/><br/>  
                     Ekonnet Pay (as defined below) acts as a provider of technology only, and cannot assist with queries regarding End Customers (as defined below), ensuring and verifying that payments are received by End Customers in full, issuance and conduct of refunds, terms of agreement between Merchants and End Customers, maintaining records on behalf of Merchants, ensuring that the sale of any goods or services purchased by any End Customer is compliant with all applicable Laws, including any applicable consumer protection laws or laws in the jurisdiction of the Merchant, End Customer complaints, Taxes and Tax reporting obligations or otherwise, in each case, irrespective of whether such End Customers are Existing Users (as defined below).
                    </p>

                </div>
            </div>
        </div>
    </setion>
    
    </>
  )
}

export default EkonnetPayTerms
