import React, {useEffect} from 'react'
import './MobileApp.css';
import Button from 'react-bootstrap/Button';
import Mobile from "../assets/Mobile-app.png";
import mobile_crypto from "../assets/mobile_crypto.png";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MobileApp = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
    <section id='mobile' className='mobile'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                  <h1>The World's Fastest Growing Crypto App</h1>
                  <h4>Buy crypto at true cost</h4>
                  <p>Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using bank transfers or 
                     your credit/debit card.
                  </p>
                  <Button className='get-start'>Trade Now</Button>
                </div>
                <div className='col-lg-6' data-aos="zoom-in-up">
                    <img src={Mobile} alt='' className='img-fluid'></img>
                </div>
            </div>
        </div>
    </section>
    <section id='ultimate_crypto' className='ultimate_crypto'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>The ultimate crypto experience at your fingertips</h1>
                    <h6>The Ekonnet mobile app provides the full functionality of the Ekonnet platform for seamless 'on-the-go' trading.</h6>
                    <p>Access the world of cryptocurrency and explore its endless possibilities, including Fast Pay. Send and receive crypto payments with a simple and easy setup.</p>
                </div>
                <div className='col-lg-6' data-aos="zoom-in-up">
                <img src={mobile_crypto} alt='mobile_crypto' className='img-fluid'></img>
                </div>
            </div>
        </div>
    </section>
    <section id='mobile1' className='mobile1'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6' data-aos="zoom-in-up">
                    <img src={mobile1} alt='mobile1' className='img-fluid'></img>
                </div>
                <div className='col-lg-6'>
                    <h1>View positions, orders & history at a glance</h1>
                    <p>The Ekonnet app gives you full control of your portfolio while you are on the move. View positions, open orders and trading history with a simple tap.</p>
                </div>
            </div>
        </div>
    </section>
      <section id='mobile2' className='mobile2'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>Navigate the digital asset markets from anywhere</h1>
                    <p>Trade an array of digital currencies from anywhere in the world. Ekonnet from simple and complex order types, margin trading and a number of additional features to preserve your market edge.</p>
                </div>
                <div className='col-lg-6' data-aos="zoom-in-up">
                <img src={mobile2} alt='mobile2' className='img-fluid'></img>
                </div>
            </div>
        </div>
      </section>
      <section id='mobile3' className='mobile3'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6' data-aos="zoom-in-up">
                    <img src={mobile3} alt='mobile3' className='img-fluid'></img>
                </div>
                <div className='col-lg-6'>
                    <h1>Ekonnet mobile app Lite Mode</h1>
                    <p>Access the EKonnet trading platform. No clutter, no fuss! Easy to use and easy to trade, stake and lend crypto with just a few taps using a simplified interface.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default MobileApp
