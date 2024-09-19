import React from 'react';
import Product from './Product';
import { Row, Col } from 'react-bootstrap';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <Product product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
