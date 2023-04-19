import React from 'react'
import LandingPage from './pages/landingPage'
import AdminDashboard from './users/Admin'
import DonorDashboard from './users/donor'
///import style from  '.../src/pages/rectangle.css'
import OrganizationDash from './users/organization'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'

function App() {

  return (
    <div className="App">      
     {/* {/* <BrowserRouter> */}
       {/* <Switch> */}
        {/* <Route path="/44"> */} 
        <LandingPage/>
        {/* </Route>
        </Switch> */}
        <AdminDashboard/>
        <DonorDashboard/>
        <OrganizationDash/>

     {/* </BrowserRouter> */}
    </div>
  )
}

export default App
