import React from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import FutureImg from "../assets/FutureImg.png";
import './Future.css';

import lavragImg from "../assets/lavrage.png";
import risk from "../assets/risk-m.png";
import currency from "../assets/currency-pair.png";
import Buttons from '../ButtonComponents/Buttons';

const Future = () => {
  return (
    <>
      <section id='future' className='future'>
        <Container>
          <div className='row'>
            <div className='col-lg-6'>
              <h1>Trade In crypto Future<strong>Today</strong></h1>
              <p>Maximise your trading potential with leverage up to 15X with crypto futures</p>
              <div>
                {/* <Button className='Future_Visit_btn'>Visit Future</Button>
                <Button className='Future_Register_btn'>Register</Button> */}
                <Buttons service="Visit Future"/>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src={FutureImg} alt='phone' className='img-fluid future_img'></img>
            </div>
          </div>
        </Container>

      </section>
      <section id='leverage' className='leverage'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img src={lavragImg} alt='phone' className='img-fluid icons_img'></img>
            </div>
            <div className='col-lg-6 future-levrage futur-common'>
              <h2>Futures trading with leverage</h2>
              <p>Ekonnet Futures offers leverage, allowing you to amplify your buying or selling power.
                Thus you could buy/sell a lot more shares of futures than equity with a certain amount of money. For example, if the margin is fixed at 20% for futures in a stock, one could buy/sell 5x times more shares in futures than in equity. This ratio is called leverage. Thus, with 20% margin, the leverage is 5.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='flexibility' className='flexibility '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 futur-common'>
              <h2>Flexibility in risk management</h2>
              <p>Ekonnet Futures offers leverage, allowing you to amplify your buying or selling power.
                Risk management is a vital element of success for any trader in any market. No matter the size of the capital you’re trading with or investing in, losses are going to be inevitable, particularly in highly volatile markets like cryptocurrency
              </p>
            </div>
            <div className='col-lg-6'>
              <img src={risk} alt='phone' className='img-fluid icon_img'></img>
            </div>
          </div>
        </div>
      </section>
      <section id='currency' className='leverage'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img src={currency} alt='phone' className='img-fluid icons_img'></img>
            </div>
            <div className='col-lg-6 futur-common'>
              <h2>Trade a range of currency pairs</h2>
              <p>Gain exposure to a variety of pairs using your multi-collateral futures wallet with 10 different collateral options.
                The most versatile cryptocurrency pairs to trade are usually BTC and ETH, as they're offered by most exchanges. Many crypto exchanges offer pairings for cryptocurrencies and fiat currencies like the U.S. dollar (USD), while some do not.
              </p>
            </div>
          </div>
          <div className='row' id='login'>
          <h2 className='digital-assets'>The home of digital asset trading</h2>
       <div className="login-btn">
        {/* <Button size="lg" className='sign-up'>Sign Up</Button>
        <Button size="lg" className='sign-in'>Sign In</Button> */}
        <Buttons signup="Sign Up" />
        </div>
        </div>
        </div>
      </section>

    </>
  )
}

export default Future
