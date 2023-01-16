import React from 'react'
import SecurityImg from '../assets/feature-img-1.png'
import SecurityImg2 from '../assets/banner-bg-2.png'
import { SiSpringsecurity } from 'react-icons/si';
import './Security.css';

const Security = () => {
  return (
    <>
      <section id='security' className='security'>
        <div className='container'>
          <div className="cover__security-section">
            <div className='row mt-5'>
              <div className='col-lg-6'>
                <h1>Your <span>security</span> is our priority</h1>
                <p>Our security team is continually improving our end-to-end security measures, improving auditing processes, and reducing the 'attack surface' of our infrastructure. Please note that we cannot disclose too many details of the security measures implemented on the platform for security and proprietary reasons.</p>
              </div>
              <div className='col-lg-6'>
                <img src={SecurityImg} alt='Security.png' className='img-fluid'></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='security_policy' className='security_policy'>
        <div className='container'>
          <div className="cover__security-section2 mt-5">
            <div className='row flex justify-center items-center'>
              <div className='col-lg-6'>
                <img src={SecurityImg2} alt='Security_Policy' className='img-fluid'></img>
              </div>
              <div className='col-lg-6'>
                <div className="sidebox">
                  <h1>Security policies</h1>
                  <h4>Security of funds and user information is our top priority.</h4>
                  <p>Our security team is continually improving our end-to-end security measures, improving auditing processes, and reducing the 'attack surface' of our infrastructure. Please note that we cannot disclose too many details of the security measures implemented on the platform for security and proprietary reasons.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id='account_protection' className='account_protection'>
        <div className='container'>
          <div className='row pb-3'>
            <div className='col-lg-10 col-md-10 mx-auto flex justify-center items-center flex-column'>
              <h1>User Account Protection</h1>
              <span>Some of the security measures highlighted below are in place by default, and others can be activated based on the security level you need. Please visithttps://www.ekonnet.com/securityto check the security status of your account and see recommendations</span>
            </div>
            </div>
            <div className="row grid gap-x-8 gap-y-4 grid-cols-3 mt-5">
              <div className='col protection__box flex justify-center items-center flex-column'>
                <div className="circle__protection-outer flex justify-center items-center">
                <div className="circle__protection flex justify-center items-center"><SiSpringsecurity size='2.5rem' className='text-white'/></div>
                </div>
                <h3 className='protection__heading'>Two-factor authentication (2FA)</h3>
                <p className='protection__paragraph'>Add an extra layer of security to your account and protect sensitive operations such as logging in, generating API keys, and withdrawing. Configure two-factor authentication using Google Authenticator, or a U2F Security Key.</p>
              </div>
              <div className='col protection__box flex justify-center items-center flex-column'>
              <div className="circle__protection-outer flex justify-center items-center">
                <div className="circle__protection flex justify-center items-center"><SiSpringsecurity size='2.5rem' className='text-white'/></div>
                </div>
                <h3>Universal 2nd factor (U2F)</h3>
                <p>Use a physical Security Key to take advantage of the ultra-secure FIDO Universal 2nd Factor (U2F) open authentication standard.</p>
              </div>
              <div className='col protection__box flex justify-center items-center flex-column'>
              <div className="circle__protection-outer flex justify-center items-center">
                <div className="circle__protection flex justify-center items-center"><SiSpringsecurity size='2.5rem' className='text-white'/></div>
                </div>
                <h3>Advanced API key permissions</h3>
                <p>Create API keys with advanced read/write permissions on a per-feature basis. Unleash the full power of the platform through our REST and WebSockets APIs.</p>
              </div>
              </div>
              <div className="row grid gap-x-8 gap-y-4 grid-cols-3 mt-5">
              <div className='col protection__box flex justify-center items-center flex-column'>
              <div className="circle__protection-outer flex justify-center items-center">
                <div className="circle__protection flex justify-center items-center"><SiSpringsecurity size='2.5rem' className='text-white'/></div>
                </div>
                <h3>Advanced verification tools</h3>
                <ul>
                  <li>Login data is saved and analyzed for unusual activity.</li>
                  <li>Intelligent system detects IP Address changes to prevent session hijacking.</li>
                  <li>Email notifications report logins and include a link to instantly freeze your account if you suspect malicious activity.</li>
                  <li>Limit access to your account based on IP address.</li>
                </ul>
              </div>
              <div className='col protection__box flex justify-center items-center flex-column'>
              <div className="circle__protection-outer flex justify-center items-center">
                <div className="circle__protection flex justify-center items-center"><SiSpringsecurity size='2.5rem' className='text-white'/></div>
                </div>
                <h3>Withdrawals protection</h3>
                <ul>
                  <li>Security system monitors withdrawals by IP address and other user behavior patterns, triggering manual admin inspection on withdrawals that appear unusual.</li>
                  <li>Withdrawal confirmation step that is immune to malicious browser malware.</li>
                  <li>Define an address whitelist to ensure no withdrawals can go anywhere else.</li>
                </ul>
              </div>
              <div className='col protection__box flex justify-center items-center flex-column'>
              <div className="circle__protection-outer flex justify-center items-center">
                <div className="circle__protection flex justify-center items-center"><SiSpringsecurity size='2.5rem' className='text-white'/></div>
                </div>
                <h3>Email encryption with OpenPGP</h3>
                <p>Want more protection? Encrypted email communication (PGP) adds an extra layer of privacy and security.</p>
              </div>
            </div>
        </div>
      </section>
    
      
      <section id='system_security' className='system_security'>
        <div className='container'>
          <div className='row flex justify-center items-center mt-5'>
            <h1 className='flex justify-center items-center mb-4'>System security</h1>
            </div>
            <div className="row grid gap-x-8 gap-y-4 grid-cols-3">
            <div className='col system__security'>
              <h3>Always up-to-date Linux systems to host the platform</h3>
              <p>Our servers network is protected using always up-to-date software and the best possible practices.</p>
            </div>
            <div className='col system__security'>
              <h3>Automatic real-time backup of the database</h3>
              <p>The platform database is backed up in real-time on encrypted hard-drives and is replicated in several geographical locations.</p>
            </div>
            <div className='col system__security'>
              <h3>Protection from DDoS attacks</h3>
              <p>We are protected by automatic Distributed Denial of Service protection to prevent trading to be halted by outside attacks.</p>
            </div>
            </div>
          </div>


      </section>
    </>
  )
}

export default Security
