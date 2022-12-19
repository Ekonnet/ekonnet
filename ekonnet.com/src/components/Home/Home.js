import React from 'react'
import Video from '../assets/Header_Video.mp4';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swipper from './Swipper';
import './Home.css';
import TradeImg from "../assets/Trade.png";
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


      <section className='Coinlist'>

        <h2> This section design later </h2>
      </section>

      {/* Trade section start here */}


      <section className='trade'>
        <Container>
          <Row>
            <Col className="col-lg-6 col-md-6 col-sm-12">
              <div className='kuchbhi'>
              <h2>Trade</h2>
              <p>An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader. </p>
              </div>
            </Col>
            <Col className="col-lg-6 col-md-6 col-sm-12">
            <img src={TradeImg} alt='' className='img-fluid'></img>
            </Col>
          </Row>
        </Container>


      </section>



    </>
  )
}

export default Home
