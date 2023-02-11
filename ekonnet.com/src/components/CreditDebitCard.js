import React from 'react'
import style from 'styled-components'
import { Helmet } from 'react-helmet'
import Arrow1 from '../components/assets/arrow-1.png'
import Step1 from '../components/assets/step-1.png'
import Arrow2 from '../components/assets/arrow-2.png'
import Step2 from '../components/assets/step-2.png'
import Arrow3 from '../components/assets/arrow-3.png'
import Step3 from '../components/assets/step-3.png'

import Step4 from '../components/assets/step-4.png'
import EasyImage from '../components/assets/feature-1.png'
import Icon1 from '../components/assets/f-icon-1.png'
// import Fees from '../components/assets/process-3.png'
import Fees2 from '../components/assets/feature1-2.png'
import Fees3 from '../components/assets/one.png'
import Banner from '../components/assets/banner-bg.png'

const CreditDebitCard = () => {

    const Wrapper = style.section`
    // background-color:darkblue;
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500&display=swap');


    .container-fluid{
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

.main-heading{
color:darkblue;
font-size:4rem;
text-align:start;
align-items:start;
font-family:'spectral';

 }
 .card__btn{
    color: #ffffff;
    background: linear-gradient(45deg, #3e19ff 0%, #903eff 100%);
    box-shadow: 0px 7px 13px 0px rgb(153 99 255 / 59%);
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    width: 100%;
    border-radius: 30px;
    padding:12px
 }
 .card__btn:hover{
    color: #ffffff;
    background: linear-gradient(45deg, #903eff 0%, #3e19ff 100%);
 }


 .how-to-buy-credit{
    color:darkblue;
    text-align:center;
    font-size:2rem;
    padding-top:30px;
    font-family: "Josefin Sans";
 }
 .description{
    color:darkblue;
    padding:60px 40px;
    font-size:1.5rem;
    font-family:'Open,Sans';
    line-height:2.5rem;
 }
 .how-work-h3{
    color:#6342ff;
 }
 .Crypto-easy-step__heading{
    color:#33276a;
    font-family: "Josefin Sans";
    font-size: 2.6rem;
    line-height: 50px;
    font-weight: 700;
    
 }
 .Crypto-easy-step__subheading{
    color: #33276a;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
 }

.step-box{
    padding-top: 40px;
    text-align: center;
}

.thumb-box{
    position: relative;
    padding: 60px 50px 60px;
    border-radius: 10px;
    background: linear-gradient(0deg, #fda9cf 0%, rgba(255, 255, 255, 0) 100%);
    transition: 0.3s;
}
.thumb-box:hover{
   
    background: linear-gradient(to bottom, #fdb0d3 1%, #ffffff 100%);
    transition: 0.3s;
}


.thumb-box2{
    position: relative;
    padding: 60px 50px 60px;
    border-radius: 10px;
    background: linear-gradient(0deg, #9464d4 0%, rgba(255, 255, 255, 0) 100%);
    transition: 0.3s;
}
.thumb-box2:hover{
    background: linear-gradient(to bottom, #9464d4 1%, #ffffff 100%);
    transition: 0.3s;

}


.thumb-box3{
    position: relative;
    padding: 60px 50px 60px;
    border-radius: 10px;
    background-image: linear-gradient(0deg, #dcb182 0%, rgba(255, 255, 255, 0) 100%);
    transition: 0.3s;
}
.thumb-box3:hover{
    background: linear-gradient(to bottom, #dcb182 1%, #ffffff 100%);
    transition: 0.3s;
}
.thumb-box4{
    position: relative;
    padding: 60px 50px 60px;
    border-radius: 10px;
    background: linear-gradient(0deg, #00cbf8 0%, rgba(255, 255, 255, 0) 100%);
    transition: 0.3s;
}
.thumb-box4:hover{
    background: linear-gradient(to bottom, #0acdf8 1%, #ffffff 100%);
    transition: 0.3s;
}


.arrow{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -50px;
    z-index: 2;
}

.last-head{
    margin-top:20px;
    margin-left:20px;
    font-family: "Josefin Sans";
    color:#33276a;
}



.circle__card{
    width:120px;
    height:120px;
    border-radius:50%;
    background:#84b0e0;
}
.card__heading{
    font-family: "Josefin Sans";
    font-size: 50px;
    line-height: 70px;
    font-weight: 700;
    padding-top:10px;
}
.card__para{
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
}
.card__btn2{
    color: #ffffff;
    background: linear-gradient(45deg, #3e19ff 0%, #903eff 100%);
    box-shadow: 0px 7px 13px 0px rgb(153 99 255 / 59%);
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    border-radius: 30px;
    padding:12px 30px;
    margin-top:20px;
}

 .card__btn2:hover{
    color: #ffffff;
    background: linear-gradient(45deg, #903eff 0%, #3e19ff 100%);
 }


 p{
    color:darkblue;
 }

 .navigateitem{
  margin-bottom:20px;
    width:100%;
    height:50px;
    background-color:#0000FF;
    margin-left:50px;
    border:2px solid transparent;
    border-radius:10px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center
 }
h3{
    color:darkblue;
    padding-bottom:10px;
    font-size:1.5rem;
    font-family:'spectral';
}
h2{
    color:darkblue;
    font-family:'spectral';
}
.payment-img{
    border:2px dashed darkblue;
    margin-top:30px;
}
    
    `

    return (
        <>
          <Helmet>
        <title>Ekonnet | Credit & Debit Card </title>
      </Helmet>
            <Wrapper>
                <div className="container-fluid" style={{ backgroundImage: `url(${Banner})` }}>
                    <div className='row pt-5 pb-5 pl-4'>
                        <div className='col-6 flex justify-start items-start flex-column'>
                         <h3 className='how-work-h3 pt-4'>Crypto Prepaid Card</h3>
                            <h2 className='main-heading'>Buy Crypto With Credit Card</h2>
                            <p className="crypto_card">Crypto Card to spend cryptocurrencies, wherever you are in the world.By converting your Crypto to fiat.</p>
                        <div className="crypto-btn">
                            <button className="card__btn">Buy Crypto With Card</button>
                         
                        </div>
                        </div>
                        <div className='col-6'>
                            {/* <img src={CreditCards} alt='' width="100%" height="auto" /> */}
                        </div>
                    </div>
                    </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto flex justify-center items-center flex-column mt-5">
                        <h3 className='how-work-h3'>How does it work?</h3>
                        <h2 className='Crypto-easy-step__heading text-center'>Crypto in the hands in Just a few Easy Steps</h2>
                        <h5 className='Crypto-easy-step__subheading'>It's easier than you think.Follow 4 simple easy steps</h5>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="0.3s">
                        <div className="step-box">
                            <div className="thumb-box flex justify-center items-center">
                                <img src={Arrow1} alt="arrow" className='img-fluid'/>
                                
                                <img src={Step1} alt="Step-1" className='img-fluid' />   
                                
                            </div>
                        </div>
                        <h4 className="last-head">
                        Sign Up & Get Verified
                        </h4>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="0.3s">
                        <div className="step-box">
                            <div className="thumb-box2 flex justify-center items-center">
                                <img src={Arrow2} alt="arrow" className='img-fluid'/>
                                <img src={Step2} alt="Step-1" className='img-fluid' />   
                            </div>
                        </div>
                        <h4 className="last-head">
                        Go to Deposit, choose Payment Cards.
                        </h4>
                    </div>


                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="0.3s">
                        <div className="step-box">
                            <div className="thumb-box3 flex justify-center items-center">
                                <img src={Arrow3} alt="arrow" className='img-fluid'/>
                                <img src={Step3} alt="Step-1" className='img-fluid' />   
                            </div>
                        </div>
                        <h4 className="last-head">
                        Top Up Your Account
                        </h4>
                    </div>


                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="0.3s">
                        <div className="step-box">
                            <div className="thumb-box4 flex justify-center items-center">
                             
                                <img src={Step4} alt="Step-1" className='img-fluid' />   
                            </div>
                        </div>
                        <h4 className="last-head">
                        Start Spending
                        </h4>
                    </div>
                </div>



<div className="row">
    <div className="col-8 mx-auto"> 
    <h2 className=' Crypto-easy-step__heading text-center mb-3 mt-5 '>One of the best place to buy cryptocurrency with credit card</h2>
    </div>
    </div>


                <div className="row mt-5 flex justify-center items-center">
                    <div className="col">
                    <img src={EasyImage} alt="Step-1" className='img-fluid' />  
                    </div>
                    <div className="col">
                        <div className="circle__card flex justify-center items-center">
                        <img src={Icon1} alt="Step-1" className='img-fluid' />   
                        </div>
                        <h2 className="card__heading">Easy and Hassle-free</h2>
                        <p className="card__para">With your Visa, Mastercard,
                                UnionPay and debit cards,
                                buying cryptos is an easy 
                                shopping your favourite
                                coin online.</p>
                        <button className="card__btn2">Buy Crypto</button>
                    </div>
                </div>


                <div className="row mt-5 flex justify-center items-center">
                    <div className="col">
                        <div className="circle__card flex justify-center items-center">
                        <img src={Icon1} alt="Step-1" className='img-fluid' />   
                        </div>
                        <h2 className="card__heading">Reasonable Fees</h2>
                        <p className="card__para">The new payment option comes
                                with reasonable fees whose amount
                                depends on the selected payment
                                process</p>
                        <button className="card__btn2">Buy Crypto</button>
                    </div>
                    <div className="col">
                    <img src={Fees3} alt="Step-1" className='img-fluid' />  
                    </div>
                </div>


                <div className="row mt-5 flex justify-center items-center">
                    <div className="col">
                    <img src={Fees2} alt="Step-1" className='img-fluid' />  
                    </div>
                    <div className="col">
                        <div className="circle__card flex justify-center items-center">
                        <img src={Icon1} alt="Step-1" className='img-fluid' />   
                        </div>
                        <h2 className="card__heading">Instant Delivery</h2>
                        <p className="card__para">You will receive the crypto
                                currencies on your wallet
                                right after you complete your
                                transaction.</p>
                        <button className="card__btn2">Buy Crypto</button>
                    </div>
                </div>
                    
            
                   


                    </div>
            </Wrapper>





        </>
    )
}

export default CreditDebitCard