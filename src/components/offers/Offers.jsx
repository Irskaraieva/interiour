import '../offers/offers.scss';
import flower from '../../images/photo-content/flower.png';
import mark from './../../images/photo-content/mark.png';

const Offers = () => {
    return ( 
        <section className="offers">
            <h2 className='offers-header'>
                Special Offers           
            <figure className='flower-wrapper'>
                <img src={flower} alt='flower' />
                <img className='mark' src={mark} alt='mark' />
            </figure>
            </h2>            
        </section> 
    );
}
 
export default Offers;