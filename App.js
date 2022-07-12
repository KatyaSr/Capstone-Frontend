import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 
'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import SignIn from './pages/Navbar/SignIn';
function App() {
  return (
    <Router>
    <Navbar />
    <div className="container">
    <Routes>
      {/* <Route path='/' exact component={Home} />
      <Route path='/Search' component={Search} /> */}
      {/* <Route path='/SignIn' component={SignIn} /> */}
      <Route exact path="/SignIn" element={<SignIn />} />
      {/* <Route path='/SignUp' component={SignUp} /> */}
    </Routes>
    </div>
  </Router>
  


  );
}
export default App;
