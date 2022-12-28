import React from 'react'
import background from '../../components/assets/pbg.jpg'
import section2 from '../../components/assets/footer_bg.jpg'
import '../HelpCenter__main.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const GettingStarted = () => {

    const Background = {
        backgroundImage: `url(${background})`,
        height: '40vh',
        marginTop: '0',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const Section2 = {
        backgroundImage: `url(${section2})`,
        height: '100vh',
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
                                    <span><BiSearchAlt2 /> search</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="" style={Section2}>
                <div className="blur">
                    <div className="container main-container">
                        <div className="row gx-1 pt-5">
                            <div className="col getingStartedDiv">
                                <h2 className="gettingStartHeading">
                                    Getting Started
                                </h2>
                                <div className="cover pt-5">
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>What is Ekonnet</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>How to create an account on Ekonnet</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>A Beginner's guide to Ekonnet</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>How to earn on Bitfinex without trading</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>Tutorial: How to use Ekonnet</h5>
                                        </div>
                                    </Nav.Link>

                                </div>

                            </div>
                            <div className="col  getingStartedDiv ">
                                <h2 className="gettingStartHeading">
                                    Mobile App
                                </h2>
                                <div className="cover pt-5">
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>What is SWAPiX on the Ekonnet Mobile App</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>What is Lending on Ekonnet Mobile Lite</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>What is a Limit Order on Ekonnet Mobile Lite</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>How to sign up from the Ekonnet Mobile App</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>How to log in to the Ekonnet Mobile App</h5>
                                        </div>
                                    </Nav.Link>
                                </div>


                            </div>


                            <div className="col  getingStartedDiv ">
                                <h2 className="gettingStartHeading">
                                    Ekonnet Community
                                </h2>
                                <div className="cover pt-5">
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>The Ekonnet Affiliate Program</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>What is Bitrefill at Ekonnet</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>What are the Ekonnet Social Media Channels</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>What is Ekonnet Pulse</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>How to create a pulse on Ekonnet Pulse</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>How to tip on Ekonnet Pulse</h5>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={""}>
                                        <div className="d-flex gap-2 justify-content-start align-center">
                                            <IoIosArrowDroprightCircle size={23} /> <h5 className='sublink-getstart'>How to utilise Ekonnet Pulse on other social media platforms</h5>
                                        </div>
                                    </Nav.Link>

                                </div>
                            </div>
                        </div>
                       
                    </div>
                   
                </div>
               
            </section>





        </>
    )
}

export default GettingStarted
