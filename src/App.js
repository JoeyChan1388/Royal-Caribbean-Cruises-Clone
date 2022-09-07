import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import './App.css'
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Ships from './components/pages/Ships';
import Planner from './components/pages/Planner';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Ships" element={<Ships />} />
        <Route exact path="/Planner" element={<Planner />} />
        <Route exact path="/Signin" element={<Signin />} />
        <Route exact path="/Signup" element={<Signup />} />
      </Routes>
      <Footer></Footer>
    </Router>
    
    </>
  );
}

export default App;
