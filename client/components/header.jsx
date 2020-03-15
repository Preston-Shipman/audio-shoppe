import React from 'react';
function header(props) {
  return (
    <nav className="navbar">
      <i className="fas fa-music float-left text-white"></i>
      <a
        className="navbar-brand"
        onClick={() => props.setView('catalog', {})}
        href="#"
      >
        Audio Shoppe
      </a>
      <i
        className="fas fa-shopping-cart float-right text-white"
        onClick={() => props.setView('cart', {})} ></i>
    </nav>
  );
}

export default header;
