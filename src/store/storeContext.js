import React, { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const storeContext = createContext();

function useProducts() {
  const { callAPI } = useFetch();

  const products = [
    { name: "Rug", price: 290.1, quantity: 20, id: 0 },
    { name: "Carpet", price: 510, quantity: 15, id: 1 },
    { name: "Picture", price: 100, quantity: 56, id: 2 },
    { name: "Artcraft", price: 54.9, quantity: 100, id: 3 }
  ];

  useEffect(() => {
    (async () => {
      let res = await callAPI("/product/");
      console.log(res);
    })();
  }, [callAPI]);

  return { products };
}

function useCartLogic(products) {
  const [cart, setCart] = useState([]);
  const addToCart = productId => {
    if (cart.filter(pr => pr.id === productId).length) {
      return "Already in the Cart";
    }
    setCart(c => [...c, products[productId]]);
  };
  const isInCart = productId => {
    return cart.filter(pr => pr.id === productId).length ? true : false;
  };
  const removeFromCart = productId => {
    setCart(c => [...c.filter(p => p.id !== productId)]);
  };
  return {
    addToCart,
    removeFromCart,
    cart,
    isInCart
  };
}

export default props => {
  const { products } = useProducts();
  const { addToCart, removeFromCart, cart, isInCart } = useCartLogic(products);
  return (
    <storeContext.Provider
      value={{
        products,
        addToCart,
        removeFromCart,
        cart,
        isInCart
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
};
