import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinue }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page" style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#2e7d32', fontSize: '2rem', marginBottom: '20px' }}>
          🛒 Your Cart
        </h2>
        <p style={{ color: '#777', fontSize: '1.1rem' }}>
          Your cart is empty. Start shopping!
        </p>
        <button
          className="get-started-btn"
          style={{ marginTop: '20px' }}
          onClick={onContinue}
        >
          Browse Plants
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2 style={{ color: '#2e7d32', fontSize: '2rem', marginBottom: '20px' }}>
        🛒 Shopping Cart
      </h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.name}>
          <img src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p style={{ color: '#388e3c', fontWeight: 'bold' }}>
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>
              Unit price: ${item.price.toFixed(2)}
            </p>
            <div className="cart-item-controls">
              <button onClick={() => handleDecrease(item)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrease(item)}>+</button>
              <button
                className="remove-btn"
                onClick={() => handleRemove(item.name)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="cart-total">
        Total: ${totalAmount.toFixed(2)}
      </div>

      <button className="continue-btn" onClick={onContinue}>
        Continue Shopping
      </button>
      <button className="checkout-btn">
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
