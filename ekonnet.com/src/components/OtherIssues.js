import React from 'react'
import './Tokendeposite.css'
import {BiChevronRight} from 'react-icons/bi'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const OtherIssues = () => {
  return (
    <>
      <section id='token-deposite' className='token-deposite'>
      <div className='container'>
     <div className='row'>
     <div className='d-flex'>
     <div className='col-lg-2'></div>
     <div className='col-lg-8'>
     <div className='token d-flex'>
     <div>
     <Nav.Link as={Link} to={"/frequently-asked-question"}><h2>Home</h2></Nav.Link>
     </div>
     <div>
     <BiChevronRight/>
     </div>
     <div>
        <h3>Other Issues</h3>
     </div>
     </div>
     {/* <p style={{color: "darkblue"}}>1. A Regular wire withdrawal request is sent out from Bitfinex within 5-10 business days. 2. An Express wire withdrawal is sent out from Bitfinex within 24 hours on any given business day and incurs a 1% processing fee. Bitfinex cannot guarantee processing of your withdrawal within a specified time frame as each bank will have its own procedures and processing times.</p> */}
     <form>
     <div className='token-input'>
     <label className='required mt-3'>Subject</label><br/>
        <input type="text" name="text" placeholder='' className='mt-1'></input>  
     </div>
     <div className='token-input'>
     <label className='required mt-3'>Describe your issue</label><br/>
        <textarea id="text" name="text" rows="4" cols="50" className='mt-1' placeholder ='Let us know what your issue is. Specific details will expedite the resolution of your request'></textarea>
     </div>
     <div className='token-input-s'>
     <label className='required mt-3'>Attachments</label><br/>
        <input type="file" name="text" placeholder='' className='mt-1' style={{}}></input> 
        <span>Upload file here</span>
        <hr style={{marginTop: "60px", color: "darkblue"}}></hr>
     </div>
     <div className='bottom-sec'>
     <div className='d-flex'>
      <div className='col-lg-4'>
        <p>As you are not currently logged in, please identify yourself or<Nav.Link as={Link} to={"/sign-in"}><strong>Log In</strong></Nav.Link></p>
      </div>
      <div className='col-lg-4'>
      <div className='token-input-bottom'>
     <label className='required mt-3'>Email</label><br/>
        <input type="text" name="text" placeholder='Email' className='mt-1'></input>  
     </div>
     <div className='token-input-bottom'>
     <label className='required mt-3'>Name</label><br/>
        <input type="text" name="text" placeholder='Name' className='mt-1'></input>  
     </div>
      </div>
     </div>
     <div className='text-center captcha'>
      <p>Fill in all required fields to submit your ticket</p>
      </div>
      <div className='justify-content-center align-item-center text-center'>
        <button className='btn btn-primary'>Submit</button>
      </div>
     </div>
     </form>
     </div>
     <div className='col-lg-2'></div>
     </div>
      </div>
     </div>
      </section>    
    </>
  )
}

export default OtherIssues
