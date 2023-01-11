import React from 'react'
import './Career.css';
import FutureImg from './assets/FutureImg.png';
import AffiliateImg from './assets/home-banner-bg.png';

const Career = () => {
  return (
    <>
     <section id='career_hero' className='career_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h3>EXCITING OPPORTUNITIES<strong> . </strong>GREAT PEOPLE</h3>
                    <h1>Work at Ekonnet.com</h1>
                    <button className='btn btn-primary'>View Jobs</button>
                </div>
            </div>
        </div>
     </section>
     <section id='career' className='career bg-[#131128] pt-[70px]'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 text-center'>
                    <h1>Who We Are</h1>
                    <h3>EXCITING OPPORTUNITIES . GREAT PEOPLE</h3>
                    <p>Our vision is to create global economic freedom via peer-to-peer electronic cash. 
                     We believe the ability to freely acquire and use personal resources is a vital component of human dignity and a fundamental human right. 
                     To realize our vision, we strive to offer superior products & services and provide trusted news & educational materials on the future of money.</p>
                     <p>our vision means something to you, we invite you to join the Ekonet.com team.</p>
                </div>  
                <div className='col-lg-6'>
                    <img src={FutureImg} alt='Career' className='img-fluid'></img>
                </div>
            </div>
        </div>
     </section>
     <section id='openings' className='openings bg-[#131128] pt-[70px]'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h1>Current Opening</h1>
                    <h6>We're working to make money better—for everyone.</h6>
                    <p>Whether it's your paycheck, pension, or piggy bank savings, money matters to us all. So, rather than relying on banks—with their fees, delays, and fraud risk—we stand for money without limits. 
                     That's why we support Bitcoin Cash, a global digital currency that only you can control.</p>
                </div>
                <div className='col-lg-6'>
                <h3>Current Job Openings</h3>
                <h6>Departments</h6>
                <button className='btn btn-primary'>All Department</button>
                </div>
            </div>

        </div>

     </section>
    </>
  )
}

export default Career
