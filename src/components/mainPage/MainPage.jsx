import BestSellers from '../bestSellers/BestSellers';
import '../mainPage/mainPage.scss';
import Navbar from '../navBar/NavBar';
import Offers from '../offers/Offers';
import OffersSwiper from '../offersSwiper/OffersSwiper';

const MainPage = () => {
    return ( 
        <main className="main">
            <Navbar />
            <Offers />
            <OffersSwiper />
            <BestSellers />
        </main>
     );
}
 
export default MainPage;