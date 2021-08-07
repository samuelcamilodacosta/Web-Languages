class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
  latir() {
    console.log('Au Au');
  }
}
let patas = Symbol();
Cachorro.prototype[patas] = 4;
let labrador = new Cachorro('Labrador', 'Amarelo');
labrador.latir();

console.log(Cachorro.prototype[patas]); // acessando o symbol
console.log(labrador[patas]);
