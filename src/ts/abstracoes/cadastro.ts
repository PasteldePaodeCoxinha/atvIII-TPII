import Entrada from "../io/entrada"

export default abstract class Cadastro<S>{
    protected entrada: Entrada
    protected cadastrando!: S
    constructor(){
        this.entrada = new Entrada()
    }

    abstract cadastrar(): S
}