import React from 'react';
import './Footer.css';
import footer_logo from '../Asset/logo_big.png';
import instagram_icon from '../Asset/instagram_icon.png';
import pintester_icon from '../Asset/pintester_icon.png';
import whatsapp_icon from '../Asset/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="logo" />
        <p>BUYZAAR</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt="Pinterest" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>© 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

