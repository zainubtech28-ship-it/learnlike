import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration.jsx';
import AnimeWorld from './pages/AnimeWorld.jsx';
import AnimePage from './AnimePage.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/animeworld" element={<AnimeWorld />} />
      <Route path="/animepage" element={<AnimePage />} />
    </Routes>
  );
}

export default App;
