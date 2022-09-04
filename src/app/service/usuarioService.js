import ApiService from "../apiservice";
import ErroValidacao from "../exception/erroValidacao";

class UsuarioService extends ApiService{
    constructor(){
        super("/api/usuarios")
    }

    autenticar(credenciais){
        return this.post("/autenticar", credenciais)
    }

    obterSaldoPorIdUsuario(id){
        return this.get(`/${id}/saldo`)
    }

    salvar(usuario){
        return this.post("", usuario)
    }

    validar(usuario){
        const mensagens = []

        if (!usuario.nome){
            mensagens.push("O campo Nome é obrigatório.")
        }
        if (!usuario.email){
            mensagens.push("O campo Email é obrigatório.")
        }
        else if(!usuario.email.match(/^[a-z0-9.]+@[a-z0-8]+\.[a-z]/)){
            mensagens.push("Informe um Email válido.")
        }
        if (!usuario.senha || !usuario.senhaRepeticao){
            mensagens.push("Digite a senha 2x.")
        }
        else if (usuario.senha !== usuario.senhaRepeticao){
            mensagens.push("As senhas não batem.")
        }

        if (mensagens && mensagens.length > 0){
            throw new ErroValidacao(mensagens);
        }
    }

}

export default UsuarioService