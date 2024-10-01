/*
let matriz = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];
matriz[1][2] = 1

console.log(matriz[1][2]) //primeiro é linha, depois é coluna, 1
*/

/*
let matriz = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];
let soma = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  };
};
*/





/*
//matriz com 3 linhas e 3 colunas
let matriz = [
]
    [5,10,15]
    [20,25,30],
    [35,40,45]
];


/*

let matriz = [];
[0],[0],[0],[0],[0],
[0],[0],[0],[0],[0],
[0],[0],[0],[0],[0],
[0],[0],[0],[0],[0],
[0],[0],[0],[0],[0];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    matriz[i][j] = Math.floor(Math.random() * 3); 
  };
};
console.log(matriz);
*/


/*
//soma dos numeros pares
let soma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
    };
};
console.log("Soma dos elementos da matriz:", soma); //imprime 225
*/

/*
let pontuacoes = [
    [7, 5, 9, 4],
    [3, 8, 2, 6],
    [1, 10, 7, 5]
];

let pontuacoesTotais = [];

for (let i = 0; i < pontuacoes.length; i++) {
  let pontuacaoTotal = 0;
  for (let j = 0; j < pontuacoes[i].length; j++) {
    pontuacaoTotal += pontuacoes[i][j];
  };
  pontuacoesTotais.push(pontuacaoTotal);
};

console.log("Pontuações totais dos jogadores:", pontuacoesTotais); // imprime [27, 30, 28]
*/


















/*

let matriz = [];
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],

        
console.log("Ilha após a criação:");

for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = Math.floor(Math.random() * 5);
    };
};



for (let i = 0; i < 10; i++) {
    console.log(matriz[i].join(" "));
};

const movimentos = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function moverDinossauro(posicao, direcao) {
    const [dx, dy] = direcao;
    const [x, y] = posicao;
    if (x >= 0 && x < 10 && y >= 0 && y < 10) {
        const dinossauro = matriz[x][y];
        matriz[x][y] = 0;
        const novaPosicao = [x + dx, y + dy];
        moverDinossauro(novaPosicao, direcao);
        matriz[x][y] = dinossauro;
    } else {
        matriz[posicao[0]][posicao[1]] = 0;
    };
    return matriz;
};
*/






