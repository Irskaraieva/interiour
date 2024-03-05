
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {

    const [ cartItems, setCartItems ] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);


    const addToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
          
            setCartItems((prevCartItems) => {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, itemCount: cartItem.itemCount + 1 } : cartItem
                );
            });
        } else {         
            setCartItems((prevCartItems) => [...prevCartItems, { ...item, itemCount: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== itemId));
    };


    const contextValue = {cartItems, setCartItems, addToCart, removeFromCart }

  return (

    <CartContext.Provider value={contextValue}>
        {props.children}
    </CartContext.Provider>
  )
}
