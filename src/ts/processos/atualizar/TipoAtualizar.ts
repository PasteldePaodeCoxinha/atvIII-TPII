import Navegar from "../../abstracoes/navegar"
import MenuTipoAtualizarCliente from "../../menus/menuTipoAtualizarCliente"
import AtualizarClienteDependente from "./AtualizarClienteDependente"
import AtualizarClienteTitular from "./AtualizarClienteTitular"

export default class TipoAtualizar extends Navegar{
    constructor(){
        super()
        this.opcao = 0
        this.menu = new MenuTipoAtualizarCliente()
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
                    new AtualizarClienteTitular().atualizar()
                    break;
                case 2:
                    new AtualizarClienteDependente().atualizar()
                    break;
                default:
                    console.log("COMANDO NÃO RECONHECIDO!");
            }
        }
    }
}