/*//array indefinido
let array
console.log('a.',array)
//array vazia
array = null
console.log('b.',array)
//array tamanho da lisrta
array = [3,4,5,6,7,8,9,10,11,12,13]
console.log('c.',length)
//array imprime o numero 3
let i = 0
console.log('d.',array[i])
//array substitui por 19
array[i+1] = 19
console.log('e.',array)
//array numero 9
const valor = array[i+5]
console.log('f.',valor)*/


/*const frase = prompt("Digite uma frase")
//a frase escrito em maiusculo e minusculo e numero de caracteres
console.log(frase.toUpperCase(),frase.replaceAll("A" , "I"), frase.length)*/

/*const nome = prompt("Digite seu nome?")
const emailDoUsuario = prompt("digite seu e-mail:")
console.log(`Seu nome é ${nome} Seu e-mail ${emailDoUsuario}`)
console.log("Seu e-mail foi cadastrado com sucesso.Seja bem Vindo!")*/

//imprimir a comida preferida em array
/*const comidaPreferida = ["Pizza", "Xis", "Sushi","Lazanha", "Torta fria"]
 console.log(comidaPreferida)
//imprimir a comida preferida em string
console.log("Estas são minhas comidas: ", comidaPreferida.join(" "))
//pergunte ao usuario uma comida e troque a segunda comida da lista

const comidaDoUsuario = prompt("Qual a comida que você gosta?")
const novaComida = prompt("Qual a comida que você gostaria de ter?")

const i = comidaPreferida.indexOf(comidaDoUsuario)
comidaPreferida[i+3] = novaComida*/

const listaDeTarefas = []

const adicionarTarefa = prompt("Cite a primeira tarefa:")
const adicionarTarefa1 = prompt("Cite a segunda tarefa:")
const adicionarTarefa2 = prompt("Cite a terceira tarefa:")
listaDeTarefas.push(adicionarTarefa, adicionarTarefa1, adicionarTarefa2)

console.log("Suas tarefas são: ", listaDeTarefas)
//adicionar uma tarefa

const adicionarOutraTarefa = prompt("Adicionar outra tarefa:")
listaDeTarefas.push(adicionarOutraTarefa)
console.log("Novas tarefas são: ", listaDeTarefas)
//remover da lista um item 

const tarefaParaRemover = prompt("Qual tarefa você gostaria de remover?")
console.log(tarefaParaRemover.pop())

console.log("Tarefas restantes: ", listaDeTarefas)

//ordenar a lista

listaDeTarefas.sort()
console.log("Tarefas ordenadas: ", listaDeTarefas)
//remova um tarefa

const tarefaParaRemover1 = prompt("Qual tarefa você gostaria de remover?")
listaDeTarefas.splice(listaDeTarefas.indexOf(tarefaParaRemover1),1)
console.log("Tarefas restantes: ", listaDeTarefas)





