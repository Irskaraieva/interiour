import '../navBar/navBar.scss';
import searchImg from './../../images/photo-content/search.svg';
import bell from './../../images/photo-content/bell.svg';
import shoppingBag from './../../images/photo-content/shopping-bag.svg';
import logIn from './../../images/photo-content/log-in.svg';
import { useState } from 'react';

function Navbar() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <nav className="nav" id="nav">
            <ul className="nav-list">
                <li><button className='button-home'> Home</button></li>
                <li><span className='vertical-line'></span></li>
                <li><span className='new-items'> New Items</span></li>
                <li>
                    <div className='input-box'>
                        <input
                            type='text'
                            className='input'
                            placeholder="Search For Products..."
                            onChange={handleSearchChange}
                            value={searchValue}
                        />
                        <img src={searchImg} height='24px' alt='search-img' />
                    </div>
                </li>
                <li><img className='bell' src={bell} height='32px' alt='search-img' /></li>
                <li><span className='vertical-line'></span></li>
                <li><img className='shopping-bag' src={shoppingBag} height='32px' alt='search-img' /></li>
                <li><span className='vertical-line'></span></li>
                <li><img className='log-in' src={logIn} height='32px' alt='search-img' /></li>
            
            </ul>
        </nav>
    )
}
export default Navbar;