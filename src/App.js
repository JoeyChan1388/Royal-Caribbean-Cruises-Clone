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
        <Route exact path="https://joeychan1388.github.io/Royal-Caribbean-Cruises-Clone/" element={<Home />} />
        <Route exact path="https://joeychan1388.github.io/Royal-Caribbean-Cruises-Clone/Ships" element={<Ships />} />
        <Route exact path="https://joeychan1388.github.io/Royal-Caribbean-Cruises-Clone/Planner" element={<Planner />} />
        <Route exact path="https://joeychan1388.github.io/Royal-Caribbean-Cruises-Clone/Signin" element={<Signin />} />
        <Route exact path="https://joeychan1388.github.io/Royal-Caribbean-Cruises-Clone/Signup" element={<Signup />} />
      </Routes>
      <Footer></Footer>
    </Router>
    
    </>
  );
}

export default App;
