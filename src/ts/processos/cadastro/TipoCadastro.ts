import Navegar from "../../abstracoes/navegar";
import Armazem from "../../dominio/armazem";
import MenuTipoCadastroCliente from "../../menus/menuTipoCadastroCliente";
import CadastroDependente from "./CadastroDependente";
import CadastroTitular from "./CadastroTitular";

export default class TipoCadastro extends Navegar {
  constructor() {
    super();
    this.opcao = 0;
    this.menu = new MenuTipoCadastroCliente();
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
          Armazem.InstanciaUnica.Clientes.push(
            new CadastroTitular().cadastrar()
          );
          break;

        case 2:
          let nome = this.entrada.receberTexto(
            "Digite o nome do titular que deseja:"
          );
          let titular = Armazem.InstanciaUnica.Clientes.find(
            (c) => c.Nome.toLocaleLowerCase() === nome.toLocaleLowerCase()
          );

          while (!titular) {
            nome = this.entrada.receberTexto(
              "Não existe cliente com esse nome, digite outro nome:"
            );
            titular = Armazem.InstanciaUnica.Clientes.find(
              (c) => c.Nome.toLocaleLowerCase() === nome.toLocaleLowerCase()
            );
          }
          titular.Dependentes.push(new CadastroDependente(titular).cadastrar());
          break;

        default:
          console.log("COMANDO NÃO RECONHECIDO!");
      }
    }
  }
}
