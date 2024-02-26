import '../productsList/productsList.scss';
import { useGoods } from '../../context/GodsContext';
import Card from '../../components/bestSellers/Card/Card';

const ProductsList = () => {

    const { selectedCategory, setSelectedCategory, hasGoods, setHasGoods, goods, checkedItems } = useGoods();
    return (
        <>
            <section className='products-wrapper'>
            {hasGoods.length > 0 ? (
                        hasGoods.map((good) => {
                            const {id, brand, name, price, image, type,category } = good;
                            const props = {
                                brand,
                                name,
                                price,
                                type,
                                img: image || imageDefault,
                                category,
                            }
                            return (
                                <Card key={id} {...props} />
                            )
                                
                           
                        })
                    ) : (
                        <div className="text-info">No items</div>
                    )
                    }
            </section>
        </>
    );
}

export default ProductsList;