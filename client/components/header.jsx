import React from 'react';

function Header(props) {
  return (
    <nav className="navbar">
      <i className="fas fa-music float-left"
        id="music-icon"
      ></i>
      <a
        className="navbar-brand"
        onClick={() => { props.setView('catalog', {}); }}
        href="#"
      >
        Audio Shoppe
      </a>
      <i
        className="fas fa-shopping-cart float-right"
        id="cart-icon"
        onClick={() => props.setView('cart', {})} ></i>
    </nav>
  );
}

export default Header;
