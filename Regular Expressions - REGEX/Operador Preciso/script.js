const cep = /\d{5}-\d{3}/; //Mínimo 5+ dígitos - Mínimo 3+ dígitos
console.log(cep.test('88117-500'));
console.log(cep.test('asd'));
console.log(cep.test('881-50'));
console.log(cep.test('881179-500'));
console.log('\n');
const tel = /\(\d{2}\)\d{4,5}-\d{4}/;
//Limitado completamente por 2 dígitos, 4 ou 5 dígitos e 4+ dígitos
console.log(tel.test('(34)9999-9999'));
console.log(tel.test('(34)55555-9999'));
