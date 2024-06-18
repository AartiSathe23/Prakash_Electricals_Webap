import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../pages/admin/admindashboard/Admin';

const Admin_Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default Admin_Router;


