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
  }

  inputHandler = event => {
    const nameOfTarget = event.target.name;
    const value = event.target.value;
    const creditCardRegEx = /^[0-9]{13,16}$/;
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
    if (this.state.form.creditCard.value === creditCardRegEx) {
      isValid = true;
    }
    if (isValid === true) {
      alert('Thank You');
    } else {
      alert('Please provide a valid credit card number');
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="customerName"
          value={this.state.form.customerName.value}
          onChange={this.inputHandler}
        />
        <input
          type="text"
          name="creditCard"
          value={this.state.form.creditCard.value}
          onChange={this.inputHandler}
        />
        <input
          type="text"
          name="shippingAddress"
          value={this.state.form.shippingAddress.value}
          onChange={this.inputHandler}
        />
      </form>
    );
  }
}

export default CheckoutForm;
