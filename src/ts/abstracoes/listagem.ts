import Entrada from "../io/entrada"

export default abstract class Listagem{
    protected entrada: Entrada
    constructor(){
        this.entrada = new Entrada()
    }

    abstract listar(): void
}