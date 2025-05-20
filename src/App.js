import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { MaintenanceProvider } from './contexts/MaintenanceContext';
import AdminRoute from './components/admin/AdminRoute';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import AccessDenied from './pages/AccessDenied';
import './styles/admin.css';

function App() {
  return (
    <AuthProvider>
      <MaintenanceProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminRoute />}>
              <Route index element={<AdminDashboard />} />
            </Route>
            
            {/* Access Denied */}
            <Route path="/admin/access-denied" element={<AccessDenied />} />
            
            {/* Catch All - Redirect to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </MaintenanceProvider>
    </AuthProvider>
  );
}

export default App;
