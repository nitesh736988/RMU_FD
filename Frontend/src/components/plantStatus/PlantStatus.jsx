import React from 'react';
import './PlantStatus.css';

const PlantStatus = () => {
  return (
    <div className="plant-status-container">
      <h3 className="plant-status-header">Plant Status</h3>
      <div className="plant-status-content">
        <div className="plant-status-item">
          <p className="status-label">Total Plants</p>
          <p className="status-value">2</p>
        </div>
        <div className="plant-status-item">
          <p className="status-label">Offline Plants</p>
          <p className="status-value">1</p>
        </div>
      </div>
    </div>
  );
};

export default PlantStatus;
