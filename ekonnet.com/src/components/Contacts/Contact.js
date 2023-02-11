import React from 'react'
import './Contact.css';
import { IoMdMailUnread } from 'react-icons/io';

import { IoCall } from 'react-icons/io5';
import {FaMapMarkerAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
const Contact = () => {
  return (
   <>
    <Helmet>
        <title>Ekonnet | Contact </title>
      </Helmet>
  <section className="contact__section">
    <div className="container">
        <div className="row">
            <div className=" contact__contact col-4 mx-auto text-center">
                <div className="beforeLine"></div>
                <span>CONTACT</span>
                
                <h2 className='mt-3'> <span>Contact</span> Ekonnet Crypto</h2>
            </div>
        </div>

        <div className="row mt-5 pb-5">
            <div className="contact__content col-lg-4 col-sm-6">
                <div className="wrap d-flex justify-content-center align-items-center">
                <div className="outerciecle">
                <div className="icon-cercle d-flex justify-content-center align-items-center">
                    <IoMdMailUnread/>
                </div>
                </div>
                </div>
                <h6>enetworkengineering@gmail.com </h6>
               <h6> infoweb@gmail.com </h6>
            </div>
            <div className="contact__content col-lg-4 col-sm-6">
            <div className="wrap d-flex justify-content-center align-items-center">
                <div className="outerciecle2">
                <div className="icon-cercle2 d-flex justify-content-center align-items-center">
                    <IoCall/>
                </div>
                </div>
                </div>
                <h6>+61 478418788</h6>
               <h6> infoweb@gmail.com </h6>
            </div>
            <div className=" contact__content col-lg-4 col-sm-6">
            <div className="wrap d-flex justify-content-center align-items-center">
                <div className="outerciecle3">
                <div className="icon-cercle3 d-flex justify-content-center align-items-center">
                    <FaMapMarkerAlt/>
                </div>
                </div>
                </div>
                <h6>spiritofgod8</h6>
               <h6> infoweb@gmail.com </h6>
            </div>
        </div>
    </div>
  </section>
   
   
   </>
  )
}

export default Contact