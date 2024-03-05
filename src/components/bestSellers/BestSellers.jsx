import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import SwiperCore from 'swiper';
import '../bestSellers/bestSellers.scss';
import Card from "./Card/Card";
import { useGoods } from "../../context/GodsContext";
import imageDefault from './../../images/products/all-products/default-img.png';
import ButtonsGroup from "../../components/buttons-group/ButtonsGroup";


SwiperCore.use([Navigation]);

const BestSellers = () => {
    
    const { hasGoods } = useGoods();
   
    return (
        <section className="best-sellers-wrapper">
            <header className="best-sellers-header">
                <h2>Best Sellers</h2>
                <NavLink to={'/products'}>
                    <span className="view-all">
                        View All
                    </span>
                </NavLink>
            </header>
            <ButtonsGroup />
            <div className="goods-wrapper">
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={20}
                    breakpoints={{
                        200: { slidesPerView: 1},
                        340: { slidesPerView: 1.4 },
                        460: { slidesPerView: 2 },
                        562: { slidesPerView: 2.5 }, 
                        800: { slidesPerView: 3.5 },                        
                        1000: { slidesPerView: 2.5 },
                        1200: { slidesPerView: 3 },
                        1700: { slidesPerView: 3.5 }
                    }}
                    modules={[Navigation, Scrollbar]}
                    className="mySwiper"
                    scrollbar={{ draggable: true }}
                >
                    {hasGoods.length > 0 ? (
                        hasGoods.map((good) => {
                            const {id, brand, name, price, image, type, category } = good;
                            const props = {
                                id,
                                brand,
                                name,
                                price,
                                type,
                                img: image || imageDefault,
                                category,
                            }
                            return(
                                <SwiperSlide key={id}>                                  
                                    <Card {...props} />                                 
                                </SwiperSlide>
                              );
                        })
                    ) : (
                        <div className="text-info">There is nothing here</div>
                    )
                    }
                </Swiper>
            </div>
        </section>
    );
}

export default BestSellers;