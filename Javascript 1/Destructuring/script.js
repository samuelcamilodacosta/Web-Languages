const person = {
  name: 'Jhon',
  lastname: 'Doe',
};

const { name: fname, lastname: lname } = person; //definindo variáveis para as propriedades com notação diferente, método destructuring

console.log(fname);
console.log(lname);
