import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Tracks from './Tracks';

const IndexPage = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tracks" component={Tracks} />
      </Switch>
    </BrowserRouter>
  </div>
);
export default IndexPage;
