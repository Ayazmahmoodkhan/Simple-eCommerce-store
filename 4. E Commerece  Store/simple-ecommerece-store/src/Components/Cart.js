import React from 'react';
import { Button } from 'react-bootstrap';

const Cart = ({ cart, removeFromCart }) => {
  // Calculate the total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price} 
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(index)} // Remove item by index
                  className="ml-2"
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
