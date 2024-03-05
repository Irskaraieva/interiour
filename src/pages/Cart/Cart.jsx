import { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '../Cart/cart.scss';
import imageDefault from '../../images/products/all-products/default-img.png';
import SingleCartItem from '../../components/singleCartItem/SingleCartItem';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

  const { cartItems, setCartItems } = useContext(CartContext);

  const [total, setTotal] = useState({
    price: 0,
  });

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, item) => {
      return acc + item.price * item.itemCount;
    }, 0);

    setTotal((prevTotal) => ({
      ...prevTotal,
      price: newTotalPrice,
    }));
  }, [cartItems]);

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
              <div className="text-info">
                <p>There is nothing here</p>
                <NavLink to={'/products'}>
                  To the store <span> &rarr;</span>
                </NavLink>
              </div>
            )
          }

          {cartItems.length > 0 ? (
            <div className='total-wrapper'>
              <button
                className='clean-cart'
                onClick={() => setCartItems([])}
              >
                Clean Cart
              </button>
              <p>Total price: <span>${total.price}</span></p>
              <button
                className='buy'
                onClick={() => setCartItems([])}
              >
                Buy
              </button>
            </div>
          ) : 
          <>
          </>
          }
        </div>


      </section>
    </>
  );
}

export default Cart;