import React from 'react'
import './MobileApp.css';
import Button from 'react-bootstrap/Button';
import Mobile from "../assets/Mobile-app.png";


const MobileApp = () => {
  return (
    <>
    <section id='mobile' className='mobile'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                  <h1>The World’s Fastest Growing Crypto App</h1>
                  <h4>Buy crypto at true cost</h4>
                  <p>Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using bank transfers or 
                     your credit/debit card.
                  </p>
                  <Button size="lg" className='get-start'>Trad Now</Button>
                </div>
                <div className='col-lg-6'>
                    <img src={Mobile} alt='' className='img-fluid'></img>
                </div>
            </div>
        </div>
    </section>
    <section id='mob' className='mob'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h1>Trade with confidence on the world’s fastest
                       and most secure crypto exchange
                    </h1>
                </div>
                <div className='d-flex'>
                <div className='col-lg-6 mob_desk'>
                    <h1>Desktop</h1>
                    <email>www.ekonnet.com</email>
                 </div>
                 <div className='col-lg-6'>
                    <h1>Mobile App</h1>
                    <div className='d-flex'>
                        <div className='col-lg-6'>
                        <p>Download for App store</p>
                        </div>
                        <div className='col-lg-6'>
                        <p>Download for Google pay</p>
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

export default MobileApp
