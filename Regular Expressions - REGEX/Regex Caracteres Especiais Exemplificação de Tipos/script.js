const pontoRegex = /./; //Aceita todo tipo de caractere, menos quebra de linha
console.log('.');
console.log(pontoRegex.test('asd'));
console.log(pontoRegex.test(' '));
console.log(pontoRegex.test('123'));
console.log(pontoRegex.test('123asd'));

const dRegex = /\d/; //intervalo numérico[0-9]
console.log('d');
console.log(dRegex.test('asd'));
console.log(dRegex.test(' '));
console.log(dRegex.test('123'));
console.log(dRegex.test('123asd'));

const dRegex2 = /\D/; //Equivale a negação do intervalo numérico [^0-9]
console.log('D');
console.log(dRegex2.test('asd'));
console.log(dRegex2.test(' '));
console.log(dRegex2.test('123'));
console.log(dRegex2.test('123asd'));

const sRegex = /\s/; //s de Space, no caso espaço, retorna true para o que tiver espaço, tabs e quebra de linha
// o S maiusculo é negação de s
console.log(' espaço ');
console.log(sRegex.test('asd'));
console.log(sRegex.test(' '));
console.log(sRegex.test('123'));
console.log(sRegex.test('123asd'));

const wRegex = /\w/; //Retorna true para valores alfanuméricos, W maiusculo retorna negação da setença

console.log('w');
console.log(sRegex.test('asd'));
console.log(sRegex.test(' '));
console.log(sRegex.test('123'));
console.log(sRegex.test('123asd'));
