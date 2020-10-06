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
      <button type="button" className="cart-btn" onClick={() => props.setView('cart', {})}>
        <h5 className="m-0"> <i className="fas fa-shopping-cart"></i> {props.cartQuantity} </h5>
      </button>
    </nav>
  );
}

export default Header;
