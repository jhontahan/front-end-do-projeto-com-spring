import React from "react";
import {Link, Navigate} from 'react-router-dom';
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";

import LancamentoService from "../../app/service/lancamentoService";

import * as messages from "../../components/toastr"

import LocalStorageService from "../../app/service/localstorageService";

class CadastroLancamentos extends React.Component{

    state = {
        id: null,
        descricao: '',
        valor: '',
        mes: '', 
        ano: '',
        tipo: '', 
        status: '',
        redirect: false

    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value})
    }

    submit = () =>{

        const usuarioLogadoObjeto = LocalStorageService.obterItem("_usuario_logado")

        const {descricao, valor, mes, ano, tipo } = this.state;

        const lancamento = { descricao, valor, mes, ano, tipo, usuario: usuarioLogadoObjeto.id }

        this.service.salvar(lancamento)
            .then(response => {
                
                this.setState({redirect: true})

                messages.mensagemSucesso("Lançamento salvo com sucesso.")
            }).catch(erro => {
                messages.mensagemErro(erro.response.data)
            })
    }


    constructor(){
        super();
        this.service = new LancamentoService();
    }
    render(){

        const tipos = this.service.obterTipos();
        const meses = this.service.obterMeses();

        return(
            
            <Card title="Cadastro Lançamentos">
                {this.state.redirect && <Navigate to="/consulta-lancamentos" replace={true}/>}
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup htmlFor="idInputDescricao" label="Descrição: *">
                            <input id="idInputDescricao" type="text" 
                                    className="form-control"
                                    name="descricao"
                                    value={this.state.descricao}
                                    onChange={this.handleChange}/>
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup htmlFor="idInputAno" label="Ano: *">
                            <input id="idInputAno" type="text" 
                                    className="form-control"
                                    name="ano"
                                    value={this.state.ano}
                                    onChange={this.handleChange}/>
                        </FormGroup>
                    </div>

                    <div className="col-md-6">
                        <FormGroup htmlFor="idInputMes" label="Mês: *">
                            <SelectMenu id="idInputMes" lista={meses} 
                                        className="form-control"
                                        name="mes"
                                        value={this.state.mes}
                                        onChange={this.handleChange}/>
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <FormGroup htmlFor="idInputValor" label="Valor: *">
                            <input id="idInputValor" type="text" 
                                    className="form-control"
                                    name="valor"
                                    value={this.state.valor}
                                    onChange={this.handleChange}/>
                        </FormGroup>
                    </div>

                    <div className="col-md-4">
                        <FormGroup htmlFor="idInputTipo" label="Tipo: *">
                            <SelectMenu id="idInputTipo" lista={tipos} 
                                        className="form-control"
                                        name="tipo"
                                        value={this.state.tipo}
                                        onChange={this.handleChange}/>
                        </FormGroup>
                    </div>

                    <div className="col-md-4">
                        <FormGroup htmlFor="idInputStatus" label="Status: *">
                            <input id="idInputStatus" type="text" 
                                    className="form-control" 
                                    disabled={true}
                                    name="status"
                                    value={this.state.status}/>
                        </FormGroup>
                    </div>
                </div>

                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <button onClick={this.submit} type="button" className="btn btn-success">Salvar</button>
                        <Link to="/consulta-lancamentos">
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </Link>
                    </div>
                </div>
            </Card>
        )
    }
}

export default CadastroLancamentos