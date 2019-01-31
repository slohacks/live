import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Home from './Home';
import Tracks from './Tracks';
import Workshop from './Workshop';
import Schedule from './Schedule';
import Map from './Map';

const history = createMemoryHistory();

const IndexPage = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tracks" component={Tracks} />
      <Route path="/workshop" component={Workshop} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/map" component={Map} />
    </Switch>
  </Router>
);
export default IndexPage;
