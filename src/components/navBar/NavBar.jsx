import '../navBar/navBar.scss';
import { NavLink } from "react-router-dom";
import bell from './../../images/photo-content/bell.svg';
import shoppingBag from './../../images/photo-content/shopping-bag.svg';
import logIn from './../../images/photo-content/log-in.svg';
import Logo from '../logo/Logo';
import InputSearch from '../inputSearch/InputSearch';
import { CartContext } from '../../context/CartContext';
import { useContext, useEffect, useState } from 'react';

function Navbar() {

    const { cartItems } = useContext(CartContext);
    
    const [count, setCount ] = useState(0);
    const isCartItems = cartItems.length > 0;

    useEffect(() => {
        const newTotalCount = cartItems.reduce((acc, item) => {
          return acc + item.itemCount;
        }, 0);
    
        setCount(newTotalCount);
      }, [cartItems]);

    return (
        <div className='nav-wrapper'>
            <nav className="nav" id="nav">

                <div className='logo-mobile-container'>
                    <Logo />
                    <InputSearch />
                </div>
                <ul className="nav-list">
                    <li>
                        <NavLink to={'/'}>
                            <button className='button-home'> Home</button>
                        </NavLink>
                    </li>
                    <li><span className='vertical-line'></span></li>
                    <li><span className='new-items'> New Items</span></li>
                    <li className='input-desktop'>
                        <InputSearch />
                    </li>
                    <li><img className='bell' src={bell} alt='search-img' /></li>
                    <li><span className='vertical-line'></span></li>
                    <li>
                        <NavLink to={'/cart'} className='shopping-bag-container'>
                            <img className='shopping-bag' src={shoppingBag} alt='search-img' />
                            {
                                isCartItems ? <span className='item-count'>{count}</span> : null
                            }
                            
                        </NavLink>
                    </li>
                    <li><span className='vertical-line'></span></li>
                    <li>
                        <NavLink to={'/sign-in'}>
                            <img className='log-in' src={logIn} alt='search-img' />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    )
}
export default Navbar;