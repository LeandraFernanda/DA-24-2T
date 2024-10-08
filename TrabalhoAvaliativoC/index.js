


const personagens = [{
    nome: "Link",
    vida: 10,
    ataque: 8,
    defesa: 5
  },
  {
    nome: "Zelda",
    vida: 12,
    ataque: 7,
    defesa: 6
  },
  {
    nome: "Ganondorf",
    vida: 20,
    ataque: 10,
    defesa: 9
  },
];

const armas = [{
    tipo: "Master Sword",
    dano: 15,
    alcance: 5
  },
  {
    tipo: "Arco",
    dano: 10,
    alcance: 10
  },
  {
    tipo: "Raio",
    dano: 10,
    alcance: 10
  }
];

const itens = [{
    nome: "Bomba",
    efeito: "Explode"
  },
  {
    nome: "Poção",
    efeito: "Cura"
  },
];

// Função para validar personagens
function validarPersonagens(personagens) {
  for (const personagem of personagens) {
    if (!personagem.nome) {
      console.log(`Erro: Personagem com nome inválido.`);
      return;
    }
    if (personagem.vida < 1 || personagem.vida > 20) {
      console.log(`Erro: O personagem ${personagem.nome} tem corações de vida fora do intervalo permitido.`);
      return;
    }
    if (personagem.ataque < 0 || personagem.defesa < 0) {
      console.log(`Erro: O personagem ${personagem.nome} tem valores de ataque ou defesa inválidos.`);
      return;
    }
  }
  console.log("Personagens validados com sucesso!");
}

// Função para validar armas
function validarArmas(armas) {
  for (const arma of armas) {
    if (!arma.tipo) {
      console.log(`Erro: Arma com tipo inválido.`);
      return;
    }
    if (arma.dano <= 0) {
      console.log(`Erro: A arma ${arma.tipo} tem dano inválido.`);
      return;
    }
    if (arma.alcance <= 0) {
      console.log(`Erro: A arma ${arma.tipo} tem alcance inválido.`);
      return;
    }
  }
  console.log("Armas validadas com sucesso!");
}

// Função para validar itens
function validarItens(itens) {
  for (const item of itens) {
    if (!item.nome) {
      console.log(`Erro: Item com nome inválido.`);
      return;
    }
    if (!item.efeito) {
      console.log(`Erro: Item ${item.nome} com efeito inválido.`);
      return;
    }
  }
  console.log("Itens validados com sucesso!");
}

// Chamada das funções de validação
validarPersonagens(personagens);
validarArmas(armas);
validarItens(itens);

// Prompt para entrada do usuário
const nomePersonagem = prompt("Digite o nome do personagem:");
const nomeArma = prompt("Digite a arma:");
const nomeItem = prompt("Digite o item:");

//