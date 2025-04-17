import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('app');  // "app" が存在することを確認

// ここでの目的は、React アプリを正しくレンダリングすることです。
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);  // React 18以降の書き方
  root.render(
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
} else {
  console.error('Target container is not a DOM element');
}