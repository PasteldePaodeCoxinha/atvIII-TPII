import Entrada from "../io/entrada"
import Cliente from "../modelos/cliente"

export default abstract class Atualizar{
    protected entrada: Entrada
    protected atualizando!: Cliente
    constructor(){
        this.entrada = new Entrada()
    }

    abstract atualizar(): void
}