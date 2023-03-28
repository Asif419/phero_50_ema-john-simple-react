import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id
    for(const id in storedCart) {
      // step 2: get product form products
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
      // step 5: set the cart
    }
  }, [products])

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    addToDb(product.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;