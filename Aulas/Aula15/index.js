//Funções

/*function calculaArea(largura,altura){
    const area = largura*altura
    console.log(area)
}
calculaArea(2,3)
calculaArea(5,4)*/

/*function imprimirOlaMundo(){
    console.log('Olá Mundo')
}

imprimirOlaMundo()

function imprimirNome(nome){
    console.log('Bem Vindo!', nome)
}

imprimirNome('Leandra')*/

//1-> crie uma função que imprima no console a frase "Bem vindo Turma 24-2T!"

/*function imprimirTurma(){
    console.log('Bem vindo Turma 24-2T!')
}

imprimirTurma()

//2->Crie uma função que dentro dela tem dois números e some os números e imprima o resultado a frase ('A soma é:',resultado)

function somarNumeros(num1, num2){
    const resultado = num1 + num2
    console.log('A soma é:', resultado)
}

somarNumeros(5, 10)

//3->Crie uma função que dentro dela tenha um número e dobre o número e imprima o resultado e:('O dobro de 5 é 10');

function dobroNumero(numero){
    const resultado = numero * 2
    console.log('O dobro de', numero, 'é', resultado)
}

dobroNumero(5)*/

//1-> Crie uma função que receba por parâmetro um nome e imprima no console a mensagem:'Olá ${nome}'. invoque esta função 3 vezes passando os argumentos(nomes) diferentes.

/*function imprimirOlá(nome){
    console.log(`Olá ${nome}`)
}
    
imprimirOlá('Leandra')
imprimirOlá('João')
imprimirOlá('Maria')*/

//2->Crie uma função que receba por parâmetro dois números e imprima no console a mensagem:`A soma é ${soma}´. Invoque esta função passando 2 argumentos (números) diferentes.

/*function somarNumeros(num1, num2){
    const soma = num1 + num2
    console.log(`A soma é ${soma}`)
}
    
somarNumeros(5, 10)

somarNumeros(2, 3)*/

//brincadeira: imprima o nome e perguntar  ()`Qual sua idéia terminando o curso do Senac?`) usando funções


/*function artur (){
console.log("Qual sua idéia depois que terminar o curso do Senac?")

}
artur()
*/

//Escopo global e local

/*function calcularArea(largura,altura){
    const resultadoArea = largura * altura
    return resultadoArea
}
let area = calcularArea(2,5)

console.log('O resultado da área é:', area)
console.log("A area é:",calcularArea(2,5))
*/


//1-> Crie uma função que receba dois números e retorne a soma entre eles; Guarde o retorno dessa função em uma variável e imprima no console.
/*function calcularSoma(num1, num2){
    const resultado = num1 + num2
    return resultado
}

let resultado = calcularSoma(2000,540)
console.log('A soma é:',resultado)*/

//2->Função que receba array

/*const numerosOriginal = [233,43,634,64,27,6]
function primeiroeUltimo(arrayNumeros){
const novoArray = []

novoArray.push(arrayNumeros[0])
novoArray.push(arrayNumeros[arrayNumeros.length -1])
return novoArray
}

console.log(primeiroeUltimo(numerosOriginal))*/

//expressões de funções
/*const calculaArea = function(largura,altura){
    const soma = largura*altura
    return soma

}
const resultado = calculaArea(2,5)*/

/*const imprimirNome = function(nome){
    console.log(`Bem vindo:`,nome)

}
imprimirNome(`Leandra`)*/

//Arrow functions

/*const calculaArea = (largura,altura) =>{
    const resultado = largura*altura
    return resultado
}

const area = calculaArea(2,7)

console.log('A área é:', area)
*/

//1-> Crie uma expressão de função que dentro dela tem dois números e some os números e imprima o resultado da frames("A soma é:"resultado) 
/*const soma = function(num1,num2){
    const resultado = num1 + num2
    return soma
}
 console.log(`A soma é:`, resultado)    
*/ 

//2-> Crie uma arrow functions que dentro dela tenha um número e dobre o número e imprima o resultado ex:( odobro de 5 é 10);
/*const dobro = (numerosOriginal) =>{
    const resultado = numerosOriginal * 2
    return resultado
}
    const numero = Number(prompt(`Digite o número: `))
    console.log(`O dobro de: `,dobro,`é:`,dobro(numero))
    */

/*Determine o monstro. Criar uma função chamada determinaMonstro que recebe algumas caracteristicas em booleans e determina se a criatura é um vampiro, um Lobisomem ou um humano. A função deve retornar uma string com o tipo de criatura. Coloque condições dentro da função para identificar a criatura. Dica de caracteristicas: temPeleGelada, transformaComLuaCheia,brilhaAoSol, temSedeDeSangue.*/
const determinaMonstro = function(temPeleGelada,transformaComLuaCheia,brilhaAoSol,temSedeDeSangue){
    if(temPeleGelada , transformaComLuaCheia , brilhaAoSol , temSedeDeSangue){
        return "Vampiro"
    }else if(temPeleGelada , transformaComLuaCheia ,brilhaAoSol ,temSedeDeSangue){
        return "Lobisomem"
    }else{
        return "Humano"
    }
}
console.log(determinaMonstro(true, true, true, true)) 
console.log(determinaMonstro(true,false,false,false))
console.log(determinaMonstro)(true,true,false,true)


