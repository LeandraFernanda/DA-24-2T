
const escolhaComputador = choices[Math.floor(Math.random()*5)];
console.log(escolhaComputador);

const escolha = prompt("Escolha um personagem:?");
let personagem 
switch(personagem){
    case 'Gandalf':
        personagem = {nome: 'Gandalf', classe: 'Mago', nivel: 10, pontuacao: 100, habilidades: ['Conhecimento da Morte', 'Conhecimento dos Elfos', 'Conhecimento da Ordem']}
        break;
    case 'Legolas':
        personagem = {nome: 'Legolas', classe: 'Arqueiro', nivel: 8, pontuacao: 80, habilidades: ['Arremesso de Flecha', 'Disciplina', 'Focado']}
        break;
    case 'Aragorn':
        personagem = {nome: 'Aragorn', classe: 'Cavaleiro', nivel: 12, pontuacao: 120, habilidades: ['Furia', 'Resistência', 'Agilidade']}
    break;
    case 'Frodo Baggins':
        personagem = {nome: 'Frodo Baggins', classe: 'Ranger', nivel: 10, pontuacao: 100, habilidades: ['Ataque', 'Defesa', 'Conhecimento dos Náguas']}
        break;
        case 'Elrond':
            personagem = {nome: 'Elrond', classe: 'Mago', nivel: 15, pontuacao: 150, habilidades: ['Conhecimento da Morte', 'Conhecimento dos Elfos', 'Conhecimento da Ordem']}
        break;
    default:
    console.log("Personagem não encontrado!")
    
}

console.log(personagem);


    

    
    //função ganhar mais pontos
    function ganharPontos(personagem, pontos = 1) {
        personagem.pontuacao += pontos;
        if (personagem.pontuacao >= 1000) {
            personagem.nivel++;
            personagem.pontuacao = 0;
            alert = $(personagem.nome), 'subiu de nível para', personagem.nivel;
        }
        return personagem.pontuacao;
    };
    

    

