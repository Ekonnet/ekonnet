import React from 'react'
import './Blog.css';
import btc from './assets/crypto-news.jpg';
import {FaRegCalendarAlt, FaRegUser, FaRegComments, FaArrowRight} from 'react-icons/fa';
import {SiBitcoinsv,SiEthereum,SiLitecoin,SiMonero,SiRipple,SiDogecoin,SiChainlink,SiBitcoincash,SiStellar} from 'react-icons/si';
import {TbCurrencyDollar} from 'react-icons/tb';
import {CgChevronDoubleRight} from 'react-icons/cg';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


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

            <div className='news-content'>
            <Nav.Link as={Link} to={"/single-blog"}><h1>What is Bitcoin Mining</h1></Nav.Link>
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
            <div>
            </div>         
           </div>
           <div className='paggination'>
<nav aria-label="Page navigation example">
  <ul class="pagination pg-blue">
    <li class="page-item">
      <a class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link">1</a></li>
    <li class="page-item"><a class="page-link">2</a></li>
    <li class="page-item"><a class="page-link">3</a></li>
    <li class="page-item">
      <a class="page-link" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
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
          <h4 className='d-flex sidebar_ico align-items-justify'><TbCurrencyDollar/>6855.83</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiEthereum/>
          <h6>Ethereum <span>(ETH)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>416.979</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiDogecoin/>
          <h6>Dogecoin <span>(DOGE)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>0.48167</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiRipple/>
          <h6>Ripple <span>(XRP)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>652.101</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiLitecoin/>
          <h6>Litecoin <span>(LTC)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>114.335</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiChainlink/>
          <h6>Chainlink <span>(LINK)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>0.15502</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiMonero/>
          <h6>Monero <span>(XMR)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>166.379</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiStellar/>
          <h6>Stellar <span>  (XLM)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>301.285</h4>
          </div>
          <div className='d-flex sidebar_iconss'>
          <SiBitcoincash/>
          <h6>BitcoinCash <span>(BCH)</span></h6>
          <h4 className='d-flex sidebar_ico'><TbCurrencyDollar/>0.23586</h4>
          </div>
          <div className='sidebar_title'>
          <h3>Recent Posts</h3>
          <h2 className='d-flex'><CgChevronDoubleRight/>What is Bitcoin Mining</h2>
          <h2 className='d-flex'><CgChevronDoubleRight/>Bitcoin vs Ethereum</h2>
          <h2 className='d-flex'><CgChevronDoubleRight/>The Government versus Bitcoin</h2>
          <h2 className='d-flex'><CgChevronDoubleRight/>Bitcoin domination</h2>
          <h2 className='d-flex'><CgChevronDoubleRight/>Benefit from Blockchain</h2>
          </div>
          <div className='sidebar_title'>
          <h3>Recent Comments</h3>
          <h2 className='d-flex'><CgChevronDoubleRight/>user on What is Bitcoin Mining</h2>
          <h2 className='d-flex'><CgChevronDoubleRight/>user on Bee Coin</h2>
          <h2 className='d-flex'><CgChevronDoubleRight/>Robert Downey on Bitcoin domination</h2>
          <h2 className='d-flex'><CgChevronDoubleRight/>A Commenter on Bitcoin domination</h2>
          <h2 className='d-flex'><CgChevronDoubleRight/>LearnPress on How to Mine Bitcoin on a Mac</h2>
          </div>
          <div className='sidebar_title'>
          <h3>Archives</h3>
          <h2 className='d-flex'><CgChevronDoubleRight/>January 2018</h2>
          <h2 className='d-flex'><CgChevronDoubleRight/>December 2017</h2>
          <h2 className='d-flex'><CgChevronDoubleRight/>October 2017</h2>
          <h2 className='d-flex'><CgChevronDoubleRight/>May 2017</h2>
          <h2 className='d-flex'><CgChevronDoubleRight/>April 2017</h2>
          </div>
          </div>
          </div>  
          </div> 
    </section>
    </>
  )
}

export default Blog