import Cadastro from "../../abstracoes/cadastro";
import Armazem from "../../dominio/armazem";
import MenuTipoDocumento from "../../menus/menuTipoDocumento";
import Cliente from "../../modelos/cliente";
import CadastroDocumento from "./CadastroDocumento";
import CadastroEndereco from "./CadastroEndereco";
import CadastroTelefone from "./CadastroTelefone";

export default class CadastroTitular extends Cadastro<Cliente> {
  constructor() {
    super();
  }

  cadastrar(): Cliente {
    let nome = this.entrada.receberTexto("Digite o nome:");
    while (
      nome === "" ||
      Armazem.InstanciaUnica.Clientes.filter((c) => c.Nome === nome).length > 0
    ) {
      let msgNome = "";
      if (nome === "") {
        msgNome = "Digite um nome:";
      }
      if (
        Armazem.InstanciaUnica.Clientes.filter((c) => c.Nome === nome).length >
        0
      ) {
        msgNome = "Esse nome já está cadastrado, digite outro:";
      }

      nome = this.entrada.receberTexto(msgNome);
    }

    const nomeSocial = this.entrada.receberTexto("Digite o nome social:");

    const dataNasc = this.entrada.receberData("Digite a data de nascimento");

    this.cadastrando = new Cliente(nome, nomeSocial, new Date(dataNasc));

    const menuCadastroDocumento = new MenuTipoDocumento();
    const documentoCadastrar = new CadastroDocumento(this.cadastrando);
    while (true) {
      menuCadastroDocumento.mostrar();
      this.cadastrando.AddDocumento(documentoCadastrar.cadastrar());

      const continuarCadastroDocumento = this.entrada.receberTexto(
        "Continuar cadastro de documento (S/N):"
      );
      if (continuarCadastroDocumento.toLocaleLowerCase() === "n") {
        break;
      }
      if (this.cadastrando.Documentos.length >= 3) {
        console.log(
          "Um cliente pode ter apenas 3 documentos! Cancelando cadastro de documento."
        );
        break;
      }
    }

    const telefoneCadastrar = new CadastroTelefone(this.cadastrando);
    while (true) {
      this.cadastrando.AddTelefone(telefoneCadastrar.cadastrar());

      const continuarCadastroTelefone = this.entrada.receberTexto(
        "Continuar cadastro de telefone (S/N):"
      );
      if (continuarCadastroTelefone.toLocaleLowerCase() === "n") {
        break;
      }
      if (this.cadastrando.Telefones.length >= 2) {
        console.log(
          "Um cliente pode ter apenas 2 telefones! Cancelando cadastro de telefone."
        );
        break;
      }
    }
    
    const enderecoCadastrar = new CadastroEndereco();
    this.cadastrando.Endereco = enderecoCadastrar.cadastrar();

    return this.cadastrando;
  }
}
