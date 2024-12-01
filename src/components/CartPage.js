import './CartPage.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeItem } from '../features/cartSlice';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total number of plants
  const totalPlants = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total cost
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {/* Display total number of plants */}
      <p className="total-plants">Total Items in Cart: {totalPlants}</p>

      {/* Check if cart is empty */}
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is currently empty!</p>
      ) : (
        <div className="cart-container">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                </div>
                <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </div>
            </div>
          ))}
          {/* Display total cost */}
          <div className="cart-summary">
            <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={() => alert("Checkout Coming Soon!")}>
              Checkout (Coming Soon)
            </button>
            <Link to="/" className="continue-btn">Continue Shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
