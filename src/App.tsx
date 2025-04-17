import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import FTTokyo from './pages/42Tokyo.tsx';

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/fttokyo">42Tokyo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fttokyo" element={<FTTokyo />} />
      </Routes>
    </>
  );
};

export default App;