import BestSellers from '../../components/bestSellers/BestSellers';
import './homePage.scss';
import Offers from '../../components/offers/Offers';
import OffersSwiper from '../../components/offersSwiper/OffersSwiper';

const HomePage = () => {
    return (
        <>
            <Offers />
            <OffersSwiper />
            <BestSellers />
        </>
    );
}
export default HomePage;