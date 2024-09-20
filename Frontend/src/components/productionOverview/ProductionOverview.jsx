import React from 'react'
import './ProductionOverview.css';

const ProductionOverview = () => {
  return (
    <div className='production-container'>
    <div>
    <h4>Production Overview</h4>
    </div>

    <div className='totalItem'>

    <div className='production-item'>
    <span className="label">Daily Production</span>
    <span className="value">12.13 kWh</span>
    </div>
    
    <div className="production-item">
        <span className="label">Monthly Production</span>
        <span className="value">148.19 kWh</span>
      </div>

      <div className="production-item">
        <span className="label">Yearly Production</span>
        <span className="value">373.39 kWh</span>
      </div>

      <div className="production-item">
        <span className="label">Total Production</span>
        <span className="value">406 kWh</span>
        </div>
      </div>
    </div>

  )
}

export default ProductionOverview;