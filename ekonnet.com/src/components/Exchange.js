import React from 'react'
import './Exchange.css'
import { motion, AnimatePresence } from 'framer-motion'
import MainBanner from '../components/assets/exchange-main-baner.png';
import BannerOne from '../components/assets/exchange-left-banner.png';
import BannerTwo from '../components/assets/exchange-right-banner.png';

import BannerThree from '../components/assets/exchange-bottom-banner.png';
import ExchangeBg from '../components/assets/exchange-bg.png';
import FBox1 from '../components/assets/feature-icon-1.png';
import FBox2 from '../components/assets/feature-icon-2.png';
import FBox3 from '../components/assets/feature-icon-3.png';
import Circle from '../components/assets/platfrom.png';
import Offer1 from '../components/assets/offer-icon-1.png';
import Offer2 from '../components/assets/offer-icon-2.png';
import Offer3 from '../components/assets/offer-icon-3.png';
import Offer4 from '../components/assets/offer-icon-4.png';
// import BtcImg from '../components/assets/btc-img.png';
// import RotateImg from '../components/assets/rotate-img.png';

const Exchange = () => {
    const childVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                type: 'spring',
                delay: 0.5,
                duration: 4

            }
        }
    }

   
    return (
        <>
            <section className="exchange__section" style={{ backgroundImage: `url(${MainBanner})` }}>
                <div className="illustration">
                    <AnimatePresence>
                        <motion.div
                            initial={{ y: -7 }}
                            animate={{ y: 20 }}
                            exit={{ y: -7 }}
                            transition={{ repeat: Infinity, repeatDelay: 0, duration: 3, repeatType: "reverse", type: "tween", bounce: 0.25 }}
                            className="one img-fluid">
                            <img src={BannerOne} alt='one' />
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div
                            initial={{ x: 5 }}
                            animate={{ x: -9 }}
                            exit={{ x: 5 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", type: "tween", bounce: 0.25 }}
                            className="two img-fluid">
                            <img src={BannerTwo} alt='two' />
                        </motion.div>
                    </AnimatePresence>
                    <img src={BannerThree} alt='three' className='three img-fluid' />
                </div>

                <div className="hero-area__exchange">
                    <div className="container">
                        <div className="row pt-5">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, x: 100, opacity: 1 }}
                                    transition={{ duration: 2, type: "tween", bounce: 0.25 }}
                                    className="banner-content__exchange">
                                    <h3 className="subtitle ">Fast and Convenient</h3>
                                    <h2 className="head__exchange">
                                        Cryptocurrency Exchange
                                    </h2>
                                    <p className="text__exchange ">
                                        We are trusted by more than 140 thousands<br/>of people from 45 countries worldwide.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="col-4">
                                <motion.div
                                    initial={{ x: 200, opacity: 0.8 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 2, type: "tween", bounce: 0.25 }}


                                    className="exchange" style={{ backgroundImage: `url(${ExchangeBg})` }}>
                                    <h5 className="head__heading-exchange">
                                        Cryptocurrency
                                        <br />
                                        Exchange
                                    </h5>
                                    <div className="exchange-box">
                                        <div className="selector flex justify-between items-center pb-2">
                                            <p className="text-selector"> You Change </p>
                                            <div className="coin-img flex items-center">
                                                {/* <img src={BtcImg} alt='btc-img' className='btc__img-coin'/> */}
                                                <div className="language__select" style={{ display: "" }}>
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
                                                <div className="language__select" style={{ display: "" }}>
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
            <section className="second__exchange-section">
                <div className="row">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0, duration: 2, type: "spring", stiffness: 30 }}
                        className="col flex justify-center items-center flex-column mt-5">
                        <h3 className="how-does-work text-[#6342ff] font-Josefine text-[24px] leading-9  font-bold">How does it work?</h3>
                        <h2 className="title__exchange text-[#33276a] font-Josefine text-[50px] leading-10 py-3 font-bold">It's really easy!</h2>
                        <p className="exchange-second-para text-[#5d5779] font-Josefine text-[18px] leading-7  font-normal text-center">It's easier than you think.Follow 3 simple easy steps</p>
                    </motion.div>
                </div>
                <div className="row flex justify-evenly pt-5 ">
                    <div className="col flex justify-center items-center">
                        <div className="box-feature">
                            <motion.div
                                initial={{ x: -70 }}
                                whileInView={{ x: 0 }}
                                transition={{ delay: 0, duration: 1, type: "spring", stiffness: 50 }}
                                className="thumb-box">
                                <img src={FBox1} alt='' className='' />
                            </motion.div>
                            <motion.p
                                variants={childVariants}
                                initial="hidden"
                                whileInView="visible" className="feature-para text-center pt-2 text-[20px] font-Josefine text-[#5d5779] font-bold"> You choose the currency and <br />
                                payment method
                            </motion.p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col flex justify-center items-center">
                            <div className="box-feature">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0, duration: 1, type: "spring", stiffness: 50 }} className="thumb-box">
                                    <img src={FBox2} alt='' className='' />
                                </motion.div>
                                <motion.p
                                    variants={childVariants}
                                    initial="hidden"
                                    whileInView="visible" className="feature-para text-center pt-2 text-[20px] font-Josefine text-[#5d5779] font-bold"> Pass account <br />
                                    verification
                                </motion.p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col flex justify-center items-center">
                            <div className="box-feature">
                                <motion.div
                                    initial={{ x: 0 }}
                                    whileInView={{ x: 0 }}
                                    transition={{ delay: 0, duration: 1, type: "spring", stiffness: 50 }}
                                    className="thumb-box">
                                    <img src={FBox3} alt='' className='' />
                                </motion.div>
                                <motion.p
                                    variants={childVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    className="feature-para text-center pt-2 text-[20px] font-Josefine text-[#5d5779] font-bold">
                                    Receive  <br />
                                    cryptocurrency
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='About-us__exchange mt-5'>
                <div className="container">
                    <div className="row flex gap-5">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, duration: 3, type: "spring", stiffness: 20 }}

                            className="col about-image flex justify-center items-center ">
                            <img src={Circle} alt='' className='circle-img' />
                        </motion.div>
                        <motion.div
                            initial={{ x: 0, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 4, type: "spring", stiffness: 10 }}

                            className="col flex justify-center items-center flex-column text-start max-w-md pl-5">
                            <h3 className="how-does-work text-[#6342ff] font-Josefine text-[24px] leading-9  font-bold">About us</h3>
                            <h2 className="title__exchange text-[#33276a] font-Josefine text-[40px] leading-10 py-3 font-bold">The Online Cryptocurrency Exchange Platform</h2>
                            <p className="exchange-second-para text-[#5d5779] font-Josefine text-[18px] leading-7  font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet laborum ratione adipisci commodi et culpa recusandae esse quaerat? Commodi, ducimus? <br /> Eveniet laborum ratione adipisci commodi et culpa recusandae esse quaerat? Commodi, ducimus?</p>
                        </motion.div>
                    </div>
                </div>

            </section>

            <section className="offer">
                <div className="container">
                    <div className="row flex justify-center items-center">
                        <div className="col flex justify-center items-center flex-column">
                            <motion.div
                            inherit={{rotate:0}}
                            whileHover={{rotate:360}}
                            transition={{ delay: 0, duration: 1, type: "spring", stiffness: 60 }}
                            className="icon-bg">
                            <img src={Offer1} alt='' className='circle-img' />
                            </motion.div>
                            <p className="offer-head">
                            Extra Fast <br/> 
                            Transactions
                        </p>
                        </div>
                        <div className="col flex justify-center items-center flex-column">
                        <motion.div 
                        inherit={{rotate:0}}
                        whileHover={{rotate:360}}
                        transition={{ delay: 0, duration: 1, type: "spring", stiffness: 60 }}
                        className="icon-bg">
                            <img src={Offer2} alt='' className='circle-img' />
                            </motion.div>
                            <p className="offer-head"> 
                            Secure  <br/> 
                            Transactions</p>
                        </div>
                        <div className="col flex justify-center items-center flex-column">
                        <motion.div
                        inherit={{rotate:0}}
                        whileHover={{rotate:360}}
                        transition={{ delay: 0, duration: 1, type: "spring", stiffness: 60 }}
                         className="icon-bg">
                            <img src={Offer3} alt='' className='circle-img' />
                            </motion.div>
                            <p className="offer-head"> 
                            No limits on  <br/> 
                            
                            Exchange
                        </p>
                        </div>
                        <div className="col flex justify-center items-center flex-column">
                        <motion.div
                        inherit={{rotate:0}}
                        whileHover={{rotate:360}}
                        transition={{ delay: 0, duration: 1, type: "spring", stiffness: 60 }}
                        className="icon-bg">
                            <img src={Offer4} alt='' className='circle-img' />
                            </motion.div>
                            <p className="offer-head"> 
                            We have the best  <br/> 
                            
                            exchange rate
                        </p>
                        </div>

                    </div>
                </div>

            </section>




        </>
    )
}

export default Exchange
