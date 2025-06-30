import Cadastro from "../../abstracoes/cadastro";
import DiretorCasalSimples from "../../diretores/DiretorCasalSimples";
import DiretorFamiliaMais from "../../diretores/DiretorFamiliaMais";
import DiretorFamiliaSimples from "../../diretores/DiretorFamiliaSimples";
import DiretorFamiliaSuper from "../../diretores/DiretorFamiliaSuper";
import DiretorSolteiroMais from "../../diretores/DiretorSolteiroMais";
import DiretorSolteiroSimples from "../../diretores/DiretorSolteiroSimples";
import Armazem from "../../dominio/armazem";
import MenuTipoDocumento from "../../menus/menuTipoDocumento";
import MenuTipoAcomodacoes from "../../menus/menuTiposAcomodacoes";
import Acomodacao from "../../modelos/acomodacao";
import Cliente from "../../modelos/cliente";
import Hospedagem from "../../modelos/hospedagem";
import CadastroDocumento from "./CadastroDocumento";
import CadastroEndereco from "./CadastroEndereco";
import CadastroTelefone from "./CadastroTelefone";

export default class CadastroHospedagem extends Cadastro<Hospedagem> {
  constructor() {
    super();
  }

  cadastrar(): Hospedagem {
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

    new MenuTipoAcomodacoes().mostrar();

    let acomodacao: Acomodacao | undefined = undefined;
    while (!acomodacao) {
      const opcao = this.entrada.receberNumero(
        "Digite o número da acomodação que deseja:"
      );

      switch (opcao) {
        case 1:
          acomodacao = new DiretorSolteiroSimples().construir();
          break;

        case 2:
          acomodacao = new DiretorSolteiroMais().construir();
          break;

        case 3:
          acomodacao = new DiretorCasalSimples().construir();
          break;

        case 4:
          acomodacao = new DiretorFamiliaSimples().construir();
          break;

        case 5:
          acomodacao = new DiretorFamiliaMais().construir();
          break;

        case 6:
          acomodacao = new DiretorFamiliaSuper().construir();
          break;

        default:
          console.log("Opção não entendida!");
          break;
      }
    }

    const dataCheckIn = this.entrada.receberData("Digite a data de check-in:")

    const dataCheckOut = this.entrada.receberData("Digite a data do check-out:")

    return new Hospedagem(
      cliente,
      acomodacao,
      dataCheckIn,
      dataCheckOut
    );
  }
}
