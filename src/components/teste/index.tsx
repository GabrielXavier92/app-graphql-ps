import React from 'react'
import { useHistory } from "react-router-dom";

const Teste: React.FC = () => {
  const history = useHistory()

  const changePage = () => {
    history.replace('/dashboard/list')
  }

  return (
    <div>
      <button onClick={() => changePage()}>LIST</button>
      TESTE
    </div>
  )

}

export default Teste