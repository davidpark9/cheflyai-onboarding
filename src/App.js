// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DietRestrictionPage from './DietRestrictionPage';
import LunchDietRestrictionsPage from './LunchDietRestrictionsPage';  // Import LunchDietRestrictionsPage
import LunchMealsPage from './LunchMealsPage';  // Import LunchMealsPage
import DinnerDietRestrictionsPage from './DinnerDietRestrictionsPage'; // Import DinnerDietRestrictionsPage
import DinnerMealsPage from './DinnerMealsPage'; // Import DinnerMealsPage
import { StateProvider } from './state';
import SignUpPage from './pages/SignUpPage';
import BreakfastPage from './pages/BreakfastPage'

const App = () => {
  return (
    <StateProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage/>} />
        <Route path="/breakfast" element={<BreakfastPage />} />
        <Route path="/lunch-diet-restriction" element={<LunchDietRestrictionsPage />} />
        <Route path="/lunch-meals-page" element={<LunchMealsPage />} />
        <Route path="/dinner-diet-restriction" element={<DinnerDietRestrictionsPage />} />
        <Route path="/dinner-meals-page" element={<DinnerMealsPage />} />
      </Routes>
    </Router>
    </StateProvider>
  );
};

export default App;
