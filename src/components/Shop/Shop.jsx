import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id
    for (const id in storedCart) {
      // step 2: get product form products
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity; // quantity updated both time, 1. in loading (here), 2. click on add to cart. This word had been done because, in database quantity = 0; so, we need to update it when we are clicking on add button (inside handleAddToCart function) and also every time when we are loading the page (here).
        savedCart.push(addedProduct);
      }
      // step 5: set the cart
      setCart(savedCart); // this is used because in every web page load we can get previous saved cart values from localStorage
    }
  }, [products])

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find(pd => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart); // set the quantity in every selected product
    // setCart here added product to localStorage after click on addToCart
    addToDb(product.id);
  }
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
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
        <Cart
          cart={cart}
          handleClearCart={handleClearCart}
        >
          <div>
            <Link className='proceed-link' to='/orders'>
              <button className='btn-proceed'>Review Order</button>
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;