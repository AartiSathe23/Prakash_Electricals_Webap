import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../admin/frontend/pages/admindashboard/Admin';

const Admin_Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default Admin_Router;
