import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
// import RegistrationForm from '../src/components/Donor/RegistrationForm'
import LearnMore from '../src/components/LearnMore'
import GeneralRegistrationForm from '../src/components/GeneralRegistration';
import PasswordReset from './components/PasswordReset';
import DonorDashBoard from '../src/components/Donor/Dashboard';
import OrganizationDahboard from '../src/components/Organization/Dashboard';
// import DonorNavBar from './components/Donor/DonorNavBar';
// import NewDonationContent from './components/Donor/NewDonationContent';
// import ReminderContent from './components/Donor/ReminderContent';
// import Profilepic from '../src/components/Donor/Profilepic'
import Dashboard from '../src/components/Admin/Dashboard';
import AdminLogin from '../src/components/Admin/AdminLogin';
import DonorLogin from '../src/components/Donor/DonorLogin';
import OrgLogin from '../src/components/Organization/OrgLogin';



function App() {


  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route exact path="/" Component={LandingPage} /> 
          <Route exact path="/organization-login" Component={OrgLogin} /> 
          <Route exact path="/donor-login" Component={DonorLogin} /> 
          <Route exact path="/admin-login" Component={AdminLogin} /> 
          <Route exact path="/donorregistration" Component={GeneralRegistrationForm} />
          <Route exact path="/learnmore" Component={LearnMore} /> 
          <Route exact path="/registration" Component={GeneralRegistrationForm} /> 
          <Route exact path="/password-reset" Component={PasswordReset} /> 
          <Route exact path="/donor-dashboard" Component={DonorDashBoard} />
          <Route exact path="/organization-dashboard" Component={OrganizationDahboard} />
          <Route exact path="/admin-dashboard" Component={Dashboard} />  
       



        
          {/* Add other routes for other components */}
        
        </Routes>
        {/* <DonorNavBar/> */}
        {/* <NewDonationContent/> */}
        {/* <ReminderContent/> */}
        {/* <Profilepic/> */}
        
      </Router>

      {/* <Dashboard/> */}
        {/* <div className="my-custom-class"></div> */}
    </div>
  );
}

export default App;
