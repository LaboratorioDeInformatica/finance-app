import React, { createContext } from "react"; // Import useEffect
import AuthService from "../app/service/authService";

export const AuthContext = createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

class ProvedorAutenticacao extends React.Component {

    state = {
        usuarioAutenticado: null,
        isAuthenticated: false
    }

    iniciarSessao = (usuario) => {
        AuthService.logar(usuario);
        this.setState({ isAuthenticated: true, usuarioAutenticado: usuario })
    }

    encerrarSessao = () => {
        AuthService.removerUsuarioAutenticado();
        this.setState({ isAuthenticated: false, usuarioAutenticado: null })
    }
 
  render() {
    const context = {
        usuarioAutenticado: this.state.usuarioAutenticado,
        isAuthenticated: this.state.isAuthenticated,
        iniciarSessao: this.iniciarSessao,
        encerrarSessao: this.encerrarSessao
    }
    return (
        <AuthProvider value={context} >
            {this.props.children}
        </AuthProvider>
    )
  }

}

export default ProvedorAutenticacao;
