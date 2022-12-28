import React from 'react'
import background from '../components/assets/pbg.jpg'
import './HelpCenter__main.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { SiStartrek } from 'react-icons/si';
import { MdDoubleArrow } from 'react-icons/md';
import { IoArrowRedoCircle } from 'react-icons/io5';
import HelpCenterImg from '../components/assets/HelpCenter-Footer.png'


const HelpCenter = () => {

    const Background = {
        backgroundImage: `url(${background})`,
        height: '40vh',
        marginTop: '0',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }



    return (
        <>
            <section className="hepcenter__front" style={Background}>
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
            </section>


            <section className="service__helpcenter-section mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-around gap-0.8">
                        <div className="col-lg-4 col-md-6 col-12 box__heplcenter">
                            <div className='circle__icon'>
                                <SiStartrek className='icon' size="2rem" />
                            </div>
                            <h2 className="service__heplcenter">Getting Started</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='d-flex justify-content-end'>
                            <IoArrowRedoCircle size={30} className="div__arrow-icon"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 box__heplcenter">
                            <div className='circle__icon'>
                                <SiStartrek className='icon' size="2rem" />
                            </div>
                            <h2 className="service__heplcenter">Trading & Lending</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='d-flex justify-content-end'>
                            <IoArrowRedoCircle size={30} className="div__arrow-icon"/>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12 box__heplcenter">
                            <div className='circle__icon'>
                                <SiStartrek className='icon' size="2rem" />
                            </div>
                            <h2 className="service__heplcenter">Api Documentation</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='d-flex justify-content-end'>
                            <IoArrowRedoCircle size={30} className="div__arrow-icon"/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            <section className="account mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-around gap-1">
                        <h2 className='acount-main-heading'> Account</h2>
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Account Access</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Verification</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Reports</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        
                    </div>
                    <div className="row d-flex justify-content-around gap-1 mt-3">
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Account Access</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Verification</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col ">
                        </div>
                        
                        
                    </div>
                </div>
            </section>





            <section className="account mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-around gap-1">
                        <h2 className='acount-main-heading'> Trading & Lending</h2>
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Trading Overviews</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Margin Trading</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Derivatives</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        
                    </div>
                    <div className="row d-flex justify-content-around gap-1 mt-3">
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Fees</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Oder Type and Order Option</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Ekonnet Pay</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        
    
                    </div>
                    <div className="row d-flex justify-content-around gap-1 mt-3">
                    <div className="col accountDiv">
                            <h2 className='acount__heading text-center'>  Lending</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                    </div>
                </div>
            </section>



            <section className="account mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-around gap-1">
                        <h2 className='acount-main-heading'> More</h2>
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Mobile App</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Currencies & Token</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        <div className="col accountDiv">
                            <h2 className='acount__heading'>  Other Resources</h2>
                            <MdDoubleArrow className='arrow-icon'/>
                        </div>
                        
                    </div>
                 
                </div>
            </section>



            <section className="account mt-5">
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
