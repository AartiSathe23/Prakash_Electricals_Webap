import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../component/customer/footer/cust_footer';

const Cust_Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Footer/>} />
      </Routes>
    </div>
  )
}

export default Cust_Router;