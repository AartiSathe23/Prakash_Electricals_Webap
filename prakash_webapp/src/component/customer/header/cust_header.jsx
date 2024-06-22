import React from 'react';
import { Search as SearchIcon, AccountCircle as ProfileIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import './cust_header.css';
import logo from '../../../assets/lrblogo.png';

const CustHeader = () => {
  return (
    <header className="cust-header">
      <div className="cust-header-left">
        <a href="/" className="logo">
          <img src={logo} alt="Prakash Electricals" />
        </a>
      </div>
      
      <div className="search-bar">
        {/* <SearchIcon className="search-icon" /> */}
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      
      <div className="cust-header-right">
        <a href="/profile" className="header-link"><ProfileIcon className="header-icon" /></a>
        <a href="/cart" className="header-link"><ShoppingCartIcon className="header-icon" /></a>
      </div>
    </header>
  );
};

export default CustHeader;
