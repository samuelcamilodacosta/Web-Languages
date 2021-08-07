const validarEmail = /\w+@\w+\.\w+/;
console.log(validarEmail.test('john@gmail.com'));
console.log(validarEmail.test('john@hotmail.com'));
console.log(validarEmail.test('john@yahoo.com.br'));
console.log(validarEmail.test('gmail.com.br'));
console.log(validarEmail.test('john@gmail'));
