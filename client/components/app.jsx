import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import Cart from './cart';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      // default catalog
      view: { name: 'catalog', params: {} },
      isLoading: true,
      cart: [],
      insertCompleted: null
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data =>
        this.setState({ message: data.message || data.error })
      )
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
      .then(res => res.json())
      .then(cart => {
        this.setState({ cart });
      })
      .catch(err => {
        alert('Error', err);
      });
  }

  addToCart(product) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch('api/cart', req)
      .then(() =>
        this.setState({
          cart: this.state.cart.concat(product)
        })
      )
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
      .then(() =>
        this.setState({
          insertCompleted: true
        })
      )
      .catch(err =>
        console.error(
          err,
          this.setState({
            insertCompleted: false
          })
        )
      );
    fetch('/api/orders', req2)
      .then(res => res.json())
      .catch(err => console.error(err));
  }

  placeOrder(customerInfo) {
    // const params = {
    //   name: null,
    //   creditCard: null,
    //   shippingAddress: null
    // };
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customerInfo)
    })
      .then(res => res.json())
      .then(() =>
        this.setState({
          cart: []
        })
      )
      .then(() =>
        this.setState({
          view: { name: 'catalog', params: {} }
        })
      )
      .catch(err => {
        console.error('Place Order Err', err);
      });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header
            cartItemCount={this.state.cart}
            setView={this.setView}
          />
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header setView={this.setView} />
          <ProductDetails
            productId={this.state.view.params.productId}
            setView={this.setView}
            addToCart={this.addToCart}
          />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header setView={this.setView} />
          <Cart
            cart={this.state.cart}
            setView={this.setView}
            getCartItems={this.getCartItems}
          />
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header setView={this.setView} />
          <CheckoutForm setView={this.setView} placeOrder={this.placeOrder}/>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
