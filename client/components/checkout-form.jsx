import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        customerName: {
          value: ''
        },
        creditCard: {
          value: ''
        },
        shippingAddress: {
          value: ''
        }
      }
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    const { handleOrder } = this.props;
  }

  inputHandler(event) {
    const nameOfTarget = event.target.name;
    const value = event.target.value;
    const creditCardRegEx = /^[0-9]{13,16}$/;
    const creditInput = document.getElementById('cc');
    let isValid = false;

    this.setState({
      form: {
        ...this.state.form,
        [nameOfTarget]: {
          ...this.state.form[nameOfTarget],
          value
        }
      }
    });

    creditInput.onblur = e => {
      if (this.state.form.creditCard.value !== '') {
        if (creditCardRegEx.test(this.state.form.creditCard.value) === true) {
          isValid = true;
        }
        if (isValid === true) {
          alert('Thank You');
        } else {
          alert('Please provide a valid credit card number');
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('Nothing');
      }
    };
  }
  handleOrder(props) {
    event.preventDefault();
    const customerInfo = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.onSubmit(customerInfo)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-color">My Cart:</h1>
            <form onSubmit={(this.handleOrder)}>
              <div className="form-group">
                <label htmlFor="name" className="text-color"> Name </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  name="customerName"
                  value={this.state.form.customerName.value}
                  onChange={this.inputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cc" className="text-color"> Credit Card </label>
                <input
                  className="form-control"
                  id="cc"
                  type="text"
                  name="creditCard"
                  value={this.state.form.creditCard.value}
                  onChange={this.inputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="shippingInfo" className="text-color"> Shipping Address </label>
                <input
                  className="form-control"
                  id="shippingInfo"
                  type="text"
                  name="shippingAddress"
                  value={this.state.form.shippingAddress.value}
                  onChange={this.inputHandler}
                />
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
