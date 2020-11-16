import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import './landing-page.css';



function LandingPage() {
  return (
    <div id="landing-page">
      <Header />
      <section>              
        <div class='text'>    
          <h1>Snap Packing</h1>
          <h2>A iniciativa que faltava para você viajar.</h2>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default LandingPage;
