import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Cart items state
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

  // Function to add product to the cart
  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Function to get the count of items in the cart
  const getCartCount = () => {
    return cartItems.length;
  };

  // Function to set the selected product details
  const setProductDetails = (product) => {
    setSelectedProduct(product);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      clearCart, 
      getCartCount, 
      selectedProduct, 
      setProductDetails 
    }}>
      {children}
    </CartContext.Provider>
  );
};
