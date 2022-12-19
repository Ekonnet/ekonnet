import React from 'react';
import './FiatDeposite.css';

const FiatDeposite = () => {
  return (
    <>
    <section id='fiat_deposite' className='fiat_deposite text-center'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                <h1>Fiat Deposite</h1>
                </div>
            </div>
        </div>
    </section>
    <section id='fiat_deposite_form' className='fiat_deposite_form'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='fiat_deposite_box from_group'>
                        <div className='d-flex'>
                        <div>
                        <h3>Amount</h3>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Enter Amount" required=""></input>
                        </div>
                        <div className='currency'>
                        <h3>Currency</h3> 
                        <button className='fiat_deposite_btn dropdown-toggle'>USDT</button>  
                        </div>            
                       </div>
                       <div className='fiat_deposite_payment'>
                        <h3>Payment Method</h3>
                        <input type="text" name="name" className='form-control' id="name" placeholder="Enter Amount" required=""></input>
                       </div>
                       <div className='fiat_deposite_card'>
                       <input type="text" name="name" className="form-control" id="name" placeholder="Local Bank Card" required=""></input>
                       </div>
                       <div>
                       <button className='Fiat_login'>Log In</button>
                       </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    

    </>
  )
}

export default FiatDeposite
