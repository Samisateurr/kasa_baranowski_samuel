import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ApartmentPage from './pages/ApartmentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apartments/:id" element={<ApartmentPage />} /> {/* Route pour les pages d'appartement */}
        <Route path="*" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;