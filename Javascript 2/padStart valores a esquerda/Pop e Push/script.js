let nomes = ['John', 'Mary', 'Samuel'];

let elementoRemovido = nomes.pop(); // elimina o ultimo nome do array
console.log('Elemento removido ' + elementoRemovido);
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
nomes.push('Franky');
console.log(nomes);
