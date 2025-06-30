import DiretorCasalSimples from "../diretores/DiretorCasalSimples";
import DiretorFamiliaMais from "../diretores/DiretorFamiliaMais";
import DiretorFamiliaSimples from "../diretores/DiretorFamiliaSimples";
import DiretorFamiliaSuper from "../diretores/DiretorFamiliaSuper";
import DiretorSolteiroMais from "../diretores/DiretorSolteiroMais";
import DiretorSolteiroSimples from "../diretores/DiretorSolteiroSimples";
import Armazem from "../dominio/armazem";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import Principal from "../processos/principal";

console.clear();
console.log(
  `Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)`
);

const cliente1 = new Cliente("Joao Silva", "Joãozinho", new Date("1990-05-10"));
cliente1.Telefones = [new Telefone("11", "999999999")];
cliente1.Documento = [
  new Documento("123456789", TipoDocumento.CPF, new Date("2010-03-20")),
  new Documento("963852741", TipoDocumento.RG, new Date("2010-03-20")),
];
cliente1.Endereco = new Endereco(
  "Rua A",
  "Centro",
  "São Paulo",
  "SP",
  "Brasil",
  "01000-000"
);

const dependente1Cliente1 = new Cliente(
  "Pedro Silva",
  "Pedrinho",
  new Date("2012-11-05")
);
dependente1Cliente1.Telefones = [new Telefone("33", "156456123")];
dependente1Cliente1.Documento = [
  new Documento("214635434", TipoDocumento.CPF, new Date("2010-03-20")),
];

const dependente2Cliente1 = new Cliente(
  "Joserssa Silva",
  "",
  new Date("2012-11-05")
);
dependente1Cliente1.Telefones = cliente1.Telefones;
dependente1Cliente1.Documento = [
  new Documento("15214566", TipoDocumento.CPF, new Date("2010-03-20")),
];

const dependente3Cliente1 = new Cliente(
  "Gilberso Silva",
  "",
  new Date("2012-11-05")
);
dependente1Cliente1.Telefones = cliente1.Telefones;
dependente1Cliente1.Documento = [
  new Documento("214635434", TipoDocumento.CPF, new Date("2010-03-20")),
];

cliente1.Dependentes = [
  dependente1Cliente1,
  dependente2Cliente1,
  dependente3Cliente1,
];

const cliente2 = new Cliente("Maria Oliveira", "Mari", new Date("1985-09-20"));
cliente2.Telefones = [new Telefone("21", "988888888")];
cliente2.Documento = [
  new Documento("987654321", TipoDocumento.RG, new Date("2005-06-15")),
];
cliente2.Endereco = new Endereco(
  "Av. Brasil",
  "Copacabana",
  "Rio de Janeiro",
  "RJ",
  "Brasil",
  "22000-000"
);

const dependente1Cliente2 = new Cliente(
  "Joserssa Oliveira",
  "",
  new Date("2012-11-05")
);
dependente1Cliente2.Telefones = cliente2.Telefones;
dependente1Cliente2.Documento = [
  new Documento("456546879", TipoDocumento.CPF, new Date("2010-03-20")),
];

const dependente2Cliente2 = new Cliente(
  "Gilbersa Oliveira",
  "",
  new Date("2012-11-05")
);
dependente2Cliente2.Telefones = cliente2.Telefones;
dependente2Cliente2.Documento = [
  new Documento("546452354", TipoDocumento.CPF, new Date("2010-03-20")),
];

cliente2.Dependentes = [dependente1Cliente2, dependente2Cliente2];

const cliente3 = new Cliente("Carlos Souza", "Carlão", new Date("1978-01-01"));
cliente3.Telefones = [new Telefone("31", "977777777")];
cliente3.Documento = [
  new Documento("111222333", TipoDocumento.Passaporte, new Date("2012-08-01")),
];
cliente3.Endereco = new Endereco(
  "Rua das Flores",
  "Savassi",
  "Belo Horizonte",
  "MG",
  "Brasil",
  "30130-000"
);

const cliente4 = new Cliente("Ana Lima", "Aninha", new Date("1995-03-30"));
cliente4.Telefones = [new Telefone("41", "966666666")];
cliente4.Documento = [
  new Documento("444555666", TipoDocumento.CPF, new Date("2014-11-22")),
];
cliente4.Endereco = new Endereco(
  "Rua Paraná",
  "Centro",
  "Curitiba",
  "PR",
  "Brasil",
  "80010-000"
);

const cliente5 = new Cliente(
  "Lucas Martins",
  "Luquinhas",
  new Date("2000-12-12")
);
cliente5.Telefones = [new Telefone("51", "955555555")];
cliente5.Documento = [
  new Documento("777888999", TipoDocumento.RG, new Date("2018-01-01")),
];
cliente5.Endereco = new Endereco(
  "Av. Ipiranga",
  "Centro Histórico",
  "Porto Alegre",
  "RS",
  "Brasil",
  "90010-000"
);

Armazem.InstanciaUnica.Clientes.push(cliente1);
Armazem.InstanciaUnica.Clientes.push(cliente2);
Armazem.InstanciaUnica.Clientes.push(cliente3);
Armazem.InstanciaUnica.Clientes.push(cliente4);
Armazem.InstanciaUnica.Clientes.push(cliente5);

Armazem.InstanciaUnica.Acomodacoes.push(new DiretorCasalSimples().construir());
Armazem.InstanciaUnica.Acomodacoes.push(new DiretorFamiliaMais().construir());
Armazem.InstanciaUnica.Acomodacoes.push(
  new DiretorFamiliaSimples().construir()
);
Armazem.InstanciaUnica.Acomodacoes.push(new DiretorFamiliaSuper().construir());
Armazem.InstanciaUnica.Acomodacoes.push(new DiretorSolteiroMais().construir());
Armazem.InstanciaUnica.Acomodacoes.push(
  new DiretorSolteiroSimples().construir()
);

const processo = new Principal();
processo.navegar();
