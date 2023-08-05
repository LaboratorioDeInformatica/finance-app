import React, { useState, useEffect } from "react";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/select-menu";
import LancamentosTable from "./lancamentos-table";
import LancamentoService from "../../app/service/lancamentoService";
import LocalStorageService from "../../app/service/localstorageService";
import { mensagemErro, mensagemSucesso } from "../../components/toastr";
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';


const ConsultaLancamentos = () => {

    const [ano, setAno] = useState("");
    const [mes, setMes] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [lancamentos, setLancamentos] = useState([]);
    const [meses, setMeses] = useState([]);
    const [tipos, setTipos] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [lancamentoDeletar, setLancamentoDeletar] = useState({});


    useEffect(() => {
        // Crie uma função para buscar os meses utilizando o serviço LancamentoService
        const listas = async () => {
          try {
            const service = new LancamentoService();
            const meses = await service.obterMeses();
            setMeses(meses);
            const tipos = await service.obterListaTipos();
            setTipos(tipos);
          } catch (error) {
            console.log(error);
          }
        };
      
        // Chame a função para buscar os meses ao montar o componente
        listas();
      }, []);
  
    
   
    const buscar = () => { 

        if(!ano){
            mensagemErro('O preenchimento do campo Ano é obrigatório.');
            return false;
        }
        const service = new LancamentoService();
       
        const usuarioLogadoObjeto = LocalStorageService.getItem('_usuario_logado');
        const lancamentoFiltro = {
            ano: ano,
            mes: mes,
            tipo: tipo,
            usuario: usuarioLogadoObjeto.id,
            descricao: descricao
        }

        service.consultar(lancamentoFiltro).then(response => {
            setLancamentos(response.data);
        }).catch(error => {
            console.log(error);
        });

    };


    const editar = (id) => {
        console.log('Editando o lançamento', id);
    }

    const deletar = () => {
        const service = new LancamentoService();
        service.deletar(lancamentoDeletar.id).then(response => {
            // Atualiza o estado de lançamentos após a exclusão bem-sucedida
            setLancamentos(lancamentos.filter(lancamento => lancamento.id !== lancamentoDeletar.id));
            setShowDialog(false);
            mensagemSucesso('Lançamento deletado com sucesso!');
        }).catch(error => {
            mensagemErro('Ocorreu um erro ao tentar deletar o lançamento.');
        });
    }

    const abrirConfirmacao = (lanc) => {
        setLancamentoDeletar(lanc);
        setShowDialog(true);
    }


    const footer = (
        <div>
            <Button label="Confirmar" icon="pi pi-check" onClick={deletar} />
            <Button label="Cancelar" icon="pi pi-times" onClick={() => setShowDialog(false)} className="p-button-secondary" />
        </div>
    );

    return (

        <Card title="Consulta Lançamentos">
            <div className="row">
                <div className="col-lg-6">
                    <div className="bs-component">
                        <FormGroup htmlFor="inputAno" label="Ano: *">
                            <input type="text"
                                className="form-control"
                                id="inputAno"
                                value={ano}
                                onChange={e => setAno(e.target.value)}
                                placeholder="Digite o Ano" />
                        </FormGroup>
                        <FormGroup htmlFor="inputMes" label="Mês: *">
                            <SelectMenu id="inputMes" className="form-control" lista={meses} 
                            value={mes} onChange={e => setMes(e.target.value)} />
                        </FormGroup>
                        <FormGroup htmlFor="inputDescricao" label="Descrição: *">
                            <input type="text"
                                className="form-control"
                                id="inputDescricao"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                                placeholder="Digite a Descrição" />
                        </FormGroup>
                        <FormGroup htmlFor="inputTipo" label="Tipo de Lançamento: *">
                            <SelectMenu id="inputTipo" className="form-control" lista={tipos} value={tipo} onChange= { e=> setTipo(e.target.value)}/>
                        </FormGroup>

                        <button type="button" className="btn btn-success" onClick={buscar}>Buscar</button>
                        <button type="button" className="btn btn-danger">Cadastrar</button>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <LancamentosTable lancamentos={lancamentos} deleteAction={abrirConfirmacao} editAction={editar}/>
                </div>
            </div>
            <div>
                <Dialog header="Confirmação" visible={showDialog} style={{ width: '50vw' }} footer={footer} onHide={() => setShowDialog(false)} modal={true} >
                    <p>Confirma a exclusão deste lançamento?</p>
                </Dialog>
            </div>
        </Card>

    );
};

export default ConsultaLancamentos;