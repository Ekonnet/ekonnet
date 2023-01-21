import React from 'react'
import AffiliateImg from './assets/home-banner-bg.png';
import bug from "./assets/bugbounty.png";
import './Bugbounty.css'
const Bugbounty = () => {
  return (
    <>
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
         </div>

         </div>
        </div>
      </section>
    </>
  )
}

export default Bugbounty