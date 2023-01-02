import React from 'react'
import './Home2.css'
import { BiDollar } from 'react-icons/bi';
import Swipper from './Swipper';
import Maingraph from "../assets/main-graph.png";
import Video from '../assets/Header_Video.mp4';
import TradeImg from "../assets/Trade.png";
import analysisImg from "../assets/analysis.png";
import p2pImg from "../assets/p2pImage.png";
import EasyToInvest from "../assets/Easy-to-invest.png";
// import Button from '@mui/material/Button';

const Home2 = () => {
    return (
        <>
            {/* <section className="hero">
                <div className='app'>
                    <video loop muted>
                        <source src={Video} type="video/mp4" />
                    </video>
                    <div className="container">
                        <div className="row flex justify-center items-center">
                            <div className="col-lg-6 main-content-wraper">
                                <div className="discover text-white">
                                    <div className="doller"><BiDollar/> </div>
                                    <h6 className='discover-text'> Discover a new ways to enjoy wold </h6>
                                </div>
                                <div className="trade-wrape-div">
                                    <h3 className='Trade-text-main'>Trade like a legend on the legendary
                                        crypto exchange</h3>
                                    <p className="trade-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quasi esse fugit modi hic quae, reprehenderit ipsam? Fugit aut eos rerum suscipit labore at necessitatibus dignissimos, sit officia error assumenda.</p>
                                </div>
                                <div className="front-btn flex justify-start gap-1">
                                 <button className="main-btn"> Get Started</button>
                                 <button className="main-btn"> Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section> */}



            <section className="hero">
                <div className="container">
                    <div className='row flex justify-start items-center top-main-content gy-4 '>
                        <div className="col-lg-6 ">
                            <div className="discover text-white">
                                <div className="doller"><BiDollar /> </div>
                                <h6 className='discover-text'> Discover a new ways to enjoy wold </h6>
                            </div>
                            <div className="trade-wrape-div">
                                <h3 className='Trade-text-main'>Trade like a legend on the legendary
                                    crypto exchange</h3>
                                <p className="trade-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quasi esse fugit modi hic quae, reprehenderit ipsam? Fugit aut eos rerum suscipit labore at necessitatibus dignissimos, sit officia error assumenda.</p>
                            </div>
                            <div className="front-btn flex justify-start gap-2 ">
                                <button className="main-btn"> Get Started</button>
                                <button className="main-btn"> Get Started</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="outervideo">

                                <video autoPlay loop muted className='videostyle'>
                                    <source src={Video} type="video/mp4" />
                                </video>

                            </div>
                        </div>



                    </div>
                </div>


            </section>
            <section className="slider__section__main">
                <div className="container">
                    <div className="row flex justify-center items-center text-center ">
                        <div className="col flex justify-center items-center text-center flex-row gap-1">
                            <div className='color1'></div> <div className='color2'></div> <div className='color3'></div> <div className='color4'></div> <div className='color5'></div> <div className='color6'></div>
                        </div>
                        <h3 className='text-white pt-4'>We are Trusted</h3>
                        <div className="slider-here pt-5">
                            <Swipper />
                        </div>
                        <div className="row">
                            <img className='mt-5' src={Maingraph} alt="main-heading" width="2900px" height="700px" />

                        </div>
                    </div>


                    <div className="row flex justify-center items-center pt-5">
                        <div className="col-lg-6">
                        <div className="col flex justify-start items-center text-center flex-row gap-1">
                            <div className='color1'></div> <div className='color2'></div> <div className='color3'></div> <div className='color4'></div> <div className='color5'></div> <div className='color6'></div>
                        </div>
                            <h3 className='main__common__heading text-white pb-1 pt-4'>Trade</h3>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <button className='main-btn'>Read more</button>
                        </div>

                        <div className="col-lg-6">
                            <div className="main__image__common">
                            <img src={TradeImg} alt=''  className='img-fluid'></img>
                            </div>
                        </div>
                    </div>



                    <div className="row flex justify-center items-center pt-5">
                        <div className="col-lg-6">
                            <div className="main__image__common">
                            <img src={analysisImg} alt=''  className='img-fluid'></img>
                            </div>

                        </div>
                        <div className="col-lg-6">
                        <div className="col flex justify-start items-center text-center flex-row gap-1">
                            <div className='color1'></div> <div className='color2'></div> <div className='color3'></div> <div className='color4'></div> <div className='color5'></div> <div className='color6'></div>
                        </div>
                            <h3 className='main__common__heading text-white pb-1 pt-4'>Analytics</h3>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <button className='main-btn'>Read more</button>
                        </div>
                    </div>


                    <div className="row flex justify-center items-center pt-5">
                        <div className="col-lg-6">
                        <div className="col flex justify-start items-center text-center flex-row gap-1">
                            <div className='color1'></div> <div className='color2'></div> <div className='color3'></div> <div className='color4'></div> <div className='color5'></div> <div className='color6'></div>
                        </div>
                            <h3 className='main__common__heading text-white pb-1 pt-4'>Peer-To-Peer</h3>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <button className='main-btn'>Read more</button>
                        </div>

                        <div className="col-lg-6">
                            <div className="main__image__common">
                            <img src={p2pImg} alt=''  className='img-fluid'></img>
                            </div>
                        </div>
                    </div>



                    <div className="row flex justify-center items-center pt-5">
                        <div className="col-lg-6">
                            <div className="main__image__common">
                            <img src={EasyToInvest} alt=''  className='img-fluid'></img>
                            </div>

                        </div>
                        <div className="col-lg-6">
                        <div className="col flex justify-start items-center text-center flex-row gap-1">
                            <div className='color1'></div> <div className='color2'></div> <div className='color3'></div> <div className='color4'></div> <div className='color5'></div> <div className='color6'></div>
                        </div>
                            <h3 className='main__common__heading text-white pb-1 pt-4'>Easy To Invest</h3>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <p className="main__common__para text-white pt-3">
                                An intuitive interface for trading all your assets. Trade any of the currencies supported by Ekonnet or over 100 other IOUs on the XRP Ledger decentralized exchange. Explore and analyze the markets.The new Trade page works for you whether you're a beginner or a seasoned trader.
                            </p>
                            <button className='main-btn'>Read more</button>
                        </div>
                    </div>
                    
                </div>



                
            </section>




        </>
    )
}

export default Home2
