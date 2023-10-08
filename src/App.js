import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StateProvider } from './state';
import SignUpPage from './pages/SignUpPage';
import LunchPage from './pages/LunchPage';
import BreakfastPage from './pages/BreakfastPage';
import DinnerPage from './pages/DinnerPage';
import DataViz from './pages/dataviz';
import { RecipeProvider } from './components/context/RecipeContext';



const App = () => {
  return (
    <StateProvider>
      <RecipeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage/>} />
          <Route path="/breakfast" element={<BreakfastPage />} />
          <Route path="/lunch-page" element={<LunchPage />} />
          <Route path="/dinner-page" element={<DinnerPage />} />
          <Route path="/dataviz-page" element={<DataViz />} />
        </Routes>
      </Router>
      </RecipeProvider>
    </StateProvider>
    
  );
};

export default App;
