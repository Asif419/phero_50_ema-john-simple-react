import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  // different way to get total
  let totalShipping = 0;
  let quantity = 0;
  let totalPrice = 0;

  for (const product of cart) {
    totalPrice += product.price * product.quantity;
    totalShipping += product.shipping;
    quantity += product.quantity;
  }
  const tax = totalPrice * 7 / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  
  return (
    <div className='cart'>
      <h4>Order Summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;