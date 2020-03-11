import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SimpleList from './pages/SimpleList';
import ViewPage from './pages/ViewPage';
import AddCatPage from './pages/AddCatPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SimpleList} />
        <Route path="/view" component={ViewPage} />
        <Route path="/cats/submit" component={AddCatPage} />
      </Switch>
    </BrowserRouter>
  );
}
