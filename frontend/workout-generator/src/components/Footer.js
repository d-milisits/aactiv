import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-info-left">
        <a className="links" href="#">About</a>
        <a className="links" href="#">Contact</a>
        <a className="links" href="#">Home</a>
      </div>
      <div className="footer-info-right">
        <p>View our <a className="privacy" href="#">Privacy Policy</a></p>
        <p>AACTIV © 2020</p>
      </div>
    </div>
  ); 
}

export default Footer;