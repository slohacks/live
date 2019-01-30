import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Home';
import Tracks from './Tracks';
import Mentors from './Mentors';
import Activities from './Activities';
import Map from './Map';

const history = createBrowserHistory();

const IndexPage = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tracks" component={Tracks} />
      <Route path="/mentors" component={Mentors} />
      <Route path="/activities" component={Activities} />
      <Route path="/map" component={Map} />
    </Switch>
  </Router>
);
export default IndexPage;
