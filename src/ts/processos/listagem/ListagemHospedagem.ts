import Listagem from "../../abstracoes/listagem";
import Armazem from "../../dominio/armazem";
import ImpressorHospedagem from "../../impressores/impressorHospedagem";

export default class ListagemHospedagem extends Listagem {
  constructor() {
    super();
  }

  listar(): void {
    while (true) {
      Armazem.InstanciaUnica.Hospedagens.forEach((h) => {
        console.log(new ImpressorHospedagem(h).imprimir());
      });

      this.entrada.receberTexto("Digite enter para sair da listagem:");

      break;
    }
  }
}
