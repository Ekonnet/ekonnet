import React from 'react'
import './Terminal.css';
import AffiliateImg from './assets/home-banner-bg.png';
import card from "./assets/world.png";
import Accordian from './Accordian/Accordian.js'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
const Terminal = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | Terminal </title>
      </Helmet>
    <section id='terminel_hero' className='terminal_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>Your source for market data</h1>
                    <p>Bitfinex is leveraging decentralised technology and products to support a peer-to-peer (P2P) ecosystem. With Bitfinex Terminal, we are proud to present the future of data sharing.</p>
                    <Nav.Link as={Link} to={"/terminal-page"}><button className='btn btn-primary'>View Knowledge Base </button></Nav.Link>
                    </div>
                    <div className='col-lg-6'>
                    <img src={card} alt='Terminal.png' className='img-fluid mx-auto mt-5'></img>
                </div>          
            </div>
        </div>
      </section>
      <section id='terminal' className='terminal bg-[#131128] pt-[70px] ' >
        <div className='container'>
            <div className='row gy-4'>
            <div className='col-lg-4 d-flex '>
            <div className='terminal_box p-3'>
            {/* <h1>1</h1> */}
            <h4>Develop trading strategies</h4>
            <p>Download or use live Bitfinex Market Data streams directly as an input for your trading strategies.</p>
            </div>
            </div>
            <div className='col-lg-4 d-flex '>
            <div className='terminal_box p-3'>
            {/* <h1>2</h1> */}
            <h4>Backtest trading strategies</h4>
            <p>Backtesting your trading strategies on historical trade Bitfinex Market Data becomes easy, just select the timeframes you need and start with an immediate, ordered stream of Bitfinex Market Data items.</p>
            </div>
            </div>
            <div className='col-lg-4 d-flex '>
            <div className='terminal_box p-3'>
            {/* <h1>3</h1> */}
            <h4>Machine learning</h4>
            <p>Subscribe to streams for orderbook Bitfinex Market Data, indexes, pricing, and other granular Bitfinex Market Data. Use any aspect of the market to train your Machine Learning algorithms.</p>
            </div>
            </div>
            <div className='col-lg-4 d-flex '>
            <div className='terminal_box p-3'>
            {/* <h1>4</h1> */}
            <h4>Data science – statistics and analysis</h4>
            <p>Crunch our datasets to learn more about trading and financial markets.</p>
            </div>
            </div>
            <div className='col-lg-4 d-flex '>
            <div className='terminal_box p-3'>
            {/* <h1>5</h1> */}
            <h4>Bitfinex Terminal as an oracle</h4>
            <p>Bitfinex Terminal streams are cryptographically signed and verifiable append-only logs. Ask us about how customers can use this new service to power smart contracts and Discreet Log Contracts (DLCs).</p>
            </div>
            </div>
            <div className='col-lg-4 d-flex '>
            <div className='terminal_box p-3'>
            {/* <h1>6</h1> */}
            <h4>Research purposes</h4>
            <p>Our growing Bitfinex Market Data set begins a great archive for researchers looking to correlate market changes and create deeper analysis on market events.</p>
            </div>
            </div>  
            </div>
            </div>
            </section>
            <section id='terminal1' className='terminal1  bg-[#131128] pt-[70px] '>
              <div className='container'>
              <div className='row'>
              <div className='col-lg-6'>
              <h1>First-class algo trading functionalities</h1>
              </div>
                <div className='col-lg-6'>
                <p>Paired with Honey Framework or your own custom trading strategy libraries, Bitfinex Terminal offers functionality for algorithmic trading. You can execute and backtest your trading strategies for any order type. What's more, you can get historical trading Bitfinex Market Data and develop your own analytics tools with Bitfinex Terminal.</p>
              </div>
              <div className='col-lg-6'>
              <h1>Auditable and verifiable</h1>
              </div>
                <div className='col-lg-6'>
                <p>Bitfinex Terminal uses Dazaar that adopts Merkle Trees to make sure all data is non-repudiable.</p>
              </div>
              <div className='col-lg-6'>
              <h1>Swift and efficient data access</h1>
              </div>
                <div className='col-lg-6'>
                <p>Bitfinex Terminal allows you to download parts of datasets using the P2P network and built-in cryptographic data structures. Hence, it is ideal for time series data with live updates and sparse replication of extensive datasets.</p>
              </div>
              <div className='col-lg-6'>
              <h1>Free and paid access available</h1>
              </div>
                <div className='col-lg-6'>
                <p>Bitfinex Terminal is available on a free and pay-as-you-use plan; each allows you to access a different kind of Bitfinex Market Data set.</p>
              </div>
              <div className='col-lg-6 mb-5'>
              <h1>Customisable information that suits you</h1>
              </div>
                <div className='col-lg-6 mb-5'>
                <p>Bitfinex Terminal allows you to create custom information sets that suit your needs and interests, such as custom indices, indicators and feeds.</p>
              </div>
              </div>
              </div>
            </section>
            <section className='terminal2 bg-[#131128] pt-[70px]  pt-5 pb-5'>
                <div className='container text-center'>
                    <h1 className='text-white'>Frequently Asked Question</h1>
                    <Accordian/>
                </div>
            </section>
    </>
  )
}

export default Terminal