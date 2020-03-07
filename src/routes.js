import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SimpleList from './pages/SimpleList';
import ViewPage from './pages/ViewPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SimpleList} />
        <Route path="/view" component={ViewPage} />
      </Switch>
    </BrowserRouter>
  );
}
