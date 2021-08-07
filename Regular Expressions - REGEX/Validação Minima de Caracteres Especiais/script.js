let ano = /\d\d\d\d/;
console.log('Verificando se os dados recebidos tem 4 ou mais digitos');
console.log(ano.test('05'));
console.log(ano.test('2021'));
console.log(ano.test('opa'));

let palavraTresLetras = /\w\w\w/;
console.log(
  'Verificando se os dados recebidos são palavras de três ou mais letras.',
);
console.log(palavraTresLetras.test('dia'));
console.log(palavraTresLetras.test('ano'));
console.log(palavraTresLetras.test('oi'));
console.log(palavraTresLetras.test('teste'));
console.log(palavraTresLetras.test('abobora'));
