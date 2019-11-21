import React from "react";
import { withRouter, RouteComponentProps, Route } from "react-router-dom";

interface IGuardeRoute extends RouteComponentProps {
  component: any;
  path: string;
  exact: boolean;
}
const GaurdRoute: React.FC<IGuardeRoute> = ({ component, path, exact, history }) => {
  // Adicionar rotina de autenticacao nesse ponto
  if (!localStorage.getItem("token")) {
    history.replace("/");
    return null
  }
  else {
    return <Route exact={exact} path={path} component={component} />;
  }
};

export default withRouter(GaurdRoute);
