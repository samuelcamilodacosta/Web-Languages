let nomes = ['John', 'Mary', 'Samuel'];

let elementoRemovido = nomes.shift(); // elimina o primeiro nome do array
console.log('Elemento removido: ' + elementoRemovido);
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
nomes.unshift('Franky'); //adiciona no primeiro elemento do array
console.log(nomes);
