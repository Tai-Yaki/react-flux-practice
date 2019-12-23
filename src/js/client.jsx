import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Todos from './pages/Todos';

const app = document.getElementById('app');

ReactDOM.render(
  <div>
    <Router>
      <Route exact path="/" component={Todos} />
    </Router>
  </div>,
  app,
);
