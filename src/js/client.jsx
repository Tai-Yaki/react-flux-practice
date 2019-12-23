import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Todos from './pages/Todos';
import Layout from './pages/Layout';

const app = document.getElementById('app');

ReactDOM.render(
  <div>
    <Router>
      <Layout>
        <Route exact path="/" component={Todos} />
      </Layout>
    </Router>
  </div>,
  app,
);
