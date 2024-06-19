import React from 'react';
import { Search as SearchIcon, AccountCircle as ProfileIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import './cust_header.css';
import logo from '../../../assets/logo.png';

const CustHeader = () => {
  return (
    <header className="cust-header">
      <div className="cust-header-left">
        <a href="/" className="logo">
          <img src={logo} alt="Prakash Electricals" />
          
        </a>
      </div>
      <div className="cust-header-center">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <a href="/">Clothing</a>
              <ul className="dropdown">
                <li><a href="/">Option 1</a></li>
                <li><a href="/">Option 2</a></li>
              </ul>
            </li>
            <li>
              <a href="/">Ethnic Wear</a>
              <ul className="dropdown">
                <li><a href="/">Option 1</a></li>
                <li><a href="/">Option 2</a></li>
              </ul>
            </li>
            <li>
              <a href="/">Accessories</a>
              <ul className="dropdown">
                <li><a href="/">Option 1</a></li>
                <li><a href="/">Option 2</a></li>
              </ul>
            </li>
            <li>
              <a href="/">Fabric</a>
              <ul className="dropdown">
                <li><a href="/">Option 1</a></li>
                <li><a href="/">Option 2</a></li>
              </ul>
            </li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">About Us</a></li>
          </ul>
        </nav>
      </div>
      <div className="cust-header-right">
        <a href="/search"><SearchIcon className="header-icon" /></a>
        <a href="/profile"><ProfileIcon className="header-icon" /></a>
        <a href="/cart"><ShoppingCartIcon className="header-icon" /></a>
      </div>
    </header>
  );
};

export default CustHeader;
