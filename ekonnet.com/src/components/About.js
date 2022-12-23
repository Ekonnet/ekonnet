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
                        <h3>Think Clearly</h3>
                        <p>We consider clarity of thought to be the single most important trait we look for in our colleagues 
We think about the message we want to deliver before we speak, and know what is important and what is not We are concise and articulate, putting effort into making things simple and easy to understand
</p>
                    </div>

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
                        <h3>Think Clearly</h3>
                        <p>We consider clarity of thought to be the single most important trait we look for in our colleagues 
We think about the message we want to deliver before we speak, and know what is important and what is not We are concise and articulate, putting effort into making things simple and easy to understand
</p>
                    </div>

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
                        <h3>Think Clearly</h3>
                        <p>We consider clarity of thought to be the single most important trait we look for in our colleagues 
We think about the message we want to deliver before we speak, and know what is important and what is not We are concise and articulate, putting effort into making things simple and easy to understand
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