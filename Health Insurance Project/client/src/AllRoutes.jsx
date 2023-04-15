import React from 'react'
import { Routes, Route } from "react-router-dom";


import Auth from "./Pages/Auth/Auth";
import Home from "./Components/Home/home";
import About from "./Pages/About/about"
import Insurance from './Pages/Insurance/insurance';
import Contact from './Pages/contact/contact'
import Team  from './Pages/Team/team'
import Services  from './Pages/services/services' 
import Admin  from './Pages/Table/Admin'
import HostpitalStaff  from './Pages/Table/HospitalStaff'
import Patient  from './Pages/Table/Patient'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth/>} />
        <Route path="/About" element={<About/>} />
        <Route path='/Insurance' element={<Insurance/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Team' element={<Team/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/HospitalStaff' element={<HostpitalStaff/>}/>
        <Route path='/Patient' element={<Patient/>}/>
        
        

      </Routes>
    </div>
  )
}

export default AllRoutes
