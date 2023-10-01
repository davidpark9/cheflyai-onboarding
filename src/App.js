// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StateProvider } from './state';
import SignUpPage from './pages/SignUpPage';
import LunchPage from './pages/LunchPage';
import BreakfastPage from './pages/BreakfastPage';
import DinnerPage from './pages/DinnerPage';
import FinalizePage from './pages/FinalizePage';
import DataVisualization from './components/DataVisualization';



const App = () => {
  return (
    <StateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage/>} />
          <Route path="/breakfast" element={<BreakfastPage />} />
          <Route path="/lunch-page" element={<LunchPage />} />
          <Route path="/dinner-page" element={<DinnerPage />} />
          <Route path="/finalize-page" element={<FinalizePage />} />
          <Route path="/data-visualization" element={<DataVisualization />} />
        </Routes>
      </Router>
    </StateProvider>
  );
};

export default App;
