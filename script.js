class Hero {
    constructor(tipo, ataque) {
        this.tipo = tipo;
        this.ataque = ataque;
    }

    atacar() {
        return `O ${this.tipo} atacou usando ${this.ataque}`
    }
}

const heroiMago = new Hero('Mago', 'Magia');
const heroiGuerreiro = new Hero('Guerreiro', 'Espada');
const heroiNinja = new Hero('Ninja', 'Shuriken');

console.log(heroiMago.atacar()); // retorno: O Mago atacou usando Magia
console.log(heroiGuerreiro.atacar()); // retorno: O Guerreiro atacou usando Espada
console.log(heroiNinja.atacar()); // retorno: O Ninja atacou usando Shuriken