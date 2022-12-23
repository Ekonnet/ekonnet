import React from 'react';
// import ImageGrid from './ImageComponents/ImageGrid';
import './Affiliate.css';
import {AiOutlineArrowRight} from 'react-icons/ai';
import FutureImg from './assets/FutureImg.png';

const Affiliate = () => {
  return (
    <>
      <section id='affiliate_hero' className='affiliate_hero'>
        <div className='container'>
            <div className='row'>
                 <div className='col-lg-6'>
                    <h1>Ekonnet Affiliate</h1>
                    <h3><strong>Get Paid</strong> for Bringing People to Ekonnet</h3>
                    <p>our Bitcoin Affiliate Program helps you bring financial freedom to your community. And as a bonus, you get a steady stream of income too.</p>
                    <button className=' btn btn-primary '>Become An Affiliate
                    <AiOutlineArrowRight/>
                    </button>
                 </div>
                 <div className='col-lg-6'>
                    {/* <ImageGrid/> */}
                 </div>
            </div>
        </div>
      </section>
      <section id='affiliate_income' className='affiliate_income'> 
      <div className='container'>
        <div className=' text-center'>
            <span>Instant Income on Every Trade</span>
        </div>
          <div className='row'>
            <div className='col-lg-6'>
              <img src={FutureImg} alt='Affiliate' className='img-fluid'></img>
              
            </div>
            <div className='col-lg-6'>
              <div>
              <p>You make money every time the people you introduce to Ekonnet, and the people they invite, buy Bitcoin.</p>
              </div>
              <div className='income'>
              <h6>Earn 50% Escrow Fee</h6>
              <p>When the people you invite buy Bitcoin on Ekonnet</p>
              </div>
              <div className='income'>
              <h6>Earn 10% Escrow Fee</h6>
              <p>When people invited by your friends buy Bitcoin on Ekonnet</p>
              </div>
            </div>
        </div>
        </div>
      </section>
      <section id='why_affiliate' className='why_affiliate'>
        <div className='container'>
          <div className='text-center'>
            <h3>Why Become an Affiliate?</h3>
            <span>Our Bitcoin Affiliate Program is a great way for you to spread the word of crypto in your community.</span>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div>
                <h3>Earn Bitcoin</h3>
                <p>You make 50% of the escrow fee every time one of your affiliates buys Bitcoin.</p>
              </div>
              <div>
                <h3>Grow Your Network</h3>
                <p>You make 10% of the escrow fee every time somebody from your extended network buys Bitcoin.</p>
              </div>
              <div>
                <h3>Cash Out Anytime</h3>
                <p>Once you've earned at least 10 USD worth of Bitcoin, you can cash out your earnings into your Ekonnet wallet anytime you want.</p>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src={FutureImg} alt='Affiliate' className='img-fluid'></img>
            </div>
          </div>
        </div>
      </section>
      <section id='affiliate_work' className='affiliate_work'>
        <div className='container'>
          <div className='text-center'>
          <h1>How Does It Work?</h1>
          <span>It’s pretty simple, actually—become a Bitcoin Affiliate in three quick steps.</span>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <img src={FutureImg} alt='Affiliate' className='img-fluid'></img>
            </div>
            <div className='col-lg-6'>
              <h3>Invite Anyone</h3>
              <p>Share your Affiliate code or link on social media, crypto forums, or communities. You can find your unique code or link under your Affiliate Dashboard (web) or Affiliate tab (mobile).</p>
            </div>
            <div className='col-lg-6'>  
              <h3>Get Them to Trade</h3>
              <p>Educate your affiliates about crypto and how to trade on Ekonnet Every time they buy Bitcoin, you get 50% of their escrow fee. You also make 10% of the escrow fee every time one of their affiliates buys Bitcoin on Ekonnet.</p>
            </div>
            <div className='col-lg-6'>
              <img src={FutureImg} alt='Affiliate' className='img-fluid'></img>
            </div>  
            <div className='col-lg-6'>
              <img src={FutureImg} alt='Affiliate' className='img-fluid'></img>
            </div>
            <div className='col-lg-6'>
              <h3>Get Paid</h3>
              <p>Track your affiliates’ activity from your Affiliate Dashboard and watch your earnings automatically build up. Once your earnings are worth at least 10 USD, you can cash out to your Ekonnet wallet.</p>
            </div>
            

          </div>

        </div>

      </section>
    </>
  )
}

export default Affiliate
