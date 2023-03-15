import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AffiliateImg from '../assets/home-banner-bg.png';
import './Account.css'
import trade16 from '../assets/trading16.png'
import trade17 from '../assets/trading17.png'
import trade18 from '../assets/trading18.png'

const Trading4 = () => {
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
                    <Nav.Link as={Link} to={"/ekonnet-order-types-and-order-options"}><button id='button_active'>Ekonnet Order Types and Order Options</button></Nav.Link>
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
                    <Nav.Link as={Link} to={"/editing-orders-and-viewing-order-history-in-bulk"}><button>Editing orders and viewing order history in bulk</button></Nav.Link>
                    <Nav.Link as={Link} to={"/how-is-precision-calculated-using-significant-digits-on-ekonnet"}><button>How is precision calculated using significant digits on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/orders-execution-on-ekonnet"}><button>Orders execution on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/why-a-stop-order-might-not-be-filled-at-the-stop-price-on-ekonnet"}><button>Why a stop order might not be filled at the stop price on Ekonnet</button></Nav.Link>
                    <Nav.Link as={Link} to={"/chain-split-tokens-and-token-manager-on-ekonnet"}><button>Chain Split Tokens and Token Manager on Ekonnet</button></Nav.Link>
                    </div>
                </div>
                <div className='col-lg-8 summer'>
                    <h2>Ekonnet Order Types and Order Options</h2>
                    <h5>Last updated 3 March, 2022</h5>
                    <p>
                    An order is a set of instructions to a platform to buy or sell an asset on a trader's behalf.                  
                    <br/><br/>
                    Your order type will determine the price at which you will buy or sell, as well as when you will buy or sell and whether or not your order will be filled.                   
                    <br/><br/>
                    Note: When making an order the bid refers to the price a buyer will pay, while the ask price refers to the price a seller will accept. 
                    <br/><br/>
                    When referring to the order book the bid side of the order book is on the left and coloured green. The ask side of the order book is on the right and coloured red. Read this Ekonnet knowledge base article to learn more about the Order Book. 
                    <br/><br/>
                    Ekonnet provides multiple Order Types through the Order Form box to give you the tools you need to execute your trading strategy successfully.
                    <br/><br/>
                    Order Types:
                    <ul>
                      <li>Limit;</li>
                      <li>Limit (Order Book);</li>
                      <li>Market;</li>
                      <li>Stop;</li>
                      <li>Stop-Limit;</li>
                      <li>Trailing Stop;</li>
                      <li>Fill or Kill (FOK);</li>
                      <li>Immediate or Cancel;</li>
                      <li>Scaled order (video).</li>
                    </ul>
                    Additionally, you can match your order types with the available Order Options.
                    <br/><br/>
                    Order Options:
                    <ul>
                      <li>One Cancels Other (OCO); </li>
                      <li>Hidden;</li>
                      <li>Visible on Hit;</li>
                      <li>Post-Only Limit;</li>
                      <li>Reduce-only;</li>
                      <li>Time in force (TIF).</li>
                    </ul>
                     <br/>
                    <h3>What are the available order types at Ekonnet</h3> 
                    <br/>
                    <h3>What is a Limit order</h3><br/>
                    A Limit Order allows you to specify an amount and price you are able and willing to buy or sell. 
                    <br/><br/>
                    For example, if the best ask price is 250 and I want to buy lower than 249, I would place a limit buy order at 249. If a seller is willing to take my bid, my limit order will be matched and executed at 249.
                    <br/><br/>
                    Note: This is one of the most straightforward order types. 
                    <br/><br/>
                    <h3>What is a Limit (Order Book) order</h3><br/>
                    A Limit (Order Book) is an order that can be executed by clicking at a price on the order book. 
                    <br/><br/>
                    After you input the amount in the order form, you can click on an order in the bid column to create a sell order and the ask column for a buy order.
                    <br/><br/>
                    To enable this order, click on the I Understand box found on the order form to confirm that you have understood the feature. By unclicking the same box, you can disable the order type.
                    <br/><br/>
                    <img src={trade16} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <h3>What is a Market order</h3><br/>
                    A Market Order is an order type that executes immediately against the best price available. 
                    <br/><br/>
                    A market sell will match the best available bids on the order book, while a market buy will match against the best available asks. 
                    <br/><br/>
                    Market orders are often used when rapid execution is a priority over the order’s price. When placing this order, the trader prefers the trade to happen immediately at the current best prices available. 
                    <br/><br/>
                    Note: This order type may lead to slippage. 
                    <br/><br/>
                    When the bid/ask spread changes between the time a market order is requested and the time the exchange or another market-maker executes it, this is known as slippage.
                    <br/><br/>
                    <h3> What is a Stop order</h3><br/>
                    A Stop Order is used to trigger a market sell when the market drops to your trigger price or used to trigger a market buy if the market rises to your trigger price. 
                    <br/><br/>
                    A Stop order is often used as a stop-loss order if the market is moving in an unfavourable direction. Stop orders will fully execute as a market order once it hits the trigger price.
                    <br/><br/>
                    For instance, if the current market price is 250, the trader is in a long position might want to sell if the price drops to 245 to avoid further losses. A stop sell at 245 can be used in this case.
                    <br/><br/>
                    For example, if the current market price is 250, the trader in a short position might want to buy if the price reaches 255 to avoid further losses. A stop buy order at 255 can be used in this case.
                    <br/><br/>
                    Note: You must check the box asking if you understand before placing a Stop order.<br/><br/>
                    <img src={trade17} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <h3>What is a Stop-Limit order</h3><br/>     
                    A Stop-limit Order triggers a limit order.
                    <br/><br/>
                    When setting a Stop-limit, the trader puts a stop price at which the order can be triggered, and a limit price for the order may be filled. Thus, once the stop of a Stop-limit order is triggered, the limit order would automatically create.
                    <br/><br/>
                    For example, if you would like to buy once the market price reaches 250 but not pay more than 252, then a stop price of 250 and a limit price of 252 can simultaneously use a Stop-limit order. If the market price reaches 250, the order is triggered and will match the best available asks up to 252. However, if the market price moves to 252.01 or above, then the order may go partially unfilled due to the limited price.
                    <br/><br/>
                    Note: Stop-Limit orders can help prevent slippage on Stop orders.
                    <br/><br/>
                    <h3>What is a Trailing Stop order</h3><br/>                   
                    A Trailing Stop Order provides flexibility over a stop order by executing only once the market goes against you by a defined price distance. Thus, you can use a trailing stop order to protect profit.
                    <br/><br/>
                    The stop price trails behind the most profitable bid/ask price reached by the amount specified as price distance. If the stop triggers, a Market order is placed.
                    <br/><br/>
                    For example, if you are in a long position and the current best bid price is 250 after a quick rise from 225. Then, you can set a Trailing stop sell with a price distance of 5, which will create a sell stop order at 245. And suppose the best bid price continues to rise to 275. In that case, the Trailing Stop rises accordingly, always staying five behind the highest best bid price (or staying above the lowest ask for a short position and a trailing stop buy), rising to 270 in this example.
                    <br/><br/>
                    <h3>What is a Fill or Kill (FOK) order</h3><br/>                    
                     A Fill or Kill (FOK) Order is an order that must be filled immediately in its entirety, at a specific price or better, or it is cancelled.
                     <br/><br/>
                     For instance, if the best BTC/USD ask price is 10,000 USD and there is 1 BTC being sold at this price. Then, with a Fill or Kill buy order of 1 BTC at 10,000 USD, your order will be executed. If, on the other hand, you place a Fill or Kill buy order of 1.1 BTC at 10,000 USD, your order will be fully cancelled immediately, and it will not execute at all. 
                     <br/><br/>
                     <h3>What is an Immediate or Cancel order</h3><br/>
                     An Immediate Or Cancel (IOC) Order requires all or part of the order to be executed immediately, and any unfilled parts of the order are cancelled. Partial fills can take place with this type of order, unlike a fill-or-kill order, which must be filled immediately in its entirety or be cancelled.
                     <br/><br/>
                    For example, if the best BTC/USD ask price is 10,000 USD and there is 1 BTC being sold at this price. Then, with an Immediate or Cancel buy order of 1.1 BTC at 10,000 USD, your order will execute 1 BTC and cancel the remaining order of 0.1 BTC.
                    <br/><br/>
                    <h3>What is a Scaled Order</h3><br/>
                    The Scaled Order tool is an algorithm designed to allow you to spend less time entering orders and more time focusing on your strategy. The algorithm automatically creates multiple limit orders across a user-determined price range. This tool also provides control over the diversity and distribution of orders within the price range.
                    <br/><br/>               
                    Please watch this Scaled Order introduction video on YouTube. 
                    <br/><br/>
                    <h3>What are the Ekonnet Order Options</h3><br/>
                    Based on the order types you select, order options appear on the order form.<br/><br/>
                    <img src={trade18} alt="main-heading" className='img-fluid mx-auto' /><br/>
                    <h3>What is a One Cancels Other (OCO) order option</h3><br/>
                    The One-Cancels-Other Order (OCO) option allows you to place a pair of orders stipulating that if one order is executed fully or partially, then the other is automatically cancelled. An OCO order places a stop order and a limit order. This option allows you to set both take profit and stop loss targets for your position at the same time while only consuming available balance for one order.
                    <br/><br/>
                    For example, if the market price is 250, and you want a stop sell order at 245 and a limit sell order at 260, then an OCO order may be appropriate. If the market reaches 245, the stop order will trigger a market order and cancel the limit order at 260. If the market reaches 260 before 245, the limit order will execute and cancel the stop order at 245.
                    <br/><br/>
                    Note: If you manually cancel one of the OCO orders, meaning the stop or the limit orders, you must also manually cancel the other one. 
                    <br/><br/>
                    <h3>What is a Hidden order option</h3><br/>
                    The Hidden Order option ensures an order does not appear in the order book; thus does not influence other market participants.
                    <br/><br/>
                    Note: See the Fees Schedule for the applicable fee.
                    <br/><br/>
                    <h3>What is a Visible on Hit order option</h3><br/>
                    The Visible on Hit option applies to Hidden orders only. Once a hidden order has been partially executed, the remaining part becomes visible in the order book. 
                    <br/><br/>
                    <h3>What is a Post-Only Limit order option</h3><br/>
                    The Post-Only Limit Order option ensures the limit order will be added to the order book and not match with a pre-existing order. If your order would cause a match with a pre-existing order, the engine will cancel your post-only limit order. In addition, this order option ensures that you will pay the maker fee and not the taker fee. Visit the fees page for more information.
                    <br/><br/>
                    <h3>What is a Reduce Only order option</h3><br/>
                    The Reduce Only option allows you to set orders intended to only reduce a current position. As a result, you will not be able to execute more than you currently have in your position in the opposite direction, allowing you to trade without running the risk of over-exposing your assets.
                    <br/><br/>
                    For example, if you have a long position of 300 ETH/USD. If you place a limit sell order of 308 ETH, having the REDUCE-ONLY mark applied to the order will only allow you to execute 300 ETH, as that would be the maximum amount of units that can be traded without reversing the course of your position.
                    <br/><br/>
                    <h3>What is a Time in Force (TIF) order option</h3><br/>
                    The Time in Force option is available for Limit, Stop, Stop Limit, and Trailing Stop orders. This option allows users to direct the duration (date and time) an order can stay open.
                    <br/><br/>
                    The order will then stay open until it is either executed or expires at the specified time. 
                    <br/><br/>
                    If you have any questions about any of the order types or order options, contact Ekonnet Support for further assistance. 
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

export default Trading4