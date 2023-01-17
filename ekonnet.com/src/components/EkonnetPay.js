import React from 'react'
import FutureImg from './assets/FutureImg.png';
import './EkonnetPay.css';
import AffiliateImg from './assets/home-banner-bg.png';

const Ekonnetpay = () => {
  return (
    <>
    <section id='ekonnet_hero' className='ekonnet_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>Ekonnet Pay</h1>
                    <h3>Accept online payments on the Bitcoin</h3>
                    <p>Cryptocurrencies are being adopted globally and rapidly. Only ten years after the 
                       Genesis Block was mined, the first cryptocurrency, Bitcoin has grown to become the 
                       world's sixth-largest currency in circulation, thus becoming one of the largest 
                       contributors to the world's money supply. The technology behind cryptocurrency
                       allows transactions without intermediaries, thereby enabling crypto to reach the
                       unbanked and people in remote and marginalised areas. New emerging developments,
                       such as the Lightning Network, have been working to make blockchain technology
                       a more favourable option for financial transactions. As the world shifts towards 
                       a cashless economy, crypto is a viable addition to existing payment systems.</p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
                <div className='col-lg-6'>
                <img src={FutureImg} alt='' className='img-fluid'></img>
                </div>
            </div>
        </div>
    </section>
    <section id='what_ekonnet' className='what_ekonnet bg-[#131128] pt-[70px]'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                <h1>What is Ekonnet Pay ?</h1>
                <p>Ekonnet Pay is a widget that allows you to accept crypto payments seamlessly.<br/> Access the world of cryptocurrency and explore 
                 its endless possibilities<br/> with a simple and easy setup.</p>
                </div>
            </div>
        </div>
    </section>
    <section id='why_ekonnet' className='why_ekonnet bg-[#131128] pt-[60px]'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                 <h1>Why Ekonnet Pay ?</h1>
                </div>
                <div className='col-lg-3 mb-3'>
                <div class="flip-card">
                    <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                    <h4>Zero Fees</h4>
                    </div>
                    <div className='flip-card-back'>
                    <p>Zero processing fees for using Ekonnet Pay service.</p>
                    </div>
                    </div>
                </div>    
                </div>
                <div className='col-lg-3 mb-3'>
                <div class="flip-card">
                    <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                    <h4>Easy Setup</h4>
                    </div>
                    <div className='flip-card-back'>
                    <p>Set up Ekonnet Pay on your online stores in few simple steps.</p>
                </div>
                </div>
                </div> 
                </div>  
                <div className='col-lg-3 mb-3'>
                <div class="flip-card">
                    <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                    <h4>Swift process</h4>
                    </div>
                    <div className='flip-card-back'>
                    <p>Receive the payment in your wallet within minutes.</p>
                    </div>
                </div>
                </div>
                
                </div> 
                <div className='col-lg-3 mb-3'>
                <div class="flip-card">
                    <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                    <h4>Wide choice</h4>
                    </div>
                    <div className='flip-card-back'>
                    <p>Get paid in Bitcoin, Lightning Network BTC, Ethereum, Tether tokens and more.</p>
                </div>
            </div>
            </div>
            </div>
                </div>
        </div>
    </section>
    <section id='flexible' className='flexible bg-[#131128] pt-[50px]'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h1>Flexible and Scalable</h1>
                </div>
                <div className='col-lg-5 text-center flax div-black mr-5 mt-5 mb-5'>
                    <h3>Ekonnet on React</h3>
                    <p>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry.</p>
                </div>
                <div className='col-lg-5 text-center flax  mr-5 mt-5 mb-5'>
                    <h3>Ekonnet Api</h3>
                    <p>Lorem Ipsum is simply dummy text of the <br/>printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    </section>
    <section id='ekonnet_crypto' className='ekonnet_crypto bg-[#131128] pt-[50px]'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h1>Why accept payments in crypto?</h1>
                    <p>Cryptocurrencies are being adopted globally and rapidly. Only ten years after the 
                       Genesis Block was mined, the first cryptocurrency, Bitcoin has grown to become the 
                       world,s sixth-largest currency in circulation, thus becoming one of the largest 
                       contributors to the world.s money supply.<br/> <br/>The technology behind cryptocurrency
                       allows transactions without intermediaries, thereby enabling crypto to reach the
                       unbanked and people in remote and marginalised areas. New emerging developments,
                       such as the Lightning Network, have been working to make blockchain technology
                       a more favourable option for financial transactions.<br/> <br/>As the world shifts towards 
                       a cashless economy, crypto is a viable addition to existing payment systems.</p>
                    
                </div>

            </div>

        </div>

    </section>
    <section id='options' className='option bg-[#131128] pt-[50px]'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h1>More options, more flexibility</h1>
                    <p>With a wide range of cryptocurrencies to choose from, Ekonnet Pay offers you and your customers more flexibility. And we’re constantly adding new cryptocurrencies to our list:</p>
                    <p>Easy payment directly from your wallet</p>
                    <p>More payment options to accommodate your needs and preferences better!</p>
                </div>

            </div>

        </div>

    </section>
    </>
  )
}

export default Ekonnetpay