// Array para armazenar os personagens
let personagens = [];

// Função para cadastrar um novo personagem
function cadastrarPersonagem() {
    const nome = document.getElementById("nome").value;
    const classe = document.getElementById("classe").value;
    const nivel = document.getElementById("nivel").value;
    const hp = document.getElementById("hp").value;
    const habilidades = document.getElementById("habilidades").value.split(',');

    const personagem = {
        nome: nome,
        classe: classe,
        nivel: parseInt(nivel),
        hp: parseInt(hp),
        habilidades: habilidades,
        historicoAcoes: []
    };

    personagens.push(personagem);
    alert  = $(nome) "cadastral com sucesso" ;
    listarPersonagens();
}

// Função para realizar ações
function realizarAcao() {
    const nomePersonagem = document.getElementById("nomeAcao").value;
    const acao = document.getElementById("acao").value;
    const personagem = buscarPersonagemPorNome(nomePersonagem);
    if (personagem) {
        personagem.historicoAcoes.push(acao);
        alert =  $(personagem.nome), 'realizou a ação:', $(acao);
    } else {
        alert(personagemersonagem , $(nomePersonagem) ,'não encontrado.');
    }
}

// Função para buscar um personagem pelo nome
function buscarPersonagemPorNome(nome) {
    return personagens.find(personagem => personagem.nome === nome);
}

// Função para listar todos os personagens
function listarPersonagens() {
    const personagensOrdenados = personagens.sort((a, b) => a.nome.localeCompare(b.nome));
    const listaPersonagens = document.getElementById("listaPersonagens");
    listaPersonagens.innerHTML = "";

    personagensOrdenados.forEach(personagem => {
        listaPersonagens.innerHTML += <li>Nome: ${personagem.nome}, Classe: ${personagem.classe}, Nível: ${personagem.nivel}</li>;
    });
}