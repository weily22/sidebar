import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './../components/App';
import myRoutes from './route';

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      exact
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

const rootRoute = () => (
  <Router>
    <App>
      <Switch>
        {myRoutes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </App>
  </Router>
);

export default rootRoute;
