import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Dashboard from "./Screens/Dashboard"
import Employees from "./Screens/Employees"
import Attendance from "./Screens/Attendance"
import Report from "./Screens/Report"

const App = () => {

  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return(
    <Router>
      <div className="flex flex-row-reverse justify-between">
        <Sidebar onHoverChange={setIsSidebarHovered}/>
        <Routes>
          <Route exact path="/" element={<Dashboard isSidebarHovered={isSidebarHovered}/>}/>
          <Route exact path="/employees" element={<Employees isSidebarHovered={isSidebarHovered}/>}/>
          <Route exact path="/attendance-sheet" element={<Attendance isSidebarHovered={isSidebarHovered}/>}/>
          <Route exact path="/report" element={<Report isSidebarHovered={isSidebarHovered}/>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default App