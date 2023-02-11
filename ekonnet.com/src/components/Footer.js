import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { FaTelegram } from 'react-icons/fa';
import { BsReddit } from 'react-icons/bs';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


const Footer = () => {
    return (
        
        <>
        
            <section className='footer-section' >
                <div className="contact-sort">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='getstart-now'>
                            <h3>Ready to get start</h3>
                        </div>
                        <div className='btnstyle'>
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
                            <h2>Services & Support</h2>
                        <Nav.Link as={Link} to={"/exchange"} ><h5>Exchange</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/otc"}><h5>Otc</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/staking"}><h5>Staking</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/security-protection"}><h5>Security & Protection</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/credit-debit-card"}><h5>Credit & Debit Card</h5></Nav.Link>
                        {/* <Nav.Link as={Link} to={"/web-socket"}><h5>API & WebSockets</h5></Nav.Link> */}
                        {/* <Nav.Link as={Link} to={"/corporate-professional"}><h5>Corporate & Professional</h5></Nav.Link>  */}
                        <Nav.Link as={Link} to={"/contact-us"}><h5>Contact Us</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/help-center"}><h5>Help Center</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/bug-bounty"}><h5>Bug Bounty</h5></Nav.Link>
                        </Col>
                        {/* ------------2nd section--------------- */}
                        <Col className='footer-services'>
                            <h2>Products</h2>
                        <Nav.Link as={Link} to={"/exchange-trades"}><h5>Exchange Trades</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/margin-trades"}><h5>Margin Trades</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/margin-funding"}><h5>Margin Funding</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/blog"}><h5>Blog</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/mobile-app"}><h5>Mobile App</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/ekonnet-pay"}><h5>Ekonnet Pay</h5></Nav.Link>       
                        <Nav.Link as={Link} to={"/wallets"}><h5>Wallet</h5></Nav.Link>
                        {/* <Nav.Link as={Link} to={"/ekonnet-terminal"}><h5>Ekonnet Terminal</h5></Nav.Link> */}
                        <Nav.Link as={Link} to={"/tell-friend"}><h5>Tell-a-Friend</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/best"}><h5>Best</h5></Nav.Link>
                        </Col>
                        {/* ------------3rd section--------------- */}
                        <Col className='footer-services'>
                            <h2>Company</h2>
                        <Nav.Link as={Link} to={"/about"}><h5>About</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/affiliate"}><h5>Affiliates</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/career"}><h5>Careers</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/news-letter"}><h5>NewsLetter</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/fees"}><h5>Fees</h5></Nav.Link>
                        </Col>


                        {/* ------------4th section--------------- */}
                        <Col className='footer-services'>
                            <h2>Read</h2>
                            <Nav.Link as={Link} to={"/paper-trading"}><h5>Paper Trading</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/how-to-buy-bitcoin"}><h5>How to buy Bitcoin</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/how-to-buy-tether"}><h5>How to buy Tether</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/how-to-buy-ethereum"}><h5>How to buy Ethereum</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/how-to-buy-xrp"}><h5>How to buy XRP</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/how-to-buy-shiba-inu"}><h5>How to buy Shiba Inu</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/how-to-buy-gold"}><h5>How to buy Gold</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/how-to-buy-silver"}><h5>How to buy Silver</h5></Nav.Link>
                        </Col>
                        
                        {/* ------------5th section--------------- */}
                        <Col className='footer-services'>
                            <h2>Legal & Privacy</h2>             
                        <Nav.Link as={Link} to={"/general-notice-and-terms"}><h5>General Notices & Terms</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/ekonnet-pay-terms"}><h5>Ekonnet Pay Terms</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/exchange-terms"}><h5>Exchange Terms</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/derivative-terms"}><h5>Derivative Terms</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/privacy"}><h5>Privacy</h5></Nav.Link> 
                        <Nav.Link as={Link} to={"/cookies-policy"}><h5>Cookies Policy</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/Cookies-Preferences"}><h5>Cookies Preferences</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/token-specific-terms"}><h5>Token Specific Terms</h5></Nav.Link>
                        <Nav.Link as={Link} to={"/trading-rulebook"}><h5>Trading Rulebook</h5></Nav.Link>
                        </Col>


                        <Col className='footer-services'>
                            <h2>Multi-Trades Orders</h2>
                            <Nav.Link as={Link} to={"/market-order"}><h5>Market Order</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/limit-order"}><h5>Limit Order</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/stop-order"}><h5>Stop Order</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/stop-limit-order"}><h5>Stop limit Order</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/fill-or-kill-order"}><h5>Fill or Kill Order</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/immediate-cancellation-order"}><h5>Immediate Cancellation Order</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/trailing-limit-order"}><h5>Trailing Limit Order</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/active-book-order"}><h5>Active Book Order</h5></Nav.Link>
                            <Nav.Link as={Link} to={"/scaled-pro-order"}><h5>Scaled Pro Order</h5></Nav.Link>
                        </Col>
                    </Row>
                </div>
                <div className="footer-bottom">
                    <hr className='hr ' />
                    <Container>
                        <Row className='d-flex justify-content-between'  >

                            <Col className='copyright col-6'>
                                <p className='text-white'>Copyright © 2023 Ekonnet.  All rights reserved.</p>
                            </Col>
                            <Col className='social-icons col-6'>
                                
                                    <AiFillTwitterCircle size="1.5rem" />
                                    <AiFillInstagram size="1.5rem" />
                                    <BsFacebook size="1.3rem" />
                                    <TiSocialLinkedinCircular size="1.8rem" />
                                    <FaTelegram size="1.5rem" />
                                    <BsReddit size="1.5rem" />
                                
                            </Col>

                        </Row>
                        
                    </Container>

                </div>
            </footer>

        </>


    )
}

export default Footer;