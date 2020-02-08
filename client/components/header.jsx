import React from 'react';

function header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <i className="fas fa-dollar-sign float-left text-white"></i>
      <a className="navbar-brand" href="#">
        Wicked Sales
      </a>
      <i className="fas fa-shopping-cart float-right text-white"></i>
    </nav>
  );
}

export default header;
