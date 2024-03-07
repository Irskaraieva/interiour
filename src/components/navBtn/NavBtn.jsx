import { useState, useEffect } from "react";
import '../navBtn/navBtn.scss';
import Filters from "../filters/Filters";

function NavBtn() {
    const [isActive, setIsActive] = useState(false);

    // useEffect(() => {
    //     if (isActive) {
    //         document.body.classList.remove("no-scroll");
    //         setIsActive(false);
    //     } 
        
    // }, [isActive]);

    const toggleActive = () => {
        setIsActive(!isActive);
        document.body.classList.toggle("no-scroll");
    };

    const btnClass = isActive  ? 'nav-mob-btn active' : 'nav-mob-btn';
    const navClass = isActive  ? 'mob-nav mob-nav-active' : 'mob-nav';
    const mobWrapperClass = isActive ? 'mob-nav-wrapper mob-nav-wrapper-open' : 'mob-nav-wrapper';

    return (
        <>
            <button className={btnClass} onClick={toggleActive}>              
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <span className="filter-mobile">Filter</span>
            </button>
            <div className={mobWrapperClass}>
                <nav className={navClass}>  
                        <Filters /> 
                </nav>
            </div>
        </>

    )
}

export default NavBtn;
