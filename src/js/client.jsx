import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Todos from './pages/Todos';
import Favorites from './pages/Favorites';
import Layout from './pages/Layout';

const app = document.getElementById('app');

ReactDOM.render(
  <div>
    <Router>
      <Layout>
        <Route exact path="/" component={Todos} />
        <Route exact path="/favorites" component={Favorites} />
      </Layout>
    </Router>
  </div>,
  app,
);
