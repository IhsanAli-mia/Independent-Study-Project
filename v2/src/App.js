import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './homepage/home'
import SignUp from './login/signUp'
import Login from './login/login'
import Dashboard from './dashboard/dashboard'
import LeadDashboard from './dashboard/lead-dashboard'
import Applications from "./dashboard/applications.js"
import './index'
import './App.css'
import { useEffect, useState } from 'react'
// import Calendar from "./calendar/calendar.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/lead-dashboard" element={<LeadDashboard/>} />
          <Route path="/applications" element={<Applications/>} />
          {/* <Route path="/calendar" element={<Calendar />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App