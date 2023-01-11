import React from 'react';
import './Fees.css';
import maingraph from './assets/main-graph.png';
import AffiliateImg from './assets/home-banner-bg.png';

const Fees = () => {
  return (
    <>
    <section id='fees' className='fees' style={{ backgroundImage: `url(${AffiliateImg})` }}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h1>Deposit & Withdrawal Fees</h1>
                </div>
                <div className='col-lg-12'>
                    <button className='btn btn-primary mt-5 '>Crypto</button>
                    <button className='btn btn-primary mt-5'>Fiat</button>
                    <p>Ekonnet does not charge deposit fees. For each withdrawal, a flat fee is paid by users to cover the transaction costs of moving the cryptocurrency out of their EKonnet account.
                       Withdrawals rates are determined by the blockchain network and can fluctuate without notice due to factors such as network congestion. Please check the most recent data listed on each withdrawal page.</p>
                    <button className='btn btn-primary'>Search</button>
                </div>
                </div>
        </div>
    </section>
    <section id='fees_img' className='fees_img bg-[#131128] pt-[70px]'>
        <div className='container'>
            <div className='row'>
                <div>
                 

                <img src={maingraph} alt='fees' className='img-fluid'></img>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Fees