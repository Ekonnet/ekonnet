import React from 'react'
import background from '../components/assets/pbg.jpg'
import './HelpCenter__main.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { SiStartrek} from 'react-icons/si';
import { MdDoubleArrow } from 'react-icons/md';
import { IoArrowRedoCircle } from 'react-icons/io5';
import HelpCenterImg from '../components/assets/HelpCenter-Footer.png'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';


const HelpCenter = () => {

    const Background = {
        backgroundImage: `url(${background})`,
        height: '50vh',
        marginTop: '0',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

  



    return (
        <>
        <Helmet>
        <title>Ekonnet | Help Center </title>
      </Helmet>
            <section className="hepcenter__front" style={Background}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto welcome__main">
                            <h2 className="wellcome__ekonnet">
                                Welcome to the Ekonnet Help Center
                            </h2>
                            <div className="search__form search__icon-div ">
                                    <span><BiSearchAlt2 /></span>
                                    <span> Search</span>
                                </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="service__helpcenter-section mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-around gap-0.8">
                        <div className="col-lg-4 col-md-6 col-12 box__heplcenter ">
                            <Nav.Link as={Link} to={"/getting-started"}>
                            <div className='circle__icon'>
                                <SiStartrek className='icon' size="2rem" />
                            </div>
                            <h2 className="service__heplcenter text-start">Getting Started</h2>
                            <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='d-flex justify-content-end'>
                            <IoArrowRedoCircle size={30} className="div__arrow-icon"/>
                            </div>
                            </Nav.Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 box__heplcenter">
                        <Nav.Link as={Link} to={"/trading-lending"}>
                            <div className='circle__icon'>
                                <SiStartrek className='icon' size="2rem" />
                            </div>
                            <h2 className="service__heplcenter text-start">Trading & Lending</h2>
                            <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='d-flex justify-content-end'>
                            <IoArrowRedoCircle size={30} className="div__arrow-icon"/>
                            </div>
                            </Nav.Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 box__heplcenter">
                        <Nav.Link as={Link} to={"/web-socket"}>
                            <div className='circle__icon'>
                                <SiStartrek className='icon' size="2rem" />
                            </div>
                            <h2 className="service__heplcenter text-start">Api Documentation</h2>
                            <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='d-flex justify-content-end'>
                            <IoArrowRedoCircle size={30} className="div__arrow-icon"/>
                            </div>
                        </Nav.Link>
                        </div>
                    </div>
                </div>
            </section>



            <section className="account mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-around gap-1">
                        <h2 className='acount-main-heading'> Account</h2>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/account-accessess"}><h2 className='acount__heading'>  Account Access</h2></Nav.Link>
                            
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/verifications"}><h2 className='acount__heading'> Verification</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/reports"}><h2 className='acount__heading'>  Reports</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        
                    </div>
                    <div className="row d-flex justify-content-around gap-1 mt-3">
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/Deposits-Withdrawals"}><h2 className='acount__heading'>  Deposits/Withdrawals</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/Security"}><h2 className='acount__heading'>  Security</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/Lending"}><h2 className='acount__heading'>  Lending</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </section>



            <section className="account mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-around gap-1">
                        <h2 className='acount-main-heading'> Trading & Lending</h2>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/trading-overviews"}><h2 className='acount__heading'>  Trading Overviews</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/margin-trading"}><h2 className='acount__heading'>  Margin Trading</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/derivatives"}><h2 className='acount__heading'>  Derivatives</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                    
                    </div>
                    <div className="row d-flex justify-content-around gap-1 mt-3">
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/fee"}><h2 className='acount__heading'>  Fees</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/Oder-Type-and-Order-Option"}>  <h2 className='acount__heading'>  Oder Type and Order Option</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/ekonnet-honey"}><h2 className='acount__heading'>  Ekonnet Honey</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        
    
                    </div>
                    {/* <div className="row d-flex justify-content-around gap-1 mt-3">
                    <div className="col-4 accountDiv">
                            <h2 className='acount__heading text-center'>  Lending</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col-4 accountDiv"></div>
                        <div className="col-4 accountDiv"></div>
                    </div> */}
                </div>
            </section>



            <section className="account mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-around gap-1">
                        <h2 className='acount-main-heading'> More</h2>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/Mobiles"}><h2 className='acount__heading'>  Mobile App</h2></Nav.Link>v
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/Currencies-and-Token"}><h2 className='acount__heading'>  Currencies & Token</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col-4 accountDiv">
                        <Nav.Link as={Link} to={"/Other-Resources"}><h2 className='acount__heading'>  Other Resources</h2></Nav.Link>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        
                    </div>
                 
                </div>
            </section>



            <section className="account">
                <div className="container-fluid footer__contaioner">
                   <div className="container">
                    <div className="row d-flex justfy-content-evenly ">
                        <div className="col">
                        <img src={HelpCenterImg} alt="footer" width="250px" height="250px" className='img-fluid' />
                        </div>
                        <div className="col footer__data ">
                            <h2 className=''>Can't you find what you are looking for?</h2>
                            <p>If you are having any problems or you have any questions, please talk to one of our friendly support representatives.</p>
                            <button>contact suport</button>
                        </div>
                    </div>
                   </div>
                 
                </div>
            </section>



        </>
    )
}

export default HelpCenter
