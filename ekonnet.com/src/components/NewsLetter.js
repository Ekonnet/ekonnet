import React from 'react'
import './NewsLetter.css';
import Card_Crypto from './assets/Card_Crypto.png';
import { Helmet } from 'react-helmet';

const NewsLetter = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | News </title>
      </Helmet>
    <section id='mar_section' className='mar_section'>
    <marquee loop='infinite'> IOT  $2.555 DAS $769.22 BTC $11.039232 ETH $1.2792 GAME $11.039232 LBC $0.588418 NEO $161.511 IOT $2.555 DAS $769.22 BTC $11.039232 ETH $1.2792 GAME $11.039232 LBC $0.588418 NEO $161.511</marquee>
    </section>
    
     <section id='news' className='news'>
      <div className='container'>
        <div className='row'>
          <div className='text-center'>
            <h1>News</h1>
            <span>It's an ever-changing business. To stay on top of the game, don't forget to keep yourself in the know.</span>
          </div>
          <div className='col-lg-4'>
            <div className='news_section'>
            <img src={Card_Crypto} alt='news-img.png' className='img-fluid'></img>
            <div> <span className='time-n-date'>8 Jan</span></div>
            <h1>What is Bitcoin Mining</h1>
            <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia.</p>
           <div className='d-flex bottom_news_section'>
            <div className='d-flex'>
              <p>Post by</p>
              <p>Robert Downey</p>
            </div>
            <div className='d-flex'>
              <p>Comments</p>
              <p>1</p>
            </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4'>
            <div className='news_section'>
            <img src={Card_Crypto} alt='news-img.png' className='img-fluid'></img>
            <span className='time-n-date'>8 Jan</span>
            <h1>Bitcoin vs Ethereum</h1>
            <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia.</p>
            <div className='d-flex bottom_news_section'>
            <div className='d-flex'>
              <p>Post by</p>
              <p>Robert Downey</p>
            </div>
            <div className='d-flex'>
              <p>Comments</p>
              <p>1</p>
            </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4'>
            <div className='news_section'>
            <img src={Card_Crypto} alt='news-img.png' className='img-fluid'></img>
            <div> <span className='time-n-date'>8 Jan</span></div>
            <h1>What is Bitcoin Mining</h1>
            <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia.</p>
           <div className='d-flex bottom_news_section'>
            <div className='d-flex'>
              <p>Post by</p>
              <p>Robert Downey</p>
            </div>
            <div className='d-flex'>
              <p>Comments</p>
              <p>1</p>
            </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4'>
            <div className='news_section'>
            <img src={Card_Crypto} alt='news-img.png' className='img-fluid'></img>
            <div> <span className='time-n-date'>8 Jan</span></div>
            <h1>What is Bitcoin Mining</h1>
            <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia.</p>
           <div className='d-flex bottom_news_section'>
            <div className='d-flex'>
              <p>Post by</p>
              <p>Robert Downey</p>
            </div>
            <div className='d-flex'>
              <p>Comments</p>
              <p>1</p>
            </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4'>
            <div className='news_section'>
            <img src={Card_Crypto} alt='news-img.png' className='img-fluid'></img>
            <div> <span className='time-n-date'>8 Jan</span></div>
            <h1>What is Bitcoin Mining</h1>
            <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia.</p>
           <div className='d-flex bottom_news_section'>
            <div className='d-flex'>
              <p>Post by</p>
              <p>Robert Downey</p>
            </div>
            <div className='d-flex'>
              <p>Comments</p>
              <p>1</p>
            </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4'>
            <div className='news_section'>
            <img src={Card_Crypto} alt='news-img.png' className='img-fluid'></img>
            <span className='time-n-date'>8 Jan</span>
            <h1>The Government versus Bitcoin</h1>
            <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia.</p>
            <div className='d-flex bottom_news_section'>
            <div className='d-flex'>
              <p>Post by</p>
              <p>Robert Downey</p>
            </div>
            <div className='d-flex'>
              <p>Comments</p>
              <p>1</p>
            </div>
            </div>       
           </div>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default NewsLetter