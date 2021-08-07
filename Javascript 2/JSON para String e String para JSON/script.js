let pessoa = {
  "nome": "Gabriel",
  "idade": "25",
  "profissao": "Programador",
  "hobbies": ["Videogame", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);
let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
