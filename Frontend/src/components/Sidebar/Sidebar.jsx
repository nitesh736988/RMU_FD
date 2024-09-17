import { NavLink } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
import { TbDeviceHeartMonitorFilled } from 'react-icons/tb';
import { PiPlantFill } from 'react-icons/pi';
import { MdOutlineDevices } from 'react-icons/md';
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/dashboard">
            <AiFillDashboard /> Dashboard
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/dashboard/monitor">
            <TbDeviceHeartMonitorFilled /> Monitor
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/plants">
            <PiPlantFill /> Plants
          </NavLink>
        </li>

        <li>
          <NavLink to="/device">
            <MdOutlineDevices /> Devices
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
