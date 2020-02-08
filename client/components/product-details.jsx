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
          <div className="row">
            <div className="col-12">
              <div className="card h-100">
                <div
                  onClick={() => this.props.setView('catalog', {})}
                  className="btn btn-secondary h-25 w-25"
                >
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
                  <div
                    onClick={() => this.props.addToCart(this.state.product)}
                    className="btn btn-primary"
                  >
                    Add to cart
                  </div>
                  <p className="card-text">
                    {singleProductDetails.longDescription}
                  </p>
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
