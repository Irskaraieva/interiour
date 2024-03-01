
import { createContext, useState, useEffect } from "react";
import { goods } from "../helpers/Goods";

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {

    const [ cartItems, setCartItems ] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const contextValue = {cartItems, setCartItems }
    console.log(cartItems);

  return (

    <CartContext.Provider value={contextValue}>
        {props.children}
    </CartContext.Provider>
  )
}
