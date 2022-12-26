import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from 'styled-components'
import CreditCards from '../components/assets/Credit-card.png'
import VerticalLinearStepper from './VerticalLinearStepper';
import Paper from '@mui/material/Paper';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Box from '@mui/material/Box';
import PaymentImg from '../components/assets/reliable-process.png';
import Buttons from '../components/ButtonComponents/Buttons';

const CreditDebitCard = () => {

    const Wrapper = style.section`
    // background-color:darkblue;

.main-heading{
color:darkblue;
font-size:4rem;
text-align:center;
align-items:center;
padding-top:60px;
font-family:'spectral';


 }
 .how-to-buy-credit{
    color:darkblue;
    text-align:center;
    font-size:2rem;
    padding-top:30px;
    font-family:'spectral';
 }
 .description{
    color:darkblue;
    padding:60px 40px;
    font-size:1.5rem;
    font-family:'Open,Sans';
    line-height:2.5rem;
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

            <Wrapper>
                <Container>
                    <Row className='pt-5'>
                        <Col className='col-6'>
                            <h2 className='main-heading'>Buy Crypto With Credit Card</h2>
                        </Col>
                        <Col className='col-6'>
                            <img src={CreditCards} alt='' width="100%" height="auto" />
                        </Col>
                    </Row>
             <Box sx={{ background:"#90CAF9", }}>
                    <Paper elevation={8} sx={{background:"#90CAF9 !important"}} >
                        <Row>
                            <h2 className='how-to-buy-credit'>How to buy cryptocurrency with credit card on Ekonnet</h2>
                            <Col>
                                <p className='description'>Buy Bitcoin with your credit card instantly on Ekonnet.
                                    You can also purchase Tether, Tether Gold, Tezos, TRON,
                                    Ethereum, or other ERC20 tokens with your debit  or
                                    credit card on our platform, with a minimum purchase of $25.
                                    Buying cryptos has never been easier.</p>

                                <div className="navigateitem"><span> Buy Crypto In a Simple Steps <BsFillArrowRightCircleFill /> </span></div>
                            </Col>


                            <Col>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <VerticalLinearStepper />

                                </div>
                            </Col>
                        </Row>
                    </Paper>

                    </Box>

                    <h2 className='mb-3 mt-5 '>One of the best places to buy cryptocurrency with credit card</h2>

                    <Box
                        sx={{
                            display: 'flex',
                            items: "center",
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                p: 3,
                                width: "31.9%",
                                height: "auto",
                                background: "#90CAF9",

                            },
                        }}
                    >


                        <Paper elevation={3}  >

                            <h3>Easy and Hassle-free</h3>
                            <p>With your Visa, Mastercard,
                                UnionPay and debit cards,
                                buying cryptos is as easy as
                                shopping your favourite
                                items online.</p>

                        </Paper>



                        <Paper elevation={3} >
                            <h3>Reasonable Fees</h3>
                            <p>The new payment option comes
                                with reasonable fees whose amount
                                depends on the selected payment
                                processors</p>
                        </Paper>



                        <Paper elevation={3} >

                            <h3>Instant Delivery</h3>
                            <p>You will receive the crypto
                                currencies on your wallet
                                right after you complete your
                                transaction..</p>

                        </Paper>


                    </Box>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <h2 className='mb-3 mt-5 '>Trusted and reliable payment processors</h2>
                        <div className="payment-img">
                            <img src={PaymentImg} alt="payment-process" />
                        </div>
                    </div>

                    <h2 className='digital-assets mt-5'>The home of digital asset trading</h2>
                    <div className="login-btn">
                        <Buttons signup='Sign Up' />
                    </div>



                </Container>
            </Wrapper>





        </>
    )
}

export default CreditDebitCard