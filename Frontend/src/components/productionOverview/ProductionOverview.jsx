import React from 'react';
import './ProductionOverview.css'; 

const ProductionOverview = () => {
  return (
    <div className="card">
      <div className="header">
        <h2>Production Overview</h2>
        <p className="last-updated">Last Updated: 9/19/2024, 3:20:57 PM</p>
      </div>
      <div className="content">
        <div className="progress-container">
          <div className="progress-circle">
            <span className="progress-text">22%</span>
          </div>
        </div>
        <div className="production-info">
          <p>
            <strong>Total Production Power</strong>
            <br />
            700 W
          </p>
          <p>
            <strong>Installed Capacity</strong>
            <br />
            6 kWp
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="production-stats">
          <div className="stat-item">
            <p>Daily Production</p>
            <p><strong>12.13 kWh</strong></p>
          </div>
          <div className="stat-item">
            <p>Monthly Production</p>
            <p><strong>148.19 kWh</strong></p>
          </div>
          <div className="stat-item">
            <p>Yearly Production</p>
            <p><strong>373.39 kWh</strong></p>
          </div>
          <div className="stat-item">
            <p>Total Production</p>
            <p><strong>406 kWh</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionOverview;
