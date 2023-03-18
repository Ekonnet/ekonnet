import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../../components/assets/home-banner-bg.png';
import '../../components/Account/Account.css'


const GettingStarted = () => {

    

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
         <h3>Getting Started</h3>
         <h4>Getting Started</h4>
         <ul>
         <Nav.Link as={Link} to={""}><li>What is Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to create an account on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>A Beginner's guide to Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to earn on Ekonnet without trading</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Tutorial: How to use Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to make a deposit at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to make a crypto withdrawal at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What browsers and operating systems does Ekonnet support</li></Nav.Link>


         <h4>Mobile App</h4>
         <Nav.Link as={Link} to={""}><li>What is the Swap tool on Ekonnet Mobile Lite</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to sign up from the Ekonnet Mobile App</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to log in to the Ekonnet Mobile App</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Best security practices for the Ekonnet Mobile App</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to make a deposit or withdrawal using the Ekonnet Mobile App</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to create or edit orders using the Ekonnet Mobile App</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Setting up the Ekonnet Mobile App notifications</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to create and revoke a Ekonnet API Key</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is Fast Pay</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is SWAPiX on the Ekonnet Mobile App</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet Mobile Lite</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Market order on Ekonnet Mobile Lite</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is Lending on Ekonnet Mobile Lite</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Limit Order on Ekonnet Mobile Lite</li></Nav.Link>

         <h4>Ekonnet Community</h4>
         <Nav.Link as={Link} to={""}><li>The Ekonnet Affiliate Program</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is Bitrefill at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What are the Ekonnet Social Media Channels</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is Ekonnet Pulse</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to create a pulse on Ekonnet Pulse</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to use the Ekonnet Pulse Tipping function</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to report a pulse on Ekonnet Pulse</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet Pulse — Important information</li></Nav.Link> 
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

export default GettingStarted
