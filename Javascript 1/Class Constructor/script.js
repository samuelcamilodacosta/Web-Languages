class Cachorro {
  constructor(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
  }
}
let labrador = new Cachorro('Labrador', 4, 'Caramelo');
let pitbull = new Cachorro('Pitbull', 4, 'Branco');

console.log(labrador);
console.log(pitbull);
