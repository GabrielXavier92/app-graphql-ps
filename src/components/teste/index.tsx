import React from 'react'
import { withRouter, RouteComponentProps } from "react-router-dom";

const teste: React.FC<RouteComponentProps> = ({ history }) => {

  const changePage = () => {
    history.replace('/dashboard/list')
  }

  return (<div>
    <button onClick={() => changePage()}>LIST</button>

    TESTE
  </div>)
}

export default withRouter(teste)