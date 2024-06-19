// src/components/common/cust_footer.jsx
import React from 'react';
import './cust_footer.css'; 
import logo from '../../../assets/logo.png';

const CustFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src={logo} alt="Logo" className="logo"/>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/electronics">Electronics</a></li>
            <li><a href="/home-furniture">Home & Furniture</a></li>
            <li><a href="/books">Books</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping-returns">Shipping & Returns</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@essentia.com">support@essentia.com</a></p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© PRAKASH ELECTRICALS, HINGOLI</p>
      </div>
    </footer>
  );
}

export default CustFooter;
