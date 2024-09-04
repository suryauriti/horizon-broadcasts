import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Settings from './components/Settings';
import Home from './components/Home';
import Movies from './components/Movies';
import TVShows from './components/TVShows'; // Import TVShows component
import Sports from './components/Sports';   // Import Sports component
import Live from './components/Live';       // Import Live component

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Router>
      <div className="App">
        <Settings currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
        <Menu currentLanguage={currentLanguage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/live" element={<Live />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
