
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Btc from '../assets/btc.png'
import Tether from '../assets/tether-coin.png'
import './Carousel.css'
import React, { } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const MarketCarousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="content">
                    <div className="card">
                        <div className="card-content">
                            <div className="image">
                                <img src={Btc} alt='bitcoin' />
                            </div>
                            <div className="check-icon">
                                <BsFillCheckCircleFill />
                            </div>
                            <div className="CoinDetails">
                                <span className="Coin-name">Bitcoin/Usdt</span>
                                <span className="price">$0.02571</span>
                                <span className="highlited-price">+0.59 %</span>

                            </div>
                            <div className="Trade-button">
                                <button className="trade-now">Trade Now <BsArrowRightCircleFill className='arrow' /></button>
                            </div>

                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="content">
                    <div className="card">
                    <div className="card-content">
                        <div className="image">
                            <img src={Tether} alt='bitcoin' />
                        </div>
                        <div className="check-icon">
                            <BsFillCheckCircleFill />
                        </div>
                        <div className="CoinDetails">
                            <span className="Coin-name">Tether/Usdt</span>
                            <span className="price">$0.02571</span>
                            <span className="highlited-price">+0.59 %</span>

                        </div>
                        <div className="Trade-button">
                            <button className="trade-now">Trade Now <BsArrowRightCircleFill className='arrow' /></button>
                        </div>

                    </div>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="content">
                    <div className="card">
                    <div className="card-content">
                        <div className="image">
                            <img src={Btc} alt='bitcoin' />
                        </div>
                        <div className="check-icon">
                            <BsFillCheckCircleFill />
                        </div>
                        <div className="CoinDetails">
                            <span className="Coin-name">Bitcoin/Usdt</span>
                            <span className="price">$0.02571</span>
                            <span className="highlited-price">+0.59 %</span>

                        </div>
                        <div className="Trade-button">
                            <button className="trade-now">Trade Now <BsArrowRightCircleFill className='arrow' /></button>
                        </div>

                    </div>
                </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="content">
                    <div className="card">
                    <div className="card-content">
                        <div className="image">
                            <img src={Btc} alt='bitcoin' />
                        </div>
                        <div className="check-icon">
                            <BsFillCheckCircleFill />
                        </div>
                        <div className="CoinDetails">
                            <span className="Coin-name">Bitcoin/Usdt</span>
                            <span className="price">$0.02571</span>
                            <span className="highlited-price">+0.59 %</span>

                        </div>
                        <div className="Trade-button">
                            <button className="trade-now">Trade Now <BsArrowRightCircleFill className='arrow' /></button>
                        </div>

                    </div>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="content">
                    <div className="card">
                    <div className="card-content">
                        <div className="image">
                            <img src={Btc} alt='bitcoin' />
                        </div>
                        <div className="check-icon">
                            <BsFillCheckCircleFill />
                        </div>
                        <div className="CoinDetails">
                            <span className="Coin-name">Bitcoin/Usdt</span>
                            <span className="price">$0.02571</span>
                            <span className="highlited-price">+0.59 %</span>

                        </div>
                        <div className="Trade-button">
                            <button className="trade-now">Trade Now <BsArrowRightCircleFill className='arrow' /></button>
                        </div>

                    </div>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="content">
                    <div className="card">
                    <div className="card-content">
                        <div className="image">
                            <img src={Btc} alt='bitcoin' />
                        </div>
                        <div className="check-icon">
                            <BsFillCheckCircleFill />
                        </div>
                        <div className="CoinDetails">
                            <span className="Coin-name">Bitcoin/Usdt</span>
                            <span className="price">$0.02571</span>
                            <span className="highlited-price">+0.59 %</span>

                        </div>
                        <div className="Trade-button">
                            <button className="trade-now">Trade Now <BsArrowRightCircleFill className='arrow' /></button>
                        </div>

                    </div>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="content">
                    <div className="card">
                    <div className="card-content">
                        <div className="image">
                            <img src={Btc} alt='bitcoin' />
                        </div>
                        <div className="check-icon">
                            <BsFillCheckCircleFill />
                        </div>
                        <div className="CoinDetails">
                            <span className="Coin-name">Bitcoin/Usdt</span>
                            <span className="price">$0.02571</span>
                            <span className="highlited-price">+0.59 %</span>

                        </div>
                        <div className="Trade-button">
                            <button className="trade-now">Trade Now <BsArrowRightCircleFill className='arrow' /></button>
                        </div>

                    </div>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="content">
                    <div className="card">
                    <div className="card-content">
                        <div className="image">
                            <img src={Btc} alt='bitcoin' />
                        </div>
                        <div className="check-icon">
                            <BsFillCheckCircleFill />
                        </div>
                        <div className="CoinDetails">
                            <span className="Coin-name">Bitcoin/Usdt</span>
                            <span className="price">$0.02571</span>
                            <span className="highlited-price">+0.59 %</span>

                        </div>
                        <div className="Trade-button">
                            <button className="trade-now">Trade Now <BsArrowRightCircleFill className='arrow' /></button>
                        </div>

                    </div>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="content">
                    <div className="card">
                    <div className="card-content">
                        <div className="image">
                            <img src={Btc} alt='bitcoin' />
                        </div>
                        <div className="check-icon">
                            <BsFillCheckCircleFill />
                        </div>
                        <div className="CoinDetails">
                            <span className="Coin-name">Bitcoin/Usdt</span>
                            <span className="price">$0.02571</span>
                            <span className="highlited-price">+0.59 %</span>

                        </div>
                        <div className="Trade-button">
                            <button className="trade-now">Trade Now <BsArrowRightCircleFill className='arrow' /></button>
                        </div>

                    </div>
                </div>
                </div>
                </SwiperSlide>


       
            </Swiper>
          




        </>
    )
}

export default MarketCarousel
