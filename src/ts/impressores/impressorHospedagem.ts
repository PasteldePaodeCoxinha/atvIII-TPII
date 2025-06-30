import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";
import Hospedagem from "../modelos/hospedagem";

export default class ImpressorHospedagem implements Impressor {
    private hospedagem: Hospedagem
    constructor(hospedagem: Hospedagem) {
        this.hospedagem = hospedagem
    }
    imprimir(): string {
        let descricao = `Cliente: ${this.hospedagem.getCliente.Nome}\n`
            + `-- Acomodação: ${this.hospedagem.getAcomodacao.NomeAcomadacao.toString()}\n`
            + `-- Check-In: ${this.hospedagem.getCheckIn.toLocaleDateString()}\n`
            + `-- Check-Out: ${this.hospedagem.getCheckOut.toLocaleDateString()}\n`
        return descricao
    }
}