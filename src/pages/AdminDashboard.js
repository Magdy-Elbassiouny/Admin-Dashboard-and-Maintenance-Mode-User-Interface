import React from 'react';
import StatsSection from '../components/admin/StatsSection';
import MaintenanceToggle from '../components/admin/MaintenanceToggle';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="user-info">
          Logged in as: <span className="username">{user.name}</span>
        </div>
      </header>

      <div className="admin-content">
        <StatsSection />
        <MaintenanceToggle />
      </div>
    </div>
  );
};

export default AdminDashboard; 