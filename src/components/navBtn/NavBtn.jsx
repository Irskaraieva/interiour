import { useState } from "react";

import facebookImg from '../../images/socials/facebook.svg';
import twitterImg from '../../images/socials/twitter.svg';
import instagramImg from '../../images/socials/instagram.svg';

import '../navBtn/navBtn.scss';

function NavBtn() {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    const btnClass = isActive ? 'nav-mob-btn active' : 'nav-mob-btn';

    const navClass = isActive ? 'mob-nav mob-nav-active' : 'mob-nav';
    const mobWrapperClass = isActive ? 'mob-nav-wrapper mob-nav-wrapper-open' : 'mob-nav-wrapper';

    return (
        <>
            <button className={btnClass} onClick={toggleActive}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </button>
            <div className={mobWrapperClass}>
                <nav className={navClass}>
                    <ul className="mob-nav-list">
                        <li><a href="#!" onClick={toggleActive}>How it works</a></li>
                        <li><a href="#!" onClick={toggleActive}>Opportunites</a></li>
                        <li><a href="#!" onClick={toggleActive}>Contacts</a></li>
                    </ul>
                    <div className="mob-socials">
                        <a href="#!" onClick={toggleActive}><img src={facebookImg} alt="facebook" /></a>
                        <a href="#!" onClick={toggleActive}><img src={twitterImg} alt="twitter" /></a>
                        <a href="#!" onClick={toggleActive}><img src={instagramImg} alt="instagram" /></a>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default NavBtn;
