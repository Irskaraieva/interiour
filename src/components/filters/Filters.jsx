import { useState } from 'react';
import { IoFilterSharp } from "react-icons/io5";
import mark from './../../images/photo-content/mark.png';
import arrow from './../../images/photo-content/arrow.png';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { store } from '../../helpers/Stores';
import '../filters/filters.scss';
import { useGoods } from '../../context/GodsContext';

const Filters = () => {
    const { checkedItems, setCheckedItems, value, setValue } = useGoods(); 

    const [displayedStore, setDisplayedStore] = useState(store);
    const [openFilterStore, setOpenFilterStore] = useState(false);
    
    const hasStore = displayedStore.length > 0;

    const handleItemClick = (storeItem) => {
        if (checkedItems.includes(storeItem)) {
            setCheckedItems(checkedItems.filter(item => item !== storeItem));
        } else {
            setCheckedItems([...checkedItems, storeItem]);
        }
    };

    const handleOpenStore = () => {
        setOpenFilterStore(!openFilterStore)
    }

    const handleResetFilters = () => {
        setCheckedItems([]);
        setValue([100, 1200]);        
        
    }

    const arrowClass = openFilterStore ? "rotate" : "";
    const filterStoreClass = !openFilterStore ? "filter-store" : "filter-store hide";

    return (
        <section className='filters'>
            <header className='filter-header'>
                <div className='filter'>
                    <IoFilterSharp className='filter-icon' />
                    <span>Filter</span>
                </div>
                <span className='reset-filter' onClick={handleResetFilters}>
                    Reset Filter
                </span>
            </header>
            <div className='filter-wraper'>
                <div className='is-flex' onClick={handleOpenStore}>
                    <span>Store</span>
                    <img src={arrow} alt='arrow'
                        className={arrowClass}
                    />
                </div>

                <div className={filterStoreClass}>
                    {hasStore ? (
                        displayedStore.map((storeItem, index) => (
                            <div key={index} className={`filter-store-item ${checkedItems.includes(storeItem) ? 'checked' : ''}`} onClick={() => {
                                handleItemClick(storeItem);
                            }}>
                                <div className={`check-box ${checkedItems.includes(storeItem) ? 'checked' : ''}`}>
                                    {checkedItems.includes(storeItem) && <img src={mark} alt='mark' />}
                                </div>
                                <span className={checkedItems.includes(storeItem) ? 'is-bold' : ''}>{storeItem}</span>
                            </div>
                        ))
                    ) : (
                        <div className='text-info'>There is nothing here</div>
                    )
                    }
                </div>
            </div>
            <div className='filter-range'>
                <span>Price Range</span>
                <RangeSlider
                    defaultValue={[100, 1200]}
                    onInput={(value, index) => setValue(value)}
                    min={0}
                    max={2000}
                    value={value}
                    step={10} />
                <span className='min-price'>
                    $0
                </span>
                <span className='max-price'>
                    $2k
                </span>
                <div style={{ position: 'absolute', bottom: '-35px', left: `${value[0] / 23}%`, color: 'white' }}>
                    ${value[0]}
                </div>
                <div style={{ position: 'absolute', bottom: '-35px', left: `${value[1] / 23}%`, color: 'white' }}>
                    ${value[1]}
                </div>
            </div>
        </section>
    );
}

export default Filters;