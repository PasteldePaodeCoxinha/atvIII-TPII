import Menu from "../interfaces/menu";

export default class MenuControleHospedagem implements Menu {

    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Selecione a opção... `)
        console.log(`----------------------`)
        console.log(`| 0 - Voltar`)
        console.log(`| 1 - Cadastrar hospedagem`)
        console.log(`| 2 - Listar hospedagens`)
        console.log(`| 3 - Pesquisar hospedagem de cliente`)
        console.log(`| 4 - Excluir hospedagem`)
        console.log(`----------------------`)
    }
}