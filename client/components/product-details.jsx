import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      isFetching: false
    };
  }

  componentDidMount() {
    fetch('/api/products/:productId')
      .then(res => res.json())
      // eslint-disable-next-line no-console
      .then(data => console.log(data))
      .then(this.setState({ isFetching: true }));
  }

  render() {
    const isFetching = this.state.isFetching;
    const productDetails = this.props.product;
    if (isFetching === true) {
      return productDetails;
    } else {
      return null;
    }
  }
}

export default ProductDetails;
