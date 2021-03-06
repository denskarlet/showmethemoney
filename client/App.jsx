import React, { useContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './util/ProtectedRoute.jsx';

import Session from './Session.js';

import Portal from './routes/Portal.jsx';
import Officials from './routes/Officials.jsx';
import Elections from './routes/Elections.jsx';
import NotFound from './components/NotFound.jsx';

const App = () => {
  const validate = () => {
    if (!Session.address) {
      return '/';
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Portal />
        </Route>
        <ProtectedRoute path="/officials" validate={validate}>
          <Officials />
        </ProtectedRoute>
        <ProtectedRoute path="/elections" validate={validate}>
          <Elections />
        </ProtectedRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
