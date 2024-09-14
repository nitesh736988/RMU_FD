import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Inverter from "./components/Monitor/Inverter/Inverter";
import Meter from "./components/Monitor/Meter/Meter";
import DeviceLibrary from './components/device/DeviceLibrary';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Dashboard/>} />
          <Route index element={<Inverter/>} />
          <Route index element={<Meter/>} />
          <Route index element={<DeviceLibrary/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
  
export default App