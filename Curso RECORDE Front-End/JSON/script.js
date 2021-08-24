let exemploJson = '{"ong": "Recode","telefone":"22223333"}';
let exemploConversao = JSON.parse(exemploJson);
console.log(exemploConversao);

let objeto = { ong: 'Recode', telefone: '22223333' };
let exemploConversao2 = JSON.stringify(objeto);
console.log(exemploConversao2);
