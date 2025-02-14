import React from 'react';
import { BrowserRouter as Router, Route, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';  // import only once
import PlantsListPage from './Pages/PlantsListPage';
import PlantDetailPage from './Pages/PlantDetailPage';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<PlantsListPage />} />
        <Route path="/plant/:id" element={<PlantDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
