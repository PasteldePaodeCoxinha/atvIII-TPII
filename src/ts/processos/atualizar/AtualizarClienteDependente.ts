import Atualizar from "../../abstracoes/atualizar";
import Armazem from "../../dominio/armazem";
import MenuTipoDocumento from "../../menus/menuTipoDocumento";
import CadastroDocumento from "../cadastro/CadastroDocumento";
import CadastroEndereco from "../cadastro/CadastroEndereco";
import CadastroTelefone from "../cadastro/CadastroTelefone";

export default class AtualizarClienteDependente extends Atualizar {
  constructor() {
    super();
  }

  atualizar(): void {
    let nomeTitular = this.entrada.receberTexto(
      "Digite o nome do titular que deseja:"
    );
    let titular = Armazem.InstanciaUnica.Clientes.find(
      (c) => c.Nome.toLocaleLowerCase() === nomeTitular.toLocaleLowerCase()
    );

    while (!titular) {
      nomeTitular = this.entrada.receberTexto(
        "Não existe cliente com esse nome, digite outro nome:"
      );
      titular = Armazem.InstanciaUnica.Clientes.find(
        (c) => c.Nome.toLocaleLowerCase() === nomeTitular.toLocaleLowerCase()
      );
    }

    let nomeDependente = this.entrada.receberTexto(
      "Digite o nome do dependente que deseja:"
    );
    let dependente = titular.Dependentes.find(
      (c) => c.Nome.toLocaleLowerCase() === nomeDependente.toLocaleLowerCase()
    );

    while (!dependente) {
      nomeDependente = this.entrada.receberTexto(
        "Não existe cliente com esse nome, digite outro nome:"
      );
      dependente = titular.Dependentes.find(
        (c) => c.Nome.toLocaleLowerCase() === nomeDependente.toLocaleLowerCase()
      );
    }

    this.atualizando = dependente;

    if (
      this.entrada
        .receberTexto("Deseja alterar o nome (S/N):")
        .toLocaleLowerCase() === "s"
    ) {
      let nome = this.entrada.receberTexto("Digite o nome:");
      while (
        nome === "" ||
        titular.Dependentes.filter((c) => c.Nome === nome).length >
          0
      ) {
        let msgNome = "";
        if (nome === "") {
          msgNome = "Digite um nome:";
        }
        if (
          titular.Dependentes.filter((c) => c.Nome === nome)
            .length > 0
        ) {
          msgNome = "Esse nome já está cadastrado, digite outro:";
        }

        nome = this.entrada.receberTexto(msgNome);
      }

      this.atualizando.Nome = nome;
    }

    if (
      this.entrada
        .receberTexto("Deseja alterar o nome social(S/N):")
        .toLocaleLowerCase() === "s"
    ) {
      let nomeSocial = this.entrada.receberTexto("Digite o nome social:");
      while (nomeSocial === "") {
        nomeSocial = this.entrada.receberTexto("Digite um nome:");
      }

      this.atualizando.NomeSocial = nomeSocial;
    }

    if (
      this.entrada
        .receberTexto("Deseja cadastrar mais um documento (S/N):")
        .toLocaleLowerCase() === "s"
    ) {
      const menuCadastroDocumento = new MenuTipoDocumento();
      const documentoCadastrar = new CadastroDocumento(this.atualizando);
      while (true) {
        if (this.atualizando.Documentos.length >= 3) {
          console.log(
            "Um cliente pode ter apenas 3 documentos! Cancelando cadastro de documento."
          );
          break;
        }

        menuCadastroDocumento.mostrar();
        this.atualizando.AddDocumento(documentoCadastrar.cadastrar());

        const continuarCadastroDocumento = this.entrada.receberTexto(
          "Continuar cadastro de documento (S/N):"
        );
        if (continuarCadastroDocumento.toLocaleLowerCase() === "n") {
          break;
        }
      }
    }

    if (
      this.entrada
        .receberTexto("Deseja editar um telefone (S/N):")
        .toLocaleLowerCase() === "s"
    ) {
      const telefoneCadastrar = new CadastroTelefone(this.atualizando);
      while (true) {
        const numeroAntigo = this.entrada.receberTexto(
          "Digite o número do telefone que deseja editar:"
        );

        this.atualizando.EdiTelefone(
          numeroAntigo,
          telefoneCadastrar.cadastrar()
        );

        if (
          this.entrada
            .receberTexto("Deseja sair da edição de telefone (S/N):")
            .toLocaleLowerCase() === "s"
        ) {
          break;
        }
      }
    }

    if (
      this.entrada
        .receberTexto("Deseja cadastrar um novo telefone (S/N):")
        .toLocaleLowerCase() === "s"
    ) {
      const telefoneNovoCadastrar = new CadastroTelefone(this.atualizando);
      while (true) {
        if (this.atualizando.Telefones.length >= 2) {
          console.log(
            "Um cliente pode ter apenas 2 telefones! Cancelando cadastro de telefone."
          );
          break;
        }

        this.atualizando.AddTelefone(telefoneNovoCadastrar.cadastrar());

        if (
          this.entrada
            .receberTexto("Continuar cadastro de telefone (S/N):")
            .toLocaleLowerCase() === "n"
        ) {
          break;
        }
      }
    }

    if (
      this.entrada
        .receberTexto("Deseja deletar um telefone (S/N):")
        .toLocaleLowerCase() === "s"
    ) {
      while (true) {
        if (this.atualizando.Telefones.length <= 1) {
          console.log(
            "Cliente precisa de pelo menos um telefone, cancelando deleção de telefone!"
          );
          break;
        }

        const numeroTel = this.entrada.receberTexto(
          "Digite o número de telefone que deseja excluir (S/N):"
        );

        const tamanhoAntigo = this.atualizando.Telefones.length;
        this.atualizando.Telefones = this.atualizando.Telefones.filter(
          (t) => t.Numero !== numeroTel
        );

        if (this.atualizando.Telefones.length === tamanhoAntigo) {
          console.log("Não existe telefone com esse número!");
        }

        if (
          this.entrada
            .receberTexto("Deseja deletar outro telefone (S/N):")
            .toLocaleLowerCase() === "n"
        ) {
          break;
        }
      }
    }

    if (
      this.entrada
        .receberTexto("Deseja editar o endereço (S/N):")
        .toLocaleLowerCase() === "s"
    ) {
      const enderecoEditar = new CadastroEndereco();
      this.atualizando.Endereco = enderecoEditar.cadastrar();
    }
  }
}
