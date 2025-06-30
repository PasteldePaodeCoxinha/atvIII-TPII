import Cadastro from "../../abstracoes/cadastro";
import DiretorSolteiroSimples from "../../diretores/DiretorSolteiroSimples";
import Armazem from "../../dominio/armazem";
import Acomodacao from "../../modelos/acomodacao";

export default class CadastroAcomodacoes extends Cadastro<Acomodacao> {
    constructor() {
        super()
    }
    cadastrar(): Acomodacao {
        let diretor = new DiretorSolteiroSimples()
        return diretor.construir()
    }
}