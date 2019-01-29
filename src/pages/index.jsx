import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Tracks from './Tracks';
import Mentors from './Mentors';
import Activities from './Activities';

const IndexPage = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tracks" component={Tracks} />
        <Route path="/mentors" component={Mentors} />
        <Route path="/activities" component={Activities} />
      </Switch>
    </BrowserRouter>
  </div>
);
export default IndexPage;
