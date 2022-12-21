import React from 'react'

import Video from '../assets/Header_Video.mp4';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swipper from './Swipper';
import './Home.css';
import TradeImg from "../assets/Trade.png";
import EasyInvest from "../assets/investing.png";
import p2pImg from "../assets/p2p.png";
import Maingraph from "../assets/main-graph.png";
import workImg from "../assets/work-img.png";
import analysisImg from "../assets/analysis.png";
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { BsFillStopwatchFill } from 'react-icons/bs';
import { FaBraille } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { AiFillTrophy } from 'react-icons/ai';


// import TradingInfoCard from '../CardComponents/TradingInfoCard';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className='app'>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          <div className="text-wrapper">
            <h1>Trade like a legend on the legendary
              crypto exchange</h1>
            <Button size="lg" className='get-start'>Get Start</Button>
          </div>
        </div>
      </section>
      {/* hero section End here */}

      <section className="slider">
        <Container>
          <Swipper />
          <h2 className='digital-assets'>The home of digital asset trading</h2>
          <div className="login-btn">
            <Button size="lg" className='sign-up'>Sign Up</Button>
            <Button size="lg" className='sign-in'>Sign In</Button>
          </div>
        </Container>

      </section>

      {/* slider section End here */}


      <section className=' Common_style' id='Coinlist'>
        <Container>
          <Row>

            <img src={Maingraph} alt="main-heading" width="3000px" height="700px" />

          </Row>
        </Container>


      </section>

      {/* Trade section start here */}


      <section className='Common_style' id='trade'>
        <Container>
          <Row>
            <Col className="col-lg-6 col-md-6 col-sm-12" >
              <div className='Content d-flex justify-content-center flex-column' data-aos="zoom-in-right" >
                <h2>Trade</h2>
                <p>An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                  Cryptocurrency trading is the act of speculating on cryptocurrency price movements via a CFD trading account, or buying and selling the underlying coins via an exchange.
                </p>
              </div>
            </Col>
            <Col className="col-lg-6 col-md-6 col-sm-12" >
              <div className='img d-flex justify-content-center flex-column' data-aos="zoom-in-left" >
                <img src={TradeImg} alt='' className='img-fluid'></img>
              </div>
            </Col>
          </Row>
        </Container>


      </section>
      {/* Analytics section start here */}

      <section className='Common_style' id='analytics'>
        <Container>
          <Row>
            <Col className="col-lg-6 col-md-6 col-sm-12">
              <img src={analysisImg} alt='' className='img-fluid'></img>

            </Col>
            <Col className="col-lg-6 col-md-6 col-sm-12">
              <div className='Content d-flex justify-content-center flex-column'>
                <h2>Analytics</h2>
                <p>An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze
                  the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                </p>
              </div>

            </Col>
          </Row>
        </Container>


      </section>

      {/* Easy to invest section start here */}

      <section className='Common_style' id='Easy_to_invest'>
        <Container>
          <Row gy-3>
            <Col className="col-lg-6 col-md-6 col-sm-12">
              <div className='Content d-flex justify-content-center flex-column'>
                <h2>Easy to invest</h2>
                <p>By easy to use interface and fast transaction
                  processing speed,  anyone can invest crypto
                  with Ekonnet
                </p>
                <div className='d-flex gap-4 mt-2 easy-icon-para'>
                  <AiFillDollarCircle className='easy-invest-icon' size="1.5rem" /> <h3>Buy Crypto from 0.3 USD</h3>
                </div>
                <div className='d-flex gap-4 mt-2 easy-icon-para' >
                  <BsFillCartCheckFill className='easy-invest-icon ' size="1.5rem" /> <h3>Buy Crypto from  INR</h3>
                </div>
                <div className='d-flex gap-4 mt-2 easy-icon-para '>
                  <BsFillStopwatchFill className='easy-invest-icon' size="1.5rem" /> <h3>Commit to complete your transactions
                    within 15 minutes </h3>
                </div>
              </div>
            </Col>
            <Col className="col-lg-6 col-md-6 col-sm-12">
              <img src={EasyInvest} alt='' className='img-fluid'></img>
            </Col>
          </Row>
        </Container>


      </section>

      {/* Peer-to-peer (P2P) section start here */}

      <section className='Common_style' id='Peer-to-peer'>
        <Container>
          <Row>
            <Col className="col-lg-6 col-md-6 col-sm-12">
              <img src={p2pImg} alt='' className='img-fluid'></img>

            </Col>
            <Col className="col-lg-6 col-md-6 col-sm-12">
              <div className='Content d-flex justify-content-center flex-column'>
                <h2>Peer-to-peer</h2>
                <p>An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze
                  the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                </p>
              </div>

            </Col>
          </Row>
        </Container>
      </section>

      <section className='Common_style' id='how-it-is-work'>
        <Container>
          <Row>
            <Col className="col-lg-6 col-md-6 col-sm-12">
              <div className='Content d-flex justify-content-center flex-column'>
                <h2>How it Works</h2>
                <h3>We’ve built a platform to
                  buy and sell Crypto.</h3>
                <div className='d-flex gap-4 mt-2 easy-icon-para'>
                  <FaBraille className='easy-invest-icon' size="1.5rem" /> <h3>Buy Crypto from 0.3 USD</h3>
                </div>
                <div className='d-flex gap-4 mt-2 easy-icon-para' >
                  <TbWorld className='easy-invest-icon ' size="1.5rem" /> <h3>Buy Crypto from  INR</h3>
                </div>
                <div className='d-flex gap-4 mt-2 easy-icon-para '>
                  <AiFillTrophy className='easy-invest-icon' size="1.5rem" /> <h3>Commit to complete your transactions
                    within 15 minutes </h3>
                </div>

              </div>


            </Col>
            <Col className="col-lg-6 col-md-6 col-sm-12">
              <img src={workImg} alt='' className='img-fluid'></img>

            </Col>
          </Row>
        </Container>
      </section>





      


    </>
  )
}

export default Home
