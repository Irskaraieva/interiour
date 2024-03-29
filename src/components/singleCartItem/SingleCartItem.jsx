import '../singleCartItem/singleCartItem.scss';
import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import shoppingBag from '../../images/photo-content/shopping-bag.svg';
import { CartContext } from '../../context/CartContext';

const SingleCartItem = ({ id, name, price, img, itemCount }) => {

    const { cartItems, setCartItems, removeFromCart } = useContext(CartContext);

    const [inputNum, setInputNum] = useState({
        inputNumber: itemCount,
        totalPrice: price,
    });

    const [maxQuantityMessage, setMaxQuantityMessage] = useState('');

    useEffect(() => {

        const cartItem = cartItems.find(item => item.id === id);
        if (cartItem) {
            setInputNum({
                inputNumber: cartItem.itemCount,
                totalPrice: (cartItem.itemCount * parseFloat(price)).toFixed(2)
            });
        }
    }, [cartItems, id, price, itemCount]);

    const singlePrise = price;
    const totalPrice = inputNum.totalPrice;

    const increaseButton = () => {

        const enterValue = parseInt(inputNum.inputNumber) || 0;
        const upDateValue = parseInt(inputNum.inputNumber) > 42 ? 42 : parseInt(enterValue) + 1;

        if (upDateValue > 42) {
            setMaxQuantityMessage('Sorry, but max quantity is 42');
            setInputNum({
                inputNumber: 42,
                totalPrice: (42 * parseFloat(singlePrise)).toFixed(2)
            });
        }
        else {
            setMaxQuantityMessage('');
            setInputNum({
                inputNumber: upDateValue,
                totalPrice: (upDateValue * parseFloat(singlePrise)).toFixed(2)
            });

            setCartItems((prevCartItems) => {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === id ? { ...cartItem, itemCount: upDateValue } : cartItem
                );
            });
        };
    };

    const decreaseButton = () => {
        if (inputNum.inputNumber !== '') {
            const enterValue = parseInt(inputNum.inputNumber) - 1;
            const newValue = enterValue <= 0 ? 1 : enterValue;
            newValue > 42 ? 
            setMaxQuantityMessage('Sorry, but max quantity is 42') : 
            setMaxQuantityMessage("");

            setInputNum({
                inputNumber: newValue,
                totalPrice: (newValue * parseFloat(singlePrise)).toFixed(2)
            });

            setCartItems((prevCartItems) => {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === id ? { ...cartItem, itemCount: newValue } : cartItem
                );
            });
        }
    };

    function handInput(event) {
        const inpNum = parseFloat(event.target.value);

        if (inpNum > 42) {
            setMaxQuantityMessage('Sorry, but max quantity is 42');
            setInputNum({
                inputNumber: 42,
                totalPrice: (42 * parseFloat(singlePrise)).toFixed(2)
            });

            setCartItems((prevCartItems) => {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === id ? { ...cartItem, itemCount: 42 } : cartItem
                );
            });
        }    
        else if (isNaN(inpNum) || inpNum < 0) {
            setMaxQuantityMessage('');
            setInputNum({
                inputNumber: 1,
                totalPrice: parseFloat(singlePrise).toFixed(2)
            });

            setCartItems((prevCartItems) => {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === id ? { ...cartItem, itemCount: 1 } : cartItem
                );
            });
        }
        else if (inpNum == 0) {
            setMaxQuantityMessage('');
            const newValue = inpNum.toString().replace(/^0/, 1);

            setInputNum({
                inputNumber: parseFloat(newValue),
                totalPrice: parseFloat(singlePrise).toFixed(2)
            });

            setCartItems((prevCartItems) => {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === id ? { ...cartItem, itemCount: inpNum.replace(/^0/, 1) } : cartItem
                );
            });
        } 
        else {
            setMaxQuantityMessage('');
            setInputNum({
                inputNumber: inpNum,
                totalPrice: (inpNum * parseFloat(singlePrise)).toFixed(2)
            })

            setCartItems((prevCartItems) => {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === id ? { ...cartItem, itemCount: parseFloat(inpNum) } : cartItem
                );
            });
        }
    }

    function someKeyDown(event) {
        if (
            (event.key === ',') ||
            (event.key === '.') ||
            (event.key === '+') ||
            (event.key === 'e') ||
            (event.key === '-') ||
            (isNaN(event.key) && event.keyCode !== 8)
        ) {
            event.preventDefault()
        }
    }

    return (
        <>
            <div className='cart-item'>
                <NavLink to={`/products/${id}`}>
                    <figure>
                        <img src={img} alt="product" />
                    </figure>
                </NavLink>
                <NavLink to={`/products/${id}`} className='product-name'>
                    {name}
                </NavLink>

                <div className='quantity-wrapper'>
                    <p>{maxQuantityMessage}</p>
                    <button className='decrease' onClick={() => decreaseButton()}>-</button>
                    <input
                        type='number'
                        className='quantity'
                        value={inputNum.inputNumber}
                        onChange={handInput}
                        onKeyDown={someKeyDown}></input>
                    <button className='increase' onClick={() => increaseButton()}>+</button>
                </div>
                <div className='product-price'>
                    $ {totalPrice}
                </div>
                <button className='delete' onClick={() => removeFromCart(id)}>
                    <img src={shoppingBag} alt='bag' />
                </button>
            </div>
        </>
    );
}

export default SingleCartItem;