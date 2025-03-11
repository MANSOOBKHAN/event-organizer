import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home.js';
import Events from './pages/event.js';
import About from './pages/about';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
