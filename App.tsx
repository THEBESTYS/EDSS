
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

  // GitHub Pages 등 서브디렉토리 배포 시에도 안전하게 작동하도록 HashRouter 사용
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={(success) => setIsAdmin(success)} />} />
        
        <Route 
          path="/admin" 
          element={isAdmin ? <AdminLayout onLogout={() => setIsAdmin(false)} /> : <Navigate to="/login" replace />}
        >
          <Route index element={<Dashboard />} />
          <Route path="members" element={<MemberList />} />
          <Route path="applications" element={<Applications />} />
          <Route path="courses" element={<Courses />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
