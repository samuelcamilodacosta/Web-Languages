function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function () {
    console.log('Auuuuuuuuuuuuuuuu');
  };
}
let husky = new Cachorro('Husky', 4, 'cinza');
console.log(husky);
husky.uivar();
