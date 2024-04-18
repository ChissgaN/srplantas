import React, { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductCart, setSelectedProductCart] = useState({
    quantity: 1,
  });
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        selectedProduct,
        setSelectedProduct,
        selectedProductCart,
        setSelectedProductCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
