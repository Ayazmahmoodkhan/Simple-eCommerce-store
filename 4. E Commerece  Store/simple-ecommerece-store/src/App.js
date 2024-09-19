import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import './App.css';
import laptopImage from './assets/lapto.jpeg'; // Import the local image
import PhoneImage from './assets/mobile.jpg'; // Import the local image
import HeadphonesImage from './assets/headphone.jpeg'; // Import the local image

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 999,
      image: laptopImage
    },
    {
      id: 2,
      name: 'Phone',
      price: 499,
      image: PhoneImage, // Placeholder Image
    },
    {
      id: 3,
      name: 'Headphones',
      price: 199,
      image: HeadphonesImage, // Placeholder Image
    },
  ];

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the cart based on its index
  const removeFromCart = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div className="App">
      <h1>Simple E-commerce Store</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
