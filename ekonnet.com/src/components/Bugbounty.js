import React from 'react'
import AffiliateImg from './assets/home-banner-bg.png';
import bug from "./assets/bugbounty.png";
import './Bugbounty.css'
import { Helmet } from 'react-helmet';
const Bugbounty = () => {
  return (
    <>
    <Helmet>
        <title>Ekonnet | Bugbounty </title>
      </Helmet>
     <section id='bug_hero' className='bug_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h6>Platforms Features</h6>
                    <h2>Ekonnet Bug Bounty Rewards</h2>
                    <button className='btn btn-primary'>Get Started</button>
                    </div>
                    <div className='col-lg-6'>
                    <img src={bug} alt='Bug.png' className='img-fluid'></img>
                </div>          
            </div>
        </div>
      </section>
      
      <section id='bug1' className='bug1  bg-[#131128] pt-[1px]'>
        <div className='container'>
         <div className='row'>
         <div className='col-lg-12'>
         <h1>Hunt, report, and get rewarded!</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>

         </div>
        </div>
      </section>
      <section id='bug2' className='bug2  bg-[#131128] pt-[1px]'>
        <div className='container'>
         <div className='row'>
         <div className='col-lg-12'>
         <h1>Responsible Disclosure Policy:</h1>
         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> 
         <ul>
          <li>submit your report once you discover the bug, the fastest way to alert our team is via our form at the bottom of this page;</li>
          <li>not share details of the bug in our customer support chat or publicly. If the matter is urgent you can advise the customer support team you have completed the bug report but do not disclose information and we will immediately alert our security team.</li>
          <li>make every effort not to interrupt or degrade our service during your investigation.</li>
          <li>not harm or defraud Ekonnet systems or our users during your investigation</li>
          <li>only target your own accounts during your research for vulnerabilities. Please do not violate the privacy of other users, destroy data, attempt to access or disrupt any other user accounts.</li>
          <li>provide written authority from the owner to perform such tasks, if working on behalf of a client or organisation where more than one account is used.</li>
         </ul>
         <p>Work with us in good faith by following our responsible disclosure policy ensures no legal action will be taken against you by Ekonnet.</p>
         </div>

         </div>
        </div>
      </section>
      <section id='bug2' className='bug2  bg-[#131128] pt-[1px]'>
        <div className='container'>
         <div className='row'>
         <div className='col-lg-12'>
         <h1>Bug Bounty eligibility & rules:</h1>
         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> 
         <ul>
          <li>You must fully accept and adhere to our terms of service</li>
          <li>You must not be a Prohibited Person, such as a citizen or resident of the United States of America, or acting for the benefit of a Prohibited Person</li>
          <li>You must not disclose information relating to your discovery publicly before it has been fixed</li>
          <li>You must not try to access or damage other users' Ekonnet accounts. When completing the research, you must use your own Ekonnet account</li>
          <li>You must not attempt social engineering or phishing techniques on our users or Ekonnet personnel</li>
          <li>You must not use software or perform attacks that could affect the stability of our platforms, such as DDOS attacks, spamming techniques or blackhat SEO.</li>
          <li>All decisions in relation to the administration of Bug Bounty program are at Ekonnet's sole and absolute discretion, including the distribution of rewards</li>
         </ul>
         <p>You can speak to our customer support team for any general inquiries on the Bug Bounty Eligibility & Rules.</p>
         </div>
         </div>
        </div>
      </section>
      <section id='bug3' className='bug3  bg-[#131128] pt-[1px]'>
        <div className='container'>
         <div className='row'>
         <div className='col-lg-12'>
         <h1>Rewards Policy:</h1>
         <p>All bounties are priced in $USD and paid in USDt or Bitcoin or any other digital token as determined in Ekonnet's sole and absolute discretion.</p>
         <p>We are happy to give you recognition for your collaboration but will respect your privacy if you prefer not to reveal your identity publicly. Ekonnet may, at its sole discretion, honour your skills in its upcoming Hall of Fame, with any bugs appropriate for public disclosure.</p>
         <span>We're always looking to meet talented security engineers. Get our attention by joining our Bug Bounty community, <strong>sign up!</strong></span>
          </div>
          </div>
         </div>
         </section>
         <section id='bug2' className='bug2  bg-[#131128] pt-[1px]'>
        <div className='container'>
         <div className='row'>
         <div className='col-lg-12'>
         <h1>Bug examples and their level of risk</h1>
         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> 
         <ul>
          <li>cross-site scripting (XSS, including Self-XSS)</li>
          <li>cross-site request forgery (CSRF/XSRF)</li>
          <li>mixed-content scripts</li>
          <li>authentication or authorisation flaws</li>
          <li>server-side code execution bugs</li>
          <li>remote code execution</li>
          <li>SPF/DMARC misconfiguration</li>
          <li className='mb-5'>stack traces or path disclosure</li>
         </ul>
         
         <span className='mt-5'>Non-qualifying bug examples</span>
         <p className='mt-5'>There must be an immediate threat to the Ekonnet platform or our users that can be exploited and is not hypothetical. Examples of common exclusions are:</p>
         <li>Vulnerabilities on sites hosted by third parties (https://Ekonnet.recruitee.com, https://Ekonnet.statuspage.io).</li>
         <li>Ekonnet-branded services operated by third parties</li>
         <li>Ekonnet open source projects: github.com</li>
         </div>
         </div>
        </div>
      </section>
      <section id='bug2' className='bug2  bg-[#131128] pt-[1px]'>
        <div className='container'>
         <div className='row'>
         <div className='col-lg-12'>
         <h1>How to Send a Report:</h1>
         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/><br/>The bug report must include a short description of the bug, and a fully completed Ekonnet Bounty Report template. You must not share any sensitive data before you have made contact with an official representative at Ekonnet.
         <br/><br/>If you send an image or a video, please:</span> 

         <ul>
          <li>keep it short by showing only the necessary parts.</li>
          <li>recording at a readable resolution.</li>
          <li>make sure the language of the video is in English to help us quickly identify the problem.</li>
          <li>include a copy of the text in your message explaining what it relates to, if a large amount of text appears in your video.</li>
         </ul>
         <div className="row mar-top d-flex justify-content-evenly align-items-center">
            <div className=" grp col-lg-6 col-sm-12 d-flex justify-content-start align-items-center mt-5">
            <input className='input' type="text" name="name" placeholder='Name*' />
            </div>
            <div className=" grp col-lg-6 col-sm-12 d-flex justify-content-start align-items-center mt-5">
            <input className='input' type="email" name="name" placeholder='Email*' />
            </div>
            <div className=" grp col-lg-6 col-sm-12 d-flex justify-content-start align-items-center mt-5">
            <input className='input' type="email" name="name" placeholder='Bug Found*' />
            </div>
            <div className=" grp col-lg-6 col-sm-12 d-flex justify-content-start align-items-center mt-5">
            <input className='input' type="email" name="name" placeholder='Which Product' />
            </div>
        </div>
        <div className="row d-flex justify-content-start align-items-start">
            <div className="col ">
            <textarea className='textarea' type="text-area" name="name" placeholder='Bug Report Summary*' />
            </div>
        </div>
        <div className="row d-flex justify-content-start align-items-start">
            <div className="col ">
            <textarea className='textarea' type="text-area" name="name" placeholder='Steps Needed to Replicate *' />
            </div>
        </div>
        <div className="row d-flex justify-content-start align-items-start">
            <div className="col ">
            <textarea className='textarea' type="text-area" name="name" placeholder='Impact *' />
            </div>
        </div>
        <div className="btn d-flex justify-content-center align-items-center">
            <button>Submit</button>
        </div>
         </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default Bugbounty