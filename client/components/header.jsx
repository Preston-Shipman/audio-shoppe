import React from 'react';

function header(props) {
  return (
    // <div className="container-fluid">
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <i className="fas fa-dollar-sign"></i>
        {/* <img
            // src="/images/dollar.png"
            width="20"
            height="30"
            className="d-inline-block align-top"
            alt=""
          /> */}
            Wicked Sales
      </a>
    </nav>
    // </div>
  );
}

export default header;
