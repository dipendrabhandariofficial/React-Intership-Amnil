import React, { createContext, useState } from "react";
import { useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.length;

  const addToCart = (item) => {
    setCartItems((prevItems) => [
      ...prevItems,
      {
        id: item.id,
        uniqueId: `${item.id}-${Date.now()}`,
        title: item.title,
        image: item.image,
        price: item.price,
      },
    ]);
  };

  const removeFromCart = (uniqueId) => {
    setCartItems((items) => items.filter((item) => item.uniqueId !== uniqueId));
  };

  return (
    <CartContext.Provider value={{ cartCount, cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
//custom hooks

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
}

            