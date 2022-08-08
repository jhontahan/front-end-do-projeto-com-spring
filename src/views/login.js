import React from "react"

import Card from '../components/card';

import FormGroup from "../components/form-group";

import {Navigate} from 'react-router-dom';

class Login extends React.Component{

    state = {
        email : '',
        senha : '',
        redirect : false
    }

    entrar = () => {
        console.log("email: ", this.state.email)
        console.log("senha: ", this.state.senha)
    }

    prepareCadastrar = () => {
        this.setState({redirect : true})
    }

    render(){
        return (
        <div className="row">

            {/*método que será chamado sempre que o valor de redirect for mudado
            o navigate séra chamado e encaminhado para a rota passada. */}
            {this.state.redirect && <Navigate to="/cadastro-usuarios" replace={true}/>}
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

export default Login