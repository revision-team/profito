import React, { FunctionComponent } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home as HomeLayout } from "layouts/Home";
import {
  Dashboard,
  Login,
  Register,
  Payments,
  PaymentsEdit,
  PaymentsCreate,
  Shopifies,
  ShopifiesEdit,
  ShopifiesCreate,
} from "views";

interface RouteParams {
  exact?: boolean;
  path: string;
  component: FunctionComponent;
  authenticate?: boolean;
}

const AuthRoute: FunctionComponent<RouteParams> = (props) => {
  const name = localStorage.getItem("name");

  if (name === null) {
    return <Redirect to={`/auth/login?redirect=${props.path}`} />;
  }
  return (
    <Route exact={props.exact} path={props.path} component={props.component} />
  );
};

export default function Routes() {
  return (
    <Router>
      <Switch>
        {/* <AuthRoute exact path='/' component={Home} /> */}
        <Route path='/auth' render={() => <LoginComponent />} />
        <Route path='/' render={() => <HomeComponent />} />
      </Switch>
    </Router>
  );
}

function HomeComponent() {
  return (
    <HomeLayout>
      <Switch>
        <AuthRoute exact path='/dashboard' component={Dashboard} />

        <AuthRoute exact path='/payments' component={Payments} />
        <AuthRoute exact path='/payments/create' component={PaymentsCreate} />
        <AuthRoute exact path='/payments/:id/edit' component={PaymentsEdit} />

        <AuthRoute exact path='/resources/shopify' component={Shopifies} />
        <AuthRoute
          exact
          path='/resources/shopify/create'
          component={ShopifiesCreate}
        />
        <AuthRoute
          exact
          path='/resources/shopify/:id/edit'
          component={ShopifiesEdit}
        />
        <Redirect from='*' to='/dashboard' />
      </Switch>
    </HomeLayout>
  );
}

function LoginComponent() {
  return (
    <Switch>
      <Route exact path='/auth/login' component={Login} />
      <Route exact path='/auth/register' component={Register} />
    </Switch>
  );
}
