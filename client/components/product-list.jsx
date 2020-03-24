import React from 'react';
import ProductListItem from './product-list-item';
import Modal from './modal';
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
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
        this.setState({ products }
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
        setView={this.props.setView}
      />
    ));
    return (
      <div className={'container'}>
        <div className={'row'}>
          {productMap}
          <Modal setModalView={this.props.setModalView}
          />
        </div>
      </div>
    );
  }
}

export default ProductList;
