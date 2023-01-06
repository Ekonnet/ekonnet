import React from 'react';
// import ImageGrid from './ImageComponents/ImageGrid';
import './Affiliate.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
// import FutureImg from './assets/FutureImg.png';
import AffiliateImg from './assets/home-banner-bg.png'
import AffiliateMob from './assets/affiliate-illustration.png'
import Reffer1 from './assets/link.png'
import Reffer2 from './assets/invite.png'
import Reffer3 from './assets/earn.png'
import WhyAffiliate from './assets/why-affiliate1.png'
import TradeAffiliate from './assets/trade-affiliate.png'

const Affiliate = () => {


  return (
    <>
      <section id='affiliate_hero' className='affiliate_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h1 className='text-white font-bold font-Josefine '> Join The Ekonnet Affiliate Program.</h1>
              <h3 className='text-white pt-2'>Get Paid for Bringing People to Ekonnet</h3>
              <p className='text-white leading-7 pt-2 text-[18px]'>Our Bitcoin Affiliate Program helps you bring financial freedom to your community. And as a bonus, you get a steady stream of income too.</p>

              <button className=' btn affiliateBtn '>Become An Affiliate <AiOutlineArrowRight /></button>
            </div>
            <div className='col-lg-6 pt-3'>
              <img src={AffiliateMob} alt='' className='' />
            </div>
          </div>
        </div>
      </section>
      <section className="reffer pb-40px bg-[#131128]">
        <div className="container">
          <div className="row">
            <div className="col reffer-content flex justify-center items-center flex-column">
              <h3 className="reffer-head text-white text-[40px] font-bold ">Refer and Earn</h3>
              <p className="reffer-para text-white text-center text-[24px] pt-2 ">Refer your friends to crypto and earn 50% of their <br /> trading fee</p>
            </div>
          </div>
          <div className="row grid grid-cols-3 gap-4 pt-3  ">
            <div className="col reffer-div flex justify-center items-center flex-column">
              <div className="reffer-circle">
                <img src={Reffer1} alt='' />
              </div>
              <h2 className="reffer-heading">Get Your Link</h2>
              <p className="reffer-para">Sign in to your crikto account and copy your unique link.</p>
            </div>
            <div className="col reffer-div flex justify-center items-center flex-column">
              <div className="reffer-circle">
                <img src={Reffer2} alt='' />
              </div>
              <h2 className="reffer-heading">Invite Friends
              </h2>
              <p className="reffer-para">Share your referral link with your friends so they can Sign Up.

              </p>
            </div>
            <div className="col reffer-div flex justify-center items-center flex-column">
              <div className="reffer-circle">
                <img src={Reffer3} alt='' />
              </div>
              <h2 className="reffer-heading">Earn Crypto
              </h2>
              <p className="reffer-para">50% trading fee from each refer, sent right to your crikto wallet.

              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='affiliate_income' className='affiliate_income bg-[#131128]'>
        {/* <div className='container-fluid'> */}
        <div className='row'>
          <div className='col-5 mx-auto affiliate-incom-trade'>
            <img src={TradeAffiliate} alt='Affiliate' className='.trade-affiliate-img' ></img>
          </div>
          <div className='col-5 mx-auto flex justify-center items-start flex-column '>
            <h2 className='text-white font-bold leading-9'>Instant Income on <br />Every Trade</h2>
            <p className='text-white'>You make money every time the people you introduce to Ekonnet,
              and the people they invite, buy Bitcoin. <br />
              Earn 50% Escrow Fee

              When the people you invite buy Bitcoin on Ekonnet
              Earn. <br /> 10% Escrow Fee
              When people invited by your friends buy Bitcoin on Ekonnet</p>

            <button className=' btn affiliateBtn text-white'> Join The Program </button>

          </div>
        </div>
        {/* </div> */}
      </section>
      <section id='why_affiliate' className='why_affiliate bg-[#131128]'>
        <div className='container'>
          <div className='text-center'>
            <h3 className='pt-[90px]'>Why Become an Affiliate?</h3>
            <span>Our Bitcoin Affiliate Program is a great way for you to spread <br /> the word of crypto in your community.</span>
          </div>
          <div className='row pt-5'>
            <div className="col-10 mx-auto why-affiliate__box">
              <div className="row">
                <div className='col flex justify-center items-center flex-column gap-4 ml-4'>
                  <div className='inner-box-affiliate'>
                    <h3>__Earn Bitcoin</h3>
                    <p>You make 50% of the escrow fee every time one of your affiliates buys Bitcoin.</p>
                  </div>
                  <div className='inner-box-affiliate'>
                    <h3>__Grow Your Network</h3>
                    <p>You make 10% of the escrow fee every time somebody from your extended network buys Bitcoin.</p>
                  </div>
                  <div className='inner-box-affiliate'>
                    <h3>__Cash Out Anytime</h3>
                    <p>Once you've earned at least 10 USD worth of Bitcoin, you can cash out your earnings into your Ekonnet wallet anytime you want.</p>
                  </div>

                </div>
                <div className='col p-5'>
                  <img src={WhyAffiliate} alt='Affiliate' className='img-fluid'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Affiliate
