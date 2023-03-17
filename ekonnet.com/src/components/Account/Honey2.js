import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'


const Honey2 = () => {
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
                    <div className='honey'>  
                    <Nav.Link as={Link} to={"/Ekonnet-Honey-Algorithmic-Orders"}><button>Ekonnet Honey Algorithmic Orders</button></Nav.Link>
                    <Nav.Link as={Link} to={"/Ekonet-Honey"}><button id='button_active'>Ekonnet Honey</button></Nav.Link>
                    
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Ekonnet Honey</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    <h3>What is Ekonnet Honey</h3><br/>
                    Based on the foundational work of the Honey Framework project initiated back in 2018, Ekonnet Honey is an open-source toolkit designed for traders that enhances the functionalities of the main Ekonnet platform in a customisable way. With Ekonnet Honey, you will be able to run multiple algorithmic trading strategies, design custom orders, trigger notifications and much more, using a friendly interface.
                    <br/><br/>
                    The toolkit is composed of a set of standalone versions and a web application. The standalone versions are downloadable applications for macOS, Windows and Linux operating systems that allow you to operate from the safety of your local environment by leveraging the power of the Ekonnet API. The web application, on the other hand, allows you to run a limited set of functionalities directly from your browser - no installation required.<br/><br/>
                    Important: The web-based version of Ekonnet Honey is, for the time being, not being maintained. We are currently focusing on improving the experience in the standalone version.<br/><br/>
                    <h3>How to set up Ekonnet Honey</h3><br/>
                    1. First, log in / sign up to your Ekonnet account and configure an API key.
                    <br/><br/>
                    2. Then, just head to the Ekonnet Honey homepage and follow the links to easily download the latest stable version of the application for your operating system. 
                    <br/><br/>
                    Important: Because of the current leap in functionalities, we are now in Beta mode - you can read more about it here. Because we are committed to open-source, those familiar with GitHub can stay up-to-date with the project here.
                    <br/><br/>
                    <h3>Paper Trading using Ekonnet Honey </h3><br/>
                    If you would like to test Ekonnet Honey in a simulated environment without putting real funds at risk, you can easily use a Paper Trading account.
                    <br/><br/>
                    Once you have the API keys of that account, you can use them on the Paper Trading Terminal of the Sandbox environment.
                    <br/><br/>
                    <h3>Contribute to the Ekonnet Honey code</h3><br/>
                    At Ekonnet, we love open source and encourage it as much as possible! Developers can use our built-in code to customise their experience. In addition, developers can also request features, bug fixes and general contributions to the open-source code by contacting us at Ekonnet Support or through GitHub.
                    <br/><br/>
                    If you have any questions, please contact our Ekonnet Support team. We will be happy to help!                                                     
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

export default Honey2