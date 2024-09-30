/*let matriz = [
[1, 2, 3], //let matriz = [ [0,0,0,],[0,0,0][0,0,0]];
          matriz[1][2];
[4, 5, 6],
]

console.log(matriz[1][2]) //primeiro é linha, depois é coluna, 
*/
/*let matriz1 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]
    console.log(matriz1[1][1])//vai exibir 50
*/

/*let matriz2 = []
matriz2[0]=[1,2,3]
matriz2[1]=[4,5,6]
matriz2[2]=[7,8,9]

console.log(matriz2[1][2]) //primeiro é linha, depois é coluna, 6
*/

/*let matriz3 = [
]
console.log(matriz3[2][1]) 
console.log(matriz3[0][1])
console.log(matriz3[1][0])
*/

/*let matrizes = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

matrizes[1][2]=1

console.log(matrizes[0][0],matrizes[0][1],matrizes[0][2])
console.log(matrizes[1])
console.log(matrizes[2]) 
*/
/*
let matrizes = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

matrizes[1][2]=1

console.log(matrizes[0][0],matrizes[0][1],matrizes[0][2])
console.log(matrizes[1][0],matrizes[1][1],matrizes[1][2])
console.log(matrizes[2][0],matrizes[2][1],matrizes[2][2])
*/

/*let matrizes = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for(let i=0; i<matrizes.length;i++){
    for(let j=0; j<matrizes[i].length;j++)
    console.log(matrizes[i][j])//vai exibir do 1 até o 9
}
*/
/*
let soma = 0
    for(let i=0; i<matrizes.length;i++){
        for(let j=0;j<matrizes[i].length;j++){
            soma += matrizes[i][j]
        }          
}

console.log("Soma dos elementos",soma); //vai exibir 45
*/
/*
let soma = 0
    for(let i=0; i<matrizes.length;i++){
        for(let j=0; j<matrizes[i].length;j++){
        matrizes[i][j]*=2
        console.log(matrizes[i][j])
        }          
}
*/
/*
let matrizes = [];

let soma = 0;
for(let i=0; i<4; i++){
    for(let j=0; j<matrizes[i]; j++){
        soma += matrizes[i][j]
    }          
}
console.log("Soma dos elementos",soma);
*/
/*
let matrizes = [];
let soma = 0;
for(let i=0; i<4; i++){
    for(let j=0; j<matrizes[i]; j++){
        soma += matrizes[i][j]
    }
}
*/ 
    
    let tabuleiro = [
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
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        
    ]
    function setaNavios(){
        tabuleiro[2][3] =1
        tabuleiro[2][4] =1
        tabuleiro[2][6] =1
        tabuleiro[2][5] =1
        tabuleiro[2][7] =1
    }

    let soma = 0
    for(let i=0; i<tabuleiro.length; i++){
        for(let j=0; j<tabuleiro[i].length; j++){
            quantidadeNavios +=tabuleiro[i][j] 
            soma += tabuleiro[i][j]
        }
        let escolhaLinha = Number(prompt("escolha a linha que deseja atacar!"))
        let escolhaColuna = Number(prompt("escolha a coluna que deseja atacar!"))
    }
    function verificarPosicao(linha, coluna){
        if(tabuleiro[linha][coluna]===1){
            console.log("Você acertou um navio!")
            tabuleiro[linha][coluna]=0
            soma -= 1
        }else{
            console.log("Você errou!")
        }
    }