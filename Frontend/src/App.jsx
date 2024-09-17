import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Monitor from './components/monitorDevice/Monitor';
import Registration from './pages/Registration/Registration';
import Navbar from './components/navbar/Navbar';
import Device from './components/device/Device';
import Sidebar from './components/Sidebar/Sidebar';
import Plants from './components/Plants/Plants';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/device" element={<Device />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="monitor" element={<Monitor />} />
          <Route path="plants" element= {<Plants/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
