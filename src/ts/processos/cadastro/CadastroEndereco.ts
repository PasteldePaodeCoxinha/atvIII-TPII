import Cadastro from "../../abstracoes/cadastro";
import Endereco from "../../modelos/endereco";

export default class CadastroEndereco extends Cadastro<Endereco> {
  constructor() {
    super();
  }

  cadastrar(): Endereco {
    let rua = this.entrada.receberTexto("Digite a rua:")
    while (rua === "") {
        rua = this.entrada.receberTexto("Por favor, digite a rua:")
    }

    let bairro = this.entrada.receberTexto("Digite o bairro:")
    while (bairro === "") {
        bairro = this.entrada.receberTexto("Por favor, digite o bairro:")
    }

    let cidade = this.entrada.receberTexto("Digite a cidade:")
    while (cidade === "") {
        cidade = this.entrada.receberTexto("Por favor, digite a cidade:")
    }

    let estado = this.entrada.receberTexto("Digite o estado:")
    while (estado === "") {
        estado = this.entrada.receberTexto("Por favor, digite o estado:")
    }

    let pais = this.entrada.receberTexto("Digite o país:")
    while (pais === "") {
        pais = this.entrada.receberTexto("Por favor, digite o país:")
    }

    let cep = this.entrada.receberTexto("Digite o CEP:")
    while (cep === "") {
        cep = this.entrada.receberTexto("Por favor, digite o CEP:")
    }

    return new Endereco(rua, bairro, cidade, estado, pais, cep);
  }
}
