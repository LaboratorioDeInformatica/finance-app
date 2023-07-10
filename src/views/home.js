import React from "react";
import axios from "axios";
import UsuarioService from "../app/service/usuarioService";
import LocalStorageService from "../app/service/localstorageService";

class Home extends React.Component{

 


    state={
        saldo: 0
    }

    componentDidMount(){
        const service = new UsuarioService();
        const usuarioLogadoObjeto = LocalStorageService.getItem('_usuario_logado');
        service.obterSaldoPorUsuario(usuarioLogadoObjeto.id)
        .then(response => this.setState({saldo: response.data}))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div class="container">
                <div className="row">
                    <div className="col-md-12" >
                        <div className="bs-docs-section">
                            <div className="jumbotron">
                                <h1 className="display-3">Bem vindo!</h1>
                                <p className="lead">Esse é seu sistema de finanças.</p>
                                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                                <hr className="my-4"/>
                                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                                <p className="lead">
                                    <a className="btn btn-primary btn-lg" href="/cadastro-usuario" role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
                                    <a className="btn btn-danger btn-lg" href="/cadastro-lancamentos" role="button"><i className="fa fa-users"></i>  Cadastrar Lançamento</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;