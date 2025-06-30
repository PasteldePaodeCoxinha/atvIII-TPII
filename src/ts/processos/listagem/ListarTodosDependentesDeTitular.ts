import Listagem from "../../abstracoes/listagem";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";

export default class ListarTodosDependentesDeTitular extends Listagem {
  constructor() {
    super();
  }

  listar(): void {
    while (true) {
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

      titular.Dependentes.forEach((c) => {
        console.log(new ImpressorCliente(c).imprimir());
      });

      this.entrada.receberTexto(
        "Digite qualquer botão para sair da listagem:"
      );

      break;
    }
  }
}
