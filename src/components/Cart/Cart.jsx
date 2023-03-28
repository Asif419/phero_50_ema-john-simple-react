import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  const {length} = cart;
  const totalPrice = cart.reduce((previous, current) => previous + current.price, 0);
  // different way to get total
  let totalShipping = 0;
  for (const product of cart) {
    totalShipping += product.shipping;
  }
  const tax = totalPrice * 7 / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className='cart'>
      <h4>Order Summary</h4>
      <p>Selected Items: {length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;