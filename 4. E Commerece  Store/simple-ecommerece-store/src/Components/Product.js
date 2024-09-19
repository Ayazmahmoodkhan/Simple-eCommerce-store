import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product, addToCart }) => {
  return (
    <Card className="product mb-4">
      <Card.Img variant="top" src={product.image} alt={product.name} 
        className="img-fluid" 
        style={{ width: '400px', height: '250px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
