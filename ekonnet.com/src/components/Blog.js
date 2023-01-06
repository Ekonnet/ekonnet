import React from 'react'
import './Blog.css';
import btc from './assets/btc.png';
import {FaRegCalendarAlt, FaRegUser, FaRegComments, FaArrowRight} from 'react-icons/fa';

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
          <div className='col-lg-8 d-flex'>
            <div className=''>
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
          <div className='col-lg-4'>
           <h1>dgtdtfj</h1>
          </div>
          <div className='col-lg-8 d-flex'>
            <div className=''>
            <img src={btc} alt='blog-img' className='img-fluid'></img>
            </div>
            <div>
              <h1>Bitcoin vs Ethereum</h1>
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
      </div>
    </section>
    </>
  )
}

export default Blog