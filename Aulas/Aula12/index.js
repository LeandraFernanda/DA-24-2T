//looping while
/*let i = 0;

while(i<10){
    console.log("O número é:", i)
    i++;
}*/

/*let estomago = 0

while(estomago < 100){
    console.log("Quero comer mais coxinhas!",estomago)
    estomago = estomago + 1
}*/

//looping while soma dos numeros


/*let numero = 10;
let soma = 0;

while(numero !== 0 ){
    numero = Number(prompt("Digite o número:"))
    soma +=numero
    console.log("O número digitado foi:",numero)
    
}
console.log("O valor total foi:", soma)
*/

//looping Do while
/*let C = 1

do{
    console.log("O valor do contador é:", C)
    C++
}while(C <= 6)*/

//looping for
/*let numeros = [14, 67, 89, 15, 23]

for(let i=0; i<5; i++){
    console.log(numeros[i])
    
}*/

/*let N = [11, 15, 18, 14, 12, 13]
let numeroMaior = numeros[0]
  if(numeroMaior<numeros[i]){
    numeroMaior = numeros[i]
  }

console.log("O maior número é",numeroMaior)*/

//soma dos numeros pares no array

/*let numeros = [11, 15, 18, 14, 12, 13]
let somaPares = 0

for(let i=0; i<6; i++){
    if(numeros[i] % 2 === 0){
        somaPares += numeros[i]
    }
}

console.log("A soma dos números pares é:", somaPares)*/ 

//for of repetição loop
/*const numeros = [14,67, 89, 15, 23]

for(let numero of numeros){
    console.log(numero)
}*/

/*const mensagem = ["Oi","sumido","tudo","bem?","saudades"]

let frase=""
for(let palavra of mensagem){
    frase += palavra + " "
}
console.log(frase)*/


//a soma dos numeros pares

/*const numeros = [11,15,18,14,12,13]
let somaPares = 0
for(let numero of numeros){
    if(numero%2 === 0){
        soma += numero
    }
}
console.log("A soma dos números pares é",numeros)*/

//encontrar palavras mais longas em um array

/*const palavraLongas = ["sabonete","vidro","paralepipedo","ler"]

let palavraMaisLonga = palavraLongas[0]
for(let letra of palavraLongas){
    if(letra.length > palavraMaisLonga.length){
        palavraMaisLonga = letra
    }
}
console.log(palavraMaisLonga)*/

const palavras = ["Palavras","são","uma","inesgotável","de","magia"]
let palavrasMaisLongas = [palavras[0]]
for(let palavra of palavras){
    if(palavrasMaisLongas[0].length<palavra.length){
    palavrasMaisLongas.push(palavra)
    
    }   
}
console.log("As palavras mais longas",palavrasMaisLongas)
   /* let i = 0
   while(i<10){
   i++               i === 1 
   console.log(i)     i===2
   }
*/





