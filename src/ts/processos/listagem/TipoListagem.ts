import Navegar from "../../abstracoes/navegar";
import MenuTipoListagemClientes from "../../menus/menuTipoListagemClientes";
import ListarTodosClientesTitular from "./ListarTodosClientesTitular";
import ListarTodosDependentesDeTitular from "./ListarTodosDependentesDeTitular";
import ListarUmClienteTitular from "./ListarUmClienteTitular";
import ListarUmDependenteDeTitular from "./ListarUmDependenteDeTitular";

export default class TipoListagem extends Navegar{
    constructor(){
        super()
        this.opcao = 0
        this.menu = new MenuTipoListagemClientes()
    }

    navegar(): void {
        
        let loop = true
        while (loop) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero(`Digite sua opção:`)
            
            switch (this.opcao) {
                case 0:
                    loop = false
                    break;
                case 1:
                    new ListarTodosClientesTitular().listar()
                    break;
                case 2:
                    new ListarUmClienteTitular().listar()
                    break;
                case 3:
                    new ListarTodosDependentesDeTitular().listar()
                    break;
                case 4:
                    new ListarUmDependenteDeTitular().listar()
                    break;
                default:
                    console.log("COMANDO NÃO RECONHECIDO!");
            }
        }
    }
}