import React from 'react'
import SecurityImg from '../assets/feature-img-1.png'
import SecurityImg2 from '../assets/banner-bg-2.png'
import { SiSpringsecurity } from 'react-icons/si';
import './Security.css';
import { Helmet } from 'react-helmet';
const Security = () => {
  return (
    <>
    <Helmet>
        <title>Ekonnet | Security & Protection</title>
      </Helmet>
      <section id='security' className='security pt-[40px]'>
        <div className='container'>
          <div className="cover__security-section">
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 mt-3 justify-center items-center'>
              <div className=''>
                <h1 className='text-[40px] md:text-[55px] lg:text-[55px] xl:text-[70px] 2xl:text-[70px]'>Your <span>security</span> is our priority</h1>
                <p className='text-[20px] leading-9  md:text-[24px] p-1   lg:md:text-[20px] p-1  xl:md:text-[24px] p-2  2xl:'>Our security team is continually improving our end-to-end security measures, improving auditing processes, and reducing the 'attack surface' of our infrastructure. Please note that we cannot disclose too many details of the security measures implemented on the platform for security and proprietary reasons.</p>
              </div>
              <div className=''>
                <img src={SecurityImg} alt='Security.png' className='img-fluid'></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='security_policy' className='security_policy'>
        <div className='container'>
          <div className="cover__security-section2 mt-5">
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center items-center'>
              <div className=' order-2 md:order-2 lg:order-1 xl:order-1'>
                <img src={SecurityImg2} alt='Security_Policy' className='img-fluid'></img>
              </div>
              <div className='md:order-1'>
                <div className="sidebox">
                  <h1 className='text-[28px] md:text-[30px] lg:text-[32px] xl:'>Security policies</h1>
                  <h4 className='text-[18px]  md:text-[20px] lg:text-[24px] xl:'>Security of funds and user information is our top priority.</h4>
                  <p className='text-[16px]   md:text-[18px] lg:text-[22px] xl:'>Our security team is continually improving our end-to-end security measures, improving auditing processes, and reducing the 'attack surface' of our infrastructure. Please note that we cannot disclose too many details of the security measures implemented on the platform for security and proprietary reasons.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id='account_protection' className='account_protection'>
        <div className='container'>
          <div className='grid grid-cols-6  pb-2'>
            <div className='col-span-5  justify-center items-center flex-column'>
              <h1 className='text-[24px] md:text-[26px] lg:text-[30px] xl:text-[34px]'>User Account Protection</h1>
              <span className='text-[24px] md:text-[26px] lg:text-[28px]  xl:text-[28px]'>Some of the security measures highlighted below are in place by default, and others can be activated based on the security level you need.</span>
            </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3   gap-x-8 gap-y-8  mt-3">
              <div className='col protection__box flex justify-center items-center flex-column'>
                <div className="circle__protection-outer flex justify-center items-center">
                <div className="circle__protection flex justify-center items-center"><SiSpringsecurity size='2.5rem' className='text-white'/></div>
                </div>
                <h3 className='text-[22px] md:text-[20px] lg:text-[22px] xl:text-[24px] '>Two-factor authentication (2FA)</h3>
                <p className='text-[16px] leading-7 md:text-[16px] lg:text-[18px]  xl:text-[20px]'>Add an extra layer of security to your account and protect sensitive operations such as logging in, generating API keys, and withdrawing. Configure two-factor authentication using Google Authenticator, or a U2F Security Key.</p>
              </div>
              <div className='col protection__box flex justify-center items-center flex-column'>
              <div className="circle__protection-outer flex justify-center items-center">
                <div className="circle__protection flex justify-center items-center"><SiSpringsecurity size='2.5rem' className='text-white'/></div>
                </div>
                <h3 className='text-[22px] md:text-[20px] lg:text-[22px] xl:text-[24px] '>Universal 2nd factor (U2F)</h3>
                <p className='text-[16px] leading-7 md:text-[16px] lg:text-[18px]  xl:text-[20px]'>Use a physical Security Key to take advantage of the ultra-secure FIDO Universal 2nd Factor (U2F) open authentication standard.</p>
              </div>
              <div className='col protection__box flex justify-center items-center flex-column'>
              <div className="circle__protection-outer flex justify-center items-center">
                <div className="circle__protection flex justify-center items-center"><SiSpringsecurity size='2.5rem' className='text-white'/></div>
                </div>
                <h3 className='text-[22px] md:text-[20px] lg:text-[22px] xl:text-[24px] '>Advanced API key permissions</h3>
                <p className='text-[16px] leading-7 md:text-[16px] lg:text-[18px]  xl:text-[20px]'>Create API keys with advanced read/write permissions on a per-feature basis. Unleash the full power of the platform through our REST and WebSockets APIs.</p>
              </div>
            
            
              <div className='col protection__box flex justify-center items-center flex-column'>
              <div className="circle__protection-outer flex justify-center items-center">
                <div className="circle__protection flex justify-center items-center"><SiSpringsecurity size='2.5rem' className='text-white'/></div>
                </div>
                <h3 className='text-[22px] md:text-[20px] lg:text-[22px] xl:text-[24px] '>Advanced verification tools</h3>
                <ul >
                  <li className='text-[16px] leading-7 md:text-[16px] lg:text-[18px]  xl:text-[20px]'>Login data is saved and analyzed for unusual activity.</li>
                  <li className='text-[16px] leading-7 md:text-[16px] lg:text-[18px]  xl:text-[20px]'>Intelligent system detects IP Address changes to prevent session hijacking.</li>
                  <li className='text-[16px] leading-7 md:text-[16px] lg:text-[18px]  xl:text-[20px]'>Email notifications report logins and include a link to instantly freeze your account if you suspect malicious activity.</li> 
                </ul>
              </div>
              <div className='col protection__box flex justify-center items-center flex-column'>
              <div className="circle__protection-outer flex justify-center items-center">
                <div className="circle__protection flex justify-center items-center"><SiSpringsecurity size='2.5rem' className='text-white'/></div>
                </div>
                <h3 className='text-[22px] md:text-[20px] lg:text-[22px] xl:text-[24px] '>Withdrawals protection</h3>
                <ul className='text-[14px] md:text-[16px] lg:text-[18px]  xl:text-[20px]'>
                  <li className='text-[16px] leading-7 md:text-[16px] lg:text-[18px]  xl:text-[20px]'>Security system monitors withdrawals by IP address and other user behavior patterns, triggering manual admin inspection on withdrawals that appear unusual.</li>
                  <li className='text-[16px] leading-7 md:text-[16px] lg:text-[18px]  xl:text-[20px]'>Withdrawal confirmation step that is immune to malicious browser malware.</li>
                  
                </ul>
              </div>
              <div className='col protection__box flex justify-center items-center flex-column'>
              <div className="circle__protection-outer flex justify-center items-center">
                <div className="circle__protection flex justify-center items-center"><SiSpringsecurity size='2.5rem' className='text-white'/></div>
                </div>
                <h3 className='text-[22px] md:text-[20px] lg:text-[22px] xl:text-[24px] '>Email encryption with OpenPGP</h3>
                <p className='text-[16px] leading-7 md:text-[16px] lg:text-[18px]  xl:text-[20px]'>Want more protection? Encrypted email communication (PGP) adds an extra layer of privacy and security.</p>
              </div>
              </div>
        </div>
      </section>
    
      
      <section id='system_security' className='system_security'>
        <div className='container'>
          <div className='row flex justify-center items-center mt-5'>
            <h1 className='flex justify-center items-center mb-4'>System security</h1>
            </div>
            <div className=" grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            <div className='system__security'>
              <h3>Always up-to-date Linux systems to host the platform</h3>
              <p>Our servers network is protected using always up-to-date software and the best possible practices.</p>
            </div>
            <div className='system__security'>
              <h3>Automatic real-time backup of the database</h3>
              <p>The platform database is backed up in real-time on encrypted hard-drives and is replicated in several geographical locations.</p>
            </div>
            <div className=' system__security'>
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
