import React from 'react';
// import ProductList from './product-list';
function ProductListItem(props) {
  const product = props.product;
  // eslint-disable-next-line no-console
  // console.log(props.products);
  const priceInt = '$' + parseInt(product.price / 100).toFixed(2);
  return (
    <div className="col-6 col-md-4 mt-4">
      <div className="card h-100 ">
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
