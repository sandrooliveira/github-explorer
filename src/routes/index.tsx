import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Respository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}></Route>
    <Route path="/repositories/:repository+" component={Respository}></Route>
  </Switch>
)

export default Routes;
