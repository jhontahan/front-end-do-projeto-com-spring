import LocalStorageService from "./localstorageService";
import jwtDecode from "jwt-decode";
import ApiService from "../apiservice";

export const USUARIO_LOGADO = "_usuario_logado"

export const TOKEN = "access_token"

export default class AuthService {
    static isUsuarioAutenticado(){
        const token = LocalStorageService.obterItem(TOKEN);
        if (token){
            const claims = jwtDecode(token);
            const expiration = claims.exp;
            const isTokenInvalido = Date.now() >= (expiration * 1000);
    
            return !isTokenInvalido;
        }

    }

    static removerUsuarioAutenticado(){
        LocalStorageService.removerItem(USUARIO_LOGADO);
        LocalStorageService.removerItem(TOKEN);
    }

    static logar(usuario, token){
        LocalStorageService.adicionarItem(USUARIO_LOGADO, usuario);
        LocalStorageService.adicionarItem(TOKEN, token);

        ApiService.registrarToken(token);
    }

    static obterItemUsuarioAutenticado(){
        return LocalStorageService.obterItem(USUARIO_LOGADO);
    }

    static refresSession(){
        const token = LocalStorageService.obterItem(TOKEN);
        const usuario = AuthService.obterItemUsuarioAutenticado();
        AuthService.logar(usuario, token);

        return usuario;
    }

}