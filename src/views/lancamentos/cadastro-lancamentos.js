import React from "react";
import {Link, Navigate} from 'react-router-dom';
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";

import LancamentoService from "../../app/service/lancamentoService";

class CadastroLancamentos extends React.Component{
    constructor(){
        super();
        this.service = new LancamentoService();
    }
    render(){

        const tipos = this.service.obterTipos();
        const meses = this.service.obterMeses();

        return(
            <Card title="Cadastro Lançamentos">
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup htmlFor="idInputDescricao" label="Descrição: *">
                            <input id="idInputDescricao" type="text" className="form-control"/>
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup htmlFor="idInputAno" label="Ano: *">
                            <input id="idInputAno" type="text" className="form-control"/>
                        </FormGroup>
                    </div>

                    <div className="col-md-6">
                        <FormGroup htmlFor="idInputMes" label="Mês: *">
                            <SelectMenu id="idInputMes" lista={meses} className="form-control"/>
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <FormGroup htmlFor="idInputValor" label="Valor: *">
                            <input id="idInputValor" type="text" className="form-control"/>
                        </FormGroup>
                    </div>

                    <div className="col-md-4">
                        <FormGroup htmlFor="idInputTipo" label="Tipo: *">
                            <SelectMenu id="idInputTipo" lista={tipos} className="form-control"/>
                        </FormGroup>
                    </div>

                    <div className="col-md-4">
                        <FormGroup htmlFor="idInputStatus" label="Tipo: *">
                            <input id="idInputStatus" type="text" className="form-control" disabled={true}/>
                        </FormGroup>
                    </div>
                </div>

                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <button type="button" className="btn btn-success">Salvar</button>
                        <button type="button" className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </Card>
        )
    }
}

export default CadastroLancamentos