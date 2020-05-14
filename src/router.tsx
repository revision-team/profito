import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home as HomeLayout } from "layouts/home";
import SessionLayout from "layouts/session";
import Loading from "components/loading";
import Dashboard from "views/dashboard";

const Login = lazy(() => import("./views/registration/login"));
const Register = lazy(() => import("./views/registration/register"));
const Payments = lazy(() => import("./views/payments"));
const PaymentsEdit = lazy(() => import("./views/payments/edit"));
const PaymentsCreate = lazy(() => import("./views/payments/create"));

const Integrations = lazy(() => import("views/integrations"));
const Shopifies = lazy(() => import("./views/integrations/shopify"));
const ShopifiesEdit = lazy(() => import("./views/integrations/shopify/edit"));
const ShopifiesCreate = lazy(() =>
  import("./views/integrations/shopify/create")
);

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path='/auth' render={() => <LoginComponent />} />
          <Route path='/' render={() => <HomeComponent />} />
        </Switch>
      </Suspense>
    </Router>
  );
}

function HomeComponent() {
  return (
    <HomeLayout>
      <Switch>
        {/* DASHBOARD */}
        <Route exact path='/dashboard' component={Dashboard} />

        {/* PAYMENTS */}
        <Route exact path='/payments' component={Payments} />
        <Route exact path='/payments/create' component={PaymentsCreate} />
        <Route exact path='/payments/:id/edit' component={PaymentsEdit} />

        {/* INTEGRATIONS */}
        <Route exact path='/integrations' component={Integrations} />

        {/* INTEGRATIONS SHOPIFY */}
        <Route exact path='/integrations/shopify' component={Shopifies} />
        <Route
          exact
          path='/integrations/shopify/create'
          component={ShopifiesCreate}
        />
        <Route
          exact
          path='/integrations/shopify/:id/edit'
          component={ShopifiesEdit}
        />

        <Redirect from='*' to='/dashboard' />
      </Switch>
    </HomeLayout>
  );
}

function LoginComponent() {
  return (
    <SessionLayout>
      <Switch>
        <Route exact path='/auth/login' component={Login} />
        <Route exact path='/auth/register' component={Register} />
      </Switch>
    </SessionLayout>
  );
}
