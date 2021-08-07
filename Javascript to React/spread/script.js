const numeros = [10, 5, 15, 22, 28];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [13, ...numeros, 31, 19, 17];
console.log(numeros2);

const carro = {
  cor: 'Azul',
  portas: 4,
};
carroAno = { ...carro, ano: 2008 };
console.log(carro);
console.log(carroAno);
