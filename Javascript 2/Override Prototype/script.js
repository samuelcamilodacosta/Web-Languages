class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
  latir() {
    console.log('Au Au');
  }
}
Cachorro.prototype.patas = 4; // valor definido
Cachorro.prototype.raca = 'Vira-lata'; //Valor padrão - pai
let labrador = new Cachorro('Labrador', 'Amarelo');
console.log(labrador.patas);
labrador.latir();
console.log(Cachorro.prototype.raca);
console.log(labrador.raca);
