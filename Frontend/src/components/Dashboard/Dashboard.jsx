import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import { AiFillDashboard } from 'react-icons/ai';
import { PiMonitorFill } from 'react-icons/pi';
import { AiFillDatabase } from 'react-icons/ai';
import { MdExpandMore, MdExpandLess } from 'react-icons/md'; 

function Dashboard() {
  // State for Monitor and Device Library dropdowns
  const [monitorDropdownOpen, setMonitorDropdownOpen] = useState(false);
  const [deviceLibraryDropdownOpen, setDeviceLibraryDropdownOpen] = useState(false);

  // Toggle dropdowns
  const toggleMonitorDropdown = () => {
    setMonitorDropdownOpen(!monitorDropdownOpen);
  };

  const toggleDeviceLibraryDropdown = () => {
    setDeviceLibraryDropdownOpen(!deviceLibraryDropdownOpen);
  };

  return (
    <div className="dashboard">
      <ul className="dashboard-menu">
        {/* Dashboard Link */}
        <li>
          <Link to="/">
            <AiFillDashboard /> Dashboard
          </Link>
        </li>

        {/* Monitor Section with Dropdown */}
        <li className="monitor-section">
          <div onClick={toggleMonitorDropdown} className="monitor-toggle">
            <PiMonitorFill /> Monitor {monitorDropdownOpen ? <MdExpandLess /> : <MdExpandMore />}
          </div>
          {monitorDropdownOpen && (
            <ul className="dropdown">
              <li>
                <Link to="monitor/plants">Plants</Link>
              </li>
              <li>
                <Link to="monitor/devices">Devices</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Device Library Section with Dropdown */}
        <li className="device-library-section">
          <div onClick={toggleDeviceLibraryDropdown} className="device-library-toggle">
            <AiFillDatabase /> Device Library {deviceLibraryDropdownOpen ? <MdExpandLess /> : <MdExpandMore />}
          </div>
          {deviceLibraryDropdownOpen && (
            <ul className="dropdown">
              <li>
                <Link to="device-library/today-data">Today Data</Link>
              </li>
              <li>
                <Link to="device-library/custom-data">Custom Data</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
