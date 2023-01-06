import React from 'react'
import './Blog.css';
import btc from './assets/btc.png';
import {FaRegCalendarAlt, FaRegUser, FaRegComments, FaArrowRight} from 'react-icons/fa';
import {SiBitcoinsv,SiEthereum} from 'react-icons/si';
import {TbCurrencyDollar} from 'react-icons/tb';


const Blog = () => {
  return (
    <>
    <section id='blog' className='blog'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <span>All Blog Posts</span>
                </div>
            </div>
        </div>
    </section>
    <section id='blog_img' className='blog_img'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='d-flex'>
            <div>
              <img src={btc} alt='blog-img' className='img-fluid'></img>
            </div>   
            <div>
              <h1>What is Bitcoin Mining</h1>
              <div className='d-flex blog_icons'>
              <FaRegCalendarAlt/>
              <span> January 3, 2023</span>
              <FaRegUser/>
              <span>Robert Downey</span>
              <FaRegComments/>
              <span>1</span>
              </div>  
              <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia. In scelerisque turpis vel bibendum […]</p>
              <button className='btn btn-primary d-flex'>Continue Reading<FaArrowRight/>
              </button>
            </div> 
            </div>
            <div className='d-flex'>
            <div>
              <img src={btc} alt='blog-img' className='img-fluid'></img>
            </div>   
            <div>
              <h1>What is Bitcoin Mining</h1>
              <div className='d-flex blog_icons'>
              <FaRegCalendarAlt/>
              <span> January 3, 2023</span>
              <FaRegUser/>
              <span>Robert Downey</span>
              <FaRegComments/>
              <span>1</span>
              </div>  
              <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia. In scelerisque turpis vel bibendum […]</p>
              <button className='btn btn-primary d-flex'>Continue Reading<FaArrowRight/>
              </button>
            </div> 
           </div>
           </div>
          <div className='col-lg-3 search_btn'>
          <input type='text' placeholder='Search...'></input>
          <button className='btn btn-primary'>Search</button>
          <h3>Crypto Tickers</h3>
          <div className='d-flex'>
            <h5>Crypto Currency</h5>
            <h5>Price</h5>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiBitcoinsv/>
          <h6>Bitcoin <span>(BTC)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>6855.83</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiEthereum/>
          <h6>Ethereum <span>(ETH)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>416.979</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiBitcoinsv/>
          <h6>Algorand <span>(ALGO)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>0.48167</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiBitcoinsv/>
          <h6>Toncoin <span>(TON)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>652.101</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiBitcoinsv/>
          <h6>Litecoin <span>(LTC)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>114.335</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiBitcoinsv/>
          <h6>Cardano <span>(ADA)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>0.15502</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiBitcoinsv/>
          <h6>Monero <span>(XMR)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>166.379</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiBitcoinsv/>
          <h6>Polygon <span>  (MATIC)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>301.285</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiBitcoinsv/>
          <h6>ApeCoin <span>(APE)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>0.23586</h4>
          </div>
          </div>
          </div>
          
          </div> 
    </section>
    </>
  )
}

export default Blog