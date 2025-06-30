import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";

export default abstract class Excluir {
  protected entrada: Entrada;
  constructor() {
    this.entrada = new Entrada();
  }

  abstract excluir(): void;
}
