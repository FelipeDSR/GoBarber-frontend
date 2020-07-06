import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/Signin';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/signin" component={SignIn} />
  </Switch>
);

export default Routes;
