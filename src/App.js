import React from 'react';
import "./App.css";
import {Navigate, BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Profile from "./Pages/profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/Forgotpassword";
import Coverpage from "./Pages/Coverpage";
import Search from "./Pages/Search";
import Result from "./Pages/Result";


function App() {
  return (
      <Routes>
        <Route  path = "/Home" element = {<Home />} />
        <Route  path = "/profile/:username" element = {<Profile />} />
        <Route  path = "/signin" element = {<SignIn />} />
        <Route  path = "*" element = {<Navigate to="/SignIn"/>} />
        <Route  path = "/signup" element = {<SignUp />} />
        <Route  path = "/Forgotpassword" element = {<ForgotPassword />} />
        <Route  path = "/Coverpage" element = {<Coverpage />} />
        <Route  path = "/Result" element = {<Result />} />
        <Route  path = "/Search" element = {<Search />} />
      </Routes>
      
  );
}

export default App;
