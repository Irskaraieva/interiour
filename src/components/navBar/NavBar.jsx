import '../navBar/navBar.scss';

import bell from './../../images/photo-content/bell.svg';
import shoppingBag from './../../images/photo-content/shopping-bag.svg';
import logIn from './../../images/photo-content/log-in.svg';
import Logo from '../logo/Logo';
import NavBtn from '../navBtn/NavBtn';
import InputSearch from '../inputSearch/InputSearch';

function Navbar() {

    return (
        <div className='nav-wrapper'>
           <nav className="nav" id="nav">
            {/* <NavBtn /> */}
            <div className='logo-mobile-container'>
                <Logo />   
                <InputSearch />             
            </div>
            <ul className="nav-list">                
                <li><button className='button-home'> Home</button></li>
                <li><span className='vertical-line'></span></li>
                <li><span className='new-items'> New Items</span></li>
                <li className='input-desktop'>
                   <InputSearch />
                </li>
                <li><img className='bell' src={bell} alt='search-img' /></li>
                <li><span className='vertical-line'></span></li>
                <li><img className='shopping-bag' src={shoppingBag} alt='search-img' /></li>
                <li><span className='vertical-line'></span></li>
                <li><img className='log-in' src={logIn} alt='search-img' /></li>            
            </ul>
        </nav> 
        </div>
        
    )
}
export default Navbar;