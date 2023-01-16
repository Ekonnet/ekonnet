import React from 'react';
import './Wallets.css';
import AffiliateImg from '../assets/home-banner-bg.png';
import sclargei from '../assets/sclargei.png';
import gfx from '../assets/gfx.png';
import gfx1 from '../assets/gfx1.png';
import gfx2 from '../assets/gfx2.png';
import shield1 from '../assets/shield 1.svg';
import transfer1 from '../assets/transfer 1.svg';
import mobileapp1 from '../assets/mobile-app 1.svg';
import cash1 from '../assets/cash 1.svg';
import cart1 from '../assets/shopping-cart 1.svg';
import team1 from '../assets/team 1.svg';




const Wallets = () => {
  return (
    <>
      <section id='wallet_hero' className='wallet_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6'>
                     <h1>The CryptoWallets<br/>You will need it!</h1>
                     <p>CryptoWallet is very simple, secure and with lots cool features. It provides an easy way to buy and send cryptocurrencies all over the world.</p>
                     <button className='btn btn-primary'>Get Your Wallet</button>
                  </div>
                  <div className='col-lg-6'>
                    <img src={sclargei} alt='wallet-img' className='img-fluid'></img>
                  </div>
                </div>
              </div>
            </section> 
            <section id='wallet_feature' className='wallet_feature bg-[#131128] pt-[50px]'>
              <div className='container'>
                <div className='row'>
                  <h1>Wallet Features</h1>
                  <span>CryptoWallet provides a powerful, secure app service that allows you to <br/>manage your all cryptocurrency and make reliable and transparent.</span>
                  <div className='col-lg-6'>
                   <h2>Multi-currency & Cryptocurrency<br/>exchange without limits</h2>
                   <p>Tempore, cum soluta nobis est eligendi optiocum que nihilmod maxime placeat facere ad minim veni eoam, quis nostrud ute exercitation ullamco architecto beatae vitae dicta.</p>
                  </div>
                  <div className='col-lg-6'>
                    <img src={gfx} alt='gfx-img' className='img-fluid'></img>
                  </div>
                  </div>
                  </div>
                  </section>
                  <section id='wallet_feature' className='wallet_feature bg-[#131128] pt-[30px]'>
                    <div className='container'>
                      <div className='row'>
                      <div className='col-lg-6 order-lg-1 order-2'>
                    <img src={gfx1} alt='gfx-img' className='img-fluid'></img>
                  </div>
                  <div className='col-lg-6 order-lg-2 order-1'>
                   <h2>Multi-currency & Cryptocurrency<br/>exchange without limits</h2>
                   <p>Tempore, cum soluta nobis est eligendi optiocum que nihilmod maxime placeat facere ad minim veni eoam, quis nostrud ute exercitation ullamco architecto beatae vitae dicta.</p>
                  </div>
                  </div>
                  </div>
                  </section>
                  <section id='wallet_feature' className='wallet_feature bg-[#131128] pt-[30px]'>
                    <div className='container'>
                      <div className='row'>
                  <div className='col-lg-6'>
                   <h2>Multi-currency & Cryptocurrency<br/>exchange without limits</h2>
                   <p>Tempore, cum soluta nobis est eligendi optiocum que nihilmod maxime placeat facere ad minim veni eoam, quis nostrud ute exercitation ullamco architecto beatae vitae dicta.</p>
                  </div>
                  <div className='col-lg-6'>
                    <img src={gfx2} alt='gfx-img' className='img-fluid'></img>
                  </div>
                </div>
              </div>
            </section>
            <section id='our_wellet' className='our_wallet bg-[#131128] pt-[30px]'>
              <div className='container'>
                <div className='row'>
                <h1>Our Wallet Features</h1>
                <span>Sed ut perspi ciatis unde omnis iste natus error sit volup tatem accusa ntium dolor <br/>emque lauda ntium, totam rem aperiam</span>
                <div className='d-flex'>
                <div className='col-lg-3 wallet_box'>
                  <div className='d-flex wallet_icons'>
                  <div>       
                     <img src={shield1} alt='shield' className='img-fluid'></img>
                  </div>
                  <div>
                    <h1>Safe & Secure</h1>
                  </div>
                  </div>
                  <div>
                    <p>Morbi eget varius risus, ut venenatis <br/>libero. Pellentesque in porta dui.</p>
                  </div>
                </div>
                <div className='col-lg-3 wallet_box'>
                  <div className='d-flex wallet_icons'>
                  <div>       
                     <img src={transfer1} alt='shield' className='img-fluid'></img>
                  </div>
                  <div>
                    <h1>Recurring Buys</h1>
                  </div>
                  </div>
                  <div>
                    <p>Morbi eget varius risus, ut venenatis <br/>libero. Pellentesque in porta dui.</p>
                  </div>
                </div>
                <div className='col-lg-3 wallet_box'>
                  <div className='d-flex wallet_icons'>
                  <div>       
                     <img src={mobileapp1} alt='shield' className='img-fluid'></img>
                  </div>
                  <div>
                    <h1>Mobile Apps</h1>
                  </div>
                  </div>
                  <div>
                    <p>Morbi eget varius risus, ut venenatis <br/>libero. Pellentesque in porta dui.</p>
                  </div>
                </div>
                </div>
                <div className='d-flex'>
                <div className='col-lg-3 wallet_box'>
                  <div className='d-flex wallet_icons'>
                  <div>       
                     <img src={cash1} alt='shield' className='img-fluid'></img>
                  </div>
                  <div>
                    <h1>Low Commission</h1>
                  </div>
                  </div>
                  <div>
                    <p>Morbi eget varius risus, ut venenatis <br/>libero. Pellentesque in porta dui.</p>
                  </div>
                </div>
                <div className='col-lg-3 wallet_box'>
                  <div className='d-flex wallet_icons'>
                  <div>       
                     <img src={cart1} alt='shield' className='img-fluid'></img>
                  </div>
                  <div>
                    <h1>Buy & Sell</h1>
                  </div>
                  </div>
                  <div>
                    <p>Morbi eget varius risus, ut venenatis <br/>libero. Pellentesque in porta dui.</p>
                  </div>
                </div>
                <div className='col-lg-3 wallet_box'>
                  <div className='d-flex wallet_icons'>
                  <div>       
                     <img src={team1} alt='shield' className='img-fluid'></img>
                  </div>
                  <div>
                    <h1>Global</h1>
                  </div>
                  </div>
                  <div>
                    <p>Morbi eget varius risus, ut venenatis <br/>libero. Pellentesque in porta dui.</p>
                  </div>
                </div>
              </div>
              </div>
              </div>

            </section>
    </>
  )
}

export default Wallets
