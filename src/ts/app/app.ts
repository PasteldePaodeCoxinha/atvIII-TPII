import Armazem from "../dominio/armazem";
import CadastroAcomodacoes from "../processos/cadastro/CadastroAcomodacoes";
import Principal from "../processos/principal";

console.clear();
console.log(
  `Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)`
);

Armazem.InstanciaUnica.Acomodacoes.push(new CadastroAcomodacoes().cadastrar());

const processo = new Principal();
processo.navegar();