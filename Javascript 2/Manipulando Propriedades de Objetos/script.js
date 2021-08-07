let pessoa = {
  nome: 'John',
  idade: 25,
  profissao: 'Programador',
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);
delete pessoa.nome;
console.log(pessoa.nome);
pessoa.seguro = true;
console.log(pessoa.seguro);
