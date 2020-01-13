import React from 'react';

function ProductListItem(props) {
  return (
    // <div className="container">
    //   <div className="row">
    <div className="card">
      {/* <img
        className="card-img-top"
        src=".../100px180/?text=Image cap"
        alt="Card image cap"
      /> */}
      <div className="card-body">
        <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card content.
        </p>
      </div>
    </div>
    //   </div>
    // </div>
  );
}

export default ProductListItem;
