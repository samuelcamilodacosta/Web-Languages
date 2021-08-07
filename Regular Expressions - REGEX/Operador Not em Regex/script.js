let rejeitor = /[^123]/; //A entrada deve possuir valores além de 1, 2 e 3
//Cuidado com as entradas a comparaar, pois se não faz combinação total de entrada
console.log('Testando o operador Not numérico');
console.log(rejeitor.test('1 1 1 2 3'));
console.log(rejeitor.test('1 4'));
console.log(rejeitor.test('1'));
console.log(rejeitor.test('12321'));

let notab = /[^ab]/;
console.log('Testando o operador Not em alfabeto');
console.log(notab.test('a'));
console.log(notab.test('Aqui tem a'));
console.log(notab.test('Aqui tem b'));
