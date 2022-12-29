import React from 'react'
import FutureImg from '../assets/FutureImg.png';
import './Security.css';

const Security = () => {
  return (
    <>
      <section id='security' className='security'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>Your security is our priority</h1>
                </div>
                <div className='col-lg-6'>
                    <img src={FutureImg} alt='Security.png' className='img-fluid'></img>
                </div>
            </div>
        </div>
      </section>
      <section id='security_policy' className='security_policy'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h1>Security policies</h1>
              <h4>Security of funds and user information is our top priority.</h4>
              <p>Our security team is continually improving our end-to-end security measures, improving auditing processes, and reducing the 'attack surface' of our infrastructure. Please note that we cannot disclose too many details of the security measures implemented on the platform for security and proprietary reasons.</p>
            </div>
            <div className='col-lg-6'>
              <img src={FutureImg} alt='Security_Policy' className='img-fluid'></img>
            </div>
          </div>
        </div>
      </section>
      <section id='account_protection' className='account_protection'>
      <div className='container'>
        <div className='row'>
          <h1>User account protection</h1>
          <p>Some of the security measures highlighted below are in place by default, and others can be activated based on the security level you need. Please visithttps://www.ekonnet.com/securityto check the security status of your account and see recommendations</p>
          </div>
      </div>
      </section>
    </>
  )
}

export default Security
