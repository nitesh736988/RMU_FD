import React from 'react';
import './Dashboard.css';
import ProductionOverview from '../productionOverview/ProductionOverview';
import HistoricalProduction from '../Production/HistoricalProduction';
import PeakHourRankings from '../PeakHourRankings/PeakHourRankings';
import PowerNormalizationRankings from '../Power/PowerNormalizationRankings';
import PlantStatus from '../plantStatus/PlantStatus';

function Dashboard() {
  return (
    <div className="dashboard-grid">
      <div className="grid-item-left">
        <ProductionOverview />
      </div>
      <div className="grid-item-right">
        <HistoricalProduction />
      </div>
      <div className="grid-item-down-left">
        <PlantStatus />
      </div>
      <div className="grid-item-down-right">
        <PeakHourRankings />
      </div>
      <div className="grid-item-down-left-2">
        <PowerNormalizationRankings />
      </div>
    </div>
  );
}

export default Dashboard;
