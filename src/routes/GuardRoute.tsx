import React from "react";
import { useHistory, Route } from "react-router-dom";

interface IGuardeRoute {
  component: any;
  path: string;
  exact: boolean;
}
const GaurdRoute: React.FC<IGuardeRoute> = ({ component, path, exact }) => {
  const history = useHistory()
  // Adicionar rotina de autenticacao nesse ponto
  if (!localStorage.getItem("token")) {
    history.replace("/");
    return null
  }
  else {
    return <Route exact={exact} path={path} component={component} />;
  }
};

export default GaurdRoute
