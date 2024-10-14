// Residente Evil
class Inventario {
    constructor(tamanhoMaximo) {
        this.tamanhoMaximo = tamanhoMaximo;
        this.itens = [];
    }

    adicionarItem(item) {
        if (this.itens.length < this.tamanhoMaximo) {
            this.itens.push(item);
        } else {
            console.log("Inventário cheio! Remova um item antes de adicionar outro.");
        }
    }

    removerItem(item) {
        const index = this.itens.indexOf(item);
        if (index > -1) {
            this.itens.splice(index, 1);
        } else {
            console.log("Item não encontrado no inventário.");
        }
    }

    mostrarInventario() {
        console.log("Inventário:", this.itens);
    }
}

const inventario = new Inventario(10);
inventario.adicionarItem("Pistola");
inventario.adicionarItem("Munição");
inventario.mostrarInventario();

class Inimigo {
    constructor(tipo, vida) {
        this.tipo = tipo;
        this.vida = vida;
    }

    receberDano(dano) {
        this.vida -= dano;
        if (this.vida <= 0) {
            console.log(`${this.tipo} eliminado!`);
        } else {
            console.log(`${this.tipo} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
        }
    }
}

class Area {
    constructor() {
        this.inimigos = [];
    }

    adicionarInimigo(inimigo) {
        this.inimigos.push(inimigo);
    }

    atacarInimigo(tipo, dano) {
        const inimigo = this.inimigos.find(inimigo => inimigo.tipo === tipo);
        if (inimigo) {
            inimigo.receberDano(dano);
            if (inimigo.vida <= 0) {
                this.inimigos = this.inimigos.filter(inimigo => inimigo.vida > 0);
            }
        } else {
            console.log(`${tipo} não encontrado na área.`);
        }
    }

}
const area = new Area();
const zumbi = new Inimigo("Zumbi", 50);
area.adicionarInimigo(zumbi);
area.atacarInimigo("Zumbi", 20);

class Jogo {
    constructor() {
        this.inventario = new Inventario(10);
        this.area = new Area();
        this.historicoVida = [];
    }

    salvarProgresso() {
        const progresso = {
            inventario: [...this.inventario.itens],
            area: this.area.inimigos.map(inimigo => ({ tipo: inimigo.tipo, vida: inimigo.vida })),
            historicoVida: [...this.historicoVida]
        };
        localStorage.setItem('progresso', JSON.stringify(progresso));
        console.log("Progresso salvo!");
    }

    carregarProgresso() {
        const progresso = JSON.parse(localStorage.getItem('progresso'));
        if (progresso) {
            this.inventario.itens = progresso.inventario;
            this.area.inimigos = progresso.area.map(dado => new Inimigo(dado.tipo, dado.vida));
            this.historicoVida = progresso.historicoVida;
            console.log("Progresso carregado!");
        } else {
            console.log("Nenhum progresso salvo encontrado.");
        }
    }
}

const jogo = new Jogo();
jogo.inventario.adicionarItem("Pistola");
jogo.area.adicionarInimigo(new Inimigo("Mutante", 80));
jogo.salvarProgresso();
jogo.carregarProgresso();


// Relatório  de Inimigos
/* Os códigos a cima  foram escritos para criar um jogo de RPG com inimigos. O código define várias classes que criam objetos (Inventário, Inimigo, Área e Jogo). Cada objeto possui suas próprias propriedades e métodos; Arrays são utilizados para armazenar coleções de itens, como o inventário e a lista de inimigos.  O código utiliza a programação orientada a objetos para organizar o código e modelar os elementos do jogo,O código é dividido em classes e funções, o que facilita a manutenção e a reutilização de código.   o código demonstra um uso sólido de conceitos fundamentais de JavaScript para criar um jogo simples. As funções desempenham um papel crucial na organização do código, na manipulação de dados e na implementação da lógica do jogo.
*/



