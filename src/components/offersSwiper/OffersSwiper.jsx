import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import '../offersSwiper/offersSwiper.scss';
import arrow from './../../images/photo-content/arrow.png';
import product1 from "./../../images/products/offers/prod-1.jpg";
import product2 from "./../../images/products/offers/prod-2.jpg";
import product3 from "./../../images/products/offers/prod-3.jpg";
import product4 from "./../../images/products/offers/prod-4.jpg";
import product5 from "./../../images/products/offers/prod-5.jpg";
import product6 from "./../../images/products/offers/prod-6.jpg";

SwiperCore.use([Navigation]);

const OffersSwiper = () => {

    return (
        <div className="offers-swiper-wrapper">
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                breakpoints={{
                    200: {
                        slidesPerView: 1
                    },
                    500: {
                        slidesPerView: 1.5
                    },                                          
                    700: {
                        slidesPerView: 2
                    }
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className='image-wrapper' style={{ backgroundImage: `url(${product6})` }}>
                    <div className='offers-info'>
                        <header className='ofice-infor-header'>
                            <h2>Hight Quality <br /> Furniture</h2>
                        </header>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam obcaecati illum, quasi.</p>
                        <button className='explore-now'>
                            Explore Now
                        </button>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='image-wrapper' style={{ backgroundImage: `url(${product5})` }}>
                    <div className='discount-info'>
                        <header className='discount-info-header'>
                            <h2>Discount Up to</h2>
                            <span>70%</span>
                        </header>
                        <p>
                            <span className='discount-arrow'><img src={arrow} alt='arrow' /> </span>
                            <span>Lorem ipsum dolor sit amet</span>
                        </p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='image-wrapper' style={{ backgroundImage: `url(${product4})` }}>
                    <div className='offers-info'>
                        <header className='ofice-infor-header'>
                            <h2>Hight Quality <br /> Furniture</h2>
                        </header>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam obcaecati illum, quasi.</p>
                        <button className='explore-now'>
                            Explore Now
                        </button>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='image-wrapper' style={{ backgroundImage: `url(${product3})` }}>
                    <div className='discount-info'>
                        <header className='discount-info-header'>
                            <h2>Discount Up to</h2>
                            <span>70%</span>
                        </header>
                        <p>
                            <span className='discount-arrow'><img src={arrow} alt='arrow' /> </span>
                            <span>Lorem ipsum dolor sit amet</span>
                        </p>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='image-wrapper' style={{ backgroundImage: `url(${product2})` }}>
                    <div className='offers-info'>
                        <header className='ofice-infor-header'>
                            <h2>Hight Quality <br /> Furniture</h2>
                        </header>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam obcaecati illum, quasi.</p>
                        <button className='explore-now'>
                            Explore Now
                        </button>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='image-wrapper' style={{ backgroundImage: `url(${product1})` }}>
                    <div className='offers-info'>
                        <header className='ofice-infor-header'>
                            <h2>Hight Quality <br /> Furniture</h2>
                        </header>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam obcaecati illum, quasi.</p>
                        <button className='explore-now'>
                            Explore Now
                        </button>
                    </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className='custom-buttons' >
                <div className='swiper-button-prev custom-prev'></div>

                <div className='swiper-button-next custom-next'></div>
            </div>
        </div>
    );
}

export default OffersSwiper;