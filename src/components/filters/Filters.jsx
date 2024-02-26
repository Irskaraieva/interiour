import { useState } from 'react';
import { IoFilterSharp } from "react-icons/io5";
import mark from './../../images/photo-content/mark.png';
import arrow from './../../images/photo-content/arrow.png';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { products } from '../../helpers/Products';
import { store } from '../../helpers/Stores';
import '../filters/filters.scss';
import { useGoods } from '../../context/GodsContext';

const Filters = () => {
    const { checkedItems, setCheckedItems } = useGoods(); 

    const [displayedStore, setDisplayedStore] = useState(store);
    const [displayedProducts, setDisplayedProducts] = useState(products);
    const [checkedItemsProd, setCheckedItemsProd] = useState([]);
    const [openFilterStore, setOpenFilterStore] = useState(false);
    const [openFilterProd, setOpenFilterProd] = useState(false);
    const [value, setValue] = useState([100, 1200]);
    const hasProducts = displayedProducts.length > 0;
    const hasStore = displayedStore.length > 0;

    const handleItemClick = (storeItem) => {
        if (checkedItems.includes(storeItem)) {
            setCheckedItems(checkedItems.filter(item => item !== storeItem));
        } else {
            setCheckedItems([...checkedItems, storeItem]);
        }
    };

    const handleItemClickProd = (prodItem) => {
        const itemIdentifier = prodItem.name;
        if (checkedItemsProd.includes(itemIdentifier)) {
            setCheckedItemsProd(checkedItemsProd.filter(item => item !== itemIdentifier));
        } else {
            setCheckedItemsProd([...checkedItemsProd, itemIdentifier]);
        }
    };

    const handleOpenStore = () => {
        setOpenFilterStore(!openFilterStore)
    }

    const handleOpenProd = () => {
        setOpenFilterProd(!openFilterProd)
    }

    const handleResetFilters = () => {
        setCheckedItemsProd([]);
        setCheckedItems([]);
    }

    const arrowClass = openFilterStore ? "rotate" : "";
    const arrowProdClass = openFilterProd ? "rotate" : "";
    const filterStoreClass = !openFilterStore ? "filter-store" : "filter-store hide";
    const filterProdClass = !openFilterProd ? "filter-products" : "filter-products hide";

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

            <div className='filter-wraper'>
                <div className='is-flex' onClick={handleOpenProd}>
                    <span>Products</span>
                    <img src={arrow} alt='arrow' className={arrowProdClass} />
                </div>
                <div className={filterProdClass}>
                    {hasProducts ? (
                        displayedProducts.map((prodItem, index) => (
                            <div key={index} className={`filter-store-item ${checkedItemsProd.includes(prodItem.name) ? 'checked' : ''}`} onClick={() => handleItemClickProd(prodItem)}>
                                <div className={`check-box ${checkedItemsProd.includes(prodItem.name) ? 'checked' : ''}`}>
                                    {checkedItemsProd.includes(prodItem.name) && <img src={mark} alt='mark' />}
                                </div>
                                <span>{prodItem.name} ({prodItem.quantity})</span>
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