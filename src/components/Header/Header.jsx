import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import './header.css';

function Header() {
  return (
    <>
      <header>
        <div class="logo">
          <img src={logo} alt="logo" />
        </div>
        <div class="links">
          <Link to="/product">Produto</Link>
          <Link to="/functions">Funcionalidades</Link>
          <Link to="/prices">Preços</Link>
          <Link to="/contact">Contato</Link>
        </div>    
      </header>
    </>
  )
}

export default Header
