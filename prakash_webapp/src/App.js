import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin_Router from '../src/router/Admin-Router';  

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/admin' element={<Admin_Router />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;