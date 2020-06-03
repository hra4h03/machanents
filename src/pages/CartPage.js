import React, { useContext, useState, useMemo } from "react";
import { storeContext } from "../store/storeContext";

const CartElem = ({ product, remove }) => {
  const [quantity, setQuantity] = useState(1);
  const price = useMemo(() => {
    return quantity * product.price;
  }, [quantity, product.price]);
  return (
    <div>
      <h4>{product.name}</h4>
      Quantity :{" "}
      <select onChange={e => setQuantity(e.currentTarget.value)}>
        {new Array(product.quantity).fill(null).map((arr, idx) => {
          return (
            <option key={idx} value={idx + 1}>
              {idx + 1}
            </option>
          );
        })}
      </select>
      <p>${price}</p>
      <div onClick={() => remove(product.id)}>
        <kbd>X</kbd>
      </div>
    </div>
  );
};

export const CartPage = () => {
  const { cart, removeFromCart } = useContext(storeContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Cart</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {cart.length === 0
          ? "No product yet"
          : cart.map(pr => {
              return (
                <CartElem product={pr} remove={removeFromCart} key={pr.id} />
              );
            })}
      </div>
    </div>
  );
};
