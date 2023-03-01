import React, {useState}from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import './Tokendeposite.css'

const Captcha = () => {
    const[verified, setVerified]=useState(false)
    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(true);
      }
  return (
    <>
    <div className='justify-content-center align-item-center text-center captcha-box'>
      <ReCAPTCHA 
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}/>
  </div>
  <div className='justify-content-center align-item-center text-center'>
      
      <button type="submit" className='btn btn-primary' disabled=
    {!verified}>Submit</button>
    </div>
    </>
  )
}

export default Captcha
