import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'


const Currencies = () => {
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
         <h3>Currencies & Tokens</h3>
         <ul>
         <Nav.Link as={Link} to={""}><li>0x (ZRX)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>1inch (1INCH)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Aave (AAVE)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Algorand (ALGO)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Balancer (BAL)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Bitcoin (BTC)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Bitcoin Cash Node (BCHN)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Chainlink (LINK)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Cardano (ADA)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Cosmos (ATOM)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Dash</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Dogecoin</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ethereum</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Litecoin (LTC)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Monero</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Oxygen (OXY) — Delisted</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Polkadot</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Polygon (MATIC)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ripple</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Shiba Inu (SHIB)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Solana</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Stellar Lumens</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Tether CNHt Token</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Tether EURt Token</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Tether MXNt Token</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Tether USDt Token</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Tether XAUt Token</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Tron (TRX)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Uniswap</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Unus Sed LEO (LEO)</li></Nav.Link>
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

export default Currencies