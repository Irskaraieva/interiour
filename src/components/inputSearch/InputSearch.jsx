import "../inputSearch/inputSearch.scss";
import { useState } from "react";
import searchImg from './../../images/photo-content/search.svg';


const InputSearch = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }
    
    return (
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
    );
}

export default InputSearch;