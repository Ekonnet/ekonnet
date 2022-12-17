import React from 'react'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';
import { AiFillTwitterCircle } from 'react-icons/ai';


const Footer = () => {
    return (
        <>
            <section className='footer-section' >
                <div className="contact-sort">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h3>Ready to get start</h3>
                        </div>
                        <div>
                            <NavLink to="/">
                                <Button>Get Started</Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/* footer section */}
            <footer className='footer-color'>
                <div className="container footer-container">
                    <Row>
                           {/* ------------1st section--------------- */}
                        <Col className='footer-services'>
                            <h2>Services</h2>
                            <h5>Exchange</h5>
                            <h5>Otc</h5>
                            <h5>Staking</h5>
                            <h5>Security & Protection</h5>
                            <h5>Credit & Debit Card</h5>
                        </Col>
                          {/* ------------2nd section--------------- */}
                        <Col className='footer-services'>
                            <h2>Products</h2>
                            <h5>Exchange</h5>
                            <h5>Mobile App</h5>
                            <h5>Ekonnet Pay</h5>
                            <h5>Wallet</h5>
                        </Col>
                            {/* ------------3rd section--------------- */}
                        <Col className='footer-services'>
                            <h2>Cumpany</h2>
                            <h5>About</h5>
                            <h5>Affiliates</h5>
                            <h5>Careers</h5>
                            <h5>NewsLetter</h5>
                            <h5>our Fees</h5>
                        </Col>
                          {/* ------------4th section--------------- */}      
                        <Col className='footer-services'>
                            <h2>Support</h2>
                            <h5>Contact Us</h5>
                            <h5>Help Center</h5>
                        </Col>
                         {/* ------------5th section--------------- */}  
                        <Col className='footer-services'>
                            <h2>Legal & Privacy</h2>
                            <h5>General Notices & Terms</h5>
                            <h5>Ekonnet Pay Terms</h5>
                            <h5>Exchange Terms</h5>
                            <h5>Derivative Terms</h5>
                            <h5>Privacy</h5>
                            <h5>Cookies Policy</h5>
                            <h5>Cookies Preferences</h5>
                            <h5>Token Specific Terms</h5>
                            <h5>Trading Rulebook</h5>
                        </Col>
                    </Row>
                </div>
                <div className="footer-bottom">
                    <hr/>
                    <div className='d-flex justify-content-between'>
                    <Row >
                        <Col className='copyright'>
                            <p>Copyright © 2023 Ekonnet.  All rights reserved.</p>
                        </Col>
                        <Col className='social-icons'>
                        <div className='icon'>                        
                        <AiFillTwitterCircle/>
                        <AiFillTwitterCircle/>
                        <AiFillTwitterCircle/>
                        
                        
                        </div>
                        </Col>
                    </Row>
                    </div>
                </div>
            </footer>

        </>


    )
}

export default Footer;