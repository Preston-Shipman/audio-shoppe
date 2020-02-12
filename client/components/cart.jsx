/* eslint-disable no-console */
import React from 'react';
import CartItem from './cart-item';

function Cart(props) {
  let cartItems = <h3>You have nothing in your cart.</h3>;
  console.log(props);

  if (props.cart.length) {
    cartItems = props.cart.map((currentItem, index) => {
      return (
        <CartItem key={index} item={currentItem} />
      );
    });
  } else {
    return cartItems;
  }

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <a href="#">Continue Shopping</a>
            <h1>My Cart:</h1>
          </div>
          <div className="col-12">
            <div className="border rounded p-3">{cartItems}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
