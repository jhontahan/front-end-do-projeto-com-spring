import React from "react";
import  currencyFormatter from "currency-formatter";

const TabelaLancamentos = props => {

    const rows = props.lancamentos.map(lancamento => {
        return (
            <tr key={lancamento.id}>
                <td>{lancamento.descricao}</td>
                <td>{currencyFormatter.format(lancamento.valor, {locale: 'pt-BR'})}</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.mes}</td>
                <td>{lancamento.status}</td>
                <td>
                    <button onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')} 
                            type="button" 
                            className="btn btn-success" 
                            title="Efetivar"
                            disabled={lancamento.status !== 'PENDENTE'}>
                        <i className="pi pi-check"></i>
                    </button>
                    <button onClick={e => props.alterarStatus(lancamento, 'CANCELADO')} 
                            type="button" 
                            className="btn btn-warning" 
                            title="Cancelar"
                            disabled={lancamento.status !== 'PENDENTE'}>
                        <i className="pi pi-times"></i>
                    </button>
                    <button onClick={e => props.editarAction(lancamento.id)} 
                            type="button" 
                            className="btn btn-primary" 
                            title="Editar">
                        <i className="pi pi-pencil"></i>
                    </button>
                    <button onClick={e => props.deletarAction(lancamento)} 
                            type="button" 
                            className="btn btn-danger" 
                            title="Deletar">
                        <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Descri????o</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">M??s</th>
                    <th scope="col">Situa????o</th>
                    <th scope="col">A????es</th>
                </tr>
            </thead>

            <tbody>
                {rows}
            </tbody>

        </table>
    )
}

export default TabelaLancamentos