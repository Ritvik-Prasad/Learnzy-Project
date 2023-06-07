import { CssBaseline, ThemeProvider } from "@mui/material";
// import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import "./index.css";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import Layout from "./scenes/global/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Mytutors from "./scenes/mytutors";
import {Alltutors} from "./scenes/alltutors";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
import Chat from "./scenes/chat/Chat";

import Dashboard from "./scenes/dashboard";
// import { Login } from "@mui/icons-material";
import { Login } from "./scenes/loginPages/Login";
import { Signup } from "./scenes/loginPages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import {Allstudents} from "./scenes/allstudents";
import {Approve} from "./scenes/approve";
import Wordle from "./scenes/wordle/Wordle";
import Note from "./scenes/notes/Note";
import Zoom from "./scenes/zoom/Zoom";
import Mystudents from "./scenes/mystudents";


const App = () => {
  const navigate = useNavigate()
  const [theme, colorMode] = useMode();
  //const [role, setRole] = useState('student')
  const { user } = useAuthContext();
  
  const role = user && user.role;
  console.log(role);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {user && <Layout role={role} />}
          <main className="content">
            {user && <Topbar />}
            {role == "student" && (
              <Routes>
                {/* <Route path="/" element={<LoginPage />} /> */}
                <Route
                  path={"/"}
                  element={!user ? <Login /> : <Navigate to="/dashboard" />}
                />
                <Route
                  path={"/login"}
                  element={!user ? <Login /> : <Navigate to="/dashboard" />}
                />
                <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
                <Route
                  path="/dashboard"
                  element={
                    user ? <Dashboard role={role} /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/mytutors"
                  element={user ? <Mytutors /> : <Navigate to="/login" />}
                />
                <Route
                  path="/alltutors"
                  element={user ? <Alltutors /> : <Navigate to="/login" />}
                />
                <Route
                  path="/notes"
                  element={user ? <Note /> : <Navigate to="/login" />}
                />
                <Route
                  path="/chat"
                  element={user ? <Chat /> : <Navigate to="/login" />}
                />
                <Route
                  path="/form"
                  element={user ? <Form /> : <Navigate to="/login" />}
                />
                <Route
                  path="/line"
                  element={user ? <Line /> : <Navigate to="/login" />}
                />
                <Route
                  path="/zoom"
                  element={user ? <Zoom /> : <Navigate to="/login" />}
                />
                <Route
                  path="/pie"
                  element={user ? <Pie /> : <Navigate to="/login" />}
                />
                <Route
                  path="/faq"
                  element={user ? <FAQ /> : <Navigate to="/login" />}
                />
                <Route
                  path="/wordle"
                  element={user ? <Wordle /> : <Navigate to="/login" />}
                />
                <Route
                  path="/bar"
                  element={user ? <Bar /> : <Navigate to="/login" />}
                />
                <Route
                  path="/geography"
                  element={user ? <Geography /> : <Navigate to="/login" />}
                />
                <Route
                  path="/calendar"
                  element={user ? <Calendar /> : <Navigate to="/login" />}
                />
              </Routes>
            )} 
            {role == "tutor" && (
              <Routes>
                <Route
                  path={"/"}
                  element={!user ? <Login /> : <Navigate to="/dashboard" />}
                />
                <Route
                  path={"/login"}
                  element={!user ? <Login /> : <Navigate to="/dashboard" />}
                />
                <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
                <Route
                  path="/dashboard"
                  element={
                    user ? <Dashboard role={role} /> : <Navigate to="/login" />
                  }
                />
                
                <Route
                  path="/mystudents"
                  element={user ? <Mystudents /> : <Navigate to="/login" />}
                />
                <Route
                  path="/form"
                  element={user ? <Form /> : <Navigate to="/login" />}
                />
                
                <Route
                  path="/line"
                  element={user ? <Line role={role}/> : <Navigate to="/login" />}
                />
                <Route
                  path="/notes"
                  element={user ? <Note /> : <Navigate to="/login" />}
                />
                <Route
                  path="/faq"
                  element={user ? <FAQ /> : <Navigate to="/login" />}
                />
                <Route
                  path="/chat"
                  element={user ? <Chat /> : <Navigate to="/login" />}
                />
                <Route
                  path="/zoom"
                  element={user ? <Zoom /> : <Navigate to="/login" />}
                />
                
                <Route
                  path="/calendar"
                  element={user ? <Calendar /> : <Navigate to="/login" />}
                />
              </Routes>
            ) } 
            {role == "admin" && (
              <Routes>
                <Route
                  path={"/"}
                  element={!user ? <Login /> : <Navigate to="/dashboard" />}
                />
                <Route
                  path={"/login"}
                  element={!user ? <Login /> : <Navigate to="/dashboard" />}
                />
                <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
                <Route
                  path="/dashboard"
                  element={
                    user ? <Dashboard role={role} /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/alltutors"
                  element={user ? <Alltutors /> : <Navigate to="/login" />}
                />

                <Route
                  path="/allstudents"
                  element={user ? <Allstudents /> : <Navigate to="/login" />}
                />
                <Route
                  path="/approve"
                  element={user ? <Approve /> : <Navigate to="/login" />}
                />
                <Route
                  path="/*"
                  element={<Navigate to="/login" />}
                />
              </Routes>
            )}
            <Routes>
                <Route
                  path={"/"}
                  element={!user ? <Login /> : <Navigate to="/dashboard" />}
                />
                <Route
                  path={"/login"}
                  element={!user ? <Login /> : <Navigate to="/dashboard" />}
                />
                <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
