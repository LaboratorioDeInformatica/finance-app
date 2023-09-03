import LocalStorageService from "./localstorageService";

class AuthService {
    static isUsuarioAutenticado() {
        const usuario = LocalStorageService.getItem('_usuario_logado');
        return usuario && usuario.id;
    }

    static removerUsuarioAutenticado() {
        debugger
        LocalStorageService.removerItem('_usuario_logado');
    }

    static logar(usuario) {
        LocalStorageService.addItem('_usuario_logado', usuario);
    }

    static obterUsuarioAutenticado() {
        return LocalStorageService.getItem('_usuario_logado');
    }
}

export default AuthService;