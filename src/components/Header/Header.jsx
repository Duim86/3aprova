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
          <Link to="/">Produto</Link>
          <Link to="/">Funcionalidades</Link>
          <Link to="/">Preços</Link>
          <Link to="/">Contato</Link>
        </div>    
      </header>
    </>
  )
}

export default Header
