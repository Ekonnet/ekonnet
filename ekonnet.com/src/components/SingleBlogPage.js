import React from 'react'
import './Blog.css';
import btc from './assets/crypto-news.jpg';
import {FaRegCalendarAlt, FaRegUser, FaRegComments, FaArrowRight} from 'react-icons/fa';
import {AiFillTag} from 'react-icons/ai';
import {SiBitcoinsv,SiEthereum} from 'react-icons/si';
import {TbCurrencyDollar} from 'react-icons/tb';
import {BiUpArrowAlt} from 'react-icons/bi';
import {CgChevronDoubleRight} from 'react-icons/cg';


const SingleBlogPage = () => {
  return (
    <>
    <section id='SingleBlogPage' className='SingleBlogPage'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9'>
                   <div>
                     <img src={btc} alt='blog-img' className='img-fluid'></img>
                   </div>  
                   <div id='news-content'className='news-content'>
                      <h1>Affiliate program</h1>
                        <div className='d-flex blog_icons' id='blog_icons'>
                            <FaRegCalendarAlt/>
                            <span> January 3, 2023</span>
                            <AiFillTag/>
                            <span>Crypto</span>
                            <FaRegUser/>
                            <span>Robert Downey</span>
                            <FaRegComments/>
                            <span>1</span>
                        </div> 
                        <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia. In scelerisque turpis vel bibendum sodales. Nunc consectetur nec mi eu vehicula.<br/><br/>
                           Praesent et tincidunt magna, eget consectetur nunc. Ut vestibulum cursus eros eu pulvinar. Maecenas sagittis odio sit amet lorem pharetra, quis iaculis diam molestie. Sed eros felis, consectetur quis tellus quis, molestie fringilla nunc. Cras volutpat, dolor sodales tincidunt finibus, purus magna lacinia lorem, ullamcorper hendrerit urna tellus at lorem
                        </p>
                        <div id='coin_list'>
                         <h2>Cryptocurrency List Widget:</h2>
                           <div className='d-flex' id='coin'>
                            <h6>Crypto Currency</h6>
                            <h6>Price</h6>
                            <h6>24H Changes</h6>
                            </div>
                            <div className='d-flex text-center' id='sidebar_iconss'>
                                <SiBitcoinsv/>
                                <h5>Bitcoin <span>(BTC)</span></h5>
                                <div>
                                <h3 className='d-flex' id='sidebar_ico'><TbCurrencyDollar/>6855.83</h3>
                                </div>
                                <div>
                                <h4 className='d-flex' id='price'><BiUpArrowAlt/>1.68%</h4>
                                </div>
                            </div>
                            <div className='d-flex' id='sidebar_iconss'>
                                <SiBitcoinsv/>
                                <h5>ICON <span>(ICON)</span></h5>
                                <div>
                                <h3 className='d-flex' id='sidebar_ico'><TbCurrencyDollar/>416.979</h3>
                                </div>
                                <div>
                                <h4 className='d-flex' id='price'><BiUpArrowAlt/>1.68%</h4>
                                </div>
                            </div>
                            <div className='d-flex' id='sidebar_iconss'>
                                <SiBitcoinsv/>
                                <h5>Ripple <span>(XRP)</span></h5>
                                <div>
                                <h3 className='d-flex' id='sidebar_ico'><TbCurrencyDollar/>0.48516</h3>
                                </div>
                                <div>
                                <h4 className='d-flex' id='price'><BiUpArrowAlt/>1.68%</h4>
                                </div>
                            </div>
                            <div className='d-flex' id='sidebar_iconss'>
                                <SiBitcoinsv/>
                                <h5>Solana <span>(SOL)</span></h5>
                                <div>
                                <h3 className='d-flex' id='sidebar_ico'><TbCurrencyDollar/>625.101</h3>
                                </div>
                                <div>
                                <h4 className='d-flex' id='price'><BiUpArrowAlt/>1.68%</h4>
                                </div>
                            </div>
                            <div className='d-flex' id='sidebar_iconss'>
                                <SiBitcoinsv/>
                                <h5>Celsius <span>(CEL)</span></h5>
                                <div>
                                <h3 className='d-flex' id='sidebar_ico'><TbCurrencyDollar/>6855.83</h3>
                                </div>
                                <div>
                                <h4 className='d-flex' id='price'><BiUpArrowAlt/>1.68%</h4>
                                </div>
                            </div>
                            <div className='d-flex' id='sidebar_iconss'>
                                <SiBitcoinsv/>
                                <h5>Mina <span>(MINA)</span></h5>
                                <div>
                                <h3 className='d-flex' id='sidebar_ico'><TbCurrencyDollar/>6855.83</h3>
                                </div>
                                <div>
                                <h4 className='d-flex' id='price'><BiUpArrowAlt/>1.68%</h4>
                                </div>
                            </div>
                            <div className='d-flex' id='sidebar_iconss'>
                                <SiBitcoinsv/>
                                <h5>Chain <span>(XCN)</span></h5>
                                <div>
                                <h3 className='d-flex' id='sidebar_ico'><TbCurrencyDollar/>6855.83</h3>
                                </div>
                                <div>
                                <h4 className='d-flex' id='price'><BiUpArrowAlt/>1.68%</h4>
                                </div>
                            </div>
                            <div className='d-flex' id='sidebar_iconss'>
                                <SiBitcoinsv/>
                                <h5>Cronos <span>(CRO)</span></h5>
                                <div>
                                <h3 className='d-flex' id='sidebar_ico'><TbCurrencyDollar/>6855.83</h3>
                                </div>
                                <div>
                                <h4 className='d-flex' id='price'><BiUpArrowAlt/>1.68%</h4>
                                </div>
                            </div>
                            <div className='d-flex' id='sidebar_iconss'>
                                <SiBitcoinsv/>
                                <h5>BitDAO <span>(BIT)</span></h5>
                                <div>
                                <h3 className='d-flex' id='sidebar_ico'><TbCurrencyDollar/>6855.83</h3>
                                </div>
                                <div>
                                <h4 className='d-flex' id='price'><BiUpArrowAlt/>1.68%</h4>
                                </div>
                            </div>   
                        </div>
                        <p>Aenean imperdiet velit quis nulla commodo, ac ornare nibh posuere. Nunc sed sagittis justo, a ultrices magna. Aliquam at pellentesque eros. Aliquam vel suscipit arcu. Nullam malesuada sed ex sit amet consectetur. Suspendisse dui nisi, auctor a lacus finibus, efficitur vehicula lorem. Sed consequat, tortor eget varius semper, mi risus ultrices nulla, placerat ultrices metus nibh sed felis. Aenean pharetra lorem nec vehicula pellentesque. Vestibulum faucibus malesuada justo nec egestas. Maecenas porttitor nisl id massa hendrerit, sed suscipit diam fermentum. Duis pellentesque purus ac nulla rutrum, vitae interdum lorem rutrum. Cras eget arcu scelerisque, auctor mauris convallis, tincidunt justo. Maecenas dictum euismod vestibulum. Vestibulum sed elementum risus. In vitae velit nunc. Fusce ornare odio quis nulla molestie aliquam.</p>
                    </div>   
                    <div id='comments'>
                        <h3>Leave a comment</h3>
                        <form>
                        <textarea placeholder='Your comment'>     
                        </textarea>
                        <div className='col-lg-3'>
                        <input type="text" name="name" placeholder='Your name'/>
                        <input type="text" name="name"  placeholder='Your email'/>
                        <input type="text" name="name" placeholder='Your website'/>
                        </div>
                        <button className='btn btn-primary'>Add Comment</button>
                        </form>
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

export default SingleBlogPage
