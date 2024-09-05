//interpretação do código
//o que o código abaixo está fazendo?
//ele está criando um valor de 0 até 4
/*let valor = 0
 //looping para somar os valores de 0 a 4
for(let i = 0; i< 5; i++){
    valor += i
}
 //imprime o resultado final

console.log(valor) //imprime 10*/

//const { numeroSorteado } = require("./numeroSorteado");

/* Leia o código 
o que vai ser impresso no console
Se eu quisesse acessar i índice de cada elemento dessa lista, o for of é suficiente? se sim, o que poderia ser usado para fazer isso?*/
//interpretação do código criando uma lista array de números
/*const lista = [10,11,12,15,18,19,21,23,25,27,30]
 //looping para imprimir os números se for maior que 18
for (let numero of lista){
    if(numero>18){
        console.log(numero)
    }
}*/

/* Qual seria o resultado impresso no cosole, se o usuário digitasse o número 4? */
//pede para usuário digitar o numero de linhas
/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas:"))*/

// inicia com a variável 0 e cria o looping para imprimir a estrutura de asteriscos
/*let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
    let linha = ""
    for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
        linha += "*"
    }

    console.log(linha)
    quantidadeAtual++
}*/

/*const quantidadeDeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"));

if (quantidadeDeBichinhos === 0) {
  console.log("Que pena! Você pode adotar um pet!");
} else {
  const nomesDosBichinhos = [];
  for (let i = 0; i < quantidadeDeBichinhos; i++) {
    const nomeDoBichinho = prompt(`Digite o nome do bichinho de estimação ${i + 1}:`);
    nomesDosBichinhos.push(nomeDoBichinho);
  }
  console.log(`Você tem os seguintes bichinhos de estimação: ${nomesDosBichinhos.join(", ")}`);
}*/

/*const arrayOriginal = [10,20,30,40,50]

for(let numero of arrayOriginal){
  console.log(numero)

}
for(let numero of arrayOriginal){
  console.log(numero/10)
}
let arrayPares = []

for(let numero of arrayOriginal){
  if(numero%2 === 0){
    arrayPares.push(numero)
  }
}
let arrayFrases = []
for(let i = 0; i<arrayOriginal.length; i++){
  arrayFrases.push(`O elemento do index${i}é:${arrayOriginal[i]}`)
}
console.log(arrayFrases)
let maiorNum = arrayOriginal[0]
let menorNum = arrayOriginal[0]
for(let numero of arrayOriginal){
  if(numero > maiorNum){
    maiorNum = numero
  }
  
  else if(numero < menorNum){
    menorNum = numero
  }
}
console.log("O menor número é:",menorNum,"E o maior número é", maiorNum)*/

//Desafio
//Adivinhe o número que estou pensando
/*let Adivinhe = Number(prompt("Adivinhe o número que estou pensando?!"))
let numeroSorteado = 0;
let chute = false

while(!chute){
  numeroSorteado = Math.floor(Math.random() * 100) + 1
  if(Adivinhe === numeroSorteado){
    console.log("Parabéns você acertou!")
    chute = true
  } else if(Adivinhe > numeroSorteado){
    console.log("O número sorteado é menor!")
  } else {
    console.log("O número sorteado é maior!")
  }
}
*/










