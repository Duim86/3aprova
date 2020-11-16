import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './page-not-found.css';

function PageNotFound() {
  return (
    <div id='page-not-found'>
      <Header />
      <section>
        <Link to="/">Try Another</Link>
      </section>
      <Footer />
    </div>
  )
}

export default PageNotFound
