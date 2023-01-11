import React from 'react'
import './Home.css'
import { BiDollar } from 'react-icons/bi';
import Swipper from './Swipper';
import Maingraph from "../assets/main-graph.png";
import Video from '../assets/Header_Video.mp4';
import TradeImg from "../assets/Trade.png";
import analysisImg from "../assets/analysis.png";
import p2pImg from "../assets/p2pImage.png";
import EasyToInvest from "../assets/Easy-to-invest.png";
import Mobile from '../assets/mobile.png'
import AppStore from '../assets/app-store-btn.png'
import GoogleStore from '../assets/google-store-btn.png'
import { BsPlusCircleDotted } from 'react-icons/bs';
import { MdOutlineInsights } from 'react-icons/md';
import { AiOutlineBank } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

import { NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';

const Home = () => {
    
      
    return (
        <>
                
            {/* <section className="hero">
                <div className='app'>
                    <video loop muted>
                        <source src={Video} type="video/mp4" />
                    </video>
                    <div className="container">
                        <div className="row flex justify-center items-center">
                            <div className="col-lg-6 main-content-wraper">
                                <div className="discover text-white">
                                    <div className="doller"><BiDollar/> </div>
                                    <h6 className='discover-text'> Discover a new ways to enjoy wold </h6>
                                </div>
                                <div className="trade-wrape-div">
                                    <h3 className='Trade-text-main'>Trade like a legend on the legendary
                                        crypto exchange</h3>
                                    <p className="trade-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quasi esse fugit modi hic quae, reprehenderit ipsam? Fugit aut eos rerum suscipit labore at necessitatibus dignissimos, sit officia error assumenda.</p>
                                </div>
                                <div className="front-btn flex justify-start gap-1">
                                 <button className="main-btn"> Get Started</button>
                                 <button className="main-btn"> Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section> */}



            <section className="hero">
                <div className="container">
                    <div className='row flex justify-start items-center top-main-content gy-4 '>
                        <div className="col-lg-6 ">
                            <div className="discover text-white">
                                <div className="doller"><BiDollar /> </div>
                                <h6 className='discover-text'> Discover a new ways to enjoy world </h6>
                            </div>
                            <div className="trade-wrape-div">
                                <h3 className='Trade-text-main'>Trade like a legend on the legendary
                                    crypto exchange</h3>
                                <p className="trade-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quasi esse fugit modi hic quae, reprehenderit ipsam? Fugit aut eos rerum suscipit labore at necessitatibus dignissimos, sit officia error assumenda.</p>
                            </div>
                            <div className="front-btn flex justify-start gap-2 ">
                                <button className="main-btn"> Get Started</button>
                                <button className="main-btn"> Get Started</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="outervideo">

                                <video autoPlay loop muted className='videostyle'>
                                    <source src={Video} type="video/mp4" />
                                </video>

                            </div>
                        </div>



                    </div>
                </div>


            </section>
            <section className="slider__section__main">
                <div className="container">
                    <div className="row flex justify-center items-center text-center ">
                        <div className="col flex justify-center items-center text-center flex-row gap-1">
                            <div className='color1'></div> <div className='color2'></div> <div className='color3'></div> <div className='color4'></div> <div className='color5'></div> <div className='color6'></div>
                        </div>
                        <h3 className='text-white pt-4'>We are Trusted</h3>
                        <div className="slider-here pt-5">
                            <Swipper />
                        </div>
                        <div className="row">
                            <img className='mt-5' src={Maingraph} alt="main-heading" width="2900px" height="700px" />

                        </div>
                    </div>


                    <div className="row flex justify-center items-center pt-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">
                            <div className="col flex justify-start items-center text-center flex-row gap-1">
                                <div className='color1'></div> <div className='color2'></div> <div className='color3'></div> <div className='color4'></div> <div className='color5'></div> <div className='color6'></div>
                            </div>
                            <h3 className='main__common__heading text-white pb-1 pt-4'>Trade</h3>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <button className='main-btn'>Read more</button>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="main__image__common">
                                <img src={TradeImg} alt='' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>



                    <div className="row flex justify-center items-center pt-2">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="main__image__common">
                                <img src={analysisImg} alt='' className='img-fluid'></img>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">
                            <div className="col flex justify-start items-center text-center flex-row gap-1">
                                <div className='color1'></div> <div className='color2'></div> <div className='color3'></div> <div className='color4'></div> <div className='color5'></div> <div className='color6'></div>
                            </div>
                            <h3 className='main__common__heading text-white pb-1 pt-4'>Analytics</h3>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <button className='main-btn'>Read more</button>
                        </div>
                    </div>


                    <div className="row flex justify-center items-center pt-2">
                        <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">
                            <div className="col flex justify-start items-center text-center flex-row gap-1">
                                <div className='color1'></div> <div className='color2'></div> <div className='color3'></div> <div className='color4'></div> <div className='color5'></div> <div className='color6'></div>
                            </div>
                            <h3 className='main__common__heading text-white pb-1 pt-4'>Peer-To-Peer</h3>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <button className='main-btn'>Read more</button>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="main__image__common">
                                <img src={p2pImg} alt='' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>



                    <div className="row flex justify-center items-center pt-2">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="main__image__common">
                                <img src={EasyToInvest} alt='' className='img-fluid'></img>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">
                            <div className="col flex justify-start items-center text-center flex-row gap-1">
                                <div className='color1'></div> <div className='color2'></div> <div className='color3'></div> <div className='color4'></div> <div className='color5'></div> <div className='color6'></div>
                            </div>
                            <h3 className='main__common__heading text-white pb-1 pt-4'>Easy To Invest</h3>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <button className='main-btn'>Read more</button>
                        </div>
                    </div>

                </div>
            </section>

            <section className="word__trading__section">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col flex justify-start items-center text-center flex-row gap-1">
                            <div className='color1'></div> <div className='color2'></div> <div className='color3'></div> <div className='color4'></div> <div className='color5'></div> <div className='color6'></div>
                        </div>
                        <h2 className="wordCLass__heading text-white pt-3">
                            World ClassTradingPlatform
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                            <div className="Outer__wordclass">
                                <div className="wordClass__image">
                                    <img src={p2pImg} alt="test" />
                                </div>
                                <div className='inner__worldClass__content'>
                                    <h3 className="inner__wordclass__heading">
                                        Exchange
                                    </h3>
                                    <p className="inner__worldClass__para">
                                        Ekonnet offers order books with top tier liquidity,
                                        allowing users to easily exchange Bitcoin, Ethereum,
                                        EOS, Litecoin, Ripple, NEO and many other digital assets
                                        with minimal slippage. Ekonnet also boasts a suite of order
                                        types to help traders take advantage of every situation

                                    </p>
                                </div>

                            </div>
                            <div className=" Outer__wordclass">
                                <div className="wordClass__image ">
                                    <img src={p2pImg} alt="test" />
                                </div>
                                <div className='inner__worldClass__content '>
                                    <h3 className="inner__wordclass__heading">
                                        Margin trading
                                    </h3>
                                    <p className="inner__worldClass__para">
                                        Ekonnet offers order books with top tier liquidity,
                                        allowing users to easily exchange Bitcoin, Ethereum,
                                        EOS, Litecoin, Ripple, NEO and many other digital assets
                                        with minimal slippage. Ekonnet also boasts a suite of order
                                        types to help traders take advantage of every situation

                                    </p>
                                </div>

                            </div>
                            <div className=" Outer__wordclass">
                                <div className="wordClass__image">
                                    <img src={p2pImg} alt="test" />
                                </div>
                                <div className='inner__worldClass__content'>
                                    <h3 className="inner__wordclass__heading">
                                        Margin funding
                                    </h3>
                                    <p className="inner__worldClass__para">
                                        Ekonnet offers order books with top tier liquidity,
                                        allowing users to easily exchange Bitcoin, Ethereum,
                                        EOS, Litecoin, Ripple, NEO and many other digital assets
                                        with minimal slippage. Ekonnet also boasts a suite of order
                                        types to help traders take advantage of every situation

                                    </p>
                                </div>

                            </div>
                        




                       
                            <div className=" Outer__wordclass">
                                <div className="wordClass__image">
                                    <img src={p2pImg} alt="test" />
                                </div>
                                <div className='inner__worldClass__content'>
                                    <h3 className="inner__wordclass__heading">
                                        Security
                                    </h3>
                                    <p className="inner__worldClass__para">
                                        Ekonnet offers order books with top tier liquidity,
                                        allowing users to easily exchange Bitcoin, Ethereum,
                                        EOS, Litecoin, Ripple, NEO and many other digital assets
                                        with minimal slippage. Ekonnet also boasts a suite of order
                                        types to help traders take advantage of every situation

                                    </p>
                                </div>

                            </div>
                            <div className=" Outer__wordclass">
                                <div className="wordClass__image">
                                    <img src={p2pImg} alt="test" />
                                </div>
                                <div className='inner__worldClass__content'>
                                    <h3 className="inner__wordclass__heading">
                                        Order Type
                                    </h3>
                                    <p className="inner__worldClass__para">
                                        Ekonnet offers order books with top tier liquidity,
                                        allowing users to easily exchange Bitcoin, Ethereum,
                                        EOS, Litecoin, Ripple, NEO and many other digital assets
                                        with minimal slippage. Ekonnet also boasts a suite of order
                                        types to help traders take advantage of every situation

                                    </p>
                                </div>

                            </div>
                            <div className=" Outer__wordclass">
                                <div className="wordClass__image">
                                    <img src={p2pImg} alt="test" />
                                </div>
                                <div className='inner__worldClass__content'>
                                    <h3 className="inner__wordclass__heading">
                                        Customizable Interface
                                    </h3>
                                    <p className="inner__worldClass__para">
                                        Ekonnet offers order books with top tier liquidity,
                                        allowing users to easily exchange Bitcoin, Ethereum,
                                        EOS, Litecoin, Ripple, NEO and many other digital assets
                                        with minimal slippage. Ekonnet also boasts a suite of order
                                        types to help traders take advantage of every situation

                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="mobile-platform__section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4 pt-4 trusted-platform">
                        <div className="col">
                            <div className="mobile_circule_outer">

                            </div>
                            <div className="mobile-image">
                                <img src={Mobile} alt='mobile' />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mobile__content ">
                                <div className="col flex justify-start items-center text-center flex-row gap-1">
                                    <div className='color1'></div> <div className='color2'></div> <div className='color3'></div> <div className='color4'></div> <div className='color5'></div> <div className='color6'></div>
                                </div>
                                <h2 className="mobile__heading text-white pt-3">
                                    Trusted Platform Anytime & Anywhere
                                </h2>
                                <p className="mobile__para text-white">
                                    The Ekonnet mobile app adapts the full functionality of the Ekonnet platform for seamless ‘on-the-go’ trading.
                                    <br />
                                    The Ekonnet Mobile application allows you to connect to your ekonnet trading account and provide live information about your open orders as well as the status of your account. Wherever you are, you can easily make changes to your trades and never have to miss an opportunity again.
                                </p>
                                <p className="mobile__para text-white">
                                    The dawn of a better world that is freer. Send or receive any amount of money from anywhere on the planet!
                                </p>
                                <div className="row flex justify-start gap-4 pt-3 appStoreBtn">
                                    <div className='col '>
                                        <img src={AppStore} alt='mobile' />
                                    </div>
                                    <div className="col">
                                        <img src={GoogleStore} alt='mobile' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="how-invest">
                <div className="container">
                    <div className="row">
                        <div className="col flex justify-center items-center flex-column mb-5">
                            <h2 className="invest__heading text-white">
                                Get started in a few minutes
                            </h2>
                            <p className="invest__sub-heading text-white">
                                Start your crypto investment with Ekonnet now !
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        <div className="col ">
                            <div className="invest__outer ">
                                <div className="flex justify-center items-center pt-5">
                                    <div className="invest__circle flex justify-center items-center">
                                        <BsPlusCircleDotted className='icons' size="4rem" />
                                    </div>
                                </div>
                                <div className="invest__content flex justify-center items-center flex-column">
                                    <h2 className='invest__account-heading'>Create an account</h2>
                                    <p className='invest__account-para'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, iste?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="invest__outer">
                                <div className="flex justify-center items-center pt-5">
                                    <div className="invest__circle flex justify-center items-center">
                                        <AiOutlineBank className='icons' size="4rem" />
                                    </div>
                                </div>
                                <div className="invest__content flex justify-center items-center flex-column">
                                    <h2 className='invest__account-heading'>Link your bank account</h2>
                                    <p className='invest__account-para'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, iste?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="invest__outer">
                                <div className="flex justify-center items-center pt-5">
                                    <div className="invest__circle flex justify-center items-center">
                                        <MdOutlineInsights className='icons' size="4rem" />
                                    </div>
                                </div>
                                <div className="invest__content flex justify-center items-center flex-column">
                                    <h2 className='invest__account-heading'>Start buying & selling</h2>
                                    <p className='invest__account-para'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, iste?
                                    </p>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </section>
            <section className='socialmedia__section'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="col flex justify-center items-center flex-column mb-5">
                                <h2 className="invest__heading text-white">
                                    Join Our Community
                                </h2>
                                <p className="invest__sub-heading text-white">
                                    Ekonnet is Global .Join The Conversation in any of our woldwide communities.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col flex justify-center items-center">
                            <div className="social__weapper">
                                <div className="social__button">
                                    <div className="icon ">
                                        <FaFacebookF className='community-icon' size="1.5rem" /><NavLink as={Link} to={"/"}></NavLink>
                                    </div>
                                    <span>Facebook</span>
                                </div>

                                <div className="social__button">
                                    <div className="icon">
                                        <BsTwitter className='community-icon ' size="1.5rem" /><NavLink as={Link} to={"/"} ></NavLink>
                                    </div>
                                    <span>Twitter</span>
                                </div>

                                <div className="social__button">
                                    <div className="icon">
                                        <AiFillInstagram className='community-icon' size="1.5rem" /><NavLink as={Link} to={"/"}></NavLink>
                                    </div>
                                    <span>Instagram</span>
                                </div>

                                <div className="social__button">
                                    <div className="icon">

                                        <AiFillGithub className='community-icon ' size="1.5rem" /><NavLink as={Link} to={"/"} ></NavLink>
                                    </div>
                                    <span>Github</span>
                                </div>

                                <div className="social__button">
                                    <div className="icon">
                                        <AiFillYoutube className='community-icon ' size="1.5rem" /><NavLink as={Link} to={"/"} ></NavLink>
                                    </div>
                                    <span>Youtube</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home
