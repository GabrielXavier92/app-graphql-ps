import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import GuardRoute from './GuardRoute'
import Login from "../components/auth/login";
import ForgotPassword from "../components/auth/forgotPassword";
import Dashboard from "../components/dashboard";
import List from "../components/doctor/doctorList";
import teste from "../components/teste";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <GuardRoute exact={false} path="/dashboard" component={Dashboard} />;
      <Redirect to="/login" />
    </Switch>
  );
};

export const DashboardRoutes = () => {
  return (
    <>
      <GuardRoute exact={true} path="/dashboard/list" component={List} />
      <GuardRoute exact={true} path="/dashboard/teste" component={teste} />
    </>
  )
}

export default Routes

