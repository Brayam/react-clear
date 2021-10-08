import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.scss';

// Imports das Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*"><NotFound /></Route>
        </Switch>
    </Router>
  );
}
