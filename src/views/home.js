import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

    state = {
        saldo : 0
    }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Bem vindo!</h1>
        <p className="lead">Esse é seu sistema de finanças.</p>
        <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
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
            <i className="fa fa-users"></i> Cadastrar Usuário
          </Link>
          <a
            className="btn btn-danger btn-lg"
            href="https://bootswatch.com/flatly/#"
            role="button"
          >
            <i class="fa fa-users"></i> Cadastrar Lançamento
          </a>
        </p>
      </div>
    );
  }
}

export default Home;
