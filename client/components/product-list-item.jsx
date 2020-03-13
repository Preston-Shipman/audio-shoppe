import React from 'react';

function ProductListItem(props) {
  const product = props.product;
  const priceInt = '$' + parseInt(product.price / 100).toFixed(2);
  return (
    <div className="col-6 col-md-4 mt-4">
      <div
        className="card h-100 home-card"
        onClick={() =>
          props.setView('details', { productId: product.productId })
        }>
        <img src={product.image} className="card-image-top" />
        <div className="card-body">
          <h5>{product.name}</h5>
          <h3>{priceInt}</h3>
          <p className="card-text">{product.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
