import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Tracks from './Tracks';
import styles from './index.module.css';

const IndexPage = () => (
  <div className={styles.layout}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tracks" component={Tracks} />
      </Switch>
    </HashRouter>
  </div>
);
export default IndexPage;
