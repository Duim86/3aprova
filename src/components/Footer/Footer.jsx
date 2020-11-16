import React from 'react';

import emailIcon from '../../assets/icons/emailIcon.svg';
import phoneIcon from '../../assets/icons/phoneIcon.svg';
import facebookIcon from '../../assets/icons/facebookIcon.svg';
import instagramIcon from '../../assets/icons/instagramIcon.svg';
import twitterIcon from '../../assets/icons/twitterIcon.svg';


import './footer.css';

function Footer() {
  return (
    <footer>    
      <div class="infos">
        <ul>
          <li>
            <img src={phoneIcon} alt="phone" />
            <a href="tel:5555-5555">5555-5555</a> 
          </li>
          <li>
            <img src={phoneIcon} alt="phone" />
            <a href="tel:5555-5555">5555-5555</a>          
          </li>
          <li>
            <img src={emailIcon} alt="email" />
            <a href="mailto: snappacking@snappacking.net ">snappacking@snappacking.net</a>
          </li>          
        </ul>
        <div class="socials">
          <a href="https://www.facebook.com" target="blank">
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a href="https://www.twitter.com" target="blank">
            <img src={twitterIcon} alt="twitter" />
          </a>
          <a href="https://www.instagram.com" target="blank">
            <img src={instagramIcon} alt="instagram" />
          </a>          
        </div>
      </div>
      <div class="copyright">
        <p>Todos os direitos reservados <strong>© Snap Packing</strong></p>
      </div>
    </footer>
  )
}

export default Footer;
