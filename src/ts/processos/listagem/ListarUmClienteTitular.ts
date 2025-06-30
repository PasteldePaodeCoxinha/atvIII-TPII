import Listagem from "../../abstracoes/listagem";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";

export default class ListarUmClienteTitular extends Listagem {
  constructor() {
    super();
  }

  listar(): void {
    while (true) {
      let nome = this.entrada.receberTexto(
        "Digite o nome do titular que deseja:"
      );
      let cliente = Armazem.InstanciaUnica.Clientes.find(
        (c) => c.Nome.toLocaleLowerCase() === nome.toLocaleLowerCase()
      );

      while (!cliente) {
        nome = this.entrada.receberTexto(
          "Não existe cliente com esse nome, digite outro nome:"
        );
        cliente = Armazem.InstanciaUnica.Clientes.find(
          (c) => c.Nome.toLocaleLowerCase() === nome.toLocaleLowerCase()
        );
      }

      console.log(new ImpressorCliente(cliente).imprimir());
      
      const continuarListarUmCliente = this.entrada.receberTexto("Deseja listar outro cliente (S/N):")
      if (continuarListarUmCliente.toLocaleLowerCase() !== "s") {
        break
      }
    }
  }
}
