import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      view: { name: 'catalog', params: {} },
      isLoading: true,
      cart: [],
      insertCompleted: null
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json());
  }

  addToCart(product) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch('api/cart', req)
      .then(() => this.setState({
        cart: this.state.cart.concat(product)
      }))
      .catch(err => console.error(err));
  }

  checkForInsert() {
    const req = {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    };
    const req2 = {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    };
    fetch('/api/orders', req)
      .then(() => this.setState({
        insertCompleted: true
      }))
      .catch(err => console.error(err, this.setState({
        insertCompleted: false
      })));
    fetch('/api/orders', req2)
      .then(res => res.json())
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount={this.state.cart}/>,
          <ProductList setView={this.setView} />
        </div>
      );
    } else {
      return (
        <div>
          <Header />,
          <ProductDetails productId={this.state.view.params.productId} setView={this.setView} addToCart={this.addToCart} />
        </div>
      );
    }
  }
}
