/*Create, read, update, delete criar um programa em javascript de uma teleconsulta para animais, com nome, data, nome do médico e assunto pergunte sobre o paciente, pergunte sobre a consulta*/
;




let nomePaciente = '';
let dataConsulta = '';
let nomeMedico = '';
let assunto = '';
let perguntaPaciente = '';
let perguntaConsulta = '';

// Função para coletar informações
function coletarInformacoes() {
  nomePaciente = prompt('Informe o nome do paciente (animal): ');
  dataConsulta = prompt('Informe a data da consulta: ');
  nomeMedico = prompt('Informe o nome do médico: ');
  assunto = prompt('Informe o assunto da consulta: ');
  perguntaPaciente = prompt('Pergunta sobre o paciente: ');
 
};

// Função para exibir consulta
function exibirConsulta() {
  console.log(`Consulta para ${nomePaciente} em ${dataConsulta}`);
  console.log(`Médico: ${nomeMedico}`);
  console.log(`Assunto: ${assunto}`);
  console.log(`Pergunta sobre o paciente: ${perguntaPaciente}`);
  console.log(`Pergunta sobre a consulta: ${perguntaConsulta}`);
};

// Chamada das funções
coletarInformacoes();
exibirConsulta();

