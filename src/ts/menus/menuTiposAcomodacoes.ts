import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Menu from "../interfaces/menu";

export default class MenuTipoAcomodacoes implements Menu {

    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de acomodação você deseja? `)
        console.log(`----------------------`)
        console.log(`| 1 - ${NomeAcomadacao.SolteiroSimples}`)
        console.log(`| 2 - ${NomeAcomadacao.SolteiroMais}`)
        console.log(`| 3 - ${NomeAcomadacao.CasalSimples}`)
        console.log(`| 4 - ${NomeAcomadacao.FamilaSimples}`)
        console.log(`| 5 - ${NomeAcomadacao.FamiliaMais}`)
        console.log(`| 6 - ${NomeAcomadacao.FamiliaSuper}`)
        console.log(`----------------------`)
    }
}