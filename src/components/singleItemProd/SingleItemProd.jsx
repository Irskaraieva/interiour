import { useParams } from "react-router-dom";
import '../singleItemProd/singleItemProd.scss';
import shoppingBag from '../../images/photo-content/shopping-bag.svg';
import { MdStar } from "react-icons/md";
import { goods } from "../../helpers/Goods";


const SingleItemProd = () => {

    const {id} = useParams();  
    const selectedItem = goods[id - 1];
    const selectedImg = selectedItem.image;
    const selectedName = selectedItem.name;
    const selectedBrand = selectedItem.brand;
    const selectedPrice = selectedItem.price;
    const selectedType = selectedItem.type;
    const selectedCategory = selectedItem.category;

    return (
        <>
            <section className='product-content'>
                <section className='single-prod-wrapper'>
                    <figure>
                        <img src={selectedImg} alt='product-img' />
                    </figure>
                    <div className='product-info'>
                        <div>
                            <h2>{selectedName}</h2>
                            <span className='brand'>{selectedBrand}</span>
                            <ul className="stars-wrapper">
                                <li>< MdStar className='star cheked' /></li>
                                <li>< MdStar className='star cheked' /></li>
                                <li>< MdStar className='star cheked' /></li>
                                <li>< MdStar className='star cheked' /></li>
                                <li>< MdStar className='star cheked' /></li>
                            </ul>
                        </div>


                        <div className='price-wrapper'>
                            <h3 className='price'>$ {selectedPrice}</h3>
                            <div className='shopping-bag' >
                                <img src={shoppingBag} height='32px' alt='search-img' />
                            </div>
                        </div>
                    </div>

                </section>
                <div className='description'>
                    <h3>Description: </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident similique dignissimos sunt expedita pariatur. Hic eligendi laudantium numquam voluptatibus iure earum explicabo iste odio sit distinctio. A, mollitia inventore.
                    </p>
                    <p>
                        Eveniet omnis voluptatum quam aut harum architecto. Totam molestias, ut repellendus consectetur corrupti perspiciatis numquam dolor enim quis laborum adipisci reiciendis aut recusandae facilis mollitia. Quaerat asperiores provident voluptatibus quo?
                    </p>
                </div>
            </section>

        </>
    );
}

export default SingleItemProd;