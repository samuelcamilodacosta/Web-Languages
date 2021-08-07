let opcional = /Prova\s?\d?/;

console.log(opcional.test('Prova'));
console.log(opcional.test('Prova 1'));
console.log(opcional.test('Prova 2'));
console.log(opcional.test('Prova Feia'));
console.log(opcional.test('Prov'));
console.log(opcional.test('Prova?'));

console.log('\n');
const padrao = /Abacax?i/;
console.log(padrao.test('Abacaxi'));
console.log(padrao.test('Abacai'));
console.log(padrao.test('Abacati'));
console.log(padrao.test('Abacao'));
console.log(padrao.test('Abacax'));
