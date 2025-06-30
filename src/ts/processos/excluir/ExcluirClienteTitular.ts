import Excluir from "../../abstracoes/excluir";
import Armazem from "../../dominio/armazem";

export default class ExcluirClienteTitular extends Excluir {
  constructor() {
    super();
  }

  excluir(): void {
    while (true) {
      const nome = this.entrada.receberTexto(
        "Digite o nome do titular que deseja excluir:"
      );

      const tamanhoAntigo = Armazem.InstanciaUnica.Clientes.length;

      Armazem.InstanciaUnica.DelClientes(nome);

      if (tamanhoAntigo === Armazem.InstanciaUnica.Clientes.length) {
        console.log("Não existe cliente com esse nome!");
      }

      if (
        this.entrada
          .receberTexto("Deseja excluir outro cliente (S/N):")
          .toLocaleLowerCase() === "n"
      ) {
        break;
      }
    }
  }
}
