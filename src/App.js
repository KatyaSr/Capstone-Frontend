import React from 'react';
import "./App.css";
import {Navigate, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Profile from "./components/profile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/Forgotpassword";


function App() {
  return (
      <Routes>
        <Route  path = "/Home" element = {<Home />} />
        <Route  path = "/profile" element = {<Profile />} />
        <Route  path = "/signin" element = {<SignIn />} />
        <Route  path = "*" element = {<Navigate to="/SignIn"/>} />
        <Route  path = "/signup" element = {<SignUp />} />
        <Route  path = "/Forgotpassword" element = {<ForgotPassword />} />
      </Routes>
  );
}

export default App;
