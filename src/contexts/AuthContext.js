import React, { createContext, useContext, useState } from 'react';

// Create auth context
const AuthContext = createContext();

// Hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth provider component
export const AuthProvider = ({ children }) => {
  // Mock user data - in a real app this would come from a login/session
  const [user, setUser] = useState({ 
    isAdmin: false, // Default to not admin
    name: 'Guest'
  });

  // Function to toggle admin status (for demo purposes)
  const toggleAdmin = () => {
    setUser(prevUser => ({
      ...prevUser,
      isAdmin: !prevUser.isAdmin
    }));
  };

  // Context value
  const value = {
    user,
    isAdmin: user.isAdmin,
    toggleAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 