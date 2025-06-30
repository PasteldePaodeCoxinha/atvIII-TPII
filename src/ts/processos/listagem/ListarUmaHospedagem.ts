import Listagem from "../../abstracoes/listagem";
import Armazem from "../../dominio/armazem";
import ImpressorHospedagem from "../../impressores/impressorHospedagem";

export default class ListarUmaHospedagem extends Listagem {
  constructor() {
    super();
  }

  listar(): void {
    while (true) {
      let nome = this.entrada.receberTexto(
        "Digite o nome do titular que deseja:"
      );

      let hospedagem = Armazem.InstanciaUnica.Hospedagens.find(
        (h) =>
          h.getCliente.Nome.toLocaleLowerCase() === nome.toLocaleLowerCase()
      );

      while (!hospedagem) {
        nome = this.entrada.receberTexto(
          "Não existe hospedagem com esse cliente, digite outro nome:"
        );

        hospedagem = Armazem.InstanciaUnica.Hospedagens.find(
          (h) =>
            h.getCliente.Nome.toLocaleLowerCase() === nome.toLocaleLowerCase()
        );
      }

      console.log(new ImpressorHospedagem(hospedagem).imprimir());

      const continuarListarHospedagem = this.entrada.receberTexto(
        "Deseja listar outra hospedagem (S/N):"
      );
      if (continuarListarHospedagem.toLocaleLowerCase() !== "s") {
        break;
      }
    }
  }
}
