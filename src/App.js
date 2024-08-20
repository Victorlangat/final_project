import './App.css';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import HomePage from './pages/home';
import Memories from './pages/memories'; // Import the Memories component
import Eulogy from './pages/eulogy'; // Import the Eulogy component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memories" element={<Memories />} /> {/* Route for Memories page */}
        <Route path="/eulogy" element={<Eulogy />} /> {/* Route for Eulogy page */}
      </Routes>
    </Router>
  );
};

export default App;


