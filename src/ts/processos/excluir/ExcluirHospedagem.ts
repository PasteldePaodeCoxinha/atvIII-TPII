import Excluir from "../../abstracoes/excluir";
import Armazem from "../../dominio/armazem";

export default class ExcluirHospedagem extends Excluir {
  constructor() {
    super();
  }

  excluir(): void {
    while (true) {
      const nome = this.entrada.receberTexto(
        "Digite o nome do titular que deseja excluir:"
      );

      const tamanhoAntigo = Armazem.InstanciaUnica.Hospedagens.length;

      Armazem.InstanciaUnica.DelHospedagens(nome);

      if (tamanhoAntigo === Armazem.InstanciaUnica.Hospedagens.length) {
        console.log("Não existe hospedagens com esse cliente!");
      }

      if (
        this.entrada
          .receberTexto("Deseja excluir outra hospedagem (S/N):")
          .toLocaleLowerCase() === "n"
      ) {
        break;
      }
    }
  }
}