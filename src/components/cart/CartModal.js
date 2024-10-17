import React from 'react';
import { useCart } from './CartProvider';
import './CartModal.css'; // Ensure you have styles for the modal

const CartModal = () => {
  const { cart, isCartOpen, closeCart, totalBill, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <button className="close-cart" onClick={closeCart}>X</button>
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
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
            ))}
            <p>Total: Rs. {totalBill.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
