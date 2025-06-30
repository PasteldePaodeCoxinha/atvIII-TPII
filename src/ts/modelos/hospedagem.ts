import Acomodacao from "./acomodacao";
import Cliente from "./cliente";

export default class Hospedagem{
    private cliente: Cliente
    private acomodacao: Acomodacao
    private checkIn: Date
    private checkOut: Date

    constructor(cliente: Cliente, acomodacao: Acomodacao, checkIn: Date, checkOut: Date){
        this.cliente = cliente
        this.acomodacao = acomodacao
        this.checkIn = checkIn
        this.checkOut = checkOut
    }

    public get getCliente(){return this.cliente}
    public get getAcomodacao(){return this.acomodacao}
    public get getCheckIn(){return this.checkIn}
    public get getCheckOut(){return this.checkOut}

    public set setCheckOut(checkOut: Date){this.checkOut = checkOut}
}