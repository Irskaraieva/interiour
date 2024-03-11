
import "../inputSearch/inputSearch.scss";
import searchImg from './../../images/photo-content/search.svg';
import { useGoods } from "../../context/GodsContext";
import SingleSearchItem from "../singleSearchItem/SingleSearchItem";

const InputSearch = () => {

    const { searchValue, setSearchValue, filteredByName, setFilteredByName } = useGoods();

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }

    const cleanInput = () => {
        setFilteredByName([]);
        setSearchValue('');
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
            <section className='search-items-wrapper' onClick={() => cleanInput()}>
                {
                    filteredByName.length > 0 ? (
                        filteredByName.map(item => {
                            const { id, name, price, image } = item;
                            const props = {
                                id,
                                name,
                                price,
                                img: image,
                            }
                            return (
                                <SingleSearchItem key={id} {...props} />
                            )
                        })
                    ) : <></>
                }
            </section>
        </div>
    );
}

export default InputSearch;