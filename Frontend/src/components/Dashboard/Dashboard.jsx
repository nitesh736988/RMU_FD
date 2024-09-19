import ProductionOverview from '../ProductionOverview/ProductionOverview';
import HistoricalProduction from '../HistoricalProduction/HistoricalProduction';
import PlantStatus from '../PlantStatus/PlantStatus';
import PeakHourRankings from '../PeakHourRankings/PeakHourRankings'; // Corrected import path
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="overview-section">
        <div className="overview-content">
          <div className="production-overview" style={{ maxHeight: '350px', maxWidth: '1050px' }}>
            <ProductionOverview />
          </div>
        </div>
        <div className="historical-production">
          <div className="historical-content" style={{ maxHeight: '350px', maxWidth: '1050px' }}>
            <HistoricalProduction />
          </div>
        </div>
        <div className="plant-status">
          <div className="status-content">
            <PlantStatus />
          </div>
        </div>
        <div className="peak-hour-rankings">
          <div className="rankings-content">
            <PeakHourRankings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
