import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom'; // Navigateをインポート
import Home from './pages/Home.tsx';
import FTTokyo from './pages/42Tokyo.tsx';

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/fttokyo">42Tokyo</Link>
      </nav>
      <Routes>
        {/* / にアクセスした際に、Home にリダイレクト */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fttokyo" element={<FTTokyo />} />
      </Routes>
    </>
  );
};

export default App;
