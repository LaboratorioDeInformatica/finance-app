import ApiService from "../apiservice"; 

class LancamentoService extends ApiService {

    constructor(){
        super('/api/lancamentos');
    }

    consultar(lancamentoFiltro){

        let params = `?ano=${lancamentoFiltro.ano}`;

        if(lancamentoFiltro.mes){
            params = `${params}&mes=${lancamentoFiltro.mes}`;
        }

        if(lancamentoFiltro.tipo){
            params = `${params}&tipo=${lancamentoFiltro.tipo}`;
        }

        if(lancamentoFiltro.status){
            params = `${params}&status=${lancamentoFiltro.status}`;
        }

        if(lancamentoFiltro.usuario){
            params = `${params}&usuario=${lancamentoFiltro.usuario}`;
        }

        if(lancamentoFiltro.descricao){
            params = `${params}&descricao=${lancamentoFiltro.descricao}`;
        }

        return this.get(params);
    }

    deletar(id){
        return this.delete(`/${id}`);
    }

}

export default LancamentoService;