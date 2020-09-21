import React from 'react';
import CartItem from './cart-item';

function Cart(props) {
  let cartItems = <h3 className="text-color text-center">You have nothing in your cart.</h3>;

  if (props.cart.length) {
    cartItems = props.cart.map((currentItem, index, itemPrice) => {
      return (
        <CartItem key={index} item={currentItem} price={itemPrice} />
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
            <a href="#" className="btn btn-primary float-right mb-2 mt-2" role="button" onClick={() => { props.setView('catalog', {}); }}>
              Continue Shopping
            </a>
            <h1 className="text-black">My Cart:</h1>
          </div>
          <div className="col-12">
            <div className="border rounded p-3 cart-card">{cartItems}</div>
          </div>
          <div
            className="btn btn-primary mt-1 btn-block text-justify text-center" role="button"
            id="checkout-btn"
            onClick={() => {
              props.setView('checkout', {});
            }}
          >
            {' '}
            Checkout{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
