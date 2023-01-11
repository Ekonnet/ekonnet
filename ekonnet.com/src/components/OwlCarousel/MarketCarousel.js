
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

    const swipperContent = [
        {
            id: 1,
            image: "../assets/tether-coin.png",
            Name: "Tether/Usdt",
            Price: "$0.02571",
            Trends: "+0.59 %"

        },
        {
            id: 1,
            image: "../assets/tether-coin.png",
            Name: "Tether/Usdt",
            Price: "$0.02571",
            Trends: "+0.59 %"

        },
        {
            id: 1,
            image: "../assets/tether-coin.png",
            Name: "Tether/Usdt",
            Price: "$0.02571",
            Trends: "+0.59 %"

        },
        {
            id: 1,
            image: "../assets/tether-coin.png",
            Name: "Tether/Usdt",
            Price: "$0.02571",
            Trends: "+0.59 %"

        },
        {
            id: 1,
            image: "../assets/tether-coin.png",
            Name: "Tether/Usdt",
            Price: "$0.02571",
            Trends: "+0.59 %"

        },
        {
            id: 1,
            image: "../assets/tether-coin.png",
            Name: "Tether/Usdt",
            Price: "$0.02571",
            Trends: "+0.59 %"

        },
        {
            id: 1,
            image: "../assets/tether-coin.png",
            Name: "Tether/Usdt",
            Price: "$0.02571",
            Trends: "+0.59 %"

        },
        {
            id: 1,
            image: "../assets/tether-coin.png",
            Name: "Tether/Usdt",
            Price: "$0.02571",
            Trends: "+0.59 %"

        },
        {
            id: 1,
            image: "../assets/tether-coin.png",
            Name: "Tether/Usdt",
            Price: "$0.02571",
            Trends: "+0.59 %"

        },


    ]


    {


return (
    <>
        <Swiper
            breakpoints={{
                0: {
                   
                    slidesPerView: 1,
                    spaceBetween: 10,
                    slidesPerGroup: 1

                },
               480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    slidesPerGroup: 1

                },

                768: {
                    width: 768,
                    slidesPerView: 3,
                    spaceBetween: 20,
                    slidesPerGroup: 2
                },
                1024: {
                   
                    slidesPerView: 4,
                    spaceBetween: 15,
                    slidesPerGroup: 3
                },
                1280: {
                    
                    slidesPerView: 5,
                    spaceBetween: 20,
                    slidesPerGroup: 4
                },
            }}
         
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
                            <div className="Trade-btnS flex justify-center items-center ">
                                <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
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
                        <div className="Trade-btnS flex justify-center items-center ">
                            <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
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
                        <div className="Trade-btnS flex justify-center items-center ">
                            <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
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
                        <div className="Trade-btnS flex justify-center items-center ">
                            <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
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
                        <div className="Trade-btnS flex justify-center items-center ">
                            <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
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
                        <div className="Trade-btnS flex justify-center items-center ">
                            <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
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
                        <div className="Trade-btnS flex justify-center items-center ">
                            <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
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
                        <div className="Trade-btnS flex justify-center items-center ">
                            <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
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
                        <div className="Trade-btnS flex justify-center items-center ">
                            <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
                        </div>

                    </div>
                </div>
                </div>
                </SwiperSlide>



        </Swiper>





    </>
)
}
}

export default MarketCarousel
