import React from "react";

export const Product = React.memo(
  ({ pr, addToCart, removeFromCart, isInCart }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <h3>{pr.name}</h3>
        <span>{pr.price}</span>
        <span>{pr.quantity}</span>
        <button
          onClick={() => {
            isInCart(pr.id) ? removeFromCart(pr.id) : addToCart(pr.id);
          }}
        >
          {isInCart(pr.id) ? "Remove from Cart" : "Add To Cart"}
        </button>
      </div>
    );
  }
);
