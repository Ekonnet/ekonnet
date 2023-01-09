import React from 'react'
import './Staking.css';
import Accordian from './Accordian/Accordian.js'
import StackingSectionImg from './assets/footer-bg.jpg'
import Stackingright from './assets/stacking.png'
import Stackindiv from './assets/tranding-5.png'
import TronCoin from './assets/tron.png'


const Staking = () => {
    return (
        <>

            <section className="crypto-stacking bg-cover pt-[60px] pb-[60px]" style={{ backgroundImage: `url(${StackingSectionImg})` }}>
                <div className="container">
                    <div className="grid grid-cols-3 gap-20 ">
                        <div className="col">
                            <div className="stacking-head-content">
                                <h1 className='text-white text-[30px] font-bold '>Earn Staking rewards on  Ekonnet </h1>
                                <p className='text-white pt-3'>Our soft-staking program allows you to easily generate rewards by simply holding your digital tokens on
                                    Ekonnet. Staking rewards can be as high as 8%* per year for supported Digital Tokens. Please read the FAQs for details.</p>
                                <button className='button-stacking'>Deposite Now</button>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <img src={Stackingright} alt='' className='cover' />
                        </div>
                    </div>
                </div>
            </section>

            <section id='staking' className='staking bg-[#090A1C]'>
                <div className='container cover bg-no-repeat pt-[40px] pb-[40px] ' style={{ backgroundImage: `url(${Stackindiv})` }}>
                    <div className='row flex  items-center flex-column '>
                        <div className='col-6'>
                            <h2 className='text-white text-[30px] font-bold'>Calculate your potential rewards</h2>
                        </div>
                        <div className='col-6 btn_coin'>
                            <div className=" flex  items-center">
                                <button className='btn btn-primary'>Tron</button>
                                <input type='text' placeholder='1 Trx' className='input-coin' ></input>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row pt-[60px] "></div>
                    <div className='d-flex potential_reward text-center gap-2'>
                        <div className='col-lg-3 reward-div'>
                            <h5>Daily Rewards*</h5>
                            <p>0.00 USD</p>
                            <p>0.00 TRX</p>
                        </div>
                        <div className='col-lg-3 reward-div'>
                            <h5>Weekly Rewards*</h5>
                            <p>0.00 USD</p>
                            <p>0.00 TRX</p>
                        </div>
                        <div className='col-lg-3 reward-div'>
                            <h5>Monthly Rewards*</h5>
                            <p>0.00 USD</p>
                            <p>0.00 TRX</p>
                        </div>
                        <div className='col-lg-3 reward-div'>
                            <h5>Yearly Rewards*</h5>
                            <p>0.00 USD</p>
                            <p>0.00 TRX</p>
                        </div>
                    </div>

                </div>
            </section>

            <section id='digital_token' className='digital_token  bg-[#090A1C] '>
                <div className='container text-center'>
                    <div className='row mb-5'>
                        <h1 className='text-white text-[36px] pb-5'>Supported Digital Tokens</h1>
                        <div className='col-lg-3'>
                            <div class="card-coin">
                                <div class="imgbox">
                                    <div className="circlebasecoin flex justify-center items-center">
                                        <img src={TronCoin} alt='' className='cover w-10 h-10 text-center pl-3' />
                                    </div>
                                    <h2 className='text-white ' >Tron (TRX)</h2>
                                    <div class="content-coin">
                                        <p className='text-white'>Estimated annual staking rewards* 6% - 8%</p>
                                        <button className='btn btn-primary'>Deposit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div class="card-coin">
                                <div class="imgbox">
                                    <div className="circlebasecoin flex justify-center items-center">
                                        <img src={TronCoin} alt='' className='cover w-10 h-10 text-center pl-3' />
                                    </div>
                                    <h2 className='text-white ' >Tron (TRX)</h2>
                                    <div class="content-coin">
                                        <p className='text-white'>Estimated annual staking rewards* 6% - 8%</p>
                                        <button className='btn btn-primary'>Deposit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div class="card-coin">
                                <div class="imgbox">
                                    <div className="circlebasecoin flex justify-center items-center">
                                        <img src={TronCoin} alt='' className='cover w-10 h-10 text-center pl-3' />
                                    </div>
                                    <h2 className='text-white ' >Tron (TRX)</h2>
                                    <div class="content-coin">
                                        <p className='text-white'>Estimated annual staking rewards* 6% - 8%</p>
                                        <button className='btn btn-primary'>Deposit</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-3'>
                            <div class="card-coin">
                                <div class="imgbox">
                                    <div className="circlebasecoin flex justify-center items-center">
                                        <img src={TronCoin} alt='' className='cover w-10 h-10 text-center pl-3' />
                                    </div>
                                    <h2 className='text-white ' >Tron (TRX)</h2>
                                    <div class="content-coin">
                                        <p className='text-white'>Estimated annual staking rewards* 6% - 8%</p>
                                        <button className='btn btn-primary'>Deposit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">


                        <div className='col-lg-3'>
                            <div class="card-coin">
                                <div class="imgbox">
                                    <div className="circlebasecoin flex justify-center items-center">
                                        <img src={TronCoin} alt='' className='cover w-10 h-10 text-center pl-3' />
                                    </div>
                                    <h2 className='text-white ' >Tron (TRX)</h2>
                                    <div class="content-coin">
                                        <p className='text-white'>Estimated annual staking rewards* 6% - 8%</p>
                                        <button className='btn btn-primary'>Deposit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div class="card-coin">
                                <div class="imgbox">
                                    <div className="circlebasecoin flex justify-center items-center">
                                        <img src={TronCoin} alt='' className='cover w-10 h-10 text-center pl-3' />
                                    </div>
                                    <h2 className='text-white ' >Tron (TRX)</h2>
                                    <div class="content-coin">
                                        <p className='text-white'>Estimated annual staking rewards* 6% - 8%</p>
                                        <button className='btn btn-primary'>Deposit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div class="card-coin">
                                <div class="imgbox">
                                    <div className="circlebasecoin flex justify-center items-center">
                                        <img src={TronCoin} alt='' className='cover w-10 h-10 text-center pl-3' />
                                    </div>
                                    <h2 className='text-white ' >Tron (TRX)</h2>
                                    <div class="content-coin">
                                        <p className='text-white'>Estimated annual staking rewards* 6% - 8%</p>
                                        <button className='btn btn-primary'>Deposit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='acco bg-[#090A1C] pt-5 pb-5'>
                <div className='container text-center'>
                    <h1 className='text-white'>Frequently Asked Question</h1>
                    <Accordian/>
                </div>
            </section>


        </>
    )
}

export default Staking