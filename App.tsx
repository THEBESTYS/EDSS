
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminLayout from './pages/Admin/AdminLayout';
import Dashboard from './pages/Admin/Dashboard';
import MemberList from './pages/Admin/MemberList';
import Applications from './pages/Admin/Applications';
import Courses from './pages/Admin/Courses';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={(success) => setIsAdmin(success)} />} />
        
        <Route 
          path="/admin" 
          element={isAdmin ? <AdminLayout onLogout={() => setIsAdmin(false)} /> : <Navigate to="/login" />}
        >
          <Route index element={<Dashboard />} />
          <Route path="members" element={<MemberList />} />
          <Route path="applications" element={<Applications />} />
          <Route path="courses" element={<Courses />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
