import { useState } from 'react';
import image from '../../images/products/all-products/prod-01.svg';
import '../Cart/cart.scss';
import shoppingBag from '../../images/photo-content/shopping-bag.svg';

const Cart = () => {

    const [inputNum, setInputNum] = useState({
        inputNumber: 1,
        totalPrice: 28,
    });
    const singlePrise = 28;
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
            })
          }     
      };
    
      const decreaseButton = () => {
        if (inputNum.inputNumber !== '') {
          const enterValue = parseInt(inputNum.inputNumber) - 1;
          const updatedValue = enterValue <= 0 ? 1 : enterValue;
          const maxQuantity = updatedValue > 42 ? "Sorry, but max quantity is 42" : "";
          document.getElementById("maxQuantity").textContent = maxQuantity;        
      
          setInputNum({
            inputNumber: updatedValue,
            totalPrice: (updatedValue * parseFloat(singlePrise)).toFixed(2)
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
        } 
          else if (inpNum < 0) {
          
            setInputNum({
              inputNumber: 1,
              totalPrice: parseFloat(singlePrise).toFixed(2)
            });
            document.getElementById("maxQuantity").textContent = "";
          } 
            else if (inpNum == 0) {
    
            setInputNum({
              inputNumber: inpNum.replace(/^0/, 1),
              totalPrice: parseFloat(singlePrise).toFixed(2)
            });
            document.getElementById("maxQuantity").textContent = "";
    
            }
    
              else {      
                setInputNum({
                  inputNumber: inpNum,
                  totalPrice: (inpNum * parseFloat(singlePrise)).toFixed(2)
                })
                document.getElementById("maxQuantity").textContent = "";
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
            <section className='cart-wrapper'>
                <div className='cart-content'>
                    <div className='cart-item'>
                        <figure>
                            <img src={image} alt="product" />
                        </figure>
                        <div className='product-name'>
                            Name
                        </div>
                        <div className='quantity-wrapper'>
                        <p id="maxQuantity"></p>
                            <button className='decrease' onClick={decreaseButton}>-</button>
                            <input
                                type='number'
                                className='quantity'
                                value={inputNum.inputNumber}
                                onChange={handInput}
                                onKeyDown={someKeyDown}></input>
                            <button className='increase' onClick={increaseButton}>+</button>
                        </div>
                        <div className='product-price'>
                          $ {totalPrice}
                        </div>
                        <button className='delete'><img src={shoppingBag} alt='bag' /></button>
                    </div>

                    <div className='total-wrapper'>
                        <p>Total price: <span>$900</span></p>
                    </div>
                </div>


            </section>
        </>
    );
}

export default Cart;