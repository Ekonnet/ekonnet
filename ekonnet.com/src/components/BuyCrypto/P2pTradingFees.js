import React from 'react';
import './P2pTradingFees.css';

const P2pTradingFees = () => {
  return (
    <>
    <section id='p_to_p' className='p_to_p'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='p_to_p_form'>
                <div className='d-flex text-center'>
                 <div className='p_to_p_Buy col-lg-6'>
                 <h1>Buy</h1>
                 </div>
                 <div className='p_to_p_sell col-lg-6'>
                 <h1>Sell</h1>
                 </div>
                </div>        
                <div>
                <input type="text" name="name" class="form-control" id="name" placeholder="PRICE INR" required=""></input>
                </div>
                <div>
                <input type="text" name="name" class="form-control" id="name" placeholder="VOLUME USDT" required=""></input>
                </div>
                <div>
                <input type="text" name="name" class="form-control" id="name" placeholder="TOTAL INR" required=""></input>
                </div>
                <div className=''>
                  <button className='dropdown-toggle p_to_p_optional'>Add preferred seller(optional)
                  </button>
                </div>
                <button className='p_to_p_btn text-center'>BUY</button>
                <h6>Fees:0.00%</h6>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default P2pTradingFees