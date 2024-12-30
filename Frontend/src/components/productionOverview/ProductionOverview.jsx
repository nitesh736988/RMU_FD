import React, { useState, useEffect } from 'react';
import './ProductionOverview.css'; 
import { GoCircle } from "react-icons/go";

const ProductionOverview = () => {
  const [productionData, setProductionData] = useState({
    currentPower: 0,
    installedCapacity: 0,
    dailyProduction: 0,
    monthlyProduction: 0,
    yearlyProduction: 0,
    totalProduction: 0,
    lastUpdated: '',
  });

  useEffect(() => {
    const fetchProductionData = async () => {
      try {
        const response = await fetch('http://localhost:3000/user/productionOverview');
        const data = await response.json();
        setProductionData({
          currentPower: data.currentPower || 0,
          installedCapacity: data.installedCapacity || 0,
          dailyProduction: data.dailyProduction || 0,
          monthlyProduction: data.monthlyProduction || 0,
          yearlyProduction: data.yearlyProduction || 0,
          totalProduction: data.totalProduction || 0,
          lastUpdated: data.lastUpdated || '',
        });
      } catch (error) {
        console.error('Error fetching production data:', error);
      }
    };

    fetchProductionData();
  }, []);

  return (
    <div className="production-container">
      <h4>Production Overview</h4>
      <span className="last-updated">Last Updated: {productionData.lastUpdated}</span>

      <div className="circle-container">
        <GoCircle className='circle' />
        
      </div>

      <div className="production-details">
        <div className="production-data">
          <span className="production-label">Total Production Power</span>
          <span className="production-value">{productionData.currentPower} W</span>
          <span className="production-sub-label">Installed Capacity</span>
          <span className="production-sub-value">{productionData.installedCapacity} kWp</span>
        </div>
      </div>

      <div className="totalItem">
        <div className="production-item">
          <span className="label">Daily Production</span>
          <span className="value">{productionData.dailyProduction} kWh</span>
        </div>

        <div className="production-item">
          <span className="label">Monthly Production</span>
          <span className="value">{productionData.monthlyProduction} kWh</span>
        </div>

        <div className="production-item">
          <span className="label">Yearly Production</span>
          <span className="value">{productionData.yearlyProduction} kWh</span>
        </div>

        <div className="production-item">
          <span className="label">Total Production</span>
          <span className="value">{productionData.totalProduction} kWh</span>
        </div>
      </div>
    </div>
  );
};

export default ProductionOverview;
