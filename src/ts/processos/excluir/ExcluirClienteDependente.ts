import Excluir from "../../abstracoes/excluir";
import Armazem from "../../dominio/armazem";

export default class ExcluirClienteDependente extends Excluir {
  constructor() {
    super();
  }

  excluir(): void {
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
        "Digite o nome do dependente que deseja excluir:"
      );

      while (
        nomeDependente === "" ||
        titular.Dependentes.filter((c) => c.Nome === nomeDependente).length <= 0
      ) {
        let msgNome = "";
        if (nomeDependente === "") {
          msgNome = "Digite um nome:";
        }
        if (
          titular.Dependentes.filter((c) => c.Nome === nomeDependente).length <=
          0
        ) {
          msgNome = "Esse nome não está cadastrado, digite outro:";
        }

        nomeDependente = this.entrada.receberTexto(msgNome);
      }

      titular.Dependentes = titular.Dependentes.filter(
        (c) => c.Nome !== nomeDependente
      );

      if (
        this.entrada
          .receberTexto("Deseja excluir outro dependente (S/N):")
          .toLocaleLowerCase() === "n"
      ) {
        break;
      }
    }
  }
}
