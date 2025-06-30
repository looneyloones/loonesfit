import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FitnessApplication from './components/FitnessApplication';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ fix: from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apply" element={<FitnessApplication />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
