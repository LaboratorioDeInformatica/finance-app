import React, { useState, useEffect } from "react";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import LancamentoService from "../../app/service/lancamentoService";
import SelectMenu from "../../components/select-menu";
import { mensagemErro, mensagemSucesso } from "../../components/toastr";
import LocalStorageService from "../../app/service/localstorageService";
import { useNavigate, useParams } from "react-router-dom";


const Cadastrolancamento = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [mes, setMes] = useState("");
    const [ano, setAno] = useState("");
    const [tipos, setTipos] = useState([]);
    const [meses, setMeses] = useState([]);
    const [status, setStatus] = useState("");
    const [usuario, setUsuario] = useState("");
    

    useEffect(() => {
        
        if(id){
            const service = new LancamentoService();
            service.obterPorId(id)
            .then(response => {
                setTipo(response.data.tipo);
                setDescricao(response.data.descricao);
                setValor(response.data.valor);
                setMes(response.data.mes);
                setAno(response.data.ano);
                setStatus(response.data.status);
                setUsuario(response.data.usuario);
            }).catch(error => {
                mensagemErro(error.response.data);
            })
        }

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
      }, [id]);

      const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "inputDescricao":
                setDescricao(value);
                break;
            case "inputMes":
                setMes(value);
                break;
            case "inputAno":
                setAno(value);
                break;
            case "inputValor":
                setValor(value);
                break;
            case "inputTipo":
                setTipo(value);
                break;
            
            
            // ... repeat for other inputs
            default:
                break;
        }
    };
  


    const submit = async () => {

        const usuarioLogadoObjeto = LocalStorageService.getItem('_usuario_logado');
        const service = new LancamentoService();
        const lancamento = {
          descricao: descricao,
          valor: valor,
          mes: mes,
          ano: ano,
          tipo: tipo,
          usuario: usuarioLogadoObjeto.id,
          id: id // Set the ID here
        };

        try{
            await service.validar(lancamento);
        }catch(error){
            const msgs = error.errors;
            msgs.forEach(msg => mensagemErro(msg));
            return false;
        }

     
    
        try {
          const response = await service.salvar(lancamento);
          mensagemSucesso('Lançamento cadastrado com sucesso!');
          // Redirect to "/consulta-lancamento"
          navigate("/consulta-lancamentos");
        } catch (error) {
          if (error.response && error.response.data) {
            mensagemErro(error.response.data);
          } else {
            console.error("An error occurred:", error);
          }
        }
      };


    const atualizar = async () => {
        const service = new LancamentoService();
        const lancamento = {
          descricao: descricao,
          valor: valor,
          mes: mes,
          ano: ano,
          tipo: tipo,
          usuario:usuario,
          id: id, // Set the ID here,
          status: status
        };
        try {
          const response = await service.atualizar(lancamento);
          mensagemSucesso('Lançamento atualizado com sucesso!');
          // Redirect to "/consulta-lancamento"
          navigate("/consulta-lancamentos");
        } catch (error) {
          if (error.response && error.response.data) {
            mensagemErro(error.response.data);
          } else {
            console.error("An error occurred:", error);
          }
        }
      };
    
      const handleCancelarClick = () => {
        navigate("/consulta-lancamentos");
    };

    return (
        <Card title={id ? 'Atualização de Lançamaneto' : 'Cadastro de Lançamento'} >
            <div className="row">
                <div className="col-md-12">
                    <div className="bs-component">
                        <FormGroup htmlFor="inputDescricao" label="Descrição: *">
                            <input type="text"
                                className="form-control"
                                id="inputDescricao"
                                name="inputDescricao"
                                value={descricao}
                                onChange={handleChange}
                                placeholder="Digite a Descrição" />
                        </FormGroup>                   
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-6">
                    <div className="bs-component">
                    <FormGroup htmlFor="inputMes" label="Mês: *">
                            <SelectMenu id="inputMes" className="form-control" lista={meses} name="inputMes"
                            value={mes}  onChange={handleChange} />
                        </FormGroup>
                    </div>
            </div>
            <div className="col-md-6">
                <div className="bs-component">     
                        <FormGroup htmlFor="inputAno" label="Ano: *">
                            <input type="text"
                                className="form-control"
                                id="inputAno"
                                name="inputAno"
                                value={ano}
                                onChange={handleChange}
                                placeholder="Digite o ano" />
                        </FormGroup>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-4">
                    <div className="bs-component">
                        <FormGroup htmlFor="inputValor" label="Valor: *">
                            <input type="text"
                                className="form-control"
                                id="inputValor"
                                value={valor}
                                name="inputValor"
                                onChange={handleChange}
                                placeholder="Digite o valor" />
                        </FormGroup>
                    </div>
            </div>
            <div className="col-md-4">
                    <div className="bs-component">
                    <FormGroup htmlFor="inputTipo" label="Tipo de Lançamento: *">
                            <SelectMenu id="inputTipo" className="form-control" lista={tipos} value={tipo}  onChange={handleChange} name="inputTipo"/>
                        </FormGroup>
                    </div>
            </div>
            <div className="col-md-4">
                    <div className="bs-component">
                        <FormGroup htmlFor="inputStatus" label="Status: *">
                            <input type="text"
                                className="form-control"
                                id="inputStatus"
                                value={tipo}
                                name="inputStatus"
                                onChange={e => setTipo(e.target.value)}
                                placeholder="Digite o status" disabled />
                        </FormGroup>
                    </div>
            </div>


            </div>
            <div>
                {
                    id ? (
                        <button onClick={atualizar} type="button" className="btn btn-success" style={{ marginTop: '10px' , marginRight: '10px'}}>
                            <i className="pi pi-refresh"></i>Atualizar</button>
                    ) : (
                        <button onClick={submit} type="button" className="btn btn-success" style={{ marginTop: '10px' , marginRight: '10px'}}>
                              <i className="pi pi-save"></i> Salvar</button>
                    )
                }

            <button onClick={handleCancelarClick} type="button" className="btn btn-danger" style={{ marginTop: '10px' }}>
            <i className="pi pi-times"></i>Cancelar</button>
            </div>


            
        </Card>
    );
  
}

export default Cadastrolancamento;