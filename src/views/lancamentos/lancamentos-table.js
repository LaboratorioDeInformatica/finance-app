import React from "react";
import currencyFormatter from "currency-formatter";

const LancamentosTable = (props) => {

    const { lancamentos, editAction, deleteAction, alterarStatus } = props;

    const rows = lancamentos.map(lancamento => {
        return (
            <tr key={lancamento.id}>
                <td>{lancamento.descricao}</td>
                <td>{currencyFormatter.format(lancamento.valor, { locale: 'pt-BR' })}</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.mes}</td>
                <td>{lancamento.status}</td>
                <td>
                    <button title="Efetivar" type="button" className="btn btn-success" 
                    onClick={() => alterarStatus(lancamento, 'EFETIVADO')} 
                    disabled={lancamento.status !== 'PENDENTE' } >
                        <i className="pi pi-check"></i>
                    </button>
                    <button title="Cancelar" type="button" className="btn btn-warning" onClick={() => alterarStatus(lancamento, 'CANCELADO')}  disabled={lancamento.status !== 'PENDENTE'}>
                        <i className="pi pi-times"></i>
                    </button>
                    <button title="Editar" type="button" className="btn btn-primary" onClick={() => editAction(lancamento.id)}>
                        <i className="pi pi-pencil"></i>
                    </button>
                    <button title="Excluir" type="button" className="btn btn-danger" onClick={() => deleteAction(lancamento)}>
                        <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    });

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Mês</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default LancamentosTable;