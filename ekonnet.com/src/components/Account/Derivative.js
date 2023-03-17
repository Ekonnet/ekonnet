import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'


const Derivative = () => {
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
         <h3>Derivatives</h3>
         <ul>
         <Nav.Link as={Link} to={"/How-to-move-funds-to-the-Derivatives-wallet"}><li>How to move funds to the Derivatives wallet</li></Nav.Link>
         <Nav.Link as={Link} to={"/Derivatives-Trading-on-Ekonnet"}><li>Derivatives Trading on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={"/The-Ekonnet-Derivatives-trading-interface"}><li>The Ekonnet Derivatives trading interface</li></Nav.Link>
         <Nav.Link as={Link} to={"/What-is-Termination-on-Ekonnet"}><li>What is Termination on Ekonnet</li></Nav.Link>         
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

export default Derivative