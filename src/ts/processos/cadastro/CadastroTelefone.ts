import Cadastro from "../../abstracoes/cadastro";
import CadastroSuplementar from "../../abstracoes/cadastroSuplementar";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class CadastroTelefone extends CadastroSuplementar<
  Telefone,
  Cliente
> {
  constructor(responsavel: Cliente) {
    super(responsavel);
  }

  cadastrar(): Telefone {
    const ddd = this.entrada.receberTexto("Digite o ddd:")

    let tel = this.entrada.receberTexto("Digite o telefone:")
    while (this.responsavel.Telefones.filter(t => t.Numero === tel).length > 0) {
      tel = this.entrada.receberTexto("Cliente já com esse número cadastrado, digite outro:")
    }

    return new Telefone(ddd, tel);
  }
}
