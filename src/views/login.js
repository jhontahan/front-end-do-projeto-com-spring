import React from "react"

import Card from '../components/card';

import FormGroup from "../components/form-group";

import {withRouter} from "react-router-dom"

class Login extends React.Component{

    state = {
        email : '',
        senha : ''
    }

    entrar = () => {
        console.log("email: ", this.state.email)
        console.log("senha: ", this.state.senha)
    }

    prepareCadastrar = () => {
        this.props.history.push("/cadastro-usuarios")
    }

    render(){
        return (
        <div className="row">
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
                                        <button onClick={this.prepareCadastrar} className="btn btn-danger">Cadastrar</button>


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

export default withRouter(Login)