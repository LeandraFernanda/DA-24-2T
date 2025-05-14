let personagem = [];






const personagensJogo = prompt("Escreva um dos nomes: Bilbo , Gandolf , Elrond , Aragon ")

switch (personagensJogo) {
    case 'Bilbo':
        classe = 3.5,
            nivel = 1, 2, 3, 4, 5, 6, 7, 8,
            pontuacao = 0,
            habilidades = ['Ferramenta', 'Força'];
        break;
    case 'Gandolf':
        classe = 8, 5,
            nivel = `Todos`,
            pontuacao = 10000,
            habilidades = ['Ataque', 'Velocidade', 'Cajado de combate', 'Raciocínio', 'Sabedoria'];
        break;
    case 'Elrond':
        classe = 5,
            nivel = `Todos`,
            pontuacao = 0,
            habilidades = ['Intuição', 'Destreza', 'Raciocínio'];
        break;
    case 'Aragon':
        classe = 2,
            nivel = `Todos`,
            pontuacao = 0,
            habilidades = ['Intuição', 'Destreza', 'Raciocínio'];
        break;

}


if (personagem === personagensJogo) {
    console.log("Você acertou!")
}
function minhaCondicao() {
    if (minhaCondicao) {
        return `What?`;
    }
    // Other code that will only execute if the condition is false
}
console.log(personagem);

 //função ganhar mais pontos
 function ganharPontos(personagem, pontos = 1) {
    personagem.pontuacao += pontos;
    if (personagem.pontuacao >= 1000) {
        personagem.nivel++;
        personagem.pontuacao = 0;
        prompt(personagem.nome), 'sobiu de nível para', personagem.nivel;
    }
    return personagem.pontuacao;
};
 //Função atacar
 function atacar(personagemAtacante, personagemDefensor, dano) {
    personagemDefensor.pontuacao -= dano;
    if (personagemDefensor.pontuacao <= 0) {
        console.log(personagemDefensor.nome, 'foi derrotado!');
        personagemAtacante.ganharPontos(100);
    }
};

 //Função treinar habilidade
 function treinarHabilidade(personagem, habilidade) {
    if (personagem.habilidades.includes(habilidade)) {
        console.log('Você já possui essa habilidade!');
    } else if (personagem.classe >= habilidade.classeNecessaria) {
        personagem.habilidades.push(habilidade.nome);
        console.log('Você treinou a habilidade:', habilidade.nome);
    } else {
        console.log('Você não possui a classe necessária para treinar essa habilidade!');
    }
};

function buscarPersonagem(buscarPersonagem) {
    return personagem[];

}
