import React from "react"

import Card from '../components/card';

import FormGroup from "../components/form-group";

import {Link, Navigate} from 'react-router-dom';

import UsuarioService from "../app/service/usuarioService";

import LocalStorageService from "../app/service/localstorageService";

import {mensagemErro} from "../components/toastr"

class Login extends React.Component{

    state = {
        email : '',
        senha : '', 
        mensagemErro : null,
        redirect : false
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    //Documentação de outra forma de usar função com promisse

    // entrar = async () => {
    //     try{
    //         const response = await axios.post("http://localhost:8080/api/usuarios/autenticar", {
    //         email : this.state.email,
    //         senha : this.state.senha
    //     })
    //     console.log("resposta ", response)
    //     console.log("fim da requisição")
    //     }catch(erro){
    //         console.log(erro.response)
    //         console.log("entrou no erro")
    //     }
    // }

    // entrar = () => {
    //     axios.post("http://localhost:8080/api/usuarios/autenticar", {
    //         email : this.state.email,
    //         senha : this.state.senha
    //     }).then(response => {
    //         localStorage.setItem("_usuario_logado", JSON.stringify(response.data))

    //         this.setState({mensagemErro: null})
    //         this.setState({redirect : true})
    //     }).catch(erro => {
    //         this.setState({mensagemErro: erro.response.data})
    //     })

    // }

    entrar = () => {
        this.service.autenticar({
            email : this.state.email,
            senha : this.state.senha
        }).then(response => {
            LocalStorageService.adicionarItem("_usuario_logado", response.data)
            // localStorage.setItem("_usuario_logado", JSON.stringify(response.data))

            this.setState({mensagemErro: null})
            this.setState({redirect : true})
        }).catch(erro => {
            mensagemErro(erro.response.data)
        })

    }

    prepareCadastrar = () => {
        this.setState({redirect : true})
    }

    render(){
        return (
        <div className="row">

            {/*método que será chamado sempre que o valor de redirect for mudado
            o navigate séra chamado e encaminhado para a rota passada. */}
            {this.state.redirect && <Navigate to="/" replace={true}/>}
            <div className="col-md-6" style={{position: 'relative', left: '300px'} }>
                <div className="bs-docs-section">
                    <Card title="Login">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-component">
                                    <fieldset>
                                        <FormGroup label="email: *" htmlFor="exampleInputEmail1">
                                            <input type="email" id="exampleInputEmail1"
                                                    className="form-control" arial-describedby="emailHelp"
                                                    placeholder="Digite o Email"
                                                    value={this.state.email}
                                                    onChange={e => this.setState({email: e.target.value})}/>
                                        </FormGroup>

                                        <FormGroup label="senha: *" htmlFor="exampleInputPassword1">
                                            <input type="password" id="exampleInputPassword1" 
                                                    className="form-control" 
                                                    placeholder="Password"
                                                    value={this.state.senha}
                                                    onChange={e => this.setState({senha: e.target.value})}/>
                                        </FormGroup>

                                        <button onClick={this.entrar} 
                                                className="btn btn-success">
                                                <i className="pi pi-sign-in"/> Entrar
                                        </button>
                                        <Link to="/cadastro-usuarios">
                                            <button className="btn btn-danger">
                                            <i className="pi pi-plus"/> Cadastrar
                                            
                                            </button>
                                        </Link>
                                        

                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
        )

    }

}

export default Login