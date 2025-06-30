import Listagem from "../../abstracoes/listagem";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";

export default class ListarUmDependenteDeTitular extends Listagem {
  constructor() {
    super();
  }

  listar(): void {
    while (true) {
      let nomeTitular = this.entrada.receberTexto(
        "Digite o nome do titular que deseja:"
      );
      let titular = Armazem.InstanciaUnica.Clientes.find(
        (c) => c.Nome.toLocaleLowerCase() === nomeTitular.toLocaleLowerCase()
      );

      while (!titular) {
        nomeTitular = this.entrada.receberTexto(
          "Não existe cliente com esse nome, digite outro nome:"
        );
        titular = Armazem.InstanciaUnica.Clientes.find(
          (c) => c.Nome.toLocaleLowerCase() === nomeTitular.toLocaleLowerCase()
        );
      }

      let nomeDependente = this.entrada.receberTexto(
        "Digite o nome do dependente:"
      );
      let dependente = titular.Dependentes.find(
        (c) => c.Nome.toLocaleLowerCase() === nomeDependente.toLocaleLowerCase()
      );

      while (!dependente) {
        nomeDependente = this.entrada.receberTexto(
          "Não existe cliente com esse nome, digite outro nome:"
        );
        dependente = titular.Dependentes.find(
          (c) =>
            c.Nome.toLocaleLowerCase() === nomeDependente.toLocaleLowerCase()
        );
      }

      console.log(new ImpressorCliente(dependente).imprimir());

      if (
        this.entrada
          .receberTexto("Deseja listar outro cliente (S/N):")
          .toLocaleLowerCase() !== "s"
      ) {
        break;
      }
    }
  }
}
