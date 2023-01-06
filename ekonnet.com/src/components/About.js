import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import AffiliateImg from './assets/home-banner-bg.png'
import AboutMainSection from './assets/about-us.png'
import AboutPlatform from './assets/about.png'
import BoxImg1 from './assets/img_blog2.png'
import  BoxImg2 from './assets/img_blog3.png'
import  OurValue from './assets/our-value.png'
import { NavLink } from 'react-router-dom';
import {Link} from "react-router-dom";

import './About.css';

const About = () => {
    return (
        <>
            <section id='about_hero' className='about_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
                <div className='container'>
                    <div className='row grid grid-cols-2'>
                        <div className='col-lg-6 flex justify-center items-center'>
                            <h1 className='text-white text-[60px] font-bold'>About-US</h1>

                        </div>
                        <div className='col-lg-6'>
                            <img src={AboutMainSection} alt='About.png' className='img-fluid'></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className="crypto-platform bg-[#131128] pt-[100px]">
                <div className="row">
                    <div className="col-lg-4 mx-auto flex justify-center items-center">
                        <img src={AboutPlatform} alt='About.png' className='img-fluid'></img>
                    </div>
                    <div className="col-lg-4 mx-auto flex justify-center items-start flex-column">
                        <h4 className='text-[#25CBD3] '>About Ekonnet?</h4>
                        <h2 className='text-white pt-4'>We Built a Crypto Platform</h2>
                        <h2 className='text-white'>To Buy & Sell Shares</h2>
                        <p className='text-white pt-2'>Progressively predominate performance based internal or "orga sources before high standards in architectures. Interactively ini transparent functionalities via efficient ROI.</p>

                    </div>
                </div>
            </section>

            <section id='about_product' className='about_product bg-[#131128] pt-[100px]'>
                <div className='container'>
                    <div className='text-center'>
                        <h1 className='font-bold'> Ekonnet Products</h1>
                    </div>
                    <div className='row grid grid-cols-3 px-3  content-justify-center'>
                        <div className='col-lg-4 '>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product"></div>
                                    <h3>Ekonnet</h3>
                                </div>
                                <p>Ekonnet seeks to provide deep and reliable liquidity in the cryptocurrency ecosystem. We deliver a variety of
                                    products and services, including margin trading, derivatives and institutional-grade connectivity
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product"></div>
                                    <h3>Ekonnet Pay</h3>
                                </div>

                                <p>Accept cryptocurrency payments for your goods or services, seamlessly. Access the
                                    world of cryptocurrency and explore its endless possibilities with a simple and easy setup
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product"></div>
                                    <h3>Ekonnet Borrow</h3>
                                </div>

                                <p>Set your own payment terms on our peer-to-peer platform using a number of different cryptocurrencies as collateral. You can use funds on
                                    Ekonnet or withdraw and spend as you choose.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product"></div>
                                    <h3>UNUS SED LEO</h3>
                                </div>

                                <p>Ekonnet native utility token, UNUS SED LEO, provides holders with a variety of benefits, including discounts
                                    on trading fees and P2P lending fees.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product"></div>
                                    <h3>Ekonnet payment</h3>
                                </div>

                                <p>Accept cryptocurrency payments for your goods or services, seamlessly. Access the
                                    world of cryptocurrency and explore its endless possibilities with a simple and easy setup
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4'>

                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product"></div>
                                    <h3>Affiliate Program</h3>
                                </div>

                                <p>Set your own payment terms on our peer-to-peer platform using a number of different cryptocurrencies as collateral. You can use funds on
                                    Ekonnet or withdraw and spend as you choose
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='about_value' className='about_value bg-[#131128] pt-[100px]'>
                <div className='container'>
                    <div className='row flex jutify-center items-center'>
                        <div className="col-lg-6">
                            <div className="row flex jutify-center items-center ">
                                <h1 className='text-white font-bold text-[36px]'>Our Values</h1>
                                <Accordion defaultActiveKey="0">
                                    <div className='col'>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header> <h3>Think Clearly</h3></Accordion.Header>
                                            <Accordion.Body>
                                                <p>  We consider clarity of thought to be the single most important trait we look for in our colleagues
                                                    We think about the message we want to deliver before we speak, and know what is important and what is not We are concise and articulate, putting effort into making things simple and easy to understand
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col'>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><h3>Dream Big</h3> </Accordion.Header>
                                            <Accordion.Body>
                                                <p>   We think big, take smart risks, and do things that have never been done before We are not afraid to make tough choices that align with our long-term objectives
                                                    We know that it always seems impossible until it’s done</p>
                                            </Accordion.Body>

                                        </Accordion.Item>
                                    </div>
                                    <div className='col'>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header> <h3>Be Resourceful</h3></Accordion.Header>
                                            <Accordion.Body>
                                                <p>We go beyond the surface to gain a deep understanding of every issue We always find a way to get things done with what’s available, but we are not shy about asking for help when it’s needed
                                                    We believe that great ideas can come from anywhere, regardless of seniority and experience
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </div>

                                    <div className='col'>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header> <h3> Take Ownership and Be Decisive </h3> </Accordion.Header>
                                            <Accordion.Body>
                                                <p>We are all empowered to take initiative, make the right decisions, and act as owners We are committed to protecting our company culture and seek to bring in the best people we’ve ever worked with
                                                    We aim to surprise and inspire with the quality and speed of our decision-making
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col'>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>  <h3>Stay Determined</h3>  </Accordion.Header>
                                            <Accordion.Body>
                                                <p>We never give up, carry each other through hard times, and recognise grit in our colleagues
                                                    We understand that building a world-changing company is a monumental task, but we love every minute of it
                                                    We celebrate milestones together, recharge, and get back to work</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col'>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>  <h3>Remain Humble</h3>  </Accordion.Header>
                                            <Accordion.Body>
                                                <p>We don’t seek the limelight and focus on doing what is best for the company and the users
                                                    We leave our egos at the door and learn from our mistakes, knowing that we are always stronger as a team
                                                    We think twice before spending, but are aggressive when it comes to investing in what matters
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>
                            </div>

                        </div>
                        <div className="col-lg-6 flex justify-end items-end ">
                            <img src={OurValue} alt='About.png' className='img-fluid  '></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news__blog bg-[#131128] pt-[100px]">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4 className='text-[#25CBD3] '>News</h4>
                            <h2 className='text-white pt-4'>From the blog</h2>
                            <p className='text-white pt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                            <button className='btn view-btn' >View More</button>
                        </div>
                        <div className="col">
                            <div className="row grid grid-cols-2 gap-4">
                                <div className="col">
                                    <div className="main-card">
                                        <div className="img-w-img">
                                            <img src={BoxImg1} alt='About.png' className='img-fluid rounded-t-xl'></img>
                                        </div>
                                        <div className="card-content">
                                            <h5 className='text-white font-bold pt-4'>From the blog</h5>
                                            <p className='text-white pt-2'>It is a long established fact that a reader will be distracted </p>
                                            <NavLink className='anchor-text' as={Link} to={"/"}><h5 > Read More</h5></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                <div className="main-card">
                                        <div className="img-w-img">
                                            <img src={BoxImg2} alt='About.png' className='img-fluid rounded-t-xl  '></img>
                                        </div>
                                        <div className="card-content">
                                            <h5 className='text-white font-bold pt-4'>From the blog</h5>
                                            <p className='text-white pt-2'>It is a long established fact that a reader will be distracted</p>
                                    
                                            <NavLink className='anchor-text' as={Link} to={"/"}><h5 > Read More</h5></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About