import React from "react"

import Card from '../components/card';

import FormGroup from "../components/form-group";

import {Link} from 'react-router-dom';

import axios from "axios";

class Login extends React.Component{

    state = {
        email : '',
        senha : ''
    }

    entrar = () => {
        axios.post("http://localhost:8080/api/usuarios/autenticar", {
            email : this.state.email,
            senha : this.state.senha
        }).then(response => {
            console.log(response)
        }).catch(erro => {
            console.log(erro.response)
        })
    }

    // prepareCadastrar = () => {
    //     this.setState({redirect : true})
    // }

    render(){
        return (
        <div className="row">

            {/*método que será chamado sempre que o valor de redirect for mudado
            o navigate séra chamado e encaminhado para a rota passada. */}
            {/* {this.state.redirect && <Navigate to="/cadastro-usuarios" replace={true}/>} */}
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

                                        <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                        <Link to="/cadastro-usuarios">
                                            <button className="btn btn-danger">Cadastrar
                                            
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