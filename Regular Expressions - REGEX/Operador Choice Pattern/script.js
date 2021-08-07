let frutas = /\d+ (bananas|maçãs|laranjas)/; // verificação na condicional or ||
console.log(frutas.test('10 bananas'));
console.log(frutas.test('5 batatas'));
console.log(frutas.test('8 laranjas'));
console.log(frutas.test('25 maçãs'));
