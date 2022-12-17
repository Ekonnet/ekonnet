import React from 'react';
import './Features.css';
import MarketP from "../assets/Market-place.png";
import Exchange from "../assets/CoinExchange.png";
import Margin from "../assets/MarginTrading.png";
import FundingImg from "../assets/Funding.png";
import DerivativesImg from "../assets/Derivatives.png";

// import FundingImg from "../assets/Funding.png";



const Features = () => {
  return (
    <>
      <section id='features' className='features'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>Platforms Features</h1>
                    <p>A crypto exchange platform is a marketplace where people trade cryptocurrencies such as Ether or Bitcoin. Platforms are not cryptocurrency market players, rather, they facilitate the buying and selling cryptocurrencies, and/or the exchange of 
                       digital coins to fiat currencies (USD, EUR, GBP etc.) and vice versa.
                    </p>
                </div>
                <div className='col-lg-6'>
                    <img src={MarketP} alt='' className='img-fluid'></img>

                </div>
            </div>

        </div>
      </section>
      <section id='exchange' className='exchange'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>Exchange</h1>
                    <p>Ekonnet offers order books with top tier liquidity, allowing users to easily exchange Bitcoin, Ethereum, EOS, Litecoin, Ripple, NEO and many other digital assets 
                       with minimal slippage. Ekonnet also boasts a suite of order types to help traders take advantage of every situation
                    </p>
                </div>
                <div className='col-lg-6'>
                    <img src={Exchange} alt='' className='img-fluid'></img>
                </div>
            </div>
        </div>
      </section>
      <section id='margin_trading' className='margin_trading'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                <img src={Margin} alt='' className='img-fluid'></img>
                </div>
                <div className='col-lg-6'>
                    <h1>Margin trading</h1>
                    <p>Ekonnet allows users to trade with up to 10x leverage by receiving funding from the peer to peer margin funding platform.<br />
                       Users can enter an order to borrow the desired amount of funding at the rate and duration of their choice, or they can simply open a position and Ekonnet will take out funding for them at the best available rate at that time.
                    </p>
                </div>
            </div>
        </div>
      </section>
      <section id='margin_funding' className='margin_funding'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>Margin Funding</h1>
                    <p>konnet allows users to trade with up to 10x leverage by receiving funding from the peer to peer margin funding platform.<br />
                       Users can enter an order to borrow the desired amount of funding at the rate and duration of their choice, or they can simply open a position and Ekonnet will take out funding for them at the best available rate at that time.
                    </p>
                </div>
                <div className='col-lg-6'>
                    <img src={FundingImg} alt='' className='img-fluid'></img>
                </div>
            </div>
        </div>
      </section>
      <section id='Derivatives' className='Derivatives'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                <img src={DerivativesImg} alt='' className='img-fluid'></img>
                </div>
                <div className='col-lg-6'>
                    <h1>Derivatives</h1>
                    <p>Users wishing to mitigate the risks associated with the volatility of Digital Tokens may trade Derivative Products on the Derivatives Site. Perpetual contracts are already available and further Derivative Products are under development.<br />
                       Derivative Products can be traded using a Derivative Wallet credited with USDt0, a Digital Token which can be obtained by converting USDt, as explained in more details on our Knowledge Base.
                    </p>
                </div>
            </div>
        </div>
      </section>


   

        </>
  )
}

export default Features
