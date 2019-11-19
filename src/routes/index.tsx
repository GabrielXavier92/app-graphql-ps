import React from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";

import GuardRoute from './GuardRoute'
import Login from "../components/auth";
import List from "../components/list";


const Routes = () => {
  const routes = [
    { path: "/", component: Login },
    {
      path: "/list",
      component: List,
      auth: true
    }
  ];
  return (
    <Switch>
      {routes.map(route => {
        if (route.auth)
          return <GuardRoute key={route.path} path={route.path} component={route.component} />;
        else
          return <Route exact key={route.path} path={route.path} component={route.component} />
      })}
    </Switch>
  );
};

export default Routes;
