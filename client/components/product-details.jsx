import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.productId}`)
      .then(res => res.json())
      .then(data => this.setState({ product: data }));
  }

  render() {
    if (this.state.product === null) {
      return null;
    } else {
      const singleProductDetails = this.state.product;
      const priceInt = '$' + parseInt(singleProductDetails.price / 100).toFixed(2);
      return (
        <div className="container">
          <div className="row" id="detailsCard">
            <div className="col-12">
              <div className="card h-100 product-details-card">
                <div
                  onClick={() => this.props.setView('catalog', {})}
                  id="back-to-catalog">
                  <i className="fa fa-angle-left">
                  </i>
                Back to catalog
                </div>
                <img
                  src={singleProductDetails.image}
                  className="card-image-top"
                />
                <div className="card-body">
                  <h5>{singleProductDetails.name}</h5>
                  <h3>{priceInt}</h3>
                  <p className="card-text">
                    {singleProductDetails.shortDescription}
                  </p>
                  <p className="card-text">
                    {singleProductDetails.longDescription}
                  </p>
                  <div
                    onClick={() => this.props.addToCart(this.state.product)}
                    className="btn btn-primary float-right" id="add-to-cart-btn"
                  >
                    Add to cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProductDetails;
