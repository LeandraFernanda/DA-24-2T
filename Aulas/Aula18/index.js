/*const professor= {
    nome:'Maria',
    idade:28,
    tarefas:['Dar aula','Responder dúvidas'],
    contarPiada:function(){
        console.log('É pra vê, ou pra comer?')
    }
}

console.log(professor["nome"])

console.log(professor["contarPiada"])

console.log(professor.idade)
console.log(professor.tarefas[0])*/

/*const professores = [
    {nome:"Lucas",modulo:1},
    {nome:"Leo",modulo:2},
    {nome:"Mika",modulo:3}
]

console.log(professores[1].nome)//Lucas*/

/*const curso = {
    nome:"Frontend",
    linguagens:["JS","CSS","HTML"]
}
//Notação de ponto:
curso.numeroEstudantes = 50
//Notação de colchetes:
curso['numeroEstudantes'] = 50*/

/*const usuario = {
    nome:"Prof",
    idade:25,
    email:"prof@senacrs.com.br",
    cidade:'São paulo'
}
const novoUsuario = {
    ...usuario,
    nome:'João',
    idade:28,
    email:'Prof@senacrs.com.br',
    cidade:'São Paulo'
}

console.log(novoUsuario)*/


//objeto declarando uma string
/*const filme = {//nome do objeto numa chave
    nome:"Auto da Compadecida",
    ano:2000,
    elenco:[
    "Matheus Nachtergaele","Selton Mello","Denise Fraga","Virginia Cavendish"
],
transmissoesHoje:[//chamar o objeto da string
    {canal:"Telecine",horario:"21hs"},
    {canal:"CanalBrasil",horario:"19hs"},
    {canal:" Globo",horario:"14hs"}
    ]
}//imprimir
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/


//objeto declarando string
/*const cachorro = {//nome do objeto numa chave
    nome:"Juca",
    idade:3,
    raca:"SRD"
}

const gato = {...cachorro, nome:"Juba"}

const tartaruga = {...gato,nome:gato.nome.replaceAll("a","o")}
console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/

//função do objeto
/*function minhaFuncao(objeto, propriedade){
    return objeto[propriedade]//retorno da propriedade
}//declaração da constante
const pessoa = {
    nome:"Caio",
    idade:23,
    backender:false
}
console.log(minhaFuncao(pessoa,"backender"))//imprime false
console.log(minhaFuncao(pessoa,"altura"))//imprime undefine*/

//ex:2
/*function motorista(nome, idade, generoMusical) {
    return {
      nome,
      idade,
      generoMusical
    };
  }
  const motorista = motorista("João", 25, "pagode")
  console.log("O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}.")

*/

//ex:3
/*const filme = {
    nome:"Auto da Compadecida",
    ano:2000,
    elenco:[
    "Matheus Nachtergaele","Selton Mello","Denise Fraga","Virginia Cavendish"
],
transmissoesHoje:[
    {canal:"Telecine",horario:"21hs"},
    {canal:"CanalBrasil",horario:"19hs"},
    {canal:" Globo",horario:"14hs"}
    ]
}
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
filme.elenco[0]=`Xuxa`
console.log(filme.elenco[0])*/
