const pessoa = {
  maos: 2,
};
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.log(pessoa.hasOwnProperty('maos'));
console.log(pessoa.hasOwnProperty('pes'));
