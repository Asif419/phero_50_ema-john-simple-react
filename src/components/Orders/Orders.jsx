import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
  const cart = useLoaderData();
  return (
    <div className='shop-container'>
      <div className="products-container">
        <h2>Orders page: {cart.length}</h2>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;