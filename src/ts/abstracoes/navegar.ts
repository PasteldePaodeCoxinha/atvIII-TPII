import Menu from "../interfaces/menu";
import Entrada from "../io/entrada";

export default abstract class Navegar {
    protected entrada: Entrada
    protected opcao!: number
    protected menu!: Menu

    constructor(){
        this.entrada = new Entrada()
    }
    
    abstract navegar(): void
}