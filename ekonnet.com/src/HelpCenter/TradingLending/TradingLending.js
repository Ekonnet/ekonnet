import React from 'react'
import background from '../../components/assets/pbg.jpg'
import section2 from '../../components/assets/footer_bg.jpg'
import '../HelpCenter__main.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Contact from '../../components/Contacts/Contact';

const TradingLending = () => {

    const Background = {
        backgroundImage: `url(${background})`,
        height: '40vh',
        marginTop: '0',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const Section2 = {
        backgroundImage: `url(${section2})`,
        height: "auto",
        marginTop: '0',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <>
            <section className="hepcenter__front" style={Background}>
                <div className="blur-main">
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
                </div>
            </section>


            <section className="" style={Section2}>
                <div className="content__blur">
                    <div className="container main-container">
                        <div className="row">
         <div className=" contact__contact col-4 mx-auto text-center">
                <div className="beforeLine"></div>
                <span>TRADING & LENDING</span>
            </div>
                        </div>
                        <div className="row gx-1 pt-3 pb-5">
               
                            <div className="col getingStartedDiv">
                                <h2 className="gettingStartHeading">
                                Trading
                                </h2>
                                <div className="cover pt-5 ">
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={18} /> <h5 className='sublink-getstart'>How to trade on Ekonnet</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={24} /> <h5 className='sublink-getstart'>Paper Trading at Ekonnet — test, learn and simulate trading strategies</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={18} /> <h5 className='sublink-getstart'>Ekonnet Order Types and Order Options</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={18} /> <h5 className='sublink-getstart'>Understanding Ekonnet Over the Counter (OTC)</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={22} /> <h5 className='sublink-getstart'>How to check you are paying the right trading fees on Ekonnet</h5>
                                        </div>
                                    </Nav.Link>

                                </div>

                            </div>
                            <div className="col  getingStartedDiv ">
                                <h2 className="gettingStartHeading">
                                Derivatives
                                </h2>
                                <div className="cover pt-5">
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={18} /> <h5 className='sublink-getstart'>How to move funds to the Derivatives wallet</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={18} /> <h5 className='sublink-getstart'>Derivatives Trading on Ekonnet</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={18} /> <h5 className='sublink-getstart'>The Ekonnet Derivatives trading interface</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={18} /> <h5 className='sublink-getstart'>What is Termination on Ekonnet</h5>
                                        </div>
                                    </Nav.Link>
                                  
                                </div>


                            </div>


                            <div className="col  getingStartedDiv ">
                                <h2 className="gettingStartHeading">
                                Ekonnet Securities
                                </h2>
                                <div className="cover pt-5">
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={18} /> <h5 className='sublink-getstart'>What is Ekonnet Securities</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={18} /> <h5 className='sublink-getstart'>How to create a Ekonnet Securities account</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={26} /> <h5 className='sublink-getstart'>Ekonnet Securities Restrictions: Prohibited Persons and Prohibited Jurisdictions</h5>
                                        </div>
                                    </Nav.Link>
                                    {/* <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={18} /> <h5 className='sublink-getstart'>What is Ekonnet Pulse</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={18} /> <h5 className='sublink-getstart'>How to create a pulse on Ekonnet Pulse</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-items-center">
                                            <IoIosArrowDroprightCircle size={18} /> <h5 className='sublink-getstart'>How to tip on Ekonnet Pulse</h5>
                                        </div>
                                    </Nav.Link> */}
                                    

                                </div>
                            </div>
                           
                        </div>
                       
                       
                       
                       
                    </div>
                  
                    
                </div>
               
            </section>
            <section>
            <Contact/>
           
            </section>




        </>
    )
}

export default TradingLending
