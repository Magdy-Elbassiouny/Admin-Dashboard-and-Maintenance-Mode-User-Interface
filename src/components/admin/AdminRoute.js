import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const AdminRoute = () => {
  const { isAdmin } = useAuth();
  
  // If not admin, redirect to access denied page
  if (!isAdmin) {
    return <Navigate to="/admin/access-denied" replace />;
  }
  
  // If admin, render children routes
  return <Outlet />;
};

export default AdminRoute; 