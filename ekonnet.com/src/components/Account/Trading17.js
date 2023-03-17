import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import trade60 from '../assets/trading60.png'
import trade61 from '../assets/trading61.png'
import trade62 from '../assets/trading62.png'
import trade63 from '../assets/trading63.png'
import trade64 from '../assets/trading64.png'
import trade65 from '../assets/trading65.png'
import trade66 from '../assets/trading66.png'
import trade67 from '../assets/trading67.png'


const Trading17 = () => {
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
                    <Nav.Link as={Link} to={"/ekonnet-interface-loading-issues-frequently-asked-questions"}><button>Ekonnet Interface loading issues — Frequently Asked Questions (FAQ)</button></Nav.Link>
                    <Nav.Link as={Link} to={"/price-alert-setting-on-ekonnet"}><button>Price alert setting on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/what-is-a-settlement-on-ekonnet"}><button>What is a settlement on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/why-are-btc-profits-on-ekonnet-account-converted-to-usd-when-the-margin-position-is-closed"}><button>Why are BTC profits on Ekonnet account converted to USD when the margin position is closed</button></Nav.Link>
                    <Nav.Link as={Link} to={"/trading-error-message"}><button>Trading Error Message</button></Nav.Link>
                    <Nav.Link as={Link} to={"/editing-orders-and-viewing-order-history-in-bulk"}><button id='button_active'>Editing orders and viewing order history in bulk</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-is-precision-calculated-using-significant-digits-on-ekonnet"}><button>How is precision calculated using significant digits on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/orders-execution-on-ekonnet"}><button>Orders execution on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/why-a-stop-order-might-not-be-filled-at-the-stop-price-on-ekonnet"}><button>Why a stop order might not be filled at the stop price on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/chain-split-tokens-and-token-manager-on-ekonnet"}><button>Chain Split Tokens and Token Manager on Ekonnet</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Editing orders and viewing order history in bulk</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    Orders made on the Ekonnet platform can be edited individually, according to trading pair groups and in bulk when needed. Order history can also be selected to view the average amount and the price of already executed orders. 
                    <br/><br/>
                    <h3>How to edit active orders</h3><br/>
                    When you place an order on Ekonnet, it goes to the Orders widget. Here, all active orders are recorded and can be edited once needed. Multiple orders can also be edited in bulk, allowing you to close, edit and/or update orders all at once. This feature is efficient when trading and convenient if you have many orders.
                    <br/><br/>
                    <h3>How to edit orders in bulk</h3><br/>
                    1. To edit all orders at once, go to the Orders widget on the Trading page. 
                    <br/><br/>
                    2. On the right-hand side of the widget, you will find square boxes that you can click individually or click the top box to Select all.
                    <br/><br/>
                    <img src={trade60} alt="main-heading" className='img-fluid mx-auto' /><br/> 
                    3. To proceed, press the Edit button to edit your selected orders.
                    <br/><br/>
                    <img src={trade61} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    4. Here, the Update Order form will appear. With its help, you can adjust the price, change percentage, adjust if you would like the order to be a Hidden Order, and if you want your hidden order to become visible once it is matched in the order book.
                    <br/><br/>
                    <img src={trade62} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    5. Select Update Orders to complete the changes. 
                    <br/><br/>
                    Note: Updating the hidden status of an order does not change its priority in the order book. If there are multiple orders at a single price, they are filled on a first-in-first-out basis. Orders will only lose priority if the amount of the order is increased or the price is changed.
                    <br/><br/>
                    <h3>How to edit individual orders</h3><br/>
                    You can change individual orders using the Modify option. This option allows you to update the price and amount, select if you wish to change your order to a Hidden Order, or want your hidden order to become visible once matched in the order book.
                    <br/><br/>
                    <img src={trade63} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <h3>How to cancel orders</h3><br/>
                    1. In the Orders widget, you will find the x button that cancels orders.
                    <br/><br/>
                    <img src={trade64} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    2. Here, you can choose to cancel orders individually or cancel them all at once. You can also choose to cancel the orders according to trading pair groups. 
                    <br/><br/>
                    For example, selecting “Cancel group orders” in the screenshot below would cancel all two active orders for the trading pair BTC/USDt.
                    <br/><br/>
                    <img src={trade65} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <h3>View Order History Average Information</h3><br/>
                    The Order History widget allows you to view information on your past orders, whether the order was cancelled or executed. The information shown on the widget includes:
                    <ul>
                      <li>Pair (trading pair);</li>
                      <li>Context (margin, exchange or derivatives);</li>
                      <li>Type (order type);</li>
                      <li>Amount;</li>
                      <li>Currency;</li>
                      <li>Price;</li>
                      <li>Average Execution Price;</li>
                      <li>Leverage;</li>
                      <li>Status;</li>
                      <li>Inactive (the time the order became inactive, either by cancelling or executing).</li>
                    </ul>
                    <img src={trade66} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Bulk selection is either available on the Order History widget. It enables you to select multiple executed orders and display the average order amount and average executed price of the selected orders.<br/><br/>
                    <h3>How to view the order history average information </h3>
                    1. Firstly, click on the bulk editing options (the square boxes on the right-hand side) and hover over the top info i icon to see the summary of your orders.
                    <br/><br/>
                    Here, you will see the “amount traded @ average price” information of your selected orders.
                    <br/><br/>
                    <img src={trade67} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    Note: If you have selected multiple orders of the same trading pair, the average will show the same pairs’ accumulated average amount and price.<br/>
                    The summary information will only take into account the executed amounts, therefore cancelled orders will not be included, and for partially filled orders, only the partially executed amounts will be included in the summary. 
                    <br/><br/>
                    If you have any inquiries, please feel free to contact Ekonnet Support. We are always happy to help!                     
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

export default Trading17