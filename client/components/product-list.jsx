import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    // this.getProducts = this.getProducts.bind(this);
    // this.state.products = this.state.products.bind(this);
  }

  getProducts(props) {
    const init = {
      method: 'GET'
    };
    fetch('/api/products', init)
      .then(response => {
        return response.json();
      })
      .then(products => {
        this.setState({ products: products }
        );
      })
      .catch(err => {
        alert('Error', err);
      });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const productState = this.state.products;
    const productMap = productState.map(product => (
      <ProductListItem
        key={product.productId}
        product={product}
      />
    ));
    return (
      <div className={'container'}>
        <div className={'row'}>
          {productMap}
        </div>
      </div>
    );
  }
}

export default ProductList;
