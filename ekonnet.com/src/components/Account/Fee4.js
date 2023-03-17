import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const Fee4 = () => {
  return (
    <>
    <section id='paper_hero' className='paper_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
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
      
    <setion id='lost_section' className='lost_section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='derivat'>  
                    <Nav.Link as={Link} to={"/How-to-pay-less-trading-fees-at-Ekonnet"}><button>How to pay less trading fees at Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-fees-does-Ekonnet-charge"}><button>What fees does Ekonnet charge</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Ekonnet-Fees"}><button>Ekonnet Fees</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Does-Ekonnet-offer-traders-preferential-fee-discounts"}><button id='button_active'>Does Ekonnet offer traders preferential fee discounts</button></Nav.Link>              
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Does Ekonnet offer traders preferential fee discounts</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    No, it does not. All Ekonnet traders are subject to the same fees schedule, with no exclusions, in order to maintain a fair trading platform.
                    <br/><br/>
                    The Fees page details the particular trading charges applicable to each activity tier and both makers and takers.
                    <br/><br/>
                    Note: For further information on how to pay less trading fees, read our knowledge base article How to pay less trading fees at Ekonnet. 
                    <br/><br/>
                    If you have any questions, please feel free to reach out to Ekonnet Support. We are happy to help!


                    </p>
                    <hr className='mt-5 mb-5'></hr>
                    <h4>Can't you find what you are looking for?</h4>
                    <p className='mt-0'>If you are having any problems or you have any questions, please talk to one of our friendly support representatives.</p>
                    <Nav.Link as={Link} to={"/frequently-asked-question"}><button className='btn btn-primary mb-5'>Contact Support</button></Nav.Link>
                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default Fee4