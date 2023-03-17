import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const Honey = () => {
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
         <h3>Ekonnet Honey</h3>
         <ul>
         <Nav.Link as={Link} to={"/Ekonnet-Honey-Algorithmic-Orders"}><li>Ekonnet Honey Algorithmic Orders</li></Nav.Link>
         <Nav.Link as={Link} to={"/Ekonet-Honey"}><li>Ekonnet Honey</li></Nav.Link>
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

export default Honey