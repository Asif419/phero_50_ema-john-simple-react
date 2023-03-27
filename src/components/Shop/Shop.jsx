import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  }
  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product 
            product={product}
            handleAddToCart={handleAddToCart}
            key={product.id}></Product>)
        }
      </div>
      <div className="cart-container">
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;