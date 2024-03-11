import "../inputSearch/inputSearch.scss";
import searchImg from './../../images/photo-content/search.svg';
import { useGoods } from "../../context/GodsContext";


const InputSearch = () => {

    const { searchValue, setSearchValue } = useGoods();

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