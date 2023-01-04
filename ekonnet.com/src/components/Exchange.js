import React from 'react'
import './Exchange.css'
import { motion, AnimatePresence } from 'framer-motion'
import MainBanner from '../components/assets/exchange-main-baner.png';
import BannerOne from '../components/assets/exchange-left-banner.png';
import BannerTwo from '../components/assets/exchange-right-banner.png';

import BannerThree from '../components/assets/exchange-bottom-banner.png';
import ExchangeBg from '../components/assets/exchange-bg.png';
// import BtcImg from '../components/assets/btc-img.png';
// import RotateImg from '../components/assets/rotate-img.png';

const Exchange = () => {
    return (
        <>
            <section className="exchange__section" style={{ backgroundImage: `url(${MainBanner})` }}>
                <div className="illustration">
                    <AnimatePresence>
                        <motion.div
                            initial={{ y: -9 }}
                            animate={{ y: 20 }}
                            exit={{ y: -9 }}
                            transition={{ repeat: Infinity, repeatDelay: 0, duration: 3, repeatType: "reverse", type: "tween", bounce: 0.25 }}
                            className="one">
                            <img src={BannerOne} alt='one'  />
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div
                            initial={{ x: 9 }}
                            animate={{ x: 20 }}
                            exit={{ x: 9 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", type: "tween", bounce: 0.25 }}
                            className="two">
                            <img src={BannerTwo} alt='two' />
                        </motion.div>
                    </AnimatePresence>
                    <img src={BannerThree} alt='three' className='three' />
                </div>

                <div className="hero-area__exchange">
                    <div className="container">
                        <div className="row pt-5">
                            <dic className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
                                <motion.div
                                     initial={{y:100,opacity:0}}
                                     animate={{y:0,x:100,opacity:1}}
                                     transition={{  duration: 2, type: "tween", bounce: 0.25 }}
                                 className="banner-content__exchange">
                                    <h3 className="subtitle ">Fast and Convenient</h3>
                                    <h2 className="head__exchange">
                                        Cryptocurrency Exchange
                                    </h2>
                                    <p className="text__exchange ">
                                        We are trusted by more than 140 thousands of people from 45 countries worldwide.
                                    </p>
                                </motion.div>
                            </dic>
                            <div className="col-4">
                                <motion.div 
                                initial={{x:300,opacity:0.8}}
                                 animate={{x:0,opacity:1}}
                                 transition={{  duration: 2, type: "tween", bounce: 0.25 }}
                                
                                
                                className="exchange" style={{backgroundImage: `url(${ExchangeBg})`}}>
                                    <h5 className="head__heading-exchange">
                                    Cryptocurrency
                                    <br/>
                                     Exchange
                                    </h5>
                                    <div className="exchange-box">
                                        <div className="selector flex justify-between items-center pb-2">
                                            <p className="text-selector"> You Change </p>
                                            <div className="coin-img flex items-center">
                                                {/* <img src={BtcImg} alt='btc-img' className='btc__img-coin'/> */}
                                                <div  className="language__select" style={{display:""}}>
                                                    <select name="" id="" className='select-bar none'>
                                                        <option value="">BTC</option>
                                                        <option value="">USD</option>
                                                        <option value="">BTC</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <form action="#" id=''>
                                            <div className="form-group">
                                                <input type="text" name='number' placeholder='1000' className='form-control' />
                                            </div>
                                        </form>
                                        <span className="rate">1 BTC = 11724.597423 USD</span>


                                        <div className="selector flex justify-between items-center pb-2 pt-3">
                                            <p className="text-selector"> You Get</p>
                                            <div className="coin-img flex items-center">
                                                {/* <img src={BtcImg} alt='btc-img' className='btc__img-coin'/> */}
                                                <div className="language__select" style={{display:""}}>
                                                    <select name="" id="" className='select-bar none'>
                                                        <option value="">USD</option>
                                                        <option value="">USD</option>
                                                        <option value="">BTC</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <form action="#" id=''>
                                            <div className="form-group">
                                                <input type="text" name='number' placeholder='11724597.42' className='form-control' />
                                            </div>
                                        </form>
                                        <span className="rate">1 USD = 0.00008544 BTC</span>
                                    </div>
                                    <div className="rotate">
                                        {/* <img src={RotateImg} alt='rotate-img' className=''/>   */}
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Exchange
