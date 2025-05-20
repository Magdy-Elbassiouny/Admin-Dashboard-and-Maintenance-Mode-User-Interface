import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { isAdmin, toggleAdmin } = useAuth();

  return (
    <div className="home-page">
      <h1>Welcome to Our Site</h1>
      <p>This is a demo site with an admin dashboard.</p>
      
      <div className="admin-actions">
        {isAdmin ? (
          <>
            <p>You have admin privileges.</p>
            <Link to="/admin" className="admin-link">Go to Admin Dashboard</Link>
          </>
        ) : (
          <p>You don't have admin privileges.</p>
        )}
        
        {/* Toggle button for demo purposes */}
        <button onClick={toggleAdmin} className="toggle-admin-button">
          {isAdmin ? 'Remove Admin Status' : 'Grant Admin Status'}
        </button>
      </div>
    </div>
  );
};

export default Home; 