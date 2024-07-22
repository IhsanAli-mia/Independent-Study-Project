import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './home.js'
import Login from './login'
import SignUp from "./signUp.js";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <ColorModeContext.Provider value={colorMode}>
      {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />
        <div className="App" style={{height:"100%"}}>
          {/* <Sidebar isSidebar={false} /> */}
          <main className="content">
            <Routes>
              <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
              <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
              <Route path="/signUp" element={<SignUp/>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      {/* </ThemeProvider> */}
    </ColorModeContext.Provider>
  );
}

export default App;
