import React from 'react';
import './Traders/Features.css';
import AffiliateImg from './assets/home-banner-bg.png';
import bit from "./assets/bitcoin.png";
import Exchange from "./assets/CoinExchange.png";
import Margin from "./assets/MarginTrading.png";
import FundingImg from "./assets/Funding.png";





const BuyBitcoin = () => {
  return (
    <>
      <section id='features' className='features' style={{ backgroundImage: `url(${AffiliateImg})` }}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>How to Buy Bitcoin</h1>
                    <p>BUYING CRYPTOCURRENCY ON EkONNET</p>
                    <button className='btn btn-primary'>Get Started</button>
                    </div>
                    <div className='col-lg-6'>
                    <img src={bit} alt='Bitcoin.png' className='img-fluid mx-auto mb-5 rounded-5'></img>
                </div>          
            </div>
        </div>
      </section>
      <section id='exchangee' className='exchangee bg-[#131128] pt-[70px] ' >
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 ex'>
                    <h1>What is Bitcoin?</h1>
                    <p >Bitcoin is the first crypto created on the blockchain and currently the most popular cryptocurrency in the world.
                    <br/><br/>
                    The concept was initially introduced as a peer-to-peer (P2P) electronic cash system that was meant as a solution to the double-spending issues in digital currency at the time. The Bitcoin whitepaper was made public by its pseudonymous inventor, Satoshi Nakamoto, in a cryptography mailing list back in 2008; however, it wasn’t until 3rd January 2009 the first block of Bitcoin was created, or more commonly known as the genesis block.
                    <br/><br/>Bitcoin is open-source, which means anyone can participate in developing the network. Bitcoin ticker code, BTC, is widely used in online social conversations as a reference to the cryptocurrency.</p>
                </div>
                <div className='col-lg-6'>
                    <img src={Exchange} alt='' className='img-fluid mx-auto'></img>
                </div>
            </div>
        </div>
      </section>
      <section id='margin_trading' className='margin_trading bg-[#131128] pt-[70px]'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 order-lg-1 order-2'>
                <img src={Margin} alt='' className='img-fluid mx-auto'></img>
                </div>
                <div className='col-lg-6 ex odrer-lg-2 order-1'>
                    <h1>Why Bitcoin</h1>
                    <p>As a decentralized network, Bitcoin doesn't have an authoritative party that controls the network. Instead, it relies on participants, or more familiar as nodes, to determine what should or shouldn't happen to the blockchain.<br /><br/>
                    In this respect, Bitcoin can offer more control over financial assets as an alternative to the widely-used centralized payment systems.<br/><br/>
                    The number of the total Bitcoin is already predetermined at 21 million, which makes it a deflationary asset in nature.
                    </p>
                </div>
            </div>
        </div>
      </section>
      <section id='margin_funding' className='margin_funding bg-[#131128] pt-[70px]'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 ex mb-5'>
                    <h1>How to buy Bitcoin on Ekonnet</h1>
                    <p>As a decentralized network, Bitcoin doesn't have an authoritative party that controls the network. Instead, it relies on participants, or more familiar as nodes, to determine what should or shouldn't happen to the blockchain.<br /><br/>
                    In this respect, Bitcoin can offer more control over financial assets as an alternative to the widely-used centralized payment systems.<br/><br/>
                    The number of the total Bitcoin is already predetermined at 21 million, which makes it a deflationary asset in nature.
                    </p>
                </div>
                <div className='col-lg-6'>
                    <img src={FundingImg} alt='' className='img-fluid mx-auto'></img>
                </div>
            </div>
        </div>
      </section>
      {/* <section id='Derivatives' className='Derivatives bg-[#131128] pt-[70px]'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 order-lg-1 order-2'>
                <img src={DerivativesImg} alt='' className='img-fluid mx-auto'></img>
                </div>
                <div className='col-lg-6  order-lg-2 order-1 ex mb-5'>
                    <h1>Derivatives</h1>
                    <p>Users wishing to mitigate the risks associated with the volatility of Digital Tokens may trade Derivative Products on the Derivatives Site. Perpetual contracts are already available and further Derivative Products are under development.<br />
                       Derivative Products can be traded using a Derivative Wallet credited with USDt0, a Digital Token which can be obtained by converting USDt, as explained in more details on our Knowledge Base.
                    </p>
                </div>
            </div>
        </div>
      </section> */}


   

        </>
  )
}

export default BuyBitcoin
