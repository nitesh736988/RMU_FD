import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CgProfile } from 'react-icons/cg';
import GaloEnergy from '../../Assets/GaloEnergy.jpeg';


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleLogout = () => {
   
    alert('Logged out');
  };

  return (
    <nav className="navbar">

          <div className="Image-data">
          <img src={GaloEnergy} alt="Galo Energy" className="Galo-Image" />
        </div>

        <div className='heading'>
          <h1>GALO SOLAR Dashboard</h1>
        </div>
      <div className="profile-menu">
        <button onClick={toggleDropdown} className="profile-button">
          <CgProfile />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/my-details">My Details</Link>
            <Link to="/personal-settings">Personal Settings</Link>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
