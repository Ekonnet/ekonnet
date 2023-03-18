import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'


const Mob = () => {
  return (
    <>
     <section id='web_hero' className='web_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
        <div className='container'>
            <div className='row'>
                 <div className='col-lg-12 text-center'>
                 <h1>Welcome to the Ekonnet Help Center</h1>
                    <form>
                    <input type='search' placeholder='Search' id="search" name="search"></input>
                    </form>
                    </div>
            </div>
        </div>
      </section>
      <section>
        <div className='container'>
        <div className='row'>
         <div className='col-lg-2'>
         </div>
         <div className='col-lg-8 access'>
         <h3>Mobile App</h3>
         <ul>
         <Nav.Link as={Link} to={""}><li>What is the Swap tool on EkonnetMobile Lite</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to sign up from the EkonnetMobile App</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to log in to the EkonnetMobile App</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Best security practices for the EkonnetMobile App</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to make a deposit or withdrawal using the EkonnetMobile App</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to create or edit orders using the EkonnetMobile App</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Setting up the EkonnetMobile App notifications</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to create and revoke a EkonnetAPI Key</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is Fast Pay</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is SWAPiX on the EkonnetMobile App</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>EkonnetMobile Lite</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Market order on EkonnetMobile Lite</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is Lending on EkonnetMobile Lite</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Limit Order on EkonnetMobile Lite</li></Nav.Link>
         </ul>
         </div>
         <div className='col-lg-2'>
         </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Mob