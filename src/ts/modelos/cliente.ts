import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[]
    private titular!: Cliente

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
        this.dependentes = []
    }

    public get Nome() { return this.nome }
    public get NomeSocial() { return this.nomeSocial }
    public get DataNascimento() { return this.dataNascimento }
    public get DataCadastro() { return this.dataCadastro }
    public get Telefones() { return this.telefones }
    public get Endereco() { return this.endereco }
    public get Documentos() { return this.documentos }
    public get Dependentes() { return this.dependentes }
    public get Titular() { return this.titular }

    public set Nome(nome: string) { this.nome = nome }
    public set NomeSocial(nomeSocial: string) { this.nomeSocial = nomeSocial }
    public set Telefones(telefones: Telefone[]) { this.telefones = telefones }
    public set Documento(documentos: Documento[]) { this.documentos = documentos }
    public set Endereco(endereco: Endereco) { this.endereco = endereco }
    public set Dependentes(dependentes: Cliente[]) { this.dependentes = dependentes }

    public AddTelefone(telefone: Telefone) { this.telefones.push(telefone) }
    public AddDocumento(documento: Documento) { this.documentos.push(documento) }
    public AddDependente(cliente: Cliente) { this.dependentes.push(cliente) }

    public EdiTelefone(numero: string, novoTel: Telefone) {
        let telefone = this.telefones.find(t => t.Numero == numero)
        if (telefone) {
            telefone.Ddd = novoTel.Ddd
            telefone.Numero = novoTel.Numero
        } else {
            console.log("Telefone não encontrado!");
        }
    }
}