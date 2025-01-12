import React from "react";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./Website/Pages/Service";
import Packges from "./Website/Pages/Packges";
import Not from "./Website/Pages/Not";
import Booking1 from "./Website/Pages/Booking1";
import Contact from "./Website/Pages/Contact";
import Dashboard from "./Admin/Apages/Dashboard";
import Packageview from "./Admin/Apages/Packageview";
import Addpack from "./Admin/Apages/Addpack";
import Alogin from "./Admin/Apages/Alogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ulogin from "./Website/Pages/Ulogin";
import Register from "./Website/Pages/Register";
import Profile from "./Website/Pages/Profile";
import Usermanage from "./Admin/Apages/Usermanage";

function App() {
  return (

    <BrowserRouter>
      <ToastContainer />
      <div className="App">
        <Routes>
          {/* website user */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/packges" element={<Packges />} />
          <Route path="/booking" element={<Booking1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ulogin" element={<Ulogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          {/* hide admin */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/viewpack" element={<Packageview />} />
          <Route path="/addpack" element={<Addpack />} />
          <Route path="/alogin" element={<Alogin />} />
          <Route path="/usermange" element={<Usermanage />} />

          {/* univserl */}
          <Route path="*" element={<Not />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
