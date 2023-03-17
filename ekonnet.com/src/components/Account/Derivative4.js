import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'

const Derivative4 = () => {
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
                    <Nav.Link as={Link} to={"/How-to-move-funds-to-the-Derivatives-wallet"}><button>How to move funds to the Derivatives wallet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Derivatives-Trading-on-Ekonnet"}><button >Derivatives Trading on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/The-Ekonnet-Derivatives-trading-interface"}><button >The Ekonnet Derivatives trading interface</button></Nav.Link>
                    <Nav.Link as={Link} to={"/What-is-Termination-on-Ekonnet"}><button id='button_active'>What is Termination on Ekonnet</button></Nav.Link>       
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>What is Termination on Ekonnet</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    <h3>What is Derivatives Trading</h3><br/>
                    Termination is the closing or reducing of one or more profitable positions to settle a derivative position that has gone into stage three liquidation. 
                    <br/><br/>
                    Important: Termination will only occur if the liquidation fund's supply is inadequate to cover the loss remaining after the liquidated position's allotted collateral has been depleted.                    <br/><br/>
                    <h3>What are the stages of liquidation</h3><br/>
                    When a position gets liquidated, the system can go through three stages. <br/><br/>
                    <ul>
                        <li>The system first tries to close the position using the margin collateral allocated to the newly liquidated position.</li><br/>
                        <li>Should the forfeited collateral be insufficient to terminate the position completely, the liquidation fund will cover the remaining loss if sufficient funds are available.</li><br/>
                        <li>Termination occurs if there are any remaining losses and the liquidation fund has been drained. The system will select the position with the highest percentage gain on the derivatives platform and close/decrease it to offset the remaining losses. It will continue to close the position with the highest percentage gain until all losses have been covered.</li>
                    </ul>
                    If these positions are terminated, they will almost certainly be closed at a loss relative to current market prices. When considering the risks associated with derivatives trading, it is necessary to consider the likelihood of a position being terminated, even if this occurs only in extreme situations.<br/><br/>
                    <h3>Why a position can be terminated</h3><br/>
                    Termination occurs solely on profitable positions and begins with the open position with the highest percentage profit. If your position was terminated, this means that our liquidation fund combined with the collateral assigned to a liquidated position was insufficient to cover the loss on that liquidated position.
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

export default Derivative4