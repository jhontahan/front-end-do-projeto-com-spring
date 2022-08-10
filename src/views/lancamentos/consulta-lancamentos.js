import React from "react";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";
import LancamentosTable from "./lancamentosTable";

import LancamentoService from "../../app/service/lancamentoService";

import LocalStorageService from "../../app/service/localstorageService";
import * as messages from "../../components/toastr";

class ConsultaLancamentos extends React.Component{
    state = {
        ano: '',
        mes: '',
        tipo: '',
        lancamentos: [],
        descricao: '',
        redirect: false
    }

    constructor(){
        super();
        this.service = new LancamentoService();
    }

    buscar = () => {

        if (!this.state.ano){
            messages.mensagemErro("o preenchimento do campo ano é obrigatório.")
            return false;
        }

        const usuarioLogadoObjeto = LocalStorageService.obterItem("_usuario_logado")

        console.log(this.state)

        const lancamentoFiltro = {
            ano: this.state.ano,
            mes: this.state.mes,
            tipo: this.state.tipo,
            usuario: usuarioLogadoObjeto.id,
            descricao: this.state.descricao
        }

        this.service.consultar(lancamentoFiltro)
            .then(response => {
                this.setState({lancamentos : response.data})
            }).catch(erro => [
                messages.mensagemErro(erro.response.data)
            ])
    }

    render(){
        const meses = this.service.obterMeses();

        const tipos = this.service.obterTipos();

        // const lancamentos = [
        //     {id: 1, descricao: 'Salário', valor: 5000, mes: 1, tipo: 'Receita', status: 'Efetivado'}
            
        // ]

        return(
            <Card title="Consulta Lançamentos">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup label="Ano: *" htmlFor="inputAno">
                                <input type="text" className="form-control" 
                                    id="inputAno" placeholder="Digite o Ano"
                                    value={this.state.ano} 
                                    onChange={e => this.setState({ano: e.target.value})}/>
                            </FormGroup>

                            <FormGroup label="Mês: " htmlFor="inputAno">
                                <SelectMenu id="inputAno" className="form-control" lista={meses}
                                            value={this.state.mes} 
                                            onChange={e => this.setState({mes: e.target.value})}/>
                            </FormGroup>

                            <FormGroup label="Descrição: " htmlFor="inputDescricao">
                                <input type="text" className="form-control" 
                                    id="inputDescricao" placeholder="Digite a descrição"
                                    value={this.state.descricao} 
                                    onChange={e => this.setState({descricao: e.target.value})}/>
                            </FormGroup>

                            <FormGroup label="Tipo lançamento: " htmlFor="inputTipos">
                                <SelectMenu id="inputTipos" className="form-control" lista={tipos}
                                            value={this.state.tipo} 
                                            onChange={e => this.setState({tipo: e.target.value})}/>
                            </FormGroup>

                            <button onClick={this.buscar} type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentosTable lancamentos={this.state.lancamentos}/>
                        </div>
                        
                    </div>
                </div>

            </Card>

        )

    }
}

export default ConsultaLancamentos