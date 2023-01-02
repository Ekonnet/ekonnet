import React from 'react';
import W1 from "../assets/W1.png";
import W2 from "../assets/W2.png";
import Wallet from "../assets/Secure-wallet.png";
import W4 from "../assets/W4.png";
import './Wallets.css';
import { BsApple, BsCreditCard, BsGoogle, BsLock} from 'react-icons/bs';



const Wallets = () => {
  return (
    <>
      <section id='wallet'className='wallet'>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <img src={W1} alt='wallet' className='img-fluid mx-auto' ></img>
          </div>
          </div> 
       </div>
      </section>
      <section id='crypto_wallet' className='crypto_wallet'>
        <div className='container'>
           <div className='row'>
            <div className='col-lg-6'>
            <h1>The most trusted & secure crypto wallet</h1>
            <p>
            All of our wallets have multicurrency capabilityand can send and receive payments from any supported network.
            </p>
            <div className='d-flex'> 
            <div className='app_icons d-flex'>
              <BsApple/>
              <h2>Download for App Store</h2>
            </div>
            <div className='app_icons d-flex'>
              <BsGoogle/>
              <h2>Download for Google Play</h2>
            </div>
            </div>
            </div>
            <div className='col-lg-6'>
              <img src={Wallet} alt='' className='img-fluid '></img>
            </div>
           </div>

        <div className='d-flex bottom_section justify-content-center'>
          <div className='buy_crypto text-center col-lg-6'>
          <BsCreditCard/>
          <h3>Buy Crypto with a Card</h3> 
          </div>
          <div className='buy_crypto text-center col-lg-6'>
          <BsLock/>
          <h3>Private & Secure</h3> 
          </div>
        </div>
        </div>
      </section>
      <section id='crypto' className='crypto'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img src={W2} alt='' className='img-fluid '></img>
            </div>
            <div className='col-lg-6 crypto_section'>
              <h1>Buy Crypto With a Card</h1>
              <p>Get your first $50 of Bitcoin, Ethereum, Binance Coin and many other cryptocurrencies.</p>
            </div>
          </div>
        </div>
      </section>
      <section id='private' className='private'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 private_secure'>
              <h1>Private & Secure</h1>
              <p>Only you can access your wallet. We don’t collect any personal data.</p>
            </div>
            <div className='col-lg-6'>
            <img src={W4} alt='' className='img-fluid private_secure_img mx-auto d-block'></img>
            </div>                 
         <div className='col-lg-6 private_secure_section'>
          <div className='d-flex'> 
          
           <div> <h3>AES Encryption</h3>
            <p>We use enterprise level encryption systems when storing all your personal and financial data. </p>
          </div></div>
          <div className='d-flex'>
           
           <div> <h3>Anti-Phishing Message</h3>
            <p>Set your own unique phrase to know which messages are actually from Ekonnet and which not to trust.</p>
            </div></div>
            <div className='d-flex'>
            
           <div> <h3>Anomaly Detection</h3>
            <p>Our state-of-the-art risk detection system helps us find malicious behaviour on our platform and keep your money safe. </p>
            </div> 
            </div>
            </div>
           <div className='col-lg-6 private_secure_section'>
           <div className='d-flex'>
           
          <div><h3>Mandatory 2FA</h3>
            <p>All accounts must have 2-Factor Authentication enabled for added protection. </p>
            </div>
            </div>
            <div className='d-flex'>
            
           <div>  
             <h3>Password Policy</h3>
            <p>You are required to create strong passwords and encouraged to use a password manager to keep your account secure.</p>
            </div></div>
            <div className='d-flex'>
          
          <div> <h3>Wallet Protect</h3>
            <p>Secure your money and get peace of mind. </p>
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
