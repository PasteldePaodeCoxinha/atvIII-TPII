import Cadastro from "../../abstracoes/cadastro";
import CadastroSuplementar from "../../abstracoes/cadastroSuplementar";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";

export default class CadastroDocumento extends CadastroSuplementar<
  Documento,
  Cliente
> {
  constructor(responsavel: Cliente) {
    super(responsavel);
  }

  cadastrar(): Documento {
    while (true) {
      let opcao = this.entrada.receberNumero("Digite aqui:");
      switch (opcao) {
        case 1:
          if (
            this.responsavel.Documentos.filter(
              (d) => d.Tipo.valueOf() === TipoDocumento.CPF.valueOf()
            ).length >= 1
          ) {
            console.log("Cliente com CPF já cadastrado!");
          } else {
            const tipoDocumentoCpf = TipoDocumento.CPF;
            const numeroCpf = this.entrada.receberTexto(
              "Digite o número do CPF:"
            );
            const dataExpedicaoCpf = this.entrada.receberData(
              "Digite a data de expedição"
            );

            return new Documento(numeroCpf, tipoDocumentoCpf, dataExpedicaoCpf);
          }
          break;

        case 2:
          if (
            this.responsavel.Documentos.filter(
              (d) => d.Tipo.valueOf() === TipoDocumento.RG.valueOf()
            ).length >= 1
          ) {
            console.log("Permitido apenas um RG!");
          } else {
            const tipoDocumentoRg = TipoDocumento.RG;
            const numeroRg = this.entrada.receberTexto(
              "Digite o número do RG:"
            );
            const dataExpedicaoRg = this.entrada.receberData(
              "Digite a data de expedição"
            );

            return new Documento(numeroRg, tipoDocumentoRg, dataExpedicaoRg);
          }
          break;

        case 3:
          if (
            this.responsavel.Documentos.filter(
              (d) => d.Tipo.valueOf() === TipoDocumento.Passaporte.valueOf()
            ).length >= 1
          ) {
            console.log("Permitido apenas um Passaporte");
          } else {
            const tipoDocumentoPassaporte = TipoDocumento.Passaporte;
            const numeroPassaporte = this.entrada.receberTexto(
              "Digite o número do Passaporte:"
            );
            const dataExpedicaoPassaporte = this.entrada.receberData(
              "Digite a data de expedição"
            );

            return new Documento(
              numeroPassaporte,
              tipoDocumentoPassaporte,
              dataExpedicaoPassaporte
            );
          }
          break;

        default:
          console.log("COMANDO NÃO RECONHECIDO!");
          break;
      }
    }
  }
}
