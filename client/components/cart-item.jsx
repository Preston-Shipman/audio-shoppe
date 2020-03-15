/* eslint-disable no-debugger */
import React from 'react';

function CartItem(props) {
  const { item } = props;
  const priceInt = '$' + parseInt(item.price / 100).toFixed(2);
  return (
    <div className="container cartContainer p-2">
      <div className="row no-gutters">
        <div className="col-md-6">
          <img src={item.image} className="card-img cartImg" />
        </div>
        <div className="col-md-6">
          <div className="card mb-100">
            <div className="card-body">
              <h5>{item.name}</h5>
              <h3 className="price">{priceInt}</h3>
              <p className="card-text">{item.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
