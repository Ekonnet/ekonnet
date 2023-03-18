import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const Order = () => {
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
         <h3>Order Types and Order Options</h3>
         
         <ul>
         <Nav.Link as={Link} to={""}><li>What is a Spread Ladder order option on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Limit Order on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is the Interactive Book order on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Market order on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Stop Order on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Stop-Limit order on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Trailing Stop order on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Fill or Kill order on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is an Immediate or Cancel order on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Time in Force (TIF) order option on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Scaled order on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Reduce-only option on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a One Cancels Other (OCO) order option on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Hidden order option on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Visible on Hit order option on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is a Post-Only Limit order option on Ekonnet</li></Nav.Link>

              
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

export default Order