import { NavLink } from "react-router-dom";
import '../singleSearchItem/singleSearchItem.scss';

const SingleSearchItem = ({ id, name, price, img }) => {
    return ( 
        <>
            <div className='search-item'>
                <NavLink to={`/products/${id}`}>
                    <figure>
                        <img src={img} alt="product" className="search-item-img" />
                    </figure>
                </NavLink>
                <NavLink to={`/products/${id}`} className='product-name'>
                    {name}
                </NavLink>
                <div className='product-price'>
                    $ {price}
                </div>
            </div>        
        </> 
    );
}
 
export default SingleSearchItem;