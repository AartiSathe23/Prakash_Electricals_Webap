import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../pages/admin/admindashboard/Admin';
import Login from '../pages/admin/admin_login/admin_login';
import Panel from '../component/admin/sidebar/admin_panel';

const Admin_Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<Login />}/>
        <Route path='/hello' element={<Admin />} />
        <Route path='/' element={<Panel/>} />
      </Routes>
    </div>
  );
}

export default Admin_Router;


