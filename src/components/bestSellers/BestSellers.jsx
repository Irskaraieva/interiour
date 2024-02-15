import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import SwiperCore from 'swiper';
import '../bestSellers/bestSellers.scss';
import arrow from './../../images/photo-content/arrow.png';
import Card from "./Card/Card";
import { goods } from "../../helpers/Goods";

import imageDefault from './../../images/products/all-products/imageNotFound.png';

SwiperCore.use([Navigation]);

const BestSellers = () => {

    const [hasGoods, setHasGoods] = useState(goods);
    const [selectedSort, setSelectedSort] = useState('Low-hight');
    const [visibleList, setVisibleList] = useState(false);
    const [activeButton, setActiveButton] = useState(null);

    const handleSelectChange = (e) => {
        setSelectedSort(e);
    }

    const handleVisibleList = () => {
        setVisibleList(!visibleList);
    }

    const handleButtonActive = (index) => {
        setActiveButton(index);
    }
    const buttons = ["All Products", "Chair", "Table", "Sofa", "FootStool", "Office"];
    const listClass = visibleList ? "select is-visible" : "select";

    return (
        <section className="best-sellers-wrapper">
            <header className="best-sellers-header">
                <h2>Best Sellers</h2>
                <span className="view-all">
                    View All
                </span>
            </header>
            <nav className="best-sellers-nav">
                <div className="buttons-group">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={activeButton === index ? "active" : ""}
                            onClick={() => {
                                handleButtonActive(index);
                            }}
                        >
                            {button}
                        </button>
                    ))}
                </div>
                <div className="sort-coner">
                    <span>Sort by</span>
                    <div className="select-wrapper" onClick={handleVisibleList}>
                        <span className="selected-item">{selectedSort}</span>
                        <span className='sort-arrow'>
                            <img src={arrow} alt='arrow' />
                        </span>
                        <ul className={listClass}>
                            <li onClick={() => handleSelectChange('Low-hight')}>Low-Hight</li>
                            <li onClick={() => handleSelectChange('Hight-low')}>Hight-low</li>
                            <li onClick={() => handleSelectChange('Name')}>Name</li>
                            <li onClick={() => handleSelectChange('Popularity')}>Popularity</li>
                        </ul>
                    </div>

                </div>
            </nav>
            <div className="goods-wrapper">
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={20}
                    breakpoints={{
                    
                        400:{
                          slidesPerView:1,
                        },
                        865:{
                          slidesPerView:2
                        },
                        1000:{
                          slidesPerView:2.5
                        },
                        1500:{
                          slidesPerView:3.5
                        },
                        1700:{
                          slidesPerView:4.5
                        }
                      }}
                    modules={[ Navigation, Scrollbar ]}
                    className="mySwiper"
                    scrollbar={{ draggable: true }}
                >
                    {hasGoods.length > 0 ? (
                        hasGoods.map((good, index) => {
                            const { brand, name, price, image } = good;
                            const props = {
                                brand,
                                name,
                                price,
                                img: image || imageDefault,
                            }

                            return  <SwiperSlide>
                                      <Card key={index} {...props} />
                                    </SwiperSlide>
                        })
                    ) : (
                        <div className="text-info">No items</div>
                    )
                    }
                </Swiper>

            </div>
        </section>
    );
}

export default BestSellers;