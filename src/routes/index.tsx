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

export const routes = [
  { key: 1, name: "Profissionais", path: '/dashboard/list', component: List },
  { key: 2, name: "Teste", path: '/dashboard/teste', component: teste }
]

export const DashboardRoutes = () => {
  return (
    <>
      {routes.map(({ key, path, component }) =>
        (<GuardRoute key={key} exact={true} path={path} component={component} />)
      )}
    </>
  )
}

export default Routes

