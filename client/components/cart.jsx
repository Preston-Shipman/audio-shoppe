import React from 'react';
import { response } from 'express';

function Cart(props) {
  let cartItems = <h3>You have nothing in your cart.</h3>;

  if (props.cart.length) {
    cartItems = props.cart.map((cartItem, index) => {
      return (
        <div key={index}>This is a cart item.</div>
      );
    });
  } else {
    response.status(400, 'No items in cart');
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
            <div className="border rounded p-3">
              {cartItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
