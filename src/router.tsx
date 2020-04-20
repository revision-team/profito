import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home as HomeLayout } from "layouts/Home";
import { Home, Dashboard } from "views";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' render={() => <HomeComponent />} />
      </Switch>
    </Router>
  );
}

function HomeComponent() {
  return (
    <HomeLayout>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/dashboard' component={Dashboard}></Route>
      </Switch>
    </HomeLayout>
  );
}
