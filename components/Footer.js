
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-text">Copyright &copy; 2023</p>
        <Link to="/about" className="footer-link">
          About
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

