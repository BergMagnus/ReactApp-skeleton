import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/Main-layout.jsx';

// Pages
import Page1 from './components/Page1.jsx';
import Page2 from './components/Page2.jsx';

export default (
  <Router history={browserHistory}>
      <Route path="/" component={MainLayout} >
        <Route path="page1" component={Page1}/>
        <Route path="page2" component={Page2}/>
      </Route>
  </Router>
);

