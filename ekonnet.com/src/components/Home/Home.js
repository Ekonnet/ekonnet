import React from 'react'

import Video from '../assets/Header_Video.mp4';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
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
import { BsPlusCircleDotted } from 'react-icons/bs';
import { MdOutlineInsights } from 'react-icons/md';
import { AiOutlineBank } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaBloggerB } from 'react-icons/fa';



import Buttons from '../ButtonComponents/Buttons';
import Button from '@mui/material/Button';
import image from '../assets/exchange-img.jpg';
// import MarginImage from '../assets/margin-img.jpg';
// import FundingImage from '../assets/funding-img.jpg';
import MobileApp from '../assets/MobileApp.png';
import PlayStore from '../assets/playstore-img.png';


import TradingInfoCard from '../CardComponents/TradingInfoCard';
import { NavLink } from 'react-bootstrap';


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
            <Button className='ml-5 invest-btn' href='/sign-in' variant="contained" size="medium">Get Start</Button>

          </div>

        </div>
      </section>
      {/* hero section End here */}

      <section className="slider">
        <Container>
          <Swipper />
          <h2 className='digital-assets'>The home of digital asset trading</h2>
          <div className="login-btn">
            {/* <Button href='/sign-up' size="lg" className='sign-up'>Sign Up</Button>
            <Button href='/sign-in' size="lg" className='sign-in'>Sign In</Button> */}
            <Buttons signup='Sign Up' />
          </div>
        </Container>

      </section>

      {/* slider section End here */}


      <section className=' Common_style' id='Coinlist'>
        <Container>
          <Row>

            <img className='mt-1' src={Maingraph} alt="main-heading" width="3000px" height="700px" />

          </Row>
        </Container>


      </section>

      {/* Trade section start here */}


      <section className='Common_style' id='trade'>
        <Container>
          <Row>
            <Col className="col-lg-6 col-md-6 col-sm-12" >
              <div className='Content d-flex justify-content-center flex-column' data-aos="zoom-in-right" >
                <h2 className='text-white'>Trade</h2>
                <p className='text-white'>An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
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
                <p className='text-white'>An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze
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
                <p className='text-white'>By easy to use interface and fast transaction
                  processing speed,  anyone can invest crypto
                  with Ekonnet
                </p>
                <div className='d-flex gap-4 mt-4 easy-icon-para'>
                  <AiFillDollarCircle className='easy-invest-icon' size="2rem" /> <h3>Buy Crypto from 0.3 USD</h3>
                </div>
                <div className='d-flex gap-4 mt-4 easy-icon-para' >
                  <BsFillCartCheckFill className='easy-invest-icon ' size="2rem" /> <h3>Buy Crypto from  INR</h3>
                </div>
                <div className='d-flex gap-4 mt-4 easy-icon-para '>
                  <BsFillStopwatchFill className='easy-invest-icon' size="2rem" /> <h3>Commit to complete your transactions
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
                <p className='text-white'>An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze
                  the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                </p>
              </div>

            </Col>
          </Row>
        </Container>
      </section>

      <section className='Common_style' id='how-it-is-work'>
        <Container>
          <Row >
            <div className='mt-5 d-flex'>
              <Col className="col-lg-6 col-md-6 col-sm-12">
                <div className='Content d-flex justify-content-center flex-column'>
                  <h2>How it Works</h2>
                  <h3 className='pt-5'>We've built a platform to
                    buy and sell Crypto.</h3>
                  <div className='d-flex gap-4 mt-4 easy-icon-para'>
                    <FaBraille className='easy-invest-icon' size="2rem" /> <h3>Decentralized Platform</h3>
                  </div>
                  <div className='d-flex gap-4 mt-4 easy-icon-para' >
                    <TbWorld className='easy-invest-icon ' size="2rem" /> <h3>Crowd Wishdom</h3>
                  </div>
                  <div className='d-flex gap-4 mt-4 easy-icon-para '>
                    <AiFillTrophy className='easy-invest-icon' size="2rem" /> <h3>Rewards MeAchanism
                    </h3>
                  </div>

                </div>


              </Col>
              <Col className="col-lg-6 col-md-6 col-sm-12">
                <img src={workImg} alt='' className='img-fluid'></img>

              </Col>
            </div>
          </Row>
        </Container>
      </section>

      <section className='Common_style' id='Trading-platform'>
        <Container>
          <Row>
            <Col className="col-12">
              <h2 className=''>World ClassTradingPlatform</h2>
            </Col>
          </Row>
          <Row className='pt-5'>
            <Col >
              <TradingInfoCard
                image={image}
                title="Exchange"
                para="Ekonnet offers order books with top tier liquidity, 
          allowing users to easily exchange Bitcoin, Ethereum, 
          EOS, Litecoin, Ripple, NEO and many other digital assets 
          with minimal slippage. Ekonnet also boasts a suite of order 
          types to help traders take advantage of every situation
          "
              />
            </Col>
            <Col>
              <TradingInfoCard
                image={image}
                title="Margin trading"
                para="Ekonnet allows users to trade with up to 10x leverage by receiving funding from the peer to peer margin funding platform.
           Users can enter an order to borrow the desired amount of funding at the rate and duration of their choice, or they can simply open a position and Ekonnet will take out .
           
           "/>
            </Col>
            <Col>
              <TradingInfoCard
                image={image}
                title="Margin funding"
                para="Ekonnet allows users to trade with up to 10x leverage by receiving funding from the peer to peer margin funding platform.
           Users can enter an order to borrow the desired amount of funding at the rate and duration of their choice, or they can simply open a position and Ekonnet will take out .
           
           "/>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col>
              <TradingInfoCard
                image={image}
                title="Security"
                para="Ekonnet offers order books with top tier liquidity, 
           allowing users to easily exchange Bitcoin, Ethereum, 
           EOS, Litecoin, Ripple, NEO and many other digital assets 
           with minimal slippage. Ekonnet also boasts a suite of order 
           types to help traders take advantage of every situation
           
           "/>
            </Col>
            <Col>
              <TradingInfoCard
                image={image}
                title="Order Type"
                para="Ekonnet offers order books with top tier liquidity, 
           allowing users to easily exchange Bitcoin, Ethereum, 
           EOS, Litecoin, Ripple, NEO and many other digital assets 
           with minimal slippage. Ekonnet also boasts a suite of order 
           types to help traders take advantage of every situation
           
           "/>
            </Col>
            <Col>
              <TradingInfoCard
                image={image}
                title="Customizable Interface"
                para="Ekonnet offers order books with top tier liquidity, 
           allowing users to easily exchange Bitcoin, Ethereum, 
           EOS, Litecoin, Ripple, NEO and many other digital assets 
           with minimal slippage. Ekonnet also boasts a suite of order 
           types to help traders take advantage of every situation
           
           "/>
            </Col>
          </Row>
        </Container>
      </section>


      <section className='Common_style' id='mobile-app'>
        <Container>
          <Row >
            <div className='mt-5 d-flex'>
              <Col className="col-lg-6 col-md-6 col-sm-12">
                <div className='Content d-flex justify-content-center flex-column'>
                  <h2 className='mobile-app-heading'>Trasted Platform
                    Anytime & Anywhere</h2>
                  <h3 className='mobile-app-subheading pt-4'>The  Ekonnet mobile app adapts the full functionality of the Ekonnet platform
                    for seamless ‘on-the-go’ trading .<br/><br/>
                    The Ekonnet Mobile application allows you to connect to your ekonnet trading account and provide live information about your open orders as well as the status of your account. Wherever you are, you can easily make changes to your trades and never have to miss an opportunity again.</h3>

                  <img src={PlayStore} alt='' className='w-1 h-auto mt-3'></img>
                </div>


              </Col>
              <Col className="col-lg-6 col-md-6 col-sm-12">
                <img src={MobileApp} alt='' className='img-fluid mobile-app-img '></img>

              </Col>
            </div>
          </Row>
        </Container>
      </section>




      <section className='Common_style' id='invest-now'>
        <Container>

          <Row  >
            <div className='d-flex justify-content-center  flex-column text-center invest-heading'>
              <h3>Get started in a few minutes</h3>
              <h4>Start  your crypto investment with Ekonnet now !</h4>
            </div>
          </Row>
          <Row className='mt-5'>
            <Col>
              <div className='d-flex justify-content-center gap-3 invest'>
                <BsPlusCircleDotted className='icons' size="2rem" />
                <h3>Create an account </h3>
              </div>
            </Col>
            <Col>
              <div className='d-flex justify-content-center gap-3 invest' >
                <AiOutlineBank className='icons' size="2rem" />
                <h3>Link your bank account </h3>
              </div>
            </Col>
            <Col>
              <div className='d-flex justify-content-center gap-3 invest'>
                <MdOutlineInsights className='icons' size="2rem" />
                <h3>Start buying & selling </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center mt-5'>
              <Button className='invest-btn' href='/sign-in' variant="contained" size="medium">Invest now</Button>
            </Col>
          </Row>

        </Container>
      </section>




      <section className='Common_style' id='join-cumunity'>
        <Container>

          <Row  >
            <div className='d-flex justify-content-center  flex-column text-center invest-heading'>
              <h3 className='join-community-heading'>Join Our Community</h3>
              <h4 className='join-community-para'>Ekonnet is Global .Join The Conversation in any of our woldwide communities.</h4>
            </div>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center gap-5 mt-5 community-social'>
              <div className='com-twitter'>
                <BsTwitter className='community-icon ' size="1.5rem" /><NavLink as={Link} to={"/"} >Twitter</NavLink>
              </div>
              <div className='com-twitter'>
                <FaFacebookF className='community-icon' size="1.5rem" /><NavLink as={Link} to={"/"}>Facebook</NavLink>
              </div>
              <div className='com-twitter'>
                <AiFillInstagram className='community-icon' size="1.5rem" /><NavLink as={Link} to={"/"}>Instagram</NavLink>
              </div>
              <div className='com-twitter'>
                <FaBloggerB className='community-icon' size="1.5rem" /><NavLink as={Link} to={"/"}>Blog</NavLink>
              </div>
            </Col>
          </Row>



        </Container>
      </section>






    </>
  )
}

export default Home
