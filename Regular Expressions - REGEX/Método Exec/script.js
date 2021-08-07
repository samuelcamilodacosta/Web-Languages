const digitos = /\d+/; //Se encontrado retorna informações, caso não exista retorna null
console.log(digitos.exec('Tem o número 100 aqui'));
console.log(digitos.exec('Tem o número aqui'));
