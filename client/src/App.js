import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import './index.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import RegistrationForm from '../src/components/Donor/RegistrationForm'
import LearnMore from '../src/components/LearnMore'
import GeneralRegistrationForm from '../src/components/GeneralRegistration';
import PasswordReset from './components/PasswordReset';
import DonorDashBoard from '../src/components/Donor/Dashboard';
import OrganizationDahboard from '../src/components/Organization/Dashboard';
import Dashboard from '../src/components/Organization/Dashboard';
import Checkout from './components/Donor/Checkout';
import Addorganization from './components/Organization/AddOrganization';

// import DonorNavBar from './components/Donor/DonorNavBar';
// import NewDonationContent from './components/Donor/NewDonationContent';

function App() {
  //
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<RegistrationForm />} />
          <Route exact path="/donorregistration" element={<GeneralRegistrationForm />} />
          <Route exact path="/learnmore" element={<LearnMore />} />
          <Route exact path="/registration" element={<GeneralRegistrationForm />} />
          <Route exact path="/password-reset" element={<PasswordReset />} />
          <Route exact path="/donor-dashboard" element={<DonorDashBoard />} />
          <Route exact path="/organization-dashboard" element={<OrganizationDahboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/checkout" element={<Checkout/>} />
          <Route exact path="/addorganization" element={<Addorganization/>} />
?

          {/* Add other routes for other components */}
        </Routes>
        {/* <DonorNavBar/> */}
        {/* <NewDonationContent/> */}
      </BrowserRouter>


      {/* <div className="my-custom-class"></div> */}
    </div>
  );
}
////
export default App;
