import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/admin/admin_login/admin_login';
import AddCollections from '../pages/admin/admindashboard/AddCollections';
import ViewCollections from '../pages/admin/admindashboard/ViewCollections';
import AdminPanel from '../component/admin/sidebar/admin_panel';

const Admin_Router = () => {
  return (
    <div>
      <AdminPanel />
      <div className="admin-main-content">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/a' element={<AddCollections />} />
          <Route path='/a' element={<ViewCollections />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin_Router;
