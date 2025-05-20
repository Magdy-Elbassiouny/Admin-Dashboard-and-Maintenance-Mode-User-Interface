import React from 'react';
import { Link } from 'react-router-dom';

const AccessDenied = () => {
  return (
    <div className="access-denied">
      <h1>403 Access Denied</h1>
      <p>You don't have permission to access the admin dashboard.</p>
      <p>Admin privileges are required to view this section.</p>
      <Link to="/" className="home-link">Return to Home</Link>
    </div>
  );
};

export default AccessDenied; 