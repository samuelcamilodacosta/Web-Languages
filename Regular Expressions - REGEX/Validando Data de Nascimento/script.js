const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][1920-2020]{4}/;
console.log(validarDataNasc.test('05/02/2010'));
console.log(validarDataNasc.test('5/2/2000'));
console.log(validarDataNasc.test('05-02-2000'));
console.log(validarDataNasc.test('05/02/00'));
console.log(validarDataNasc.test('05/02/1000'));
