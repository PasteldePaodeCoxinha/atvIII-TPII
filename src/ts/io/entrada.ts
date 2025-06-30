import promptSync from "prompt-sync";

export default class Entrada {
  public receberNumero(mensagem: string): number {
    let prompt = promptSync();
    let valor = prompt(`${mensagem} `);
    
    let numero = new Number(valor).valueOf();
    while (isNaN(numero)) {
      valor = prompt("Valor invalido, digite novamento: ")
      numero = new Number(valor).valueOf();
    }

    return numero.valueOf();
  }
  public receberTexto(mensagem: string): string {
    let prompt = promptSync();
    let texto = prompt(`${mensagem} `);
    return texto;
  }
  public receberData(mensagem: string): Date {
    const prompt = promptSync();
    let texto = prompt(`${mensagem}, no padrão dd/MM/yyyy: `);

    let partes = texto.split("/");
    let ano = new Number(partes[2]);
    let mes = new Number(partes[1]);
    let dia = new Number(partes[0]);

    while (true) {
      const data = new Date(ano.valueOf(), mes.valueOf() - 1, dia.valueOf());

      if (!isNaN(data.getTime())) {
        return data;
      } else {
        texto = prompt(
          `Data invalida, digite novamente no padrão dd/MM/yyyy: `
        );

        partes = texto.split("/");
        ano = new Number(partes[2]);
        mes = new Number(partes[1]);
        dia = new Number(partes[0]);
      }
    }
  }
}
