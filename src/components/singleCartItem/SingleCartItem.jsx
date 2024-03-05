import '../singleCartItem/singleCartItem.scss';
import { useContext, useState, useEffect } from 'react';

import shoppingBag from '../../images/photo-content/shopping-bag.svg';
import { CartContext } from '../../context/CartContext';

const SingleCartItem = ({ id, name, price, img, itemCount }) => {

    const { cartItems, setCartItems, removeFromCart } = useContext(CartContext);

    const [inputNum, setInputNum] = useState({
        inputNumber: itemCount,
        totalPrice: price,
    });

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
            document.getElementById("maxQuantity").textContent = "Sorry, but max quantity is 42";
            setInputNum({
                inputNumber: 42,
                totalPrice: (42 * parseFloat(singlePrise)).toFixed(2)
            });
        }
        else {
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
            const maxQuantity = newValue > 42 ? "Sorry, but max quantity is 42" : "";
            document.getElementById("maxQuantity").textContent = maxQuantity;

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
        const inpNum = event.target.value;

        if (inpNum > 42) {
            setInputNum({
                inputNumber: 42,
                totalPrice: (42 * parseFloat(singlePrise)).toFixed(2)
            });
            document.getElementById("maxQuantity").textContent = "Sorry, but max quantity is 42";

            setCartItems((prevCartItems) => {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === id ? { ...cartItem, itemCount: 42 } : cartItem
                );
            });

        }
        else if (inpNum < 0) {

            setInputNum({
                inputNumber: 1,
                totalPrice: parseFloat(singlePrise).toFixed(2)
            });
            document.getElementById("maxQuantity").textContent = "";
            setCartItems((prevCartItems) => {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === id ? { ...cartItem, itemCount: 1 } : cartItem
                );
            });
        }
        else if (inpNum == 0) {

            setInputNum({
                inputNumber: inpNum.replace(/^0/, 1),
                totalPrice: parseFloat(singlePrise).toFixed(2)
            });
            document.getElementById("maxQuantity").textContent = "";
            setCartItems((prevCartItems) => {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === id ? { ...cartItem, itemCount: inpNum.replace(/^0/, 1) } : cartItem
                );
            });
        }

        else {
            setInputNum({
                inputNumber: inpNum,
                totalPrice: (inpNum * parseFloat(singlePrise)).toFixed(2)
            })
            document.getElementById("maxQuantity").textContent = "";
            setCartItems((prevCartItems) => {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === id ? { ...cartItem, itemCount: inpNum } : cartItem
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
                <figure>
                    <img src={img} alt="product" />
                </figure>
                <div className='product-name'>
                    {name}
                </div>
                <div className='quantity-wrapper'>
                    <p id="maxQuantity"></p>
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