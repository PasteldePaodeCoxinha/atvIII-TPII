import Navegar from "../../abstracoes/navegar";
import Armazem from "../../dominio/armazem";
import MenuTipoExcluirCliente from "../../menus/menuTipoExcluirCliente";
import ExcluirClienteDependente from "./ExcluirClienteDependente";
import ExcluirClienteTitular from "./ExcluirClienteTitular";

export default class TipoExcluir extends Navegar {
  constructor() {
    super();
    this.opcao = 0;
    this.menu = new MenuTipoExcluirCliente();
  }

  navegar(): void {
    let loop = true;
    while (loop) {
      this.menu.mostrar();
      this.opcao = this.entrada.receberNumero(`Digite sua opção:`);

      switch (this.opcao) {
        case 0:
          loop = false;
          break;
        case 1:
          new ExcluirClienteTitular().excluir();
          break;
        case 2:
          new ExcluirClienteDependente().excluir()
          break;
        default:
          console.log("COMANDO NÃO RECONHECIDO!");
      }
    }
  }
}
