import React from 'react'
import './Staking.css';
import Accordian from './Accordian/Accordian.js'


const Staking = () => {
  return (
    <>
   <section id='staking' className='staking'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-12 text-center'>
                <h1>Earn Staking rewards on Ekonnet with Bitcoins</h1>
                <button className='btn btn-primary'>Deposite Now</button>
                <p>Our soft-staking program allows you to easily generate rewards by simply holding your digital tokens on
                 Ekonnet. Staking rewards can be as high as 8%* per year for supported Digital Tokens. Please read the FAQs for details.</p>
                 <h3>Calculate your potential rewards</h3>
            </div>
            <div className='d-flex justify-content-center mx-4 col-lg-12 btn_coin'>
                <button className='btn btn-primary'>Tron</button>
                <input type='text' placeholder='1 Trx' className='mx-5' ></input>
            </div>
            <div className='d-flex potential_reward text-center'>
                <div className='col-lg-3'>
                <h5>Daily Rewards*</h5>
                <p>0.00 USD</p>
                <p>0.00 TRX</p>
                </div>
                <div className='col-lg-3'>
                <h5>Weekly Rewards*</h5>
                <p>0.00 USD</p>
                <p>0.00 TRX</p>
                </div>
                <div className='col-lg-3'>
                <h5>Monthly Rewards*</h5>
                <p>0.00 USD</p>
                <p>0.00 TRX</p>
                </div>
                <div className='col-lg-3'>
                <h5>Yearly Rewards*</h5>
                <p>0.00 USD</p>
                <p>0.00 TRX</p>
                </div>
            </div>
        </div>
    </div>
   </section>
   <section id='staking_deposit' className='staking_deposit'>
    <div className='container'>
        <div className='row text-center'>
            <h1>No hassle, just deposit</h1>
            <div className='col-lg-4'>
                <h2>1</h2>
                <h6>Pick a digital token to stake</h6>
                <p>Browse our list of staking supported digital tokens below and pick which ones best suit you.</p>
            </div>
            <div className='col-lg-4'>
                <h2>2</h2>
                <h6>Pick a digital token to stake</h6>
                <p>Browse our list of staking supported digital tokens below and pick which ones best suit you.</p>
            </div>
            <div className='col-lg-4'>
                <h2>3</h2>
                <h6>Pick a digital token to stake</h6>
                <p>Browse our list of staking supported digital tokens below and pick which ones best suit you.</p>
            </div>
        </div>
    </div>
   </section>
   <section id='digital_token' className='digital_token'>
    <div className='container text-center'>
        <div className='row'>
            <h1>Supported Digital Tokens</h1>
            <div className='col-lg-3'>
                <h2>icon</h2>
                <h6>Tron (TRX)</h6>
                <p>Estimated annual staking rewards* 6% - 8%</p>
                <button className='btn btn-primary'>Deposit</button>
            </div>
            <div className='col-lg-3'>
                <h2>icon</h2>
                <h6>Tron (TRX)</h6>
                <p>Estimated annual staking rewards* 6% - 8%</p>
                <button className='btn btn-primary'>Deposit</button>
            </div><div className='col-lg-3'>
                <h2>icon</h2>
                <h6>Tron (TRX)</h6>
                <p>Estimated annual staking rewards* 6% - 8%</p>
                <button className='btn btn-primary'>Deposit</button>
            </div><div className='col-lg-3'>
                <h2>icon</h2>
                <h6>Tron (TRX)</h6>
                <p>Estimated annual staking rewards* 6% - 8%</p>
                <button className='btn btn-primary'>Deposit</button>
            </div><div className='col-lg-3'>
                <h2>icon</h2>
                <h6>Tron (TRX)</h6>
                <p>Estimated annual staking rewards* 6% - 8%</p>
                <button className='btn btn-primary'>Deposit</button>
            </div><div className='col-lg-3'>
                <h2>icon</h2>
                <h6>Tron (TRX)</h6>
                <p>Estimated annual staking rewards* 6% - 8%</p>
                <button className='btn btn-primary'>Deposit</button>
            </div><div className='col-lg-3'>
                <h2>icon</h2>
                <h6>Tron (TRX)</h6>
                <p>Estimated annual staking rewards* 6% - 8%</p>
                <button className='btn btn-primary'>Deposit</button>
            </div><div className='col-lg-3'>
                <h2>icon</h2>
                <h6>Tron (TRX)</h6>
                <p>Estimated annual staking rewards* 6% - 8%</p>
                <button className='btn btn-primary'>Deposit</button>
            </div>
        </div>
    </div>
   </section>
   <section className='acco'>
    <div className='container text-center'>
    <h1>Frequently Asked Question</h1>
   <Accordian/>
   </div>
   </section>
   
        
   </>
  )
}

export default Staking