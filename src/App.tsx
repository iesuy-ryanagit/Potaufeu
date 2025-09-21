import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './pages/Home';
import FTTokyo from './pages/42Tokyo';
import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import './styles/App.css';
import image from './images/blue_rose.jpg';

const App = () => {
  const location = useLocation();
  const shouldDisplayImage = !(
    location.pathname === '/Potaufeu/home' || location.pathname === '/Potaufeu/fttokyo'
  );

  return (
    <>
      <header>
        <h1>Ryanagit</h1>
        <p style={{ color: '#888', fontSize: '1.1rem', marginTop: '0.5rem' }}>Welcome to a modern web experience</p>
      </header>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/Potaufeu/home" />} />
            <Route
              path="/Potaufeu/home"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/Potaufeu/fttokyo"
              element={
                <PageWrapper>
                  <FTTokyo />
                </PageWrapper>
              }
            />
          </Routes>
          {shouldDisplayImage && (
            <div className="intro-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
              <motion.img
                src={image}
                alt="Blue Rose"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ width: '30%', maxWidth: '400px', height: 'auto', margin: '0 auto', borderRadius: '1rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
              />
              <p className="intro-text" style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#2563eb', fontWeight: 600 }}>
                This is Ryanagit's portfolio!
              </p>
            </div>
          )}
        </AnimatePresence>
      </main>
      <footer>
        &copy; 2025 Ryanagit. All rights reserved.
      </footer>
    </>
  );
};

export default App;
