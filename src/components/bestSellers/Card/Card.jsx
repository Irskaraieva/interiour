import shoppingBag from '../../../images/photo-content/shopping-bag.svg';
import { BiDotsHorizontalRounded } from "react-icons/bi";

import { MdStar } from "react-icons/md";

import '../Card/card.scss';

const Card = ({ name, brand, price, img }) => {

    return (
        <>
            <div className="card">
                <div className='card-img'>
                    <img src={img} alt="product" className='prod-img' />
                </div>

                <div className='card-description'>
                    <span className="brand-name"> {brand} </span>
                    <div className='good-name-wrapper'>
                        <h3 className="good-name">{name}</h3>
                        <BiDotsHorizontalRounded className='dots' />
                    </div>

                    <ul className="stars-wrapper">
                        <li>< MdStar className='star cheked' /></li>
                        <li>< MdStar className='star cheked' /></li>
                        <li>< MdStar className='star cheked' /></li>
                        <li>< MdStar className='star cheked' /></li>
                        <li>< MdStar className='star cheked' /></li>
                    </ul>
                    <div className="card-bottom">
                        <span className="price"> $ {price}</span>
                        <div className='shopping-bag' >
                            <img src={shoppingBag} height='32px' alt='search-img' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Card;