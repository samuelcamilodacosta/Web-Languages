function numeroAleatorio(num) {
  return Math.floor(Math.random() * num) + 1;
}
// num equivale ao limite do valor a ser sorteado 0 até num
console.log(numeroAleatorio(10));
console.log(numeroAleatorio(50));
console.log(numeroAleatorio(100));
console.log(numeroAleatorio(1000));
