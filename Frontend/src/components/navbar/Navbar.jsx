import React, { useState, useEffect } from 'react';
import './Navbar.css';
import GaloEnergy from '../../Assets/GaloEnergy.jpeg';


const Navbar = () => {

  const[Name, setName] = useState("");
  
  useEffect(()=>{
    const fetchName= ()=>{
      setName("");
    };

    fetchName();
  }, []);
  

  return (
    <header>
      <nav className="navbar">
          <div className="Image-data">
            <img src={GaloEnergy} alt="Galo Energy" className="Galo-Image" />
          </div>
          <div className='navbar-heading'>
            <h1 style={{margin: '0px'}}>GALO SOLAR</h1>
          </div>

          <div className='navbar-right'>
          {Name && <span>{Name}</span>}
          </div>
      </nav>
    </header>
  );
};

export default Navbar;
