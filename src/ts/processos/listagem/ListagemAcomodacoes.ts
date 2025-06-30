import Armazem from "../../dominio/armazem";
import ImpressorAcomodacao from "../../impressores/impressorAcomodacao";
import Impressor from "../../interfaces/impressor";
import Acomodacao from "../../modelos/acomodacao";
import Listagem from "../../abstracoes/listagem";

export default class ListagemAcomodacoes extends Listagem {
    private acomodacoes: Acomodacao[]
    private impressor!: Impressor
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    listar(): void {
        console.clear()
        console.log('Iniciando a listagem das acomodações ofertadas...')
        console.log(`-------------------------------------------------`)
        this.acomodacoes.forEach(acomodacao => {
            this.impressor = new ImpressorAcomodacao(acomodacao)
            console.log(this.impressor.imprimir())
            console.log(`-------------------------------------------------`)
        })

        this.entrada.receberTexto("Aperte enter para sair:")
    }
}