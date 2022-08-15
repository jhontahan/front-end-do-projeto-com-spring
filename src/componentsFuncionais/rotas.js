import React from 'react'
import { useParams } from 'react-router-dom'
import CadastroLancamentos from '../views/lancamentos/cadastro-lancamentos';

export const RotasId = () => {
    const {id} = useParams();
  return (
    <CadastroLancamentos id={id}/>
  )
}

export default RotasId
