import React from 'react'
import './tellfriend.css'
import Accordian from './Accordian/Accordian.js'
 import { AiOutlineLogin } from "react-icons/ai";
 import { MdInsertInvitation } from "react-icons/md";
 import { GiReceiveMoney } from "react-icons/gi";
 import { Helmet } from 'react-helmet';
const TellFriend = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | Tell A Friend </title>
      </Helmet>
    <section id='tell_hero' className='tell_hero'>
    <div className='container'>
    <div className='row'>
    <div className='col-lg-12 text-center'>
     <h1>Refferal friends & earn bonus points.</h1>
     <h2>Ekonnet's Tell-a-Friend programme.</h2>
     <p>$2 for you and $2 for your friend. Our Tell-a-Friend programme makes it easy to share the love. Simply invite your friends with your referral link. Each friend then needs to sign up, be verified, complete a fiat deposit of at least $25 and trade a minimum of $25. That's it.</p>
    </div>
    </div>
    </div>
    </section>
    <section id='tell1' className='tell1'>
    <div className='container'>
    <div className='row'>
    <div className='col-lg-12 text-center'>
     <em>Please note that our Tell-a-Friend programme is a friend invitation programme only.<br/>
        If you wish to recommend our services to a wider audience, please apply for our affiliate programme.<br/>
        Please also keep in mind that Ekonnet does not allow multiple accounts for one person and that opening an additional account will lead to the deactivation of both your accounts.</em>
       
    </div>
    </div>
    </div>
    </section>
    <hr className='mt-5 mb-5'></hr>
    <section id='tell2' className='tell2'>
    <div className='container'>
    <div className='row'>
    <span className='text-center'>Here's how it works</span>
    <div className='col-lg-4 d-flex mt-5 '>
            <div className='d-flex tell_box p-4'>
               <div className='tell_icon'>
                 <AiOutlineLogin/>
               </div>
             <div>
                 <h3>Log in to your account</h3>
                 <p>Log in to your Ekonnet account and go to the Tell-a-Friend section while you are logged in.</p>
             </div>
            </div>
            </div>
            <div className='col-lg-4 d-flex mt-5'>
            <div className='d-flex tell_box p-4'>
               <div className='tell_icon'>
               <MdInsertInvitation/>
               </div>
             <div>
                 <h3>Invite friends</h3>
                 <p>Copy and share your referral link with a friend or send them an email invite via the 'Invite a friend' form.</p>
             </div>
            </div>
            </div>
            <div className='col-lg-4 d-flex mt-5'>
            <div className='d-flex tell_box p-4'>
               <div className='tell_icon'>
               <GiReceiveMoney/>
               </div>
             <div>
                 <h3>Receive $2*</h3>
                 <p>Your friend has to be a new user, complete the sign up process, verify their account, make a deposit of at least $25 and trade a minimum of $25.</p>
             </div>
            </div>
            </div>
      </div>
    </div>
    <hr className='mt-5 mb-5'></hr>
    </section>
    <section className='tell2 pt-5 pb-5'>
                <div className='container text-center'>
                    <h1>Frequently Asked Question</h1>
                    <Accordian/>
                </div>
            </section>
    </>
  )
}

export default TellFriend