import React from 'react'
import LandingPage from './pages/landingPage'
import AdminDashboard from './users/Admin'
import DonorDashboard from './users/donor'
///import style from  '.../src/pages/rectangle.css'
// import OrganizationDash from './users/organization'
import './index.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <div className="App">      

     {/* {/* <BrowserRouter> */}
       {/* <Switch> */}
        {/* <Route path="/44"> */} 
        {/* <LandingPage/> */}
        {/* </Route>
        </Switch> */}
        {/* <AdminDashboard/>
        <DonorDashboard/>
        <OrganizationDash/> */}

        {/* <Router> 
        <Routes>
          <Route exact path="/" Component={LandingPage} /> 
          {/* <Route exact path="/login" Component={Login} /> 
          <Route exact path="/donorregistration" Component={GeneralRegistrationForm} />
          <Route exact path="/learnmore" Component={LearnMore} /> 
          <Route exact path="/registration" Component={GeneralRegistrationForm} /> 
          <Route exact path="/password-reset" Component={PasswordReset} /> 
          <Route exact path="/donor-dashboard" Component={DonorDashBoard} />
          <Route exact path="/organization-dashboard" Component={OrganizationDahboard} />  
          Add other routes for other components 
        </Routes>
        {/* <DonorNavBar/> */}
        {/* <NewDonationContent/> *
      </Router>

     </BrowserRouter> */}

<h1>Marine Mammals</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/landing">Manatee</Link></li>
            <li><Link to="/admin">Narwhal</Link></li>
            <li><Link to="/donor">Whale</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/landing">
           <LandingPage/>
          </Route>
          <Route path="/admin">
           <AdminDashboard/>
          </Route>
          <Route path="/donor">
             <DonorDashboard/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
