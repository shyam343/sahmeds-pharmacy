// src/components/cart/CartItem.js
import React from "react";

const CartItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="cart-item">
      <p>{item.name}</p>
      <div className="quantity-control">
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
      </div>
      <p>Price: Rs. {item.price.toFixed(2)}</p>
      <p>Subtotal: Rs. {(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
