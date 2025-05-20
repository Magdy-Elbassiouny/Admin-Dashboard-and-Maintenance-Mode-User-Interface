import React, { createContext, useContext, useState } from 'react';

// Create maintenance context
const MaintenanceContext = createContext();

// Hook to use maintenance context
export const useMaintenance = () => {
  return useContext(MaintenanceContext);
};

// Maintenance provider component
export const MaintenanceProvider = ({ children }) => {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  // Function to toggle maintenance mode
  const toggleMaintenanceMode = async () => {
    try {
      // Try to call the API if available
      const response = await fetch('/api/admin/maintenance/toggle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        // If API call successful, update from response
        const data = await response.json();
        setMaintenanceMode(data.maintenanceMode);
      } else {
        // If API error, just toggle local state
        setMaintenanceMode(prevMode => !prevMode);
      }
    } catch (error) {
      // If API not available, just toggle local state
      console.log('API not available, using local state');
      setMaintenanceMode(prevMode => !prevMode);
    }
  };

  // Context value
  const value = {
    maintenanceMode,
    toggleMaintenanceMode
  };

  return (
    <MaintenanceContext.Provider value={value}>
      {children}
    </MaintenanceContext.Provider>
  );
}; 