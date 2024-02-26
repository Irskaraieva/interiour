import { useEffect, useState } from "react";
import '../buttons-group/buttonsGroup.scss';
import { useGoods } from '../../context/GodsContext';
import arrow from './../../images/photo-content/arrow.png';

const ButtonsGroup = () => {

    const { selectedCategory, setSelectedCategory, hasGoods, setHasGoods, goods, checkedItems } = useGoods();
    const [selectedSort, setSelectedSort] = useState('Low-hight');
    const [visibleList, setVisibleList] = useState(false);
    const [activeButton, setActiveButton] = useState(0);

    useEffect(() => {
        if (selectedCategory === 'All Products') {
            
           if (checkedItems.length > 0) {
            setHasGoods(goods.filter((item) =>
            checkedItems.includes(item.brand)))
           } else {
            setHasGoods(goods);
           }        
        } else {            
            if (checkedItems.length > 0) {
                setHasGoods(goods
                    .filter(item => item.type.toLocaleLowerCase() === selectedCategory.toLocaleLowerCase())
                    .filter(item => checkedItems.includes(item.brand)));
            } else {
                 setHasGoods(goods.filter(item => 
                item.type.toLocaleLowerCase() === selectedCategory.toLocaleLowerCase()));
            }           
        }
    }, [selectedCategory, checkedItems]);

    const handleSelectChange = (sortType) => {
        setSelectedSort(sortType);

        const sortedGoods = [...hasGoods];

        if (sortType === 'Low-hight') {
            sortedGoods.sort((a, b) => a.price -b.price);
        } else if (sortType === 'Hight-low') {
            sortedGoods.sort((a, b) => b.price - a.price);
        } else if (sortType === 'Name') {
            sortedGoods.sort((a, b) => a.name.localeCompare(b.name));
        }
    
        setHasGoods(sortedGoods);
    }

    const handleVisibleList = () => {
        setVisibleList(!visibleList);
    }

    const handleButtonActive = (index, category) => {
        setActiveButton(index);
        setSelectedCategory(category);
    }

    const buttons = ["All Products", "Chair", "Table", "Sofa", "FootStool", "Office"];
    const listClass = visibleList ? "select is-visible" : "select";
    const arrowClass = visibleList ? "sort-arrow rotate" : "sort-arrow";

    return ( 
        <section className="best-sellers-nav">
        <div className="buttons-group">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    className={activeButton === index ? "active" : ""}
                    onClick={() => {
                        handleButtonActive(index, button);
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
                <span className={arrowClass}>
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
    </section>
     );
}
 
export default ButtonsGroup;