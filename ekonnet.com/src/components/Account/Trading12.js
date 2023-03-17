import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import trade52 from '../assets/trading52.png'
import trade53 from '../assets/trading53.png'


const Trading12 = () => {
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
                    <div className='trade'>  
                    <Nav.Link as={Link} to={"/currency-conversion-tool-on-ekonnet"}><button>Currency Conversion Tool on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-trade-on-ekonnet"}><button>How to trade on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/paper-trading-at-ekonnet-test-learn-and-simulate-trading-strategies"}><button>Paper Trading at Ekonnet — test, learn and simulate trading strategies</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-order-types-and-order-options"}><button>Ekonnet Order Types and Order Options</button></Nav.Link>
                    <Nav.Link as={Link} to={"/understanding-ekonnet-over-the-counter-(otc)"}><button>Understanding Ekonnet Over the Counter (OTC)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-to-check-you-are-paying-the-right-trading-fees-on-ekonnet"}><button>How to check you are paying the right trading fees on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-the-minimum-order-size-on-ekonnet"}><button>What is the minimum order size on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/order-and-funding-books-terms-on-ekonnet"}><button>Order and Funding Books terms on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/the-ekonnet-chart-layout-customisation-and-ekonnet-trade-desk"}><button>The Ekonnet Chart, Layout Customisation & Ekonnet Trade Desk</button></Nav.Link>
                    <Nav.Link as={Link} to={"/customisation-on-ekonnet"}><button>Customisation on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-satoshi-mode"}><button>Ekonnet (Satoshi) Mode</button></Nav.Link>
                    <Nav.Link as={Link} to={"/ekonnet-interface-loading-issues-frequently-asked-questions"}><button id='button_active'>Ekonnet Interface loading issues — Frequently Asked Questions (FAQ)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/price-alert-setting-on-ekonnet"}><button>Price alert setting on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-a-settlement-on-ekonnet"}><button>What is a settlement on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/why-are-btc-profits-on-ekonnet-account-converted-to-usd-when-the-margin-position-is-closed"}><button>Why are BTC profits on Ekonnet account converted to USD when the margin position is closed</button></Nav.Link>
                    <Nav.Link as={Link} to={"/trading-error-message"}><button>Trading Error Message</button></Nav.Link>
                    <Nav.Link as={Link} to={"/editing-orders-and-viewing-order-history-in-bulk"}><button>Editing orders and viewing order history in bulk</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-is-precision-calculated-using-significant-digits-on-ekonnet"}><button>How is precision calculated using significant digits on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/orders-execution-on-ekonnet"}><button>Orders execution on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/why-a-stop-order-might-not-be-filled-at-the-stop-price-on-ekonnet"}><button>Why a stop order might not be filled at the stop price on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/chain-split-tokens-and-token-manager-on-ekonnet"}><button>Chain Split Tokens and Token Manager on Ekonnet</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Ekonnet Interface loading issues — Frequently Asked Questions (FAQ)</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    <h3>— My chart and balances are not loading. What should I do?</h3>
                    Suppose you see an error message such as “Websocket connection is offline”. In that case, this is most likely due to a network connection error or a browser loading error that has caused you to disconnect from the Ekonnet server.
                    <br/><br/>
                    <h3>How to locate a loading issue on Ekonnet</h3><br/>
                    <img src={trade52} alt="main-heading" className='img-fluid mx-auto' /><br/> 
                    <h3>Step 1: Check your connection</h3><br/>
                    <h3>— Test your devices and internet</h3><br/>
                    A connection error may be caused by either your local internet setup (router/firewall/security software) or your internet service provider.
                    <br/><br/>
                    To find the cause, you can try:<br/>
                    <ul>
                      <li>Connecting using the same network but a different device.<br/>
                      If trying this allows you to use the platform without issues, the device you usually use is likely causing the connection issues. In this case, you should check what software on your device may be causing this issue.<br/>
                      If the issue still occurs after changing to a different device, the problem is likely caused by your network setup or your internet provider.</li>
                      <li>Connecting using a different internet connection, but the same computer/device.<br/>
                      If trying this allows you to access the platform without issues, the problem is likely caused by your network setup or your internet provider.</li>
                    </ul>
                    <br/>
                    <h3>— Check for VPN</h3><br/>
                    Using a Virtual Private Network (VPN) may also affect your internet connection. Please ensure that your VPN IP address does not belong to a country that has blocked the Ekonnet domain or has been blocked by Ekonnet. For more information on Prohibited Jurisdictions, please view the Ekonnet Terms of Service.
                    <br/><br/>
                    Note: Some browsers, such as Opera, operate with a built-in VPN.
                    <br/><br/>
                   <h3>— Use of a third party emulator</h3><br/>
                   If you are using a third party emulator or virtual machine (VM) to connect to Ekonnet, this may affect the platform's performance and influence the readability of the site data and/or charts.
                   <br/><br/>
                  <h3>Step 2: Check your browser/device</h3><br/>
                  <h3>— Update your browser/device</h3>
                  For the best trading experience possible, we advise that you keep your browser updated to the newest version. You can check if the device/browser/version you are using is supported here in our guide on What browsers and operating systems does Ekonnet support.
                  <br/><br/>
                  <h3>— Clear cache</h3><br/>
                  ​The more information saved on your browser in your cache, the slower your device will be when browsing websites such as Ekonnet. Deleting the cache data helps to troubleshoot and helps to increase the loading time of the platform.
                  <br/><br/>
                  <h3>How to clear cache</h3><br/>
                  1. First of all, completely close your web browser (not just the current window).
                  <br/><br/>
                  2. Then, relaunch the browser and clear your browsing cache:
                  <br/>
                  <ul>
                    <li>for Firefox: https://support.mozilla.org/en-US/kb/how-clear-firefox-cache;</li>
                    <li>for Chrome: https://support.google.com/chrome/answer/95582?hl=en;</li>
                     <li>for Safari on Mac:</li>
                     https://support.apple.com/guide/safari/clear-your-browsing-history-sfri47acf5d6/mac. 
                  </ul>
                  If the issue persists, try using a different Ekonnet supported browser.
                  <br/><br/>
                 <h3>— Check security extensions</h3><br/>
                 Check if you have any security software extensions running on your browser that might prevent you from loading content; some anti-virus programs with firewalls may restrict website content.
                 <br/><br/>
                 <h3>— I cannot see my balance. Where can I check it?</h3><br/>
                 If you are experiencing problems loading your Balance page, you can check your balances on different sections as directed below:
                 <br/><br/>
                 1. Go on the Reports page and extract the information from each currency within the Ledgers section.
                 <br/><br/>
                 <img src={trade53} alt="main-heading" className='img-fluid mx-auto' /><br/> 
                 2. Access the Wallets page on the tab on the top bar of the Ekonnet interface. The Wallet page shows the list of the currencies you own along with the total amounts and available balance. 
                 <br/><br/>
                  If you continue to have problems loading your Ekonnet account information, please contact Ekonnet Support and provide us with a screenshot or video and a description of the issue you are facing. We will be happy to help!    
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

export default Trading12