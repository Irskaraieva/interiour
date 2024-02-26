import '../productsList/productsList.scss';
import { useGoods } from '../../context/GodsContext';
import Card from '../../components/bestSellers/Card/Card';
import ButtonsGroup from '../../components/buttons-group/ButtonsGroup';

const ProductsList = () => {

    const { hasGoods } = useGoods();

    return (
        <>
            <section className='products'>
                <ButtonsGroup />
                <div className='products-wrapper'>
                    {hasGoods.length > 0 ? (
                        hasGoods.map((good) => {
                            const { id, brand, name, price, image, type, category } = good;
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
                </div>
            </section>
        </>
    );
}

export default ProductsList;