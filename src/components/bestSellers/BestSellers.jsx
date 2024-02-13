import { useState } from "react";
import '../bestSellers/bestSellers.scss';
import arrow from './../../images/photo-content/arrow.png';
import Card from "./Card/Card";

const BestSellers = () => {

    const [selectedSort, setSelectedSort] = useState('Low-hight');
    const [ visibleList, setVisibleList ] = useState(false);
    const [ activeButton, setActiveButton ] = useState(null);

    const handleSelectChange = (e) => {
        setSelectedSort(e);
    }

    const handleVisibleList = () => {
        setVisibleList(!visibleList);
    }

    const handleButtonActive = (index) => {
        setActiveButton(index);
    }
    const buttons = ["All Products", "Chair", "Table", "Sofa", "FootStool", "Office"];
    const listClass = visibleList ? "select is-visible" : "select";

    return (
        <section className="best-sellers-wrapper">
            <header className="best-sellers-header">
                <h2>Best Sellers</h2>
                <span className="view-all">
                    View All
                </span>
            </header>
            <nav className="best-sellers-nav">
                <div className="buttons-group">
                {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={activeButton === index ? "active" : ""}
                            onClick={() => {
                                handleButtonActive(index);
                            }}
                        >
                            {button}
                        </button>
                    ))}
                </div>
                <div className="sort-coner">
                    <span>Sort by</span>
                    <div className="select-wrapper" onClick={handleVisibleList}>
                        <span className="selected-item">{selectedSort}</span>
                        <span className='sort-arrow'>
                            <img src={arrow} alt='arrow' />
                        </span>                        
                        <ul className={listClass}>
                            <li onClick={() => handleSelectChange('Low-hight')}>Low-Hight</li>
                            <li onClick={() => handleSelectChange('Hight-low')}>Hight-low</li>
                            <li onClick={() => handleSelectChange('Name')}>Name</li>
                            <li onClick={() => handleSelectChange('Popularity')}>Popularity</li>
                        </ul>
                    </div>

                </div>
            </nav>
            <div className="goods-wrapper">
               <Card />
            </div>
        </section>
    );
}

export default BestSellers;