import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'


const Lend = () => {
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
         <h3>Lending</h3>
         <h4>Lending Overview</h4>
         <ul>
         <Nav.Link as={Link} to={""}><li>How to use the increase position feature on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is Ekonnet Borrow</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is Lending Pro at Ekonnet</li></Nav.Link>
         
         <h4>Margin Funding</h4>
         <Nav.Link as={Link} to={""}><li>What is Margin Funding</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How to reserve Funding on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Managing Margin Funding on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How are the Funding interest earnings and fees calculated at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is the minimum offer for Funding</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Understanding Funding: Daily and Term basis</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What happens if a Ekonnet margin position is at a loss</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Margin Funding interest on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Risks associated with offering funding — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>How is Funding interest calculated on Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Funding Earning Credits and Reports</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is the Ekonnet Funding Flash Return Rate</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is the Ekonnet Funding FRR Delta</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Ekonnet Margin Funding return — Frequently Asked Questions (FAQ)</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Can traders withdraw the Margin Funding they are using</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>What is the Funding Auto-renew feature at Ekonnet</li></Nav.Link>
         <Nav.Link as={Link} to={""}><li>Provided Funding on Ekonnet — Frequently Asked Questions (FAQ)</li></Nav.Link>
   
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

export default Lend