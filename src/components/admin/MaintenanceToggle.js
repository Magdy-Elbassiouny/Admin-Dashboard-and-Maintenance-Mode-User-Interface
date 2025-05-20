import React from 'react';
import { useMaintenance } from '../../contexts/MaintenanceContext';

const MaintenanceToggle = () => {
  const { maintenanceMode, toggleMaintenanceMode } = useMaintenance();

  return (
    <div className="maintenance-toggle">
      <h2>Maintenance Mode</h2>
      <div className="toggle-container">
        <span className={`status ${maintenanceMode ? 'on' : 'off'}`}>
          {maintenanceMode ? 'Maintenance ON' : 'Maintenance OFF'}
        </span>
        <button 
          className={`toggle-button ${maintenanceMode ? 'on' : 'off'}`}
          onClick={toggleMaintenanceMode}
        >
          {maintenanceMode ? 'Turn OFF' : 'Turn ON'}
        </button>
      </div>
      <p className="toggle-info">
        When maintenance mode is ON, users will see a maintenance page and cannot access the site.
      </p>
    </div>
  );
};

export default MaintenanceToggle; 