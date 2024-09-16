import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Monitor from './components/monitorDevice/Monitor';
import DeviceLibrary from './components/deviceLibrary/DeviceLibrary';
import Registration from './pages/Registration/Registration';
import PersonalSetting from './components/personalSetting/PersonalSetting'
import MyDetails from './components/myDetail/MyDetails';
import Navbar from './components/navbar/Navbar';
import Device from './components/device/Device';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="Monitor" element={<Monitor />}/>
        <Route path="DeviceLibrary" element={<DeviceLibrary />}/>
        <Route path="MyDetails" element={<MyDetails />}/>
        <Route path="PersonalSetting" element={<PersonalSetting />}/>
     
        <Route path="device" element={<Device />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
