import Menu from "../interfaces/menu";

export default class MenuTipoDocumento implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| Qual o tipo do documento para cadastro? `)
        console.log(`----------------------`)
        console.log(`| 1 - Cadastro de Pessoa Física`)
        console.log(`| 2 - Registro Geral`)
        console.log(`| 3 - Passaporte`)
        console.log(`----------------------`)
    }
}