/*const professor = {
    nome : "Maria" ,
    idade : 28,
    tarefas: ["Dar aula", "Responder dúvidas"],
    contarPiada : function(){
        console.log("É pra vê, ou pra comer?")
    }
};    
*/

/*
const professor = {
    nome : "Maria" ,
    idade : 28,
    tarefas: ["Dar aula", "Responder dúvidas"],
    contarPiada: function(){
    console.log("É pa vê ou pa comê? ")}
};
*/

/*
const professor = {
    nome: "Lucas",
    idade: 32,
    email: "lucas.g.f.alves@gmail.com"
};
    console.log(professor.idade)
*/

/*
const professor = {
    nome: "Lucas",
    idade: 32,
    email: "lucas.g.f.alves@gmail.com"
};
    console.log(professor['email'])
*/

/*
const professor = {
    nome: "Lucas",
    idade: 32,
    email: 'lucas.g.f.alves@gmail.com'
    }
    
    professor.nome = 'Leo'
    professor['email'] = 'leo@gmail.com'
*/

/*
//alterando os valores do objeto
const professor = {
    nome: "Lucas",
    idade: 32,
    email: 'lucas.g.f.alves@gmail.com'
    }
    
    professor.nome = 'Leo'
    professor['email'] = 'leo@gmail.com'
*/

/*
// Criando o objeto filme
const filme = {
    diretor: "Christopher Nolan",
    nome: "Oppenheimer",
    anoLancamento: 2023,
    elenco: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr."],
    visto: true
};

// Acessando e imprimindo as propriedades

// Usando notação de ponto
console.log("Diretor:", filme.diretor);
console.log("Ano de lançamento:", filme.anoLancamento);
console.log("Já assistiu?", filme.visto);

// Usando notação de colchetes
console.log("Nome do filme:", filme["nome"]);
console.log("Elenco:", filme["elenco"]);
*/

/*
// Criando o objeto pessoa
const pessoa = {
    nome: "João",
    idade: 30,
    generoMusicalPreferido: "Rock"
};

//  imprimindo 
console.log("O nome da pessoa é " + pessoa.nome + ", ela tem " + pessoa.idade + " anos e gosta muito de " + pessoa.generoMusicalPreferido + ".");
*/

/*
const donoDoPet= {
    nome: "Lucas",
    pet: {
    nomeDoPet: 'Daenerys' ,
    raca: 'Vira-lata' ,
    idade: 7
    }
};
    console.log(donoDoPet.pet.nomeDoPet)
*/


/*
const donoDoPet= {
    nome: "Lucas",
    pet: {
    nomeDoPet: 'Daenerys' ,
    raca: 'Vira-lata' ,
    idade: 7
    }
    
};
    console.log(donoDoPet.pet.nomeDoPet)
*/


/*
const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
    }
    
    console.log(curso.linguagens[0])
*/


/*
const professores = [
    {nome: "Lucas", modulo: 1},
    {nome: "Leo", modulo: 2},
    {nome: "Mika", modulo: 3}
    ]
    console.log(professores[1].nome)
*/



/*
const curso = {
nome: "Frontend",
linguagens: ["JS", "CSS", "HTML"]
}
● Notação de ponto: curso.numeroEstudantes = 50
● Notação de colchetes: curso['numeroEstudantes'] = 50
*/


/*
const filme = {
    diretor: "Christopher Nolan",
    nome: "Oppenheimer",
    anoLancamento: 2023,
    elencoDetalhado: [
        { ator: "Cillian Murphy", personagem: "J. Robert Oppenheimer" },
        { ator: "Emily Blunt", personagem: "Katherine Oppenheimer" },
        { ator: "Robert Downey Jr.", personagem: "Lewis Strauss" }
    ],
    visto: true
};
console.log("Elenco de " + filme.nome + ":");
filme.elencoDetalhado.forEach(membro => {
    console.log("- " + membro.ator + " como " + membro.personagem);
});
filme.elencoDetalhado[0].ator = "Xuxa";
console.log(filme);
*/

/*
const usuario = {
    nome: 'Prof',
    idade: 25,
    email: 'prof@senacrs.com.br',
    cidade: 'São Paulo'
    }
    
    const novoUsuario = {
    ...usuario,
    };
*/


/*
const listaDeNomes = ["Mika", "Leo", "Iuri"]
const copiaListaDeNomes = [...listaDeNomes]
console.log(copiaListaDeNomes) //["Mika", "Leo", "Iuri"]
*/



/*
const pessoa = {
    nome: "Leandra",
    idade: 40,
    generoMusicalPreferido: "Rock",
    comidasPreferidas: ["Pizza", "Lasanha", "Frango assado"],
    melhorAmigo: {
        nome: "Lucas",
        idade: 32
    }
};
console.log(pessoa.comidasPreferidas)
*/




/*
const personagens = [
    {
        nome: "Leo",
        idade: 32,
        estilo: "Samurai",
        jutsus: ["Shoryuken", "Tatsumaki", "Kusarigama"]
    },
    {
        nome: "Lucas",
        idade: 30,
        estilo: "Médico",
        jutsus: ["Cura", "Raiva", "Sobrecarregar"]
    },
    {
        nome: "Mika",
        idade: 28,
        estilo: "Sábia",
        jutsus: ["Golpe de fúria", "Tiro de espadas", "Veneno"]
    }
];
console.log(personagens[1].nome)

function adicionarPersonagem(personagem) {
    personagens.push(personagem);
}

adicionarPersonagem({
    nome: "Iuri",
    idade: 35,
    estilo: "Aventureiro",
    jutsus: ["Lançar", "Chute", "Golpe de lâmina"]
});
console.log(personagens[3].nome)
*/




