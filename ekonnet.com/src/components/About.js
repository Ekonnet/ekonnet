import React from 'react'
import FutureImg from './assets/FutureImg.png';
import './About.css';

const About = () => {
  return (
    <>
    <section id='about_hero' className='about_hero'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>Go-to exchange to trade crypto</h1>
                    <p>Ekpnnet provides escrowed P2P Ethereum marketplace where people buy and sell Ethereum easily and safely with notable simple UI,</p>
                </div>
                <div className='col-lg-6'>
                    <img src={FutureImg} alt='About.png' className='img-fluid'></img>
                </div>
            </div>
        </div>
    </section>
    <section id='about_product' className='about_product'>
        <div className='container'>
            <div className='text-center'>
                <h1>Product</h1>
            </div>
            <div className='row gy-3 content-justify-center'>
                    <div className='col-lg-4'>
                    <div className='product'>
                    <h3>Ekonnet</h3>
                    <p>Ekonnet seeks to provide deep and reliable liquidity in the cryptocurrency ecosystem. We deliver a variety of
                       products and services, including margin trading, derivatives and institutional-grade connectivity
                    </p>
                    </div>
                    </div>
                    <div className='col-lg-4'>
                    <div className='product'>
                    <h3>Ekonnet Pay</h3>
                    <p>Accept cryptocurrency payments for your goods or services, seamlessly. Access the
                     world of cryptocurrency and explore its endless possibilities with a simple and easy setup
                     </p>
                     </div>
                    </div>
                    <div className='col-lg-4'>
                    <div className='product'>
                    <h3>Ekonnet Borrow</h3>
                    <p>Set your own payment terms on our peer-to-peer platform using a number of different cryptocurrencies as collateral. You can use funds on
                     Ekonnet or withdraw and spend as you choose.
                    </p>
                    </div>
                    </div>
                    <div className='col-lg-4'>
                    <div className='product'>
                    <h3>UNUS SED LEO</h3>
                    <p>Ekonnet native utility token, UNUS SED LEO, provides holders with a variety of benefits, including discounts
                     on trading fees and P2P lending fees.
                    </p>
                    </div>
                    </div>
                    <div className='col-lg-4'>
                    <div className='product'>
                    <h3>Ekonnet payment</h3>
                    <p>Accept cryptocurrency payments for your goods or services, seamlessly. Access the
                    world of cryptocurrency and explore its endless possibilities with a simple and easy setup
                    </p>
                    </div>
                    </div>
                    <div className='col-lg-4'>
                    <div className='product'>
                    <h3>Affiliate Program</h3>
                    <p>Set your own payment terms on our peer-to-peer platform using a number of different cryptocurrencies as collateral. You can use funds on
                    Ekonnet or withdraw and spend as you choose
                    </p>
                    </div>
                    </div>
            </div>
        </div>
    </section>
    <section id='about_value' className='about_value'>
        <div className='container'>
            <div className='row text-center'>
                <div>
                    <h1>Our Values</h1>
                </div>
                <div className='col-lg-6'>
                    <div>
                        <h3>Think Clearly</h3>
                        <p>We consider clarity of thought to be the single most important trait we look for in our colleagues 
                         We think about the message we want to deliver before we speak, and know what is important and what is not We are concise and articulate, putting effort into making things simple and easy to understand
                        </p>
                    </div>

                </div>
                <div className='col-lg-6'>
                    <div>
                        <h3>Dream Big</h3>
                        <p>We think big, take smart risks, and do things that have never been done before We are not afraid to make tough choices that align with our long-term objectives 
                         We know that it always seems impossible until it’s done
                        </p>
                    </div>

                </div>
                <div className='col-lg-6'>
                    <div>
                        <h3>Be Resourceful</h3>
                        <p>We go beyond the surface to gain a deep understanding of every issue We always find a way to get things done with what’s available, but we are not shy about asking for help when it’s needed 
                         We believe that great ideas can come from anywhere, regardless of seniority and experience
                        </p>
                    </div>

                </div>
                <div className='col-lg-6'>
                    <div>
                        <h3>Take Ownership and Be Decisive</h3>
                        <p>We are all empowered to take initiative, make the right decisions, and act as owners We are committed to protecting our company culture and seek to bring in the best people we’ve ever worked with 
                         We aim to surprise and inspire with the quality and speed of our decision-making
                        </p>
                    </div>

                </div>
                <div className='col-lg-6'>
                    <div>
                        <h3>Stay Determined</h3>
                        <p>We never give up, carry each other through hard times, and recognise grit in our colleagues
                         We understand that building a world-changing company is a monumental task, but we love every minute of it 
                         We celebrate milestones together, recharge, and get back to work</p>
                    </div>

                </div>
                <div className='col-lg-6'>
                    <div>
                        <h3>Remain Humble</h3>
                        <p>We don’t seek the limelight and focus on doing what is best for the company and the users
                         We leave our egos at the door and learn from our mistakes, knowing that we are always stronger as a team 
                         We think twice before spending, but are aggressive when it comes to investing in what matters
                        </p>
                    </div>

                </div>

            </div>

        </div>

    </section>
    </>
  )
}

export default About