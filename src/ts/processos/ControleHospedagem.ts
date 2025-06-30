import Navegar from "../abstracoes/navegar";
import Armazem from "../dominio/armazem";
import MenuControleHospedagem from "../menus/menuControleHospedagem";
import MenuPrincipal from "../menus/menuPricipal";
import TipoAtualizar from "./atualizar/TipoAtualizar";
import CadastroHospedagem from "./cadastro/CadastroHospedagem";
import TipoCadastro from "./cadastro/TipoCadastro";
import TipoExcluir from "./excluir/TipoExcluir";
import ListagemAcomodacoes from "./listagem/ListagemAcomodacoes";
import ListagemHospedagem from "./listagem/ListagemHospedagem";
import TipoListagem from "./listagem/TipoListagem";

export default class ControleHospedagem extends Navegar {
  constructor() {
    super();
    this.menu = new MenuControleHospedagem();
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
          Armazem.InstanciaUnica.Hospedagens.push(new CadastroHospedagem().cadastrar())
          break;
        case 2:
          new ListagemHospedagem().listar()
          break;
        case 3:
          console.log("3");
          break;
        default:
          console.log("Opção não entendida :(");
      }
    }
  }
}
