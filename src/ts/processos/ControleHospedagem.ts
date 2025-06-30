import Navegar from "../abstracoes/navegar";
import MenuPrincipal from "../menus/menuPricipal";
import TipoAtualizar from "./atualizar/TipoAtualizar";
import TipoCadastro from "./cadastro/TipoCadastro";
import TipoExcluir from "./excluir/TipoExcluir";
import ListagemAcomodacoes from "./listagem/ListagemAcomodacoes";
import TipoListagem from "./listagem/TipoListagem";

export default class ControleHospedagem extends Navegar {
  constructor() {
    super();
    this.menu = new MenuPrincipal();
  }
  navegar(): void {
    let loop = true;

    while (loop) {
      this.menu.mostrar();
      this.opcao = this.entrada.receberNumero("Qual opção desejada:");
      switch (this.opcao) {
        case 0:
          loop = false;
          break;
        case 1:
          new TipoCadastro().navegar();
          break;
        case 2:
          new TipoListagem().navegar();
          break;
        case 3:
          new TipoAtualizar().navegar();
          break;
        case 4:
          new TipoExcluir().navegar();
          break;
        case 5:
          new ListagemAcomodacoes().listar();
          break;
        default:
          console.log("Opção não entendida :(");
      }
    }
  }
}
