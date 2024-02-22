import { useState, useEffect } from "react";
import '../navBtn/navBtn.scss';
import Filters from "../filters/Filters";

function NavBtn() {
    const [isActive, setIsActive] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    const btnClass = isActive && windowWidth <= 1000 ? 'nav-mob-btn active' : 'nav-mob-btn';
    const navClass = isActive && windowWidth <= 1000 ? 'mob-nav mob-nav-active' : 'mob-nav';
    const mobWrapperClass = isActive && windowWidth <= 1000 ? 'mob-nav-wrapper mob-nav-wrapper-open' : 'mob-nav-wrapper';

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
