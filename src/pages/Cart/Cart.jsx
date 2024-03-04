import { useContext, useState } from 'react';
import '../Cart/cart.scss';
import imageDefault from '../../images/products/all-products/default-img.png';
import SingleCartItem from '../../components/singleCartItem/SingleCartItem';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

  const { cartItems } = useContext(CartContext);
   
    return (
        <>
            <section className='cart-wrapper'>
                <div className='cart-content'>
                    {
                   cartItems.length > 0 ? (
                    cartItems.map((item) => {
                        const { id, name, price, image, itemCount } = item;
                        const props = {
                            id,                            
                            name,
                            price,    
                            itemCount,     
                            img: image || imageDefault,                            
                        }
                        return (                               
                            <SingleCartItem key={id} {...props} />                             
                        )
                    })
                ) : (
                    <div className="text-info">No items</div>
                )
                }                    

                    <div className='total-wrapper'>
                        <p>Total price: <span>$900</span></p>
                    </div>
                </div>


            </section>
        </>
    );
}

export default Cart;