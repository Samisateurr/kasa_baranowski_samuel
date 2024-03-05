import React from 'react';
import '../../components/Footer/Footer.css';
import logo from '../../assets/images/logo_black.png';

const Footer = () => {
  return (
    <div className="footer">
       <img src={logo} alt="Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;