import React, { useContext } from "react";
import { storeContext } from "../store/storeContext";
import { Product } from "../components/Product";

export const ProductPage = () => {
  const { products, addToCart, removeFromCart, isInCart } = useContext(
    storeContext
  );

  return (
    <div>
      {products.map(pr => {
        return (
          <Product
            key={pr.id}
            addToCart={addToCart}
            pr={pr}
            removeFromCart={removeFromCart}
            isInCart={isInCart}
          />
        );
      })}
    </div>
  );
};
