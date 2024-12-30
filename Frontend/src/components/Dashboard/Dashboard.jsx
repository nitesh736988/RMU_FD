import React from 'react'
import ProductionOverview from '../ProductionOverview/ProductionOverview';
import HistoricalProduction from '../HistoricalProduction/HistoricalProduction';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='main-container'>
      <ProductionOverview/>
      <HistoricalProduction/>
    </div>
  )
}

export default Dashboard