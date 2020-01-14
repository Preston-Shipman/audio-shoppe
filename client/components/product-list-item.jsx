import React from 'react';
// import ProductList from './product-list';
function ProductListItem(props) {
  const products = props.products;
  // eslint-disable-next-line no-console
  console.log(products);
  return (
    <div className="card">
      <img
        // className="card-img-top img-fluid"
        src="products.image"
        // alt="Card image cap"
      />
      <div className="card-body">
        <h5>{props.name}</h5>
        <h3>{props.price}</h3>
        <p className="card-text">{props.shortDescription}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
