function checarNumero(num) {
  let number = Number(num);
  if (Number.isNaN(number)) {
    alert('Por favor, insira apenas númeross no programa.');
  } else {
    return number;
  }
}
let number = prompt('Digite um número: ');
checarNumero(number);
