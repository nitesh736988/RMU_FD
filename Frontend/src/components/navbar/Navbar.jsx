import React from 'react';
import './Navbar.css';
import { CgProfile } from 'react-icons/cg';
import GaloEnergy from '../../Assets/GaloEnergy.jpeg';


const Navbar = () => {

  return (
    <header>
      <nav className="navbar">
          <div className="Image-data">
            <img src={GaloEnergy} alt="Galo Energy" className="Galo-Image" />
          </div>
          <div className='heading'>
            <h1 style={{margin: '0px'}}>GALO SOLAR Dashboard</h1>
          </div>
          <div className="profile-menu">
            <CgProfile size={22} />
          </div>
      </nav>
    </header>
  );
};

export default Navbar;
