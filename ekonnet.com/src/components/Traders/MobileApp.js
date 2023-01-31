import React, { useEffect } from 'react'
import './MobileApp.css';
import Button from 'react-bootstrap/Button';
import Mobile from "../assets/m1.png";
import Bg2 from "../assets/service-bg.png";
import BgSection2 from "../assets/icon-bg.png";
import mobile_crypto from "../assets/process-main.png";
import mobile_crypto2 from "../assets/process-man.png"
import mobile_crypto3 from "../assets/mobileApp-section3.png"
import mobile_crypto4 from "../assets/Bitcoin-app.png"
import CoinAnimate from "../assets/coin.png";

import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MobileApp = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section id='mobile' className='mobile bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Bg2})` }}>
                <div className='container'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className=''>
                            <h4 className='text-[#25CBD3]'>Buy crypto at true cost</h4>
                            <h1 className='text-white'>The World's Fastest Growing Crypto iOS and Android apps.</h1>

                            <p>Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using bank transfers or
                                your credit/debit card.
                            </p>
                            <Button className='get-start'>Trade Now</Button>
                        </div>
                        <div className=' ' data-aos="zoom-in-up">
                            <div className="mobileApp-img">
                                <div className="innerMobile">
                                    <img src={Mobile} alt='' className='img-fluid'></img>
                                </div>

                                <AnimatePresence>
                                    <motion.div
                                        initial={{ y: 100 }}
                                        animate={{ y: 10 }}
                                        exit={{ y: 100 }}
                                        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", type: "tween", bounce: 0.25 }}>
                                        <img src={CoinAnimate} alt='' className='innerMobile2'></img>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='ultimate_crypto' className='ultimate_crypto bg-[#14151B] pt-[100px] pb-[100px]' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 order-lg-1 order-2' data-aos="zoom-in-up">
                            <div className="outer-finger ">
                                <div className="innerImg1">
                                    <img src={mobile_crypto} alt='mobile_crypto' className='img-fluid'></img>
                                </div>

                                <AnimatePresence>
                                    <motion.div
                                        initial={{ y: -30}}
                                        animate={{ y: 20 }}
                                        exit={{ y: -30 }}
                                        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", type: "tween", bounce: 0.25 }}
                                        className="innerImg2">
                                        <img src={mobile_crypto2} alt='mobile_crypto' className='img-fluid'></img>

                                    </motion.div>
                                </AnimatePresence>

                            </div>
                        </div>
                        <div className='col-lg-6 order-lg-2 order-1'>
                            <div className="box-crypto-app bg-no-repeat bg-cover" style={{ backgroundImage: `url(${BgSection2})` }} >
                                <div className="inner-content-app ">
                                    <h1>The ultimate crypto experience at your fingertips</h1>

                                    <div className="row flex justify-center items-center flex-column gap-4 pt-2 ">
                                        <div className="col-11 ml-auto bg-[#100129] rounded-[10px] py-3">
                                            <p>The Ekonnet mobile app provides the full functionality of the Ekonnet platform for seamless 'on-the-go' trading.</p>
                                        </div>

                                        <div className="col-11 ml-auto bg-[#100129] rounded-[10px] py-3">
                                            <p>Access the world of cryptocurrency and explore its endless possibilities, including Fast Pay. Send and receive crypto payments with a simple and easy setup.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section id='ultimate_crypto' className='ultimate_crypto bg-[#14151B] pt-[100px] pb-[100px]' >
                <div className='container'>
                    <div className='row'>
                      
                        <div className='col-lg-6'>
                            <div className="box-crypto-app bg-no-repeat bg-cover" style={{ backgroundImage: `url(${BgSection2})` }} >
                                <div className="inner-content-app ">
                                    <h1>View positions, orders & history at a Glance</h1>

                                    <div className="row flex justify-center items-center flex-column gap-4 pt-2 ">
                                        <div className="col-11 ml-auto bg-[#100129] rounded-[10px] py-3">
                                            <p>The Ekonnet app gives you full control of your portfolio while you are on the move. View positions, open orders and trading history with a simple tap.</p>
                                        </div>

                                       
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-6' data-aos="zoom-in-up">
                            <div className="outer-finger ">
                                <div className="innerImg1">
                                    <img src={mobile_crypto3} alt='mobile_crypto' className='img-fluid'></img>
                                </div>
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ x: -30}}
                                        animate={{ x: 20 }}
                                        exit={{ x: -30 }}
                                        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", type: "tween", bounce: 0.25 }}
                                        className="innerImg4">
                                        <img src={mobile_crypto4} alt='mobile_crypto' className='img-fluid'></img>

                                    </motion.div>
                                </AnimatePresence>

                               

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* <section id='mobile2' className='mobile2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h1>Navigate the digital asset markets from anywhere</h1>
                            <p>Trade an array of digital currencies from anywhere in the world. Ekonnet from simple and complex order types, margin trading and a number of additional features to preserve your market edge.</p>
                        </div>
                        <div className='col-lg-6' data-aos="zoom-in-up">
                            <img src={mobile2} alt='mobile2' className='img-fluid'></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id='mobile3' className='mobile3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6' data-aos="zoom-in-up">
                            <img src={mobile3} alt='mobile3' className='img-fluid'></img>
                        </div>
                        <div className='col-lg-6'>
                            <h1>Ekonnet mobile app Lite Mode</h1>
                            <p>Access the EKonnet trading platform. No clutter, no fuss! Easy to use and easy to trade, stake and lend crypto with just a few taps using a simplified interface.</p>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default MobileApp
