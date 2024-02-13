import shoppingBag from '../../../images/photo-content/shopping-bag.svg';
import prod1 from '../../../images/products/all-products/prod-1.webp';
import prod2 from '../../../images/products/all-products/prod-2.webp';
import prod3 from '../../../images/products/all-products/prod-3.webp';
import prod4 from '../../../images/products/all-products/prod-4.webp';
import prod5 from '../../../images/products/all-products/prod-5.webp';
import prod6 from '../../../images/products/all-products/prod-6.webp';
import { BiDotsHorizontalRounded } from "react-icons/bi";

import { MdStar } from "react-icons/md";

import '../Card/card.scss';

const Card = () => {
    return (
        <>
       
        <div className="card">
            <div className='card-img'>
                <img src={prod1} alt="product" className='prod-img' />
            </div>


            <div className='card-description'>
                <span className="brand-name"> Ikea </span>
                <div className='good-name-wrapper'>
                    <h3 className="good-name">Muren Armchairs</h3>
                    <BiDotsHorizontalRounded className='dots' />
                </div>

                <ul className="stars-wrapper">
                    <li>< MdStar className='star cheked' /></li>
                    <li>< MdStar className='star cheked' /></li>
                    <li>< MdStar className='star cheked' /></li>
                    <li>< MdStar className='star cheked' /></li>
                    <li>< MdStar className='star' /></li>
                </ul>
                <div className="card-bottom">
                    <span className="price"> $210</span>
                    <div className='shopping-bag' >
                        <img src={shoppingBag} height='32px' alt='search-img' />
                    </div>
                </div>
            </div>

        </div>
        <div className="card">
        <div className='card-img'>
            <img src={prod6} alt="product" className='prod-img' />
        </div>


        <div className='card-description'>
            <span className="brand-name"> Ikea </span>
            <div className='good-name-wrapper'>
                <h3 className="good-name">Muren Armchairs</h3>
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
                <span className="price"> $210</span>
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