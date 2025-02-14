import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';  // Ensure this is imported only once
import PlantsListPage from './Pages/PlantsListPage';
import PlantDetailPage from './Pages/PlantDetailPage';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/plants" component={PlantsListPage} />
        <Route path="/plant/:id" component={PlantDetailPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;
