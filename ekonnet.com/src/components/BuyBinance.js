import React from 'react';
import './Traders/Features.css';
import AffiliateImg from './assets/home-banner-bg.png';
import binance from "./assets/binancecoin.jpeg";
import Exchange from "./assets/b5.png";
import Margin from "./assets/b2.png";
import FundingImg from "./assets/b3.png";





const BuyBinance = () => {
  return (
    <>
      <section id='features' className='features' style={{ backgroundImage: `url(${AffiliateImg})` }}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>How to Buy Binance</h1>
                    <p>BUYING CRYPTOCURRENCY ON EKONNET</p>
                    <button className='btn btn-primary'>Get Started</button>
                    </div>
                    <div className='col-lg-6'>
                    <img src={binance} alt='Binance.png' className='img-fluid mx-auto mb-5 rounded-5'></img>
                </div>          
            </div>
        </div>
      </section>
      <section id='bit' className='exchangee bg-[#131128] pt-[70px] ' >
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 coin'>
                    <h1>What is Binance?</h1>
                    <p>Binance is the first crypto created on the blockchain and currently the most popular cryptocurrency in the world.
                    <br/><br/>
                    The concept was initially introduced as a peer-to-peer (P2P) electronic cash system that was meant as a solution to the double-spending issues in digital currency at the time. The Binance whitepaper was made public by its pseudonymous inventor, Satoshi Nakamoto, in a cryptography mailing list back in 2008; however, it wasn’t until 3rd January 2009 the first block of Binance was created, or more commonly known as the genesis block.
                    <br/><br/>Binance is open-source, which means anyone can participate in developing the network. Binance ticker code, BTC, is widely used in online social conversations as a reference to the cryptocurrency.</p>
                </div>
                <div className='col-lg-6'>
                    <img src={Exchange} alt='' className='img-fluid mx-auto mt-5'></img>
                </div>
            </div>
        </div>
      </section>
      <section id='bit' className='margin_trading bg-[#131128] pt-[70px]'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 order-lg-1 order-2 mt-5'>
                <img src={Margin} alt='' className='img-fluid mx-auto'></img>
                </div>
                <div className='col-lg-6 coin odrer-lg-2 order-1'>
                    <h1>Why Binance</h1>
                    <p>As a decentralized network, Binance doesn't have an authoritative party that controls the network. Instead, it relies on participants, or more familiar as nodes, to determine what should or shouldn't happen to the blockchain.<br /><br/>
                    In this respect, Binance can offer more control over financial assets as an alternative to the widely-used centralized payment systems.<br/><br/>
                    The number of the total Binance is already predetermined at 21 million, which makes it a deflationary asset in nature.
                    </p>
                </div>
            </div>
        </div>
      </section>
      <section id='bit' className='margin_funding bg-[#131128] pt-[70px]'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 coin mb-5'>
                    <h1>How to buy Binance on Ekonnet</h1>
                    <p>As a decentralized network, Binance doesn't have an authoritative party that controls the network. Instead, it relies on participants, or more familiar as nodes, to determine what should or shouldn't happen to the blockchain.<br /><br/>
                    In this respect, Binance can offer more control over financial assets as an alternative to the widely-used centralized payment systems.<br/><br/>
                    The number of the total Binance is already predetermined at 21 million, which makes it a deflationary asset in nature.
                    </p>
                </div>
                <div className='col-lg-6'>
                    <img src={FundingImg} alt='' className='img-fluid mx-auto mt-5'></img>
                </div>
            </div>
        </div>
      </section>
      

   

        </>
  )
}

export default BuyBinance
