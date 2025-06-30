import CadastroSuplementar from "../../abstracoes/cadastroSuplementar";
import Armazem from "../../dominio/armazem";
import MenuTipoDocumento from "../../menus/menuTipoDocumento";
import Cliente from "../../modelos/cliente";
import CadastroDocumento from "./CadastroDocumento";
import CadastroEndereco from "./CadastroEndereco";
import CadastroTelefone from "./CadastroTelefone";

export default class CadastroDependente extends CadastroSuplementar<
  Cliente,
  Cliente
> {
  constructor(titular: Cliente) {
    super(titular);
  }

  cadastrar(): Cliente {
    let nome = this.entrada.receberTexto("Digite o nome:");
    while (
      nome === "" ||
      this.responsavel.Dependentes.filter((c) => c.Nome === nome).length > 0
    ) {
      let msgNome = "";
      if (nome === "") {
        msgNome = "Digite um nome:";
      }
      if (
        this.responsavel.Dependentes.filter((c) => c.Nome === nome).length > 0
      ) {
        msgNome = "Esse nome já está cadastrado, digite outro:";
      }

      nome = this.entrada.receberTexto(msgNome);
    }

    const nomeSocial = this.entrada.receberTexto("Digite o nome social:");

    const dataNasc = this.entrada.receberData("Digite a data de nascimento");

    const dependente = new Cliente(nome, nomeSocial, new Date(dataNasc));

    const menuCadastroDocumento = new MenuTipoDocumento();
    const documentoCadastrar = new CadastroDocumento(dependente);
    while (true) {
      menuCadastroDocumento.mostrar();
      dependente.AddDocumento(documentoCadastrar.cadastrar());

      const continuarCadastroDocumento = this.entrada.receberTexto(
        "Continuar cadastro de documento (S/N):"
      );
      if (continuarCadastroDocumento.toLocaleLowerCase() === "n") {
        break;
      }
      if (dependente.Documentos.length >= 3) {
        console.log(
          "Um cliente pode ter apenas 3 documentos! Cancelando cadastro de documento."
        );
        break;
      }
    }

    if (
      this.entrada
        .receberTexto("Deseja cadastrar um telefone (S/N):")
        .toLocaleLowerCase() === "s"
    ) {
      const telefoneCadastrar = new CadastroTelefone(dependente);
      while (true) {
        dependente.AddTelefone(telefoneCadastrar.cadastrar());

        if (
          this.entrada
            .receberTexto("Continuar cadastro de telefone (S/N):")
            .toLocaleLowerCase() === "n"
        ) {
          break;
        }
        if (dependente.Telefones.length >= 2) {
          console.log(
            "Um cliente pode ter apenas 2 telefones! Cancelando cadastro de telefone."
          );
          break;
        }
      }
    } else {
      dependente.Telefones = this.responsavel.Telefones;
    }

    if (
      this.entrada
        .receberTexto("Deseja cadastrar um endereço (S/N):")
        .toLocaleLowerCase() === "s"
    ) {
      const enderecoCadastrar = new CadastroEndereco();
      dependente.Endereco = enderecoCadastrar.cadastrar();
    } else {
      dependente.Endereco = this.responsavel.Endereco
    }

    return dependente;
  }
}
