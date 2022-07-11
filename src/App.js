import React from 'react';
import "./App.css";
import {Navigate, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Profile from "./components/profile";
import SignIn from "./components/SignIn";


function App() {
  return (
      <Routes>
        <Route  path = "/Home" element = {<Home />} />
        <Route  path = "/profile" element = {<Profile />} />
        <Route  path = "/signin" element = {<SignIn />} />
        <Route  path = "*" element = {<Navigate to="/home"/>} />
      </Routes>
  );
}

export default App;
