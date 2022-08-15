import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group"; 

import {Link, Navigate} from 'react-router-dom';

import UsuarioService from "../app/service/usuarioService";

import {mensagemErro, mensagemSucesso} from "../components/toastr"

class CadastroUsuario extends React.Component{

    state = {
        nome : '',
        email : '',
        senha : '',
        senhaRepeticao : '',
        redirect : false
    }

    constructor(){
        super();
        this.usuarioService = new UsuarioService();
    }

    cadastrar = () => {
        // console.log(this.state);

        const {nome, email, senha, senhaRepeticao} = this.state

        const usuario = { nome, email, senha, senhaRepeticao }

        try{
            this.usuarioService.validar(usuario)
        }catch(erro){
            const msgs = erro.mensagens;
            msgs.forEach((msg, index) => {
                mensagemErro(msg) 
            })
            return false;
        }

        this.usuarioService.salvar(usuario)
            .then(response => {
                mensagemSucesso("Usuário cadastrado com sucesso! Faça o login para acessar o sistema.")
                this.setState({redirect: true})
            }).catch(erro => {
                mensagemErro(erro.response.data)
            })
    }

    // cancelar = () => {
    //     this.setState({redirect : true})
    // }

    render(){
        return(
            <Card title="Cadastro de Usuário">
                <div className="row">
                     {/*método que será chamado sempre que o valor de redirect for mudado
                    o navigate séra chamado e encaminhado para a rota passada. */}
                    {this.state.redirect && <Navigate to="/login" replace={true}/>}
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" id="inputNome" 
                                        name="nome" className="form-control"
                                        value={this.state.nome}
                                        onChange={e => this.setState({nome: e.target.value})}/>
                            </FormGroup>

                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="email" id="inputEmail" 
                                        name="email" className="form-control"
                                        value={this.state.email}
                                        onChange={e => this.setState({email: e.target.value})}/>
                            </FormGroup>

                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password" id="inputSenha" 
                                        name="senha" className="form-control"
                                        value={this.state.senha}
                                        onChange={e => this.setState({senha: e.target.value})}/>
                            </FormGroup>

                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password" id="inputRepitaSenha" 
                                        name="senhaRepeticao" className="form-control"
                                        value={this.state.senhaRepeticao}
                                        onChange={e => this.setState({senhaRepeticao: e.target.value})}/>
                            </FormGroup>

                            <button type="button" className="btn btn-success" onClick={this.cadastrar}>Salvar</button>
                            <Link to="/login">
                                <button type="button" className="btn btn-danger">Cancelar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default CadastroUsuario