import React from 'react';
import '../PaperTrading/papertrading.css';
import AffiliateImg from '../assets/home-banner-bg.png';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


const Terminal8 = () => {
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
      
    <setion id='terminal_section' className='terminal_section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='term'>
                    
                    <Nav.Link as={Link} to={"/terminal1"}><button>Understanding Ekonnet Turkiye</button>             
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/terminal2"}><button>2016 Security Breach Bitcoin Recovery — Frequently Asked Questions (FAQ)</button>
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/terminal3"}> <button>Ontario (Canada) Customers on Ekonnet — Frequently Asked Questions (FAQ)</button>                    
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/terminal4"}><button>Ethereum 2.0 Staking on Ekonnet</button>
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/terminal5"}><button>Staking Rewards on Ekonnet</button>    
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/terminal6"}><button>What is Ekonnet Terminal</button>  
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/terminal7"}><button>How to change Sweatcoin to Bitcoin on Ekonnet</button>  
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/terminal8"}><button id='button_active'>Ekonnet Delists BCI and BBN</button>     
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/terminal9"}><button>What is the Ekonnet API</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/terminal10"}><button>Ekonnet customer support</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/terminal11"}><button>U.S. Person — Frequently Asked Questions (FAQ)</button>
                    </Nav.Link> 
                    <Nav.Link as={Link} to={"/terminal12"}><button>How to deactivate a Ekonnet account</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/terminal13"}><button>Crypto terms definition</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/terminal14"}><button>What is the BitLicense?</button>
                    </Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summary'>
                    <h2>Ekonnet Delists BCI and BBN</h2>
                    <h5>Last updated 30 November, 2022</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    <br/><br/>  
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br/><br/>  
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br/><br/>  
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </p>
                </div>
            </div>
        </div>
    </setion>
    </>
  )
}

export default Terminal8
