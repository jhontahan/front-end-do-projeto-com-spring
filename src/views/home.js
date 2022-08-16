import React from "react";
import { Link } from "react-router-dom";
import UsuarioService from "../app/service/usuarioService";
import  currencyFormatter from "currency-formatter";

import { AuthContext } from "../main/provedorAutenticacao";

class Home extends React.Component {

    state = {
        saldo : 0
    }

    constructor(){
        super();
        this.usuarioService = new UsuarioService();
    }

    //Função que será chamada logo aopós os componentes se renderizarem.
    componentDidMount(){
        
        // const usuarioLogadoString = LocalStorageService.obterItem("_usuario_logado") 
        // localStorage.getItem("_usuario_logado")

        // const usuarioLogadoObjeto = LocalStorageService.obterItem("_usuario_logado")

        const usuarioLogadoObjeto = this.context.usuarioAutenticado

        this.usuarioService.obterSaldoPorIdUsuario(usuarioLogadoObjeto.id)
             .then(response => {
                this.setState({saldo : response.data})
             }).catch(erro => {
                console.error(erro.response)
             })
    }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Bem vindo!</h1>
        <p className="lead">Esse é seu sistema de finanças.</p>
        <p className="lead">Seu saldo para o mês atual é de {currencyFormatter.format(this.state.saldo, {locale: 'pt-BR'})}</p>
        <hr className="my-4" />
        <p>
          E essa é sua área administrativa, utilize um dos menus ou botões
          abaixo para navegar pelo sistema.
        </p>
        <p className="lead">
          <Link
            className="btn btn-primary btn-lg"
            role="button"
            to="/cadastro-usuarios"
          >
            <i className="pi pi-users"/> Cadastrar Usuário
          </Link>
          <Link
            className="btn btn-danger btn-lg"
            to="/cadastro-lancamentos"
            role="button"
          >
            <i className="pi pi-money-bill"/> Cadastrar Lançamento
          </Link>
        </p>
      </div>
    );
  }
}

Home.contextType = AuthContext;

export default Home;
