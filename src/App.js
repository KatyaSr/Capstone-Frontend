import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 
'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import SignIn from './pages/Navbar/SignIn';
import SignUp from './pages/Navbar/SignUp';
import Profile from './pages/Navbar/Profile';
import Result from './pages/Navbar/Result';
import Forgotpassword from './pages/Navbar/Forgotpassword';
import Search from './pages/Navbar/Search';
import Subway from './assets/Subway - 6398.mp4';
function App() {
  return (
    <Router>
    <Navbar />
    <video src = {Subway} autoPlay loop muted />
    <div className='columnContainer'>
    <div className="container">
    <Routes>
      {/* <Route path='/' exact component={Home} />*/}
       <Route exact path="/SignIn" element={<SignIn />} />
       <Route exact path='/SignUp' element={<SignUp/>} />
       <Route exact path='/Profile' element={<Profile/>} />
       <Route exact path='/Search' element={<Search/>} /> 
       <Route exact path='/Result' element={<Result/>} />
       <Route exact path='/Forgotpassword' element={<Forgotpassword/>} />
    </Routes>
    </div>
    </div>
  </Router>
  
  );
}
export default App;
