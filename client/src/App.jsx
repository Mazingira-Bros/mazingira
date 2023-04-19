import React from 'react'
import LandingPage from './pages/landingPage'
import AdminDashboard from './users/Admin'
import DonorDashboard from './users/donor'
///import style from  '.../src/pages/rectangle.css'
import OrganizationDash from './users/organization'

function App() {

  return (
    <div className="App">      
      <LandingPage/>
      <AdminDashboard/>
      <DonorDashboard/>
      <OrganizationDash/>
    </div>
  )
}

export default App
